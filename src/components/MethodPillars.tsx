import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MethodPillars: React.FC = () => {
  const { t } = useLanguage();
  const p = t.pillars;
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  return (
    <section
      id="metodo-diosa"
      className="w-full bg-white py-space-4xl relative z-20 border-b border-[#C7A46B]/25"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="text-[12px] font-bold text-[#EE295C] tracking-[0.2em] uppercase block mb-space-2xs">
            {p.badge}
          </span>
          <h2 className="font-serif text-[32px] md:text-[46px] text-[#201415] italic font-semibold tracking-tight mb-space-sm">
            {p.title}
          </h2>
          <p className="text-[15px] text-[#685354] leading-relaxed">
            {p.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {p.items.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                onClick={() => setSelectedPillar(isSelected ? null : pillar.id)}
                className={`flex flex-col items-center text-center p-space-xl rounded-2xl bg-[#F6F1EA]/60 fine-border hover:bg-[#F8CFD5]/15 crisp-shadow hover:crisp-shadow-elevated transition-all duration-300 group cursor-pointer ${
                  isSelected ? 'ring-2 ring-[#EE295C] bg-[#F8CFD5]/20' : ''
                }`}
              >
                <span
                  className={`font-serif text-[52px] leading-none font-bold text-[#201415] ${pillar.accentHoverColor} transition-colors duration-300 mb-space-2xs`}
                >
                  {pillar.letter}
                </span>
                <h3 className="text-[13px] text-[#201415] tracking-[0.14em] uppercase font-bold mb-space-xs">
                  {pillar.title}
                </h3>
                <div className={`w-8 h-1 bg-gradient-to-r ${pillar.gradient} mb-space-md rounded-full`} />
                <p className="text-[13px] text-[#685354] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
