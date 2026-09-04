import React from 'react';
import { ASSETS } from '../data';

interface TrajectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrajectoryModal: React.FC<TrajectoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="trajectory-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 bg-[#201415]/70 backdrop-blur-md z-[110] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        id="trajectory-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 fine-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          id="btn-close-trajectory"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-4 pb-5 border-b border-[#C7A46B]/20">
          <img
            alt="Carolina Barcellona"
            src={ASSETS.portraitRedDress}
            className="w-16 h-16 rounded-full object-cover fine-border"
          />
          <div>
            <h3 className="font-serif text-[22px] font-bold text-[#201415]">
              Carolina Barcellona
            </h3>
            <p className="text-[12px] text-[#EE295C] font-semibold uppercase tracking-wider">
              Nutricionista Clínica, Epigenética & Longevidad 40+
            </p>
          </div>
        </div>

        <div className="py-5 space-y-4 text-[14px] text-[#685354] leading-relaxed">
          <div>
            <h4 className="font-serif text-[17px] font-bold text-[#201415] mb-1">
              Trayectoria y Formación Especializada
            </h4>
            <p>
              Carolina Barcellona cuenta con más de 6 años guiando a mujeres en su transición biológica de los 40 y 50 años. Su metodología integra las ramas más rigurosas y modernas de la ciencia de la salud:
            </p>
          </div>

          <ul className="space-y-2 text-[13px] bg-[#F6F1EA] p-4 rounded-2xl fine-border">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#FF6161] text-[18px] shrink-0 mt-0.5">school</span>
              <span><strong>Nutrición Clínica e Integrativa:</strong> Especialización en dietoterapia avanzada y modulación de patologías metabólicas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#EE295C] text-[18px] shrink-0 mt-0.5">biotech</span>
              <span><strong>Nutrigenética & Epigenética:</strong> Estudio de cómo la alimentación y el estilo de vida activan o silencian genes protectores de longevidad.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#F69C05] text-[18px] shrink-0 mt-0.5">medication</span>
              <span><strong>Nutrición Ortomolecular:</strong> Uso terapéutico de micronutrientes y adaptógenos de grado clínico para regeneración celular.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#C7A46B] text-[18px] shrink-0 mt-0.5">fitness_center</span>
              <span><strong>Medicina del Movimiento y Estilo de Vida:</strong> Entrenamiento de hipertrofia funcional y preservación ósea adaptado a la mujer madura.</span>
            </li>
          </ul>

          <p>
            Desde su espacio en <strong>Biolifestyle Studio (Pozuelo de Alarcón, Madrid)</strong> y a través de su consulta online internacional, acompaña a mujeres profesionales que necesitan dejar de improvisar y disponer de una hoja de ruta con evidencia científica y calidez humana.
          </p>
        </div>

        <div className="pt-4 border-t border-[#C7A46B]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#201415] text-white text-[13px] font-bold rounded-full hover:bg-black transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
