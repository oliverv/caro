import React from 'react';
import { CODIGO_DIOSA } from '../data/codigoDiosa';

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAIN_POINTS = CODIGO_DIOSA.painPointsEs;

const PHASE_STYLES = [
  { dot: 'bg-[#C7A46B]', ring: 'border-[#C7A46B]/40', chip: 'bg-[#C7A46B]/15 text-[#6b5320]' },
  { dot: 'bg-[#FF6161]', ring: 'border-[#FF6161]/30', chip: 'bg-[#FF6161]/10 text-[#EE295C]' },
  { dot: 'bg-[#EE295C]', ring: 'border-[#EE295C]/30', chip: 'bg-[#EE295C]/10 text-[#EE295C]' },
  { dot: 'bg-[#F69C05]', ring: 'border-[#F69C05]/40', chip: 'bg-[#F69C05]/15 text-[#8a5a00]' },
];

export const ProgramModal: React.FC<ProgramModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { partners } = CODIGO_DIOSA;

  return (
    <div
      id="program-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 bg-[#201415]/70 backdrop-blur-md z-[110] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        id="program-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F6F1EA] rounded-3xl max-w-2xl w-full fine-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="btn-close-program-modal"
          onClick={onClose}
          aria-label="Cerrar dossier"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors z-10"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Hero / pain points */}
        <div className="bg-white rounded-t-3xl px-6 sm:px-8 pt-8 pb-6 border-b border-[#C7A46B]/20 pr-16">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-[#F8CFD5] text-[#EE295C] inline-block mb-3">
            Programa Activo • Inscripciones Abiertas
          </span>
          <h3 className="font-display text-[26px] sm:text-[32px] text-[#201415] font-bold leading-tight">
            El Método Código Diosa
          </h3>
          <p className="font-script text-[20px] text-[#EE295C] mt-1">
            180 días para volver a ti
          </p>
          <p className="text-[14px] text-[#685354] mt-2 leading-relaxed">
            Acompañamiento clínico integral de 6 meses para mujeres 40+ que quieren
            entender los cambios de su cuerpo y construir una salud que dure décadas.
            Esto no es otro programa de fitness: es un método personalizado que trabaja
            con tu biología.
          </p>
          <div className="flex flex-wrap gap-2 mt-4" aria-label="Para quién es">
            {PAIN_POINTS.map((pain) => (
              <span
                key={pain}
                className="px-3 py-1 rounded-full text-[12px] font-semibold bg-[#F6F1EA] border border-[#C7A46B]/30 text-[#201415]"
              >
                {pain}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6">
          {/* This is not another fitness program */}
          <div className="p-4 rounded-2xl bg-white fine-border mb-6">
            <p className="text-[12px] font-bold text-[#EE295C] uppercase tracking-wider mb-1">
              Esto no es otro programa de fitness
            </p>
            <p className="text-[13px] text-[#685354] leading-relaxed">
              Sin dietas genéricas ni reglas rígidas. Partimos de tu historia, tu momento
              vital y tus datos — y avanzamos por fases que se construyen una sobre otra:
              primero calmamos, después reparamos, y entonces optimizamos.
            </p>
          </div>

          {/* Method flow: Diagnóstico blended into 3 phases */}
          <h4 className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em] mb-3">
            El método en un flujo continuo · 180 días
          </h4>
          <div className="relative pl-1">
            {/* continuous connector line = the "blend" */}
            <div
              aria-hidden
              className="absolute left-[27px] top-3 bottom-6 w-px bg-gradient-to-b from-[#C7A46B] via-[#FF6161] via-[#EE295C] to-[#F69C05]"
            />
            <div className="space-y-3 relative">
              {CODIGO_DIOSA.phasesEs.map((phase, i) => (
                <div
                  key={phase.id}
                  className={`p-4 rounded-2xl bg-white border ${PHASE_STYLES[i].ring} fine-border`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className={`w-6 h-6 rounded-full ${PHASE_STYLES[i].dot} text-white flex items-center justify-center text-xs font-bold shrink-0 relative z-10`}
                    >
                      {i === 0 ? '✦' : i}
                    </span>
                    <p className="font-display text-[16px] font-bold text-[#201415] leading-snug">
                      {phase.title}
                    </p>
                  </div>
                  <p className="text-[13px] text-[#685354] pl-9 leading-relaxed">
                    {phase.description}
                  </p>
                  {i === 0 && (
                    <p className="text-[12px] text-[#685354] pl-9 mt-1.5 italic">
                      Cada dato de esta fase alimenta directamente la Activación,
                      la Reparación y la Optimización.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* What is included */}
          <div className="p-4 rounded-2xl bg-[#F8CFD5]/20 border border-[#F8CFD5] mt-6">
            <p className="text-[12px] font-bold text-[#EE295C] uppercase tracking-wider mb-2">
              ¿Qué incluye el acompañamiento?
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#201415]">
              {[
                'Sesiones 1 a 1 de valoración clínica',
                'Estrategia personalizada según tu diagnóstico',
                'Soporte semanal vía WhatsApp privado',
                'Pautas de fuerza y actividad metabólica',
                'Recetarios antiinflamatorios y listas',
                'Ajustes bioindividuales en cada fase',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Official Partners */}
          <div className="p-4 rounded-2xl bg-white fine-border mt-4">
            <p className="text-[12px] font-bold text-[#201415] uppercase tracking-wider">
              Official Partners
            </p>
            <p className="text-[12px] text-[#685354] mt-1 mb-3">
              Complementos opcionales externos — se compran en sus webs, no están
              incluidos en el precio del plan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={partners.axo.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 rounded-xl bg-[#F6F1EA] border border-[#C7A46B]/30 hover:border-[#EE295C]/50 transition-colors"
              >
                <p className="text-[14px] font-bold text-[#201415]">Axo Longevity</p>
                <p className="text-[12px] text-[#685354] mt-0.5 leading-snug">
                  Analítica avanzada de longevidad. Precio y compra en la web de Axo
                  con el enlace de Carolina.
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#EE295C] mt-2">
                  Ver test con enlace de Carolina
                  <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                </span>
              </a>
              <a
                href={partners.epixlife.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 rounded-xl bg-[#F6F1EA] border border-[#C7A46B]/30 hover:border-[#EE295C]/50 transition-colors"
              >
                <p className="text-[14px] font-bold text-[#201415]">Epixlife</p>
                <p className="text-[12px] text-[#685354] mt-0.5 leading-snug">
                  Informe de optimización. Detalles y compra en epixlife.com.
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#EE295C] mt-2">
                  Ver informe de optimización
                  <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                </span>
              </a>
            </div>
          </div>

          {/* Price card — pending */}
          <div className="p-5 rounded-2xl bg-[#201415] text-white mt-4 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#FF6161]/30 to-[#F69C05]/20 blur-2xl rounded-full pointer-events-none" />
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C7A46B] font-bold">
                  Plan 180 días · 6 meses
                </p>
                <p className="font-display text-[22px] font-bold mt-1">
                  Precio a consultar
                </p>
                <p className="text-[12px] text-white/70 mt-1 max-w-sm leading-relaxed">
                  La inversión final está pendiente de confirmación. Solicítala al
                  aplicar — sin compromiso.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/80">
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15">Stripe</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15">Klarna</span>
              </div>
            </div>
            <a
              id="modal-cta-apply"
              href={CODIGO_DIOSA.applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[14px] font-bold rounded-full text-center shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
            >
              <span>Aplicar al Método Código Diosa</span>
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </a>
            <a
              id="modal-cta-whatsapp"
              href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20quiero%20conocer%20el%20precio%20del%20M%C3%A9todo%20C%C3%B3digo%20Diosa%20180%20d%C3%ADas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 rounded-full text-center text-[13px] font-semibold text-white/85 hover:text-white border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[17px]">chat</span>
              <span>Preguntar precio por WhatsApp</span>
            </a>
          </div>

          {/* Testimonials pending note */}
          <p className="text-[11px] text-[#685354] mt-4 leading-relaxed">
            Testimonios reales de clientas disponibles — pendientes de confirmación
            final sobre cuáles están autorizados para publicación.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 pb-6">
          <button
            id="modal-btn-close-bottom"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-white text-[#685354] hover:text-[#201415] text-[13px] font-semibold fine-border"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
