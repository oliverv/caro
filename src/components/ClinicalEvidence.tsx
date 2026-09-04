import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ClinicalEvidence: React.FC = () => {
  const { t } = useLanguage();
  const c = t.clinicalEvidence;

  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = c.cases[activeCaseIdx] || c.cases[0];

  return (
    <section id="evidencia-clinica" className="w-full bg-[#F6F1EA] py-space-4xl border-b border-[#C7A46B]/20">
      <div className="max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="text-[12px] font-bold text-[#EE295C] tracking-[0.2em] uppercase block mb-space-2xs">
            {c.badge}
          </span>
          <h2
            id="clinical-evidence-heading"
            className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold tracking-tight mb-space-xs"
          >
            {c.title}
          </h2>
          <p className="text-[15px] text-[#685354] leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center gap-3 mb-space-2xl">
          {c.cases.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveCaseIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeCaseIdx === idx
                  ? 'bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white shadow-md'
                  : 'bg-white fine-border text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/20'
              }`}
            >
              <span className="material-symbols-outlined text-[17px]">
                {idx === 0 ? 'monitor_heart' : 'bedtime'}
              </span>
              <span>{cs.clientProfile.split('•')[0]} ({cs.age} años)</span>
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 fine-border crisp-shadow max-w-4xl mx-auto">
          {/* Top metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C7A46B]/20">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F8CFD5] text-[#EE295C] inline-block mb-2">
                Duración: {activeCase.duration}
              </span>
              <h3 className="font-serif text-[24px] font-bold text-[#201415]">
                {activeCase.clientProfile}
              </h3>
              <p className="text-[13px] text-[#685354] mt-1">
                <strong>Síntomas iniciales:</strong> {activeCase.symptoms}
              </p>
            </div>

            <div className="bg-[#FCFAF7] p-4 rounded-2xl fine-border md:max-w-xs">
              <span className="text-[11px] font-bold text-[#201415] block mb-1">
                Intervención Epigenética:
              </span>
              <p className="text-[12px] text-[#685354] leading-snug">
                {activeCase.intervention}
              </p>
            </div>
          </div>

          {/* Biomarkers Comparison Grid */}
          <div className="py-6">
            <h4 className="text-[12px] font-bold text-[#201415] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">biotech</span>
              <span>Comparativa de Analíticas en Laboratorio (Antes vs Después)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeCase.markers.map((marker, mIdx) => (
                <div key={mIdx} className="bg-[#FCFAF7] rounded-2xl p-4 fine-border flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-bold text-[#201415] block mb-2">
                      {marker.name}
                    </span>
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <span className="text-[10px] text-[#685354] uppercase block">Antes</span>
                        <span className="font-serif text-[18px] text-[#685354] line-through">
                          {marker.before}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#EE295C] text-[16px]">arrow_forward</span>
                      <div>
                        <span className="text-[10px] text-[#EE295C] font-bold uppercase block">Después</span>
                        <span className="font-serif text-[22px] font-bold text-[#201415]">
                          {marker.after} <span className="text-[11px] font-sans text-[#685354]">{marker.unit}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#C7A46B]/20">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <span className="material-symbols-outlined text-[13px]">check</span>
                      {marker.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinician Note */}
          <div className="p-4 rounded-2xl bg-[#F8CFD5]/25 fine-border flex items-start gap-3">
            <span className="material-symbols-outlined text-[#EE295C] text-[20px] shrink-0 mt-0.5">
              health_and_safety
            </span>
            <p className="text-[12.5px] text-[#201415] leading-relaxed">
              <strong>Nota clínica de Carolina:</strong> {activeCase.doctorNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
