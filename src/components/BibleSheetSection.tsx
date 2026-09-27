import React, { useState } from 'react';
import { CODIGO_DIOSA } from '../data/codigoDiosa';
import { useLanguage } from '../context/LanguageContext';

// Embeds the Google Form as a styled section (PRD §4.1.8 — Bible Sheet 🌺)
// The form URL is the single confirmed apply URL from codigoDiosa.ts.
const EMBED_URL = CODIGO_DIOSA.applyFormUrl.replace('/viewform', '/viewform?embedded=true');

export const BibleSheetSection: React.FC = () => {
  const { language } = useLanguage();
  const [fullscreen, setFullscreen] = useState(false);

  const title = language === 'es'
    ? 'Bible Sheet 🌺 — Tu Diagnóstico Personalizado'
    : 'Bible Sheet 🌺 — Your Personalised Diagnostic';
  const subtitle = language === 'es'
    ? 'Completa este formulario y Carolina revisará tu caso personalmente. Es el primer paso para entrar al Método Código Diosa.'
    : "Complete this form and Carolina will personally review your case. It's the first step to joining the Código Diosa Method.";
  const expandLabel = language === 'es' ? 'Ver en pantalla completa' : 'View fullscreen';
  const collapseLabel = language === 'es' ? 'Cerrar pantalla completa' : 'Close fullscreen';

  return (
    <>
      <section
        id="bible-sheet"
        className="w-full bg-[#FFF0F2] py-16 border-t border-[#EE295C]/10"
      >
        <div className="max-w-[860px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EE295C]/10 text-[#EE295C] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Paso 1 · Solicitud
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#201415] mb-3 leading-tight">
              {title}
            </h2>
            <p className="text-[15px] text-[#685354] max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Form card */}
          <div className="relative bg-white rounded-3xl shadow-[0_12px_40px_-8px_rgba(238,41,92,0.12)] overflow-hidden"
               style={{ border: '0.5px solid rgba(238,41,92,0.15)' }}>
            {/* Expand button */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#EE295C]/10 bg-[#FFF8F9]">
              <span className="text-[12px] font-semibold text-[#685354]">
                Google Forms · Solicitud Método Código Diosa
              </span>
              <button
                onClick={() => setFullscreen(true)}
                className="flex items-center gap-1.5 text-[12px] font-bold text-[#EE295C] hover:underline cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_full</span>
                {expandLabel}
              </button>
            </div>

            <iframe
              id="bible-sheet-iframe"
              src={EMBED_URL}
              title="Bible Sheet — Solicitud Método Código Diosa"
              width="100%"
              height="720"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="block w-full"
              loading="lazy"
            >
              Cargando formulario…
            </iframe>
          </div>

          {/* Trust note */}
          <p className="text-center text-[12px] text-[#685354]/70 mt-4 flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-[#C7A46B]">lock</span>
            Tus datos están protegidos — tratados según la Política de Privacidad de Carolina Barcellona.
          </p>
        </div>
      </section>

      {/* Fullscreen lightbox */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullscreen(false)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl"
            style={{ maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#EE295C]/10 bg-[#FFF8F9]">
              <span className="text-[13px] font-semibold text-[#685354]">
                Bible Sheet 🌺 — Solicitud Método Código Diosa
              </span>
              <button
                onClick={() => setFullscreen(false)}
                className="flex items-center gap-1 text-[12px] font-bold text-[#685354] hover:text-[#EE295C] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
                {collapseLabel}
              </button>
            </div>
            <iframe
              src={EMBED_URL}
              title="Bible Sheet — Pantalla completa"
              width="100%"
              height="780"
              frameBorder="0"
              className="block w-full"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};
