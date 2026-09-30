import React from 'react';
import { ASSETS } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface BioStoryProps {
  onContactCarolina: () => void;
  onOpenTrajectoryModal: () => void;
}

export const BioStory: React.FC<BioStoryProps> = ({ onContactCarolina, onOpenTrajectoryModal }) => {
  const { t } = useLanguage();
  const b = t.bioStory;

  return (
    <section id="sobre-mi" className="relative w-full overflow-hidden border-b border-brand-sand/30 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        <div className="mb-8 flex items-end gap-4 md:mb-10">
          <span aria-hidden="true" className="hidden h-px w-12 bg-brand-sand md:block" />
          <h2 id="biostory-heading" className="font-serif text-3xl font-semibold italic tracking-tight text-brand-espresso md:text-5xl">
            {b.heading}
          </h2>
        </div>

        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
          <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
            <figure className="relative">
              <div aria-hidden="true" className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.75rem] border border-brand-sand/50 bg-brand-cream/50" />
              <img
                src={ASSETS.portraitRedDress}
                alt="Carolina Barcellona, especialista en salud y longevidad, en una pausa de movimiento"
                className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center shadow-[0_16px_36px_-16px_rgba(37,24,25,0.3)]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-brand-sand/35 bg-surface/95 p-3 shadow-md backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-4">
                <div>
                  <p className="font-serif text-lg font-semibold text-brand-espresso">Carolina Barcellona</p>
                  <p className="mt-1 font-label-caps text-primary">{b.specialistTitle}</p>
                </div>
                <span aria-hidden="true" className="material-symbols-outlined flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-sand/50 bg-white text-primary">verified</span>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-3 font-label-caps text-primary">{b.badge}</p>
            <h3 className="mb-4 max-w-2xl font-serif text-2xl font-semibold leading-tight text-brand-espresso md:text-4xl">
              {b.title}
            </h3>
            <p className="mb-4 text-[15px] leading-7 text-on-surface-variant md:text-base">{b.para1}</p>
            <p className="text-[15px] leading-7 text-on-surface-variant md:text-base">{b.para2}</p>

            <div id="bio-metrics-bento" className="mt-7 grid grid-cols-3 divide-x divide-brand-sand/40 rounded-2xl border border-brand-sand/35 bg-brand-cream/65 px-2 py-4 text-center sm:px-4">
              <div className="px-1 sm:px-3">
                <p className="font-serif text-2xl font-semibold leading-tight text-primary sm:text-3xl">{b.statYears}</p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-on-surface-variant sm:text-[12px]">{b.statYearsLabel}</p>
              </div>
              <div className="px-1 sm:px-3">
                <p className="font-serif text-2xl font-semibold leading-tight text-primary sm:text-3xl">{b.statPersonal}</p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-on-surface-variant sm:text-[12px]">{b.statPersonalLabel}</p>
              </div>
              <div className="px-1 sm:px-3">
                <p className="font-serif text-2xl font-semibold leading-tight text-tertiary sm:text-3xl">{b.statRating}</p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-on-surface-variant sm:text-[12px]">{b.statRatingLabel}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                id="btn-contact-carolina"
                onClick={onContactCarolina}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-[0_8px_24px_-2px_rgba(185,0,64,0.2)] transition hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {b.contactBtn}
              </button>
              <button
                id="btn-trajectory"
                onClick={onOpenTrajectoryModal}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-brand-espresso transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>{b.trajectoryBtn}</span>
                <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
