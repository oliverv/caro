import React from 'react';

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="program-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 bg-[#201415]/70 backdrop-blur-md z-[110] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        id="program-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 fine-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="btn-close-program-modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="text-center pb-6 border-b border-[#C7A46B]/20 pr-8">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-[#F8CFD5] text-[#EE295C] inline-block mb-2">
            Programa Activo • Inscripciones Abiertas
          </span>
          <h3 className="font-serif text-[26px] sm:text-[32px] text-[#201415] italic font-semibold">
            Código Diosa 90 Días
          </h3>
          <p className="text-[14px] text-[#685354] mt-1">
            Optimización Metabólica, Epigenética y Bienestar Hormonal para Mujeres 40+
          </p>
        </div>

        {/* Phase Breakdown */}
        <div className="py-6 space-y-4">
          <h4 className="text-[11px] font-bold text-[#C7A46B] uppercase tracking-[0.2em]">
            Estructura del Proceso en 3 Fases
          </h4>

          {/* Phase 1 */}
          <div className="p-4 rounded-2xl bg-[#F6F1EA] fine-border">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#FF6161] text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              <p className="font-serif text-[17px] font-bold text-[#201415]">
                Fase 1: Reset Celular & Desinflamación Profunda (Días 1 a 30)
              </p>
            </div>
            <p className="text-[13px] text-[#685354] pl-8">
              Auditoría metabólica completa. Eliminación de desencadenantes pro-inflamatorios, saneamiento del microbioma intestinal y reactivación mitocondrial para frenar la hinchazón y la retención.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-4 rounded-2xl bg-[#F6F1EA] fine-border">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#EE295C] text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              <p className="font-serif text-[17px] font-bold text-[#201415]">
                Fase 2: Flexibilidad Metabólica & Masa Muscular Activa (Días 31 a 60)
              </p>
            </div>
            <p className="text-[13px] text-[#685354] pl-8">
              Sensibilización a la insulina y reordenamiento de carbohidratos estratégicos. Rutinas de fuerza inteligente adaptadas para preservar hueso y quemar grasa visceral sin agotar tu tiroides.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="p-4 rounded-2xl bg-[#F6F1EA] fine-border">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#F69C05] text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
              <p className="font-serif text-[17px] font-bold text-[#201415]">
                Fase 3: Anclaje Epigenético & Longevidad Vitalicia (Días 61 a 90)
              </p>
            </div>
            <p className="text-[13px] text-[#685354] pl-8">
              Automatización de sistemas sostenibles. Consolidación de un patrón alimentario gozoso y sin culpas, modulación del descanso y herramientas para gestionar el climaterio con plenitud.
            </p>
          </div>
        </div>

        {/* What is included */}
        <div className="p-4 rounded-2xl bg-[#F8CFD5]/20 border border-[#F8CFD5] mb-6">
          <p className="text-[12px] font-bold text-[#EE295C] uppercase tracking-wider mb-2">
            ¿Qué incluye el acompañamiento?
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#201415]">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
              Sesiones 1 a 1 de valoración clínica
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
              Estrategia epigenética personalizada
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
              Soporte semanal vía WhatsApp privado
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
              Pautas de fuerza y actividad metabólica
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
              Recetarios antiinflamatorios y listas
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px]">check</span>
              Ajustes bioindividuales en cada etapa
            </li>
          </ul>
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            id="modal-cta-whatsapp"
            href="https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20programa%20C%C3%B3digo%20Diosa%2090"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[14px] font-bold rounded-full text-center shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Consultar Disponibilidad con Carolina</span>
            <span className="material-symbols-outlined text-[18px]">chat</span>
          </a>
          <button
            id="modal-btn-close-bottom"
            onClick={onClose}
            className="py-3.5 px-6 rounded-full bg-[#F6F1EA] text-[#685354] hover:text-[#201415] text-[13px] font-semibold fine-border"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
