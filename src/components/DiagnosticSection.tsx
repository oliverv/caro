import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DiagnosticSectionProps {
  onOpenDiagnosticModal: () => void;
  onOpenAiAssessment?: () => void;
}

export const DiagnosticSection: React.FC<DiagnosticSectionProps> = ({
  onOpenDiagnosticModal,
  onOpenAiAssessment
}) => {
  const { t } = useLanguage();
  const d = t.diagnosticSection;

  return (
    <section id="autodiagnostico" className="w-full bg-[#F6F1EA] py-space-4xl">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl mx-auto text-center mb-space-3xl">
          <span className="text-[12px] font-bold text-[#FF6161] tracking-[0.2em] uppercase block mb-space-2xs">
            {d.badge}
          </span>
          <h2
            id="diagnostic-title"
            className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold tracking-tight"
          >
            {d.title}
          </h2>
          <p className="text-[15px] text-[#685354] mt-space-xs">
            {d.subtitle}
          </p>
        </div>

        {/* 6 Diagnostic Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {d.cards.map((card) => (
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

        {/* Interactive Self-Assessment & AI Banner */}
        <div className="mt-space-2xl flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 rounded-2xl bg-white fine-border crisp-shadow">
            <span className="text-[14px] font-medium text-[#201415]">
              {d.bannerPrompt}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                id="btn-open-diagnostic-quiz"
                onClick={onOpenDiagnosticModal}
                className="px-4.5 py-2.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[13px] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[18px]">clinical_notes</span>
                <span>{d.bannerBtn}</span>
              </button>

              {onOpenAiAssessment && (
                <button
                  id="btn-open-ai-assessment-home"
                  onClick={onOpenAiAssessment}
                  className="px-4.5 py-2.5 bg-[#201415] text-white text-[13px] font-bold rounded-full shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap border border-[#C7A46B]/40"
                >
                  <span className="material-symbols-outlined text-[17px] text-[#C7A46B]">auto_awesome</span>
                  <span>Evaluación IA</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
