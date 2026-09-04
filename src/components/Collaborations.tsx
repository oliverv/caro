import React from 'react';

export const Collaborations: React.FC = () => {
  const partners = [
    { id: 'collab-1', name: 'EPIGENETICS LAB' },
    { id: 'collab-2', name: 'INTEGRATIVE CLINIC MADRID' },
    { id: 'collab-3', name: 'LONGEVITY HUB 40+' },
    { id: 'collab-4', name: 'ORTHOMOLECULAR RESEARCH' }
  ];

  return (
    <section id="colaboraciones" className="w-full bg-[#F6F1EA] py-space-xl border-t border-[#C7A46B]/20">
      <div className="max-w-[1200px] mx-auto px-margin-mobile text-center">
        <p className="text-[11px] text-[#685354] tracking-[0.2em] uppercase font-bold mb-space-md">
          Colaboraciones Clínicas & Red Profesional en Madrid
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-xl opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner) => (
            <span
              key={partner.id}
              id={partner.id}
              className="font-serif text-[14px] md:text-[15px] text-[#201415] tracking-widest font-semibold px-3 py-1 bg-white/50 rounded-lg fine-border"
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
