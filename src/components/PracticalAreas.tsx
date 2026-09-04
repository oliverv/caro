import React from 'react';
import { PRACTICAL_AREAS } from '../data';

interface PracticalAreasProps {
  onOpenProgramModal: () => void;
  onOpenWaitlistModal: (areaTitle: string) => void;
}

export const PracticalAreas: React.FC<PracticalAreasProps> = ({
  onOpenProgramModal,
  onOpenWaitlistModal
}) => {
  return (
    <section id="planes-areas" className="w-full bg-[#F6F1EA] py-space-4xl">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <h2
            id="practical-areas-title"
            className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold tracking-tight"
          >
            Aplicado en 3 Áreas Prácticas
          </h2>
          <p className="text-[15px] text-[#685354] mt-space-xs">
            Un protocolo tripartito diseñado para armonizar tu biología, tu energía vital y tu longevidad mental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
          {PRACTICAL_AREAS.map((area) => {
            const isActive = area.status === 'active';
            return (
              <div
                key={area.id}
                id={area.id}
                className={`rounded-2xl p-space-xl flex flex-col justify-between crisp-shadow hover:crisp-shadow-elevated transition-all duration-300 relative ${
                  isActive
                    ? 'bg-white border-2 border-[#FF6161]/40 hover:border-[#FF6161]'
                    : 'bg-white/80 fine-border'
                }`}
              >
                <div>
                  <div className="flex justify-end mb-space-xs">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold ${
                        isActive
                          ? 'bg-[#F8CFD5] text-[#EE295C]'
                          : 'bg-[#F6F1EA] border border-[#C7A46B]/30 text-[#685354] font-semibold'
                      }`}
                    >
                      {area.statusLabel}
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] text-[#201415] text-center font-bold mb-space-xs">
                    {area.title}
                  </h3>
                  <p className="text-[13px] text-[#685354] text-center mb-space-lg leading-relaxed">
                    {area.description}
                  </p>

                  <ul className={`space-y-space-xs text-[#685354] text-[13px] pb-space-lg ${!isActive ? 'opacity-85' : ''}`}>
                    {area.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`material-symbols-outlined text-[19px] shrink-0 ${
                            isActive
                              ? 'text-[#FF6161]'
                              : area.id === 'area-sueno'
                              ? 'text-[#C7A46B]'
                              : 'text-[#F69C05]'
                          }`}
                        >
                          {area.icon}
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isActive ? (
                  <button
                    id="btn-explorar-diosa-90"
                    onClick={onOpenProgramModal}
                    className="w-full py-3 bg-gradient-to-r from-[#FF6161] to-[#EE295C] hover:opacity-95 text-white text-[13px] font-bold rounded-full text-center shadow-[0_6px_18px_rgba(255,97,97,0.35)] transition-all cursor-pointer"
                  >
                    {area.ctaText}
                  </button>
                ) : (
                  <button
                    id={`btn-waitlist-${area.id}`}
                    onClick={() => onOpenWaitlistModal(area.title)}
                    type="button"
                    className="w-full py-3 bg-[#F6F1EA] hover:bg-[#F8CFD5]/40 border border-[#C7A46B]/30 hover:border-[#EE295C]/50 text-[#685354] hover:text-[#201415] text-[13px] font-semibold rounded-full text-center transition-all cursor-pointer"
                  >
                    {area.ctaText}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
