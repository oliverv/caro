import React from 'react';
import { CODIGO_DIOSA } from '../data/codigoDiosa';

export const Collaborations: React.FC = () => {
  return (
    <section id="colaboraciones" className="w-full bg-[#F6F1EA] py-space-xl border-t border-[#C7A46B]/20">
      <div className="max-w-[1200px] mx-auto px-margin-mobile text-center">
        <p className="text-[11px] text-[#685354] tracking-[0.2em] uppercase font-bold mb-space-md">
          Official Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            id="collab-axo"
            href={CODIGO_DIOSA.partners.axo.referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-[14px] md:text-[15px] text-[#201415] tracking-widest font-semibold px-4 py-2 bg-white rounded-xl fine-border hover:border-[#EE295C]/50 hover:text-[#EE295C] transition-colors"
          >
            AXO LONGEVITY ↗
          </a>
          <a
            id="collab-epixlife"
            href={CODIGO_DIOSA.partners.epixlife.reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-[14px] md:text-[15px] text-[#201415] tracking-widest font-semibold px-4 py-2 bg-white rounded-xl fine-border hover:border-[#EE295C]/50 hover:text-[#EE295C] transition-colors"
          >
            EPIXLIFE ↗
          </a>
        </div>
        <p className="text-[11px] text-[#685354] mt-3">
          Tests externos opcionales — precio y compra en sus webs, no incluidos en el plan.
        </p>
      </div>
    </section>
  );
};
