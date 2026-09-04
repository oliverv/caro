import React from 'react';
import { ASSETS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const WhoIsItFor: React.FC = () => {
  const { t } = useLanguage();
  const w = t.whoIsItFor;

  return (
    <section id="para-quien" className="w-full bg-white py-space-4xl border-y border-[#C7A46B]/25">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <span className="text-[12px] font-bold text-[#EE295C] tracking-[0.2em] uppercase block mb-space-2xs">
              {w.badge}
            </span>
            <h2
              id="who-is-it-for-title"
              className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold mb-space-md"
            >
              {w.title}
            </h2>
            <p className="font-serif italic text-[18px] md:text-[20px] text-[#685354] leading-relaxed mb-space-lg">
              {w.description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-space-md text-[12px] font-semibold text-[#201415] uppercase tracking-wider">
              {w.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8CFD5]/30 border border-[#F8CFD5]"
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      idx === 0 ? 'text-[#EE295C]' : idx === 1 ? 'text-[#FF6161]' : 'text-[#F69C05]'
                    }`}
                  >
                    check_circle
                  </span>
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Photo Pair */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-space-md">
            <div className="rounded-2xl overflow-hidden shadow-xl fine-border aspect-[4/5] bg-[#F6F1EA] group">
              <img
                alt="Carolina Barcellona - Movimiento y Equilibrio 40+"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.movementPhoto}
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl fine-border aspect-[4/5] mt-space-lg bg-[#F6F1EA] group">
              <img
                alt="Carolina Barcellona - Vitalidad y Longevidad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.vitalityPhoto}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
