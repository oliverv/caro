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
    <section id="sobre-mi" className="w-full bg-white py-space-4xl relative overflow-hidden border-b border-[#C7A46B]/25">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-space-2xl">
          <h2
            id="biostory-heading"
            className="font-serif text-[32px] md:text-[46px] text-[#201415] italic font-semibold tracking-tight"
          >
            {b.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Photo Side (Editorial Portrait with Carolina in Red Dress) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#F6F1EA] border-2 border-[#F8CFD5]/60 group">
              <img
                alt="Carolina Barcellona - Health & Longevity Specialist 40+"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                src={ASSETS.portraitRedDress}
              />
              {/* Overlay Label Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-space-md rounded-xl flex items-center justify-between fine-border shadow-lg">
                <div>
                  <p className="font-serif text-[17px] text-[#201415] font-bold">Carolina Barcellona</p>
                  <p className="text-[10px] text-[#EE295C] tracking-widest uppercase font-bold">
                    {b.specialistTitle}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-space-xs text-[#EE295C] text-[12px] tracking-[0.2em] uppercase font-bold">
              <span>{b.badge}</span>
            </div>
            <h3 className="font-serif text-[24px] md:text-[32px] md:leading-snug text-[#201415] mb-space-md font-semibold">
              {b.title}
            </h3>
            <p className="text-[15px] text-[#685354] mb-space-md leading-relaxed">
              {b.para1}
            </p>
            <p className="text-[15px] text-[#685354] mb-space-lg leading-relaxed">
              {b.para2}
            </p>

            {/* Metric Highlights Bento */}
            <div
              id="bio-metrics-bento"
              className="grid grid-cols-3 gap-space-sm p-space-md bg-[#F6F1EA] rounded-2xl mb-space-xl text-center fine-border"
            >
              <div className="p-2">
                <p className="font-serif text-[30px] text-[#FF6161] font-bold leading-tight">{b.statYears}</p>
                <p className="text-[10px] text-[#685354] tracking-wider uppercase font-semibold">{b.statYearsLabel}</p>
              </div>
              <div className="p-2 border-x border-[#C7A46B]/30">
                <p className="font-serif text-[30px] text-[#EE295C] font-bold leading-tight">{b.statPersonal}</p>
                <p className="text-[10px] text-[#685354] tracking-wider uppercase font-semibold">{b.statPersonalLabel}</p>
              </div>
              <div className="p-2">
                <p className="font-serif text-[30px] text-[#F69C05] font-bold leading-tight">{b.statRating}</p>
                <p className="text-[10px] text-[#685354] tracking-wider uppercase font-semibold">{b.statRatingLabel}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-md">
              <button
                id="btn-contact-carolina"
                onClick={onContactCarolina}
                className="px-space-xl py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] hover:opacity-95 text-white text-[13px] font-bold rounded-full shadow-[0_6px_20px_rgba(238,41,92,0.3)] transition-all cursor-pointer"
              >
                {b.contactBtn}
              </button>
              <button
                id="btn-trajectory"
                onClick={onOpenTrajectoryModal}
                className="text-[14px] font-semibold text-[#201415] hover:text-[#EE295C] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>{b.trajectoryBtn}</span>
                <span className="material-symbols-outlined text-[17px]">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
