import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../data';

export const AudioWelcome: React.FC = () => {
  const { t, language } = useLanguage();
  const a = t.audioWelcome;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioStatus, setAudioStatus] = useState<string>('');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressTimerRef = useRef<number | null>(null);

  // Clean up audio on unmount or language change
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

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.045, ctx.currentTime);
      gainNodeRef.current = masterGain;

      // Filter for warm soothing spa texture
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(360, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // 432Hz Harmonic drone (Frequencies: 108Hz, 216Hz, 432Hz)
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
    // Stop speech synthesis
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // Stop ambient oscillators
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
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

  const startSpeech = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      startSimulatedProgress(45);
      return;
    }

    window.speechSynthesis.cancel();

    const cleanText = a.transcriptText.replace(/[«»"]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;

    // Detect voice according to current language
    const voices = window.speechSynthesis.getVoices();
    const langCode = language === 'en' ? 'en' : language === 'fr' ? 'fr' : 'es';
    const targetVoice =
      voices.find((v) => v.lang.toLowerCase().startsWith(langCode) && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('monica') || v.name.toLowerCase().includes('paulina') || v.name.toLowerCase().includes('elvira') || v.name.toLowerCase().includes('marta'))) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(langCode)) ||
      voices[0];

    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.lang = langCode === 'es' ? 'es-ES' : langCode === 'fr' ? 'fr-FR' : 'en-US';
    utterance.rate = 0.94; // slightly slower, warm, relaxed clinic tone
    utterance.pitch = 1.05; // warm feminine resonance

    let charCount = cleanText.length;
    let spokenChars = 0;

    utterance.onboundary = (event) => {
      if (event.charIndex) {
        spokenChars = event.charIndex;
        const currentProg = Math.min(99, Math.round((spokenChars / charCount) * 100));
        setProgress(currentProg);
      }
    };

    utterance.onstart = () => {
      setAudioStatus('Voz de Carolina en directo');
    };

    utterance.onend = () => {
      setProgress(100);
      setTimeout(() => {
        stopAudioPlayback();
        setProgress(0);
        setAudioStatus('');
      }, 1000);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error, falling back to ambient progress:', e);
      startSimulatedProgress(30);
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
        return prev + 1;
      });
    }, stepMs);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudioPlayback();
    } else {
      setIsPlaying(true);
      setProgress(0);
      initAmbientTone();
      startSpeech();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        !isMuted ? 0 : 0.045,
        audioCtxRef.current.currentTime
      );
    }
  };

  const formatTime = (percentage: number) => {
    const totalSeconds = 45; // average spoken time
    const current = Math.floor((percentage / 100) * totalSeconds);
    const mins = Math.floor(current / 60);
    const secs = current % 60;
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
              <span className="text-[11px] font-semibold text-[#685354] shrink-0">
                {isPlaying ? `${formatTime(progress)} / 0:45` : a.duration}
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

              {/* Animated Waveform Bars */}
              <div className="flex-1 flex items-center gap-1 sm:gap-1.5 h-11 px-3 rounded-xl bg-[#F6F1EA]/80 fine-border">
                {Array.from({ length: 28 }).map((_, i) => {
                  const barProgress = (i / 28) * 100;
                  const isPassed = barProgress <= progress;
                  const baseHeight = 22 + Math.sin(i * 0.7) * 18;
                  const activeHeight = isPlaying
                    ? Math.max(15, baseHeight * (0.5 + Math.sin((Date.now() / 200) + i) * 0.5))
                    : baseHeight;

                  return (
                    <div
                      key={i}
                      style={{ height: `${activeHeight}%` }}
                      className={`flex-1 rounded-full transition-all duration-150 ${
                        isPassed
                          ? 'bg-gradient-to-t from-[#EE295C] to-[#FF6161]'
                          : 'bg-[#C7A46B]/30'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Sound Controls (Mute ambient drone) */}
              {isPlaying && (
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] transition-colors cursor-pointer shrink-0"
                  title={isMuted ? 'Activar sonido ambiental' : 'Silenciar sonido ambiental'}
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
              {audioStatus && (
                <span className="text-[11px] text-emerald-700 font-medium">
                  {audioStatus}
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
