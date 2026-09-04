import React from 'react';
import { DIAGNOSTIC_CARDS } from '../data';

interface DiagnosticSectionProps {
  onOpenDiagnosticModal: () => void;
}

export const DiagnosticSection: React.FC<DiagnosticSectionProps> = ({ onOpenDiagnosticModal }) => {
  return (
    <section id="autodiagnostico" className="w-full bg-[#F6F1EA] py-space-4xl">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl mx-auto text-center mb-space-3xl">
          <span className="text-[12px] font-bold text-[#FF6161] tracking-[0.2em] uppercase block mb-space-2xs">
            Autodiagnóstico
          </span>
          <h2
            id="diagnostic-title"
            className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold tracking-tight"
          >
            ¿Por qué estás aquí?
          </h2>
          <p className="text-[15px] text-[#685354] mt-space-xs">
            Reconocer las señales de tu cuerpo es el primer paso hacia la transformación epigenética.
          </p>
        </div>

        {/* 6 Diagnostic Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {DIAGNOSTIC_CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="bg-white p-space-xl rounded-2xl fine-border crisp-shadow hover:crisp-shadow-elevated hover:border-[#FF6161]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-11 h-11 rounded-xl ${card.badgeBg} ${card.iconColor} flex items-center justify-center mb-space-md border ${card.borderColor} group-hover:scale-105 transition-transform`}
                >
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <h3 className="font-serif text-[19px] text-[#201415] font-semibold mb-space-xs">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#685354] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Self-Assessment Banner */}
        <div className="mt-space-2xl text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 rounded-2xl bg-white fine-border crisp-shadow">
            <span className="text-[14px] font-medium text-[#201415]">
              ¿Te reconoces en dos o más de estos patrones biológicos?
            </span>
            <button
              id="btn-open-diagnostic-quiz"
              onClick={onOpenDiagnosticModal}
              className="px-5 py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">biotech</span>
              <span>Completar Test de Longevidad (2 min)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
