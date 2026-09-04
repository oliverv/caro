import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../data';

export const AudioWelcome: React.FC = () => {
  const { t } = useLanguage();
  const a = t.audioWelcome;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [showTranscript, setShowTranscript] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Simulated audio playback progress
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1020); // 102 seconds total ~ 1:42 min
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (percentage: number) => {
    const totalSeconds = 102;
    const current = Math.floor((percentage / 100) * totalSeconds);
    const mins = Math.floor(current / 60);
    const secs = current % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="audio-bienvenida" className="w-full bg-[#F6F1EA] py-space-2xl border-b border-[#C7A46B]/20">
      <div className="max-w-[900px] mx-auto px-margin-mobile">
        <div className="bg-white rounded-3xl p-5 sm:p-7 fine-border crisp-shadow flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F8CFD5]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Carolina Mini Portrait */}
          <div className="relative shrink-0">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden fine-border shadow-md">
              <img
                src={ASSETS.portraitRedDress}
                alt="Carolina Barcellona"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Live Indicator pulse when playing */}
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE295C] opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#EE295C]" />
              </span>
            )}
          </div>

          {/* Controls & Waveform */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <span className="text-[10px] font-bold text-[#EE295C] uppercase tracking-[0.2em]">
                  {a.badge} • Carolina Barcellona
                </span>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#201415]">
                  {a.title}
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-[#685354] shrink-0">
                {isPlaying ? `${formatTime(progress)} / ${a.duration}` : a.duration}
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
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              {/* Animated Waveform Bars */}
              <div className="flex-1 flex items-center gap-1 sm:gap-1.5 h-10 px-2 rounded-xl bg-[#F6F1EA]/80 fine-border">
                {Array.from({ length: 28 }).map((_, i) => {
                  const barProgress = (i / 28) * 100;
                  const isPassed = barProgress <= progress;
                  // Dynamic height based on sine wave pattern
                  const baseHeight = 20 + Math.sin(i * 0.7) * 16;
                  const activeHeight = isPlaying ? Math.max(12, baseHeight * (0.6 + Math.random() * 0.6)) : baseHeight;

                  return (
                    <div
                      key={i}
                      style={{ height: `${activeHeight}%` }}
                      className={`flex-1 rounded-full transition-all duration-200 ${
                        isPassed
                          ? 'bg-gradient-to-t from-[#EE295C] to-[#FF6161]'
                          : 'bg-[#C7A46B]/30'
                      }`}
                    />
                  );
                })}
              </div>

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
            <div className="sm:hidden mt-2 text-right">
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-[12px] font-semibold text-[#EE295C] hover:underline"
              >
                {showTranscript ? a.hideTranscript : a.transcriptBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Transcript Box */}
        {showTranscript && (
          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-white fine-border crisp-shadow animate-fadeIn text-[13.5px] text-[#2B1D1E] font-serif italic leading-relaxed border-l-4 border-l-[#EE295C]">
            {a.transcriptText}
          </div>
        )}
      </div>
    </section>
  );
};
