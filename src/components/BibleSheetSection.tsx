import React from 'react';
import { CODIGO_DIOSA } from '../data/codigoDiosa';
import { useLanguage } from '../context/LanguageContext';

// Bible Sheet 🌺 application section (PRD §4.1.8)
// The form URL is the single confirmed apply URL from codigoDiosa.ts.

export const BibleSheetSection: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'es'
    ? 'Bible Sheet 🌺 — Tu Diagnóstico Personalizado'
    : 'Bible Sheet 🌺 — Your Personalised Diagnostic';
  const planBadge = language === 'es' ? 'Plan Gran Diosa en 7+' : 'Gran Diosa Plan in 7+';
  const toolLabel = language === 'es'
    ? 'Herramienta oficial · Climaterio Glorioso'
    : 'Official tool · Glorious Climacteric';
  const quote = language === 'es'
    ? '«Este es tu punto de partida hacia tu Climaterio Glorioso y tu soberanía biológica. Antes de saber a dónde vas, necesitas ver dónde estás.»'
    : '"This is your starting point towards your Glorious Climacteric and biological sovereignty. Before knowing where you are going, you need to see where you are."';
  const metaBadges = language === 'es'
    ? ['100% Confidencial', '3-4 minutos', 'Cero juicio']
    : ['100% Confidential', '3-4 minutes', 'Zero judgement'];
  const subtitle = language === 'es'
    ? 'Completa este formulario y Carolina revisará tu caso personalmente. Es el primer paso para entrar al Método Código Diosa.'
    : "Complete this form and Carolina will personally review your case. It's the first step to joining the Código Diosa Method.";
  const openLabel = language === 'es' ? 'Abrir formulario' : 'Open the form';
  const formHint = language === 'es'
    ? 'El formulario se abre en una pestaña nueva. Tardarás 3-4 minutos.'
    : 'The form opens in a new tab. It takes 3-4 minutes.';

  return (
    <>
      <section
        id="bible-sheet"
        className="w-full bg-[#FFF0F2] py-16 border-t border-[#EE295C]/10"
      >
        <div className="max-w-[860px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EE295C]/10 text-[#B90040] text-[12px] font-bold tracking-[0.18em] uppercase mb-3">
              Paso 1 · Solicitud · {toolLabel}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#201415] mb-3 leading-tight">
              {title}
            </h2>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C7A46B]/15 text-[#7E5B20] text-[12px] font-bold tracking-[0.14em] uppercase mb-4">
              {planBadge}
            </span>
            <p className="font-serif italic text-[17px] text-[#685354] max-w-xl mx-auto leading-relaxed mb-3">
              {quote}
            </p>
            <p className="text-[15px] text-[#685354] max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {metaBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[12px] font-semibold text-[#685354] shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-[#B90040]">verified</span>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Form card — opens in a new tab. The Google Form currently requires
              sign-in, so it cannot be embedded; restore the iframe once Carolina
              disables "Restrict to users" / "Require sign-in" in the form settings. */}
          <div className="bg-white rounded-3xl shadow-[0_12px_40px_-8px_rgba(238,41,92,0.12)] px-6 py-10 md:px-10 md:py-12 text-center"
               style={{ border: '0.5px solid rgba(238,41,92,0.15)' }}>
            <span className="material-symbols-outlined text-[40px] text-[#B90040] mb-3 block" aria-hidden="true">assignment</span>
            <p className="text-[15px] text-[#685354] max-w-md mx-auto leading-relaxed mb-6">
              {formHint}
            </p>
            <a
              href={CODIGO_DIOSA.applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D6254F] to-[#B90040] text-white text-[15px] font-bold shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {openLabel}
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">open_in_new</span>
            </a>
          </div>

          {/* Trust note */}
          <p className="text-center text-[12px] text-[#685354] mt-4 flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-[#7E5B20]">lock</span>
            Tus datos están protegidos — tratados según la Política de Privacidad de Carolina Barcellona.
          </p>
        </div>
      </section>

    </>
  );
};
