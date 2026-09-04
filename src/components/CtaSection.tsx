import React from 'react';

interface CtaSectionProps {
  onContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContact }) => {
  return (
    <section id="contacto-cta" className="w-full bg-[#F6F1EA] py-space-4xl">
      <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="rounded-3xl bg-[#201415] text-white p-space-2xl md:p-space-3xl text-center relative overflow-hidden fine-border-dark shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF6161]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#F69C05]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-[12px] font-bold text-[#FF6161] tracking-[0.2em] uppercase block mb-space-xs">
              Tu Nueva Etapa Empieza Aquí
            </span>
            <h2
              id="cta-title"
              className="font-serif text-[32px] md:text-[46px] italic font-semibold mb-space-sm"
            >
              Es tu hora de brillar con salud celular y vitalidad.
            </h2>
            <p className="text-[15px] text-[#F6F1EA]/85 mb-space-2xl leading-relaxed">
              No esperes a que el cansancio o los cambios hormonales decidan por ti. Da el paso hacia una salud consciente, informada y a tu medida.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
              <button
                id="btn-cta-whatsapp"
                onClick={onContact}
                className="w-full sm:w-auto px-space-xl py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] hover:scale-[1.02] active:scale-[0.98] text-white text-[14px] font-bold rounded-full shadow-[0_8px_24px_rgba(238,41,92,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contactar con Carolina</span>
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </button>
              <a
                id="btn-cta-calendly"
                href="https://calendly.com/coachcarolinabarcellona/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-space-xl py-3.5 bg-white/10 hover:bg-white/15 text-white fine-border-dark backdrop-blur-sm text-[14px] font-semibold rounded-full transition-all flex items-center justify-center gap-2"
              >
                <span>Agendar en Calendly</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </a>
            </div>

            <p className="text-[11px] text-[#F6F1EA]/60 uppercase tracking-widest mt-space-xl">
              Consultas presenciales en Pozuelo / Madrid y online a todo el mundo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
