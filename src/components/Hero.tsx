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
    <section id="hero-section" className="relative overflow-hidden border-b border-brand-sand/30 bg-surface text-on-surface">
      <div className="mx-auto grid max-w-content items-center gap-10 px-margin-mobile pb-12 pt-10 md:grid-cols-2 md:gap-12 md:px-margin-desktop md:pb-16 md:pt-14 lg:gap-16">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p id="hero-badge" className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-sand/50 bg-white/70 px-4 py-2 font-label-caps text-brand-espresso">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
            {h.badge}
          </p>
          <h1 id="hero-title" className="mx-auto max-w-[12ch] font-serif text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-brand-espresso md:mx-0 md:text-[3.5rem]">
            {h.titleLine1}{' '}
            <span className="text-primary italic">{h.titleHighlight}</span>
          </h1>
          <p id="hero-subtitle" className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-on-surface-variant md:mx-0 md:text-xl">
            {h.subtitle}
          </p>
          <p id="hero-description" className="mx-auto mt-3 max-w-xl text-sm leading-7 text-on-surface-variant md:mx-0 md:text-base">
            {h.description}
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <button
              id="hero-cta-descubre"
              onClick={onOpenProgramModal}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-[0_8px_24px_-2px_rgba(185,0,64,0.22)] transition hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <span>{h.ctaPrimary}</span>
              <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <button
              id="hero-cta-calculator"
              onClick={onOpenCalculator}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-sand bg-white/60 px-5 py-3 text-sm font-semibold text-brand-espresso transition hover:bg-rose-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-lg text-brand-berry">calculate</span>
              <span>{h.ctaCalculator}</span>
            </button>
            <button
              id="hero-cta-revolucion"
              onClick={onExploreMethod}
              className="inline-flex min-h-12 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-primary transition hover:text-brand-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {h.ctaSecondary}
            </button>
          </div>

          <div id="hero-trust-indicators" className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-brand-sand/30 pt-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant md:justify-start">
            <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="material-symbols-outlined text-base text-tertiary">verified</span>{h.trustYears}</span>
            <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="material-symbols-outlined text-base text-primary">science</span>{h.trustEpigenetics}</span>
            <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="material-symbols-outlined text-base text-secondary">favorite</span>{h.trustPersonalized}</span>
          </div>
        </div>

        <figure className="relative order-1 mx-auto w-full max-w-[430px] md:order-2 md:max-w-none">
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-brand-sand/50 bg-white/50" aria-hidden="true" />
          <img
            src={ASSETS.vitalityPhoto}
            alt="Carolina disfrutando de un momento de calma y vitalidad al aire libre"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-center shadow-[0_18px_40px_-18px_rgba(37,24,25,0.34)]"
            fetchPriority="high"
          />
          <figcaption className="absolute -bottom-4 left-4 max-w-[80%] rounded-2xl border border-brand-sand/40 bg-surface/95 px-4 py-3 text-left shadow-lg backdrop-blur-sm sm:left-6">
            <span className="block font-serif text-base italic text-brand-espresso">{h.subtitle}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
