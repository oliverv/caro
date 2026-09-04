import React from 'react';
import { ASSETS } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenProgramModal: () => void;
  onExploreMethod: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenProgramModal,
  onExploreMethod,
  onOpenCalculator
}) => {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero-section" className="relative w-full overflow-hidden bg-[#201415] text-white">
      {/* Atmospheric Visual Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out pointer-events-none"
        style={{ backgroundImage: `url('${ASSETS.heroBg}')` }}
      />

      {/* Warm Coral, Berry & Gold Radiant Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#201415]/90 via-[#201415]/80 to-[#201415] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-[#FF6161]/25 via-[#EE295C]/20 to-[#F69C05]/20 blur-3xl pointer-events-none rounded-full" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-space-3xl pb-space-5xl flex flex-col items-center text-center">
        {/* Refined Kicker Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-[#F8CFD5]/15 fine-border-dark backdrop-blur-md mb-space-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6161] animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#F8CFD5] uppercase">
            {h.badge}
          </span>
        </div>

        {/* Grand Editorial Serif Title */}
        <h1
          id="hero-title"
          className="font-serif text-[38px] md:text-[58px] text-white max-w-4xl tracking-tight leading-[1.12] mb-space-md"
        >
          {h.titleLine1}
          <br />
          <span className="italic font-normal bg-gradient-to-r from-[#FF6161] via-[#F8CFD5] to-[#F69C05] bg-clip-text text-transparent">
            {h.titleHighlight}
          </span>
        </h1>

        {/* Elegant Sub-headlines */}
        <p
          id="hero-subtitle"
          className="font-serif italic text-[19px] md:text-[22px] text-[#F6F1EA]/90 max-w-2xl font-normal mb-space-sm leading-relaxed"
        >
          {h.subtitle}
        </p>
        <p
          id="hero-description"
          className="text-[15px] md:text-[16px] text-[#F6F1EA]/75 max-w-xl font-normal mb-space-2xl leading-relaxed"
        >
          {h.description}
        </p>

        {/* Primary & Secondary CTA actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-lg">
          <button
            id="hero-cta-descubre"
            onClick={onOpenProgramModal}
            className="w-full sm:w-auto px-space-xl py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[14px] font-bold rounded-full shadow-[0_12px_28px_rgba(238,41,92,0.4)] hover:shadow-[0_16px_36px_rgba(255,97,97,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{h.ctaPrimary}</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          <button
            id="hero-cta-calculator"
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-space-lg py-3.5 bg-white/10 hover:bg-white/15 text-white fine-border-dark backdrop-blur-sm text-[13.5px] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px] text-[#F69C05]">calculate</span>
            <span>{h.ctaCalculator}</span>
          </button>

          <button
            id="hero-cta-revolucion"
            onClick={onExploreMethod}
            className="w-full sm:w-auto px-space-lg py-3.5 text-[#F6F1EA]/80 hover:text-white text-[13.5px] font-medium transition-colors flex items-center justify-center cursor-pointer"
          >
            <span>{h.ctaSecondary}</span>
          </button>
        </div>

        {/* Quick Trust Indicators */}
        <div
          id="hero-trust-indicators"
          className="mt-space-3xl flex flex-wrap items-center justify-center gap-space-xl text-[#F6F1EA]/80 text-[11px] font-semibold tracking-[0.18em] uppercase"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#F69C05] text-[17px]">verified</span>
            {h.trustYears}
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FF6161] text-[17px]">science</span>
            {h.trustEpigenetics}
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#EE295C] text-[17px]">favorite</span>
            {h.trustPersonalized}
          </span>
        </div>
      </div>
    </section>
  );
};
