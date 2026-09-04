import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../data';

// Candidate audio paths for Carolina's real voice recording
const CANDIDATE_AUDIO_URLS = [
  '/audio/carolina-welcome.opus',
  '/audio/carolina-welcome.ogg',
  '/audio/carolina-welcome.mp3',
  '/audio/carolina-welcome.m4a',
  '/audio/carolina-welcome.wav'
];

export const AudioWelcome: React.FC = () => {
  const { t, language } = useLanguage();
  const a = t.audioWelcome;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(45);
  const [showTranscript, setShowTranscript] = useState(false);
  const [hasRealAudio, setHasRealAudio] = useState<boolean>(false);
  const [activeAudioSrc, setActiveAudioSrc] = useState<string | null>(null);

  // Real Audio element ref
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Fallback Audio synthesis & ambient refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressTimerRef = useRef<number | null>(null);

  // Check if a real audio file exists in /public/audio/
  useEffect(() => {
    let isCancelled = false;

    const testAudioSources = async () => {
      for (const url of CANDIDATE_AUDIO_URLS) {
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res.ok) {
            if (!isCancelled) {
              setActiveAudioSrc(url);
              setHasRealAudio(true);
            }
            return;
          }
        } catch {
          // Continue checking next format
        }
      }
      if (!isCancelled) {
        setHasRealAudio(false);
        setActiveAudioSrc(null);
      }
    };

    testAudioSources();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Initialize and bind HTMLAudioElement when activeAudioSrc is found
  useEffect(() => {
    if (!activeAudioSrc) return;

    const audio = new Audio(activeAudioSrc);
    audio.preload = 'metadata';
    audioElementRef.current = audio;

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const onTimeUpdate = () => {
      if (audio.duration) {
        const cur = audio.currentTime;
        const dur = audio.duration;
        setCurrentTime(cur);
        setProgress(Math.min(100, (cur / dur) * 100));
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const onError = () => {
      console.warn('Real audio failed to load/play, falling back to speech engine.');
      setHasRealAudio(false);
      setActiveAudioSrc(null);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      audioElementRef.current = null;
    };
  }, [activeAudioSrc]);

  // Clean up on unmount or language change
  useEffect(() => {
    return () => {
      stopAudioPlayback();
    };
  }, [language]);

  const initAmbientTone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.045, ctx.currentTime);
      gainNodeRef.current = masterGain;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(360, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // 432Hz Harmonic drone
      const frequencies = [108, 216, 432];
      oscillatorsRef.current = frequencies.map((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(idx === 0 ? 0.08 : 0.03, ctx.currentTime);

        osc.connect(subGain);
        subGain.connect(masterGain);
        osc.start();
        return osc;
      });
    } catch (e) {
      console.warn('Ambient audio context could not start:', e);
    }
  };

  const stopAudioPlayback = () => {
    // 1. If playing real audio file
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }

    // 2. Stop speech synthesis
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // 3. Stop ambient oscillators
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    oscillatorsRef.current = [];

    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        gainNodeRef.current.disconnect();
      } catch {}
    }

    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }

    setIsPlaying(false);
  };

  const startFallbackSpeech = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      startSimulatedProgress(45);
      return;
    }

    window.speechSynthesis.cancel();

    const cleanText = a.transcriptText.replace(/[«»"]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;

    const voices = window.speechSynthesis.getVoices();
    const isSpanish = language === 'es';
    
    // Priority voice matching for Carolina Barcellona (Argentine Spanish, warm female timbre)
    let targetVoice: SpeechSynthesisVoice | undefined;
    
    if (isSpanish) {
      targetVoice =
        // 1. Argentine female voice (closest match to Carolina's native Rioplatense accent)
        voices.find((v) => v.lang.toLowerCase().includes('es-ar') || v.name.toLowerCase().includes('argentina') || v.name.toLowerCase().includes('isabella')) ||
        // 2. High-quality Latin American / Natural Spanish female voices
        voices.find((v) => (v.lang.toLowerCase().includes('es-419') || v.lang.toLowerCase().includes('es-us') || v.lang.toLowerCase().includes('es-mx')) && (v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('paulina') || v.name.toLowerCase().includes('dalia'))) ||
        // 3. Other natural Spanish female voices (Monica, Elvira, Marta, etc.)
        voices.find((v) => v.lang.toLowerCase().startsWith('es') && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('monica') || v.name.toLowerCase().includes('elvira') || v.name.toLowerCase().includes('marta'))) ||
        // 4. Any Spanish voice
        voices.find((v) => v.lang.toLowerCase().startsWith('es'));
    } else {
      const langCode = language === 'en' ? 'en' : 'fr';
      targetVoice =
        voices.find((v) => v.lang.toLowerCase().startsWith(langCode) && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('natural'))) ||
        voices.find((v) => v.lang.toLowerCase().startsWith(langCode));
    }

    if (!targetVoice && voices.length > 0) {
      targetVoice = voices[0];
    }

    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.lang = isSpanish ? (targetVoice?.lang || 'es-AR') : language === 'fr' ? 'fr-FR' : 'en-US';
    // Calibrated to Carolina's natural conversational tempo and warm mezzo-soprano pitch
    utterance.rate = 0.93;
    utterance.pitch = 0.98;

    let charCount = cleanText.length;
    let spokenChars = 0;

    utterance.onboundary = (event) => {
      if (event.charIndex) {
        spokenChars = event.charIndex;
        const currentProg = Math.min(99, Math.round((spokenChars / charCount) * 100));
        setProgress(currentProg);
        setCurrentTime(Math.round((currentProg / 100) * 45));
      }
    };

    utterance.onend = () => {
      setProgress(100);
      setTimeout(() => {
        stopAudioPlayback();
        setProgress(0);
        setCurrentTime(0);
      }, 1000);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis fallback error, running timer:', e);
      startSimulatedProgress(45);
    };

    window.speechSynthesis.speak(utterance);
  };

  const startSimulatedProgress = (totalSeconds: number) => {
    const stepMs = (totalSeconds * 1000) / 100;
    progressTimerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          stopAudioPlayback();
          return 0;
        }
        const next = prev + 1;
        setCurrentTime(Math.round((next / 100) * totalSeconds));
        return next;
      });
    }, stepMs);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudioPlayback();
    } else {
      setIsPlaying(true);

      // Prefer real audio file if available
      if (hasRealAudio && audioElementRef.current) {
        audioElementRef.current.currentTime = (progress / 100) * duration;
        audioElementRef.current.muted = isMuted;
        audioElementRef.current.play().catch((err) => {
          console.warn('Error playing real audio, using fallback:', err);
          initAmbientTone();
          startFallbackSpeech();
        });
      } else {
        // High fidelity fallback speech + 432Hz ambient
        initAmbientTone();
        startFallbackSpeech();
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (audioElementRef.current) {
      audioElementRef.current.muted = nextMuted;
    }

    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        nextMuted ? 0 : 0.045,
        audioCtxRef.current.currentTime
      );
    }
  };

  const handleSeek = (barIndex: number, totalBars: number) => {
    const targetProgress = (barIndex / totalBars) * 100;
    setProgress(targetProgress);

    if (hasRealAudio && audioElementRef.current) {
      const targetSec = (barIndex / totalBars) * duration;
      audioElementRef.current.currentTime = targetSec;
      setCurrentTime(targetSec);
    } else {
      setCurrentTime((targetProgress / 100) * 45);
    }
  };

  const formatSecs = (seconds: number) => {
    const total = Math.max(0, Math.floor(seconds));
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="audio-bienvenida" className="w-full bg-[#F6F1EA] py-10 border-b border-[#C7A46B]/20">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-5 sm:p-7 fine-border shadow-md flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F8CFD5]/35 rounded-full blur-3xl pointer-events-none" />

          {/* Carolina Mini Portrait */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden fine-border shadow-md">
              <img
                src={ASSETS.portraitRedDress}
                alt="Carolina Barcellona"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Live Indicator pulse when playing */}
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE295C] opacity-80" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#EE295C] items-center justify-center text-[8px] text-white font-bold">
                  ♪
                </span>
              </span>
            )}
          </div>

          {/* Controls & Waveform */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#EE295C] uppercase tracking-[0.2em]">
                    {a.badge} • Carolina Barcellona
                  </span>
                  {hasRealAudio && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C7A46B]/15 text-[#8A6A32] text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[11px]">verified</span>
                      Voz Original
                    </span>
                  )}
                  {isPlaying && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Sonando
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#201415]">
                  {a.title}
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-[#685354] shrink-0 font-mono">
                {isPlaying
                  ? `${formatSecs(currentTime)} / ${formatSecs(duration || 45)}`
                  : hasRealAudio && duration
                  ? formatSecs(duration)
                  : a.duration}
              </span>
            </div>

            <p className="text-[13px] text-[#685354] mb-3 leading-snug">
              {a.subtitle}
            </p>

            {/* Audio Waveform + Play Button */}
            <div className="flex items-center gap-3">
              <button
                id="btn-toggle-audio-welcome"
                onClick={togglePlay}
                aria-label={isPlaying ? a.pause : a.play}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
                title={isPlaying ? 'Pausar audio' : 'Escuchar mensaje de Carolina'}
              >
                <span className="material-symbols-outlined text-[26px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              {/* Interactive Waveform Bars with Seek click */}
              <div
                id="audio-waveform-container"
                className="flex-1 flex items-center gap-1 sm:gap-1.5 h-11 px-3 rounded-xl bg-[#F6F1EA]/80 fine-border cursor-pointer"
                title="Haz clic en cualquier punto para avanzar o retroceder"
              >
                {Array.from({ length: 28 }).map((_, i) => {
                  const barProgress = (i / 28) * 100;
                  const isPassed = barProgress <= progress;
                  const baseHeight = 22 + Math.sin(i * 0.7) * 18;
                  const activeHeight = isPlaying
                    ? Math.max(15, baseHeight * (0.5 + Math.sin((Date.now() / 200) + i) * 0.5))
                    : baseHeight;

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSeek(i, 28)}
                      aria-label={`Saltar al segundo ${Math.round((i / 28) * duration)}`}
                      style={{ height: `${activeHeight}%` }}
                      className={`flex-1 rounded-full transition-all duration-150 cursor-pointer hover:opacity-80 ${
                        isPassed
                          ? 'bg-gradient-to-t from-[#EE295C] to-[#FF6161]'
                          : 'bg-[#C7A46B]/30'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Sound Controls (Mute ambient / audio) */}
              {isPlaying && (
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] transition-colors cursor-pointer shrink-0"
                  title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </button>
              )}

              {/* Toggle Transcript */}
              <button
                id="btn-toggle-transcript"
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-[12px] font-semibold text-[#EE295C] hover:underline shrink-0 hidden sm:inline-block cursor-pointer px-2"
              >
                {showTranscript ? a.hideTranscript : a.transcriptBtn}
              </button>
            </div>

            {/* Mobile transcript button */}
            <div className="sm:hidden mt-2 flex items-center justify-between">
              {hasRealAudio && (
                <span className="text-[10px] text-[#8A6A32] font-semibold">
                  Audio grabado por Carolina
                </span>
              )}
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-[12px] font-semibold text-[#EE295C] hover:underline ml-auto"
              >
                {showTranscript ? a.hideTranscript : a.transcriptBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Transcript Box */}
        {showTranscript && (
          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-white fine-border shadow-sm animate-fadeIn text-[13.5px] text-[#2B1D1E] font-serif italic leading-relaxed border-l-4 border-l-[#EE295C]">
            {a.transcriptText}
          </div>
        )}
      </div>
    </section>
  );
};
