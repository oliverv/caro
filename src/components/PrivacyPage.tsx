import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyPageProps {
  onNavigateHome: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();

  return (
    <article id="privacy-page" className="w-full bg-[#F6F1EA] text-[#201415] pb-24">
      <section className="border-b border-[#C7A46B]/20 bg-white/40 backdrop-blur-sm py-4">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 flex items-center justify-between text-[13px]">
          <nav className="flex items-center gap-2 text-[#685354]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#EE295C] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
            </button>
            <span>/</span>
            <span className="text-[#201415] font-semibold">
              Política de Privacidad & Aviso Legal
            </span>
          </nav>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 md:px-8 pt-12">
        <div className="bg-white rounded-3xl fine-border shadow-md p-8 sm:p-12 space-y-6 text-[15px] leading-relaxed text-[#685354]">
          <h1 className="font-serif text-3xl font-bold text-[#201415]">
            Política de Privacidad y Protección de Datos (RGPD)
          </h1>
          <p className="text-xs text-[#C7A46B] font-bold uppercase tracking-widest">
            Última actualización: 2026 • Carolina Barcellona – Nutrissia Wellness
          </p>

          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#201415]">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados en este sitio web es <strong>Carolina Barcellona</strong> (en adelante, la «Responsable» o «Nutrissia Wellness»), con domicilio profesional en Calle Camino de los Bonetes 2, 28250 Pozuelo de Alarcón / Madrid, España, y correo electrónico de contacto: <strong className="text-[#201415]">info@nutrissiawellness.com</strong>.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              2. Finalidad del Tratamiento de los Datos
            </h2>
            <p>
              Los datos personales facilitados a través de los formularios de contacto, reservas o suscripciones son tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Gestionar solicitudes de información y citas de valoración para planes de nutrición y salud.</li>
              <li>Prestar los servicios contratados de asesoramiento nutricional y mentoría de estilo de vida.</li>
              <li>Envío de comunicaciones informativas, artículos de biohacking y actualizaciones con el consentimiento expreso de la usuaria.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              3. Legitimación
            </h2>
            <p>
              La base legal para el tratamiento de tus datos es el consentimiento explícito otorgado al enviar los formularios de la web y, en su caso, la ejecución del contrato de prestación de servicios profesionales.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              4. Confidencialidad y Destinatarios
            </h2>
            <p>
              Tus datos no serán cedidos a terceros salvo obligación legal o cuando sea estrictamente necesario para la provisión del servicio (por ejemplo, pasarelas de pago seguras o plataformas de videoconferencia cifrada). Se garantiza el secreto profesional en todas las consultas y datos de salud aportados.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              5. Derechos de la Usuaria
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, limitar y suprimir tus datos personales en cualquier momento, así como a revocar tu consentimiento enviando un correo electrónico a <strong>info@nutrissiawellness.com</strong> adjuntando copia de documento acreditativo de identidad.
            </p>
          </div>

          <div className="pt-6 border-t border-[#C7A46B]/20">
            <button
              onClick={onNavigateHome}
              className="px-6 py-2.5 rounded-full bg-[#201415] text-white text-xs font-bold hover:bg-[#EE295C] transition-all cursor-pointer"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
