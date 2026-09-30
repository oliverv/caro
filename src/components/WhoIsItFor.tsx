import React from 'react';
import { ASSETS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const WhoIsItFor: React.FC = () => {
  const { t } = useLanguage();
  const w = t.whoIsItFor;

  return (
    <section id="para-quien" className="w-full border-y border-brand-sand/25 bg-rose-blush py-14 md:py-20">
      <div className="mx-auto grid max-w-content items-center gap-10 px-margin-mobile md:px-margin-desktop lg:grid-cols-12 lg:gap-14">
        <div className="text-center lg:col-span-7 lg:text-left">
          <p className="mb-3 font-label-caps text-primary">{w.badge}</p>
          <h2 id="who-is-it-for-title" className="mx-auto max-w-2xl font-serif text-3xl font-semibold italic leading-tight tracking-tight text-brand-espresso md:text-5xl lg:mx-0">
            {w.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-on-surface-variant md:text-xl lg:mx-0">
            {w.description}
          </p>

          <ul className="mt-7 flex list-none flex-wrap justify-center gap-2.5 p-0 lg:justify-start">
            {w.tags.map((tag, idx) => (
              <li
                key={`${tag}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-sand/45 bg-white/75 px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.07em] text-brand-espresso sm:text-xs"
              >
                <span aria-hidden="true" className={`material-symbols-outlined text-base ${idx === 2 ? 'text-tertiary' : 'text-primary'}`}>
                  check_circle
                </span>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto grid w-full max-w-[520px] grid-cols-2 items-start gap-3 lg:col-span-5 lg:max-w-none lg:gap-4">
          <figure className="overflow-hidden rounded-[1.5rem] border border-brand-sand/40 bg-white p-1.5 shadow-[0_12px_28px_-16px_rgba(37,24,25,0.35)]">
            <img
              src={ASSETS.movementPhoto}
              alt="Carolina practicando un movimiento consciente en una esterilla"
              className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-center"
              loading="lazy"
            />
          </figure>
          <figure className="mt-8 overflow-hidden rounded-[1.5rem] border border-brand-sand/40 bg-white p-1.5 shadow-[0_12px_28px_-16px_rgba(37,24,25,0.35)] sm:mt-12">
            <img
              src={ASSETS.heroBg}
              alt="Carolina disfrutando de una comida saludable y un momento de bienestar"
              className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-center"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
