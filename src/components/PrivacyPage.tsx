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
              className="hover:text-[#B90040] transition-colors cursor-pointer flex items-center gap-1"
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
          <p className="text-xs text-[#7E5B20] font-bold uppercase tracking-widest">
            Última actualización: 2026 • Carolina Barcellona – Nutrissia Wellness
          </p>

          <div className="space-y-6">
            <h2 className="font-serif text-xl font-bold text-[#201415]">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados en este sitio web es <strong>Carolina Barcellona</strong>, Administradora de carolinabarcellona.com, con domicilio profesional en Madrid, España, y correo electrónico de contacto: <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong>.
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
              <li>Registrar suscripciones al Newsletter con consentimiento expreso.</li>
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
              Tus datos no serán cedidos a terceros salvo obligación legal o cuando sea estrictamente necesario para la provisión del servicio (por ejemplo, pasarelas de pago seguras o plataformas de videoconferencia cifrada). Se garantiza el secreto profesional en todas las consultas y datos de salud aportados. Ten en cuenta que existen servicios con integración a terceras apps contratadas para gestionar la experiencia de usuarias — dichas apps pueden tener acuerdos propios con terceras partes.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              5. Política Anti-Spam
            </h2>
            <p>
              Evitamos el «spam»: no enviamos comunicaciones comerciales no solicitadas. Los datos personales recogidos en carolinabarcellona.com no serán cedidos, transferidos ni vendidos a ningún tercero. Si recibes comunicaciones de Carolina Barcellona sin haberte registrado ni dado consentimiento expreso, puedes cancelarla desde los enlaces facilitados en la propia comunicación o escribiendo a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong>.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              6. Consentimiento al Tratamiento de Datos
            </h2>
            <p>
              Carolina Barcellona dispone de formularios digitales a través de los cuales es posible registrar el correo electrónico, nombre y otros datos de la persona interesada en:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Obtener información y/o contratar los servicios y programas ofertados.</li>
              <li>Acceder a contenidos o productos digitales gratuitos y/o de pago.</li>
              <li>Registrarse al Newsletter o novedades.</li>
              <li>Contactar con Carolina Barcellona.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              7. Conservación de Datos
            </h2>
            <p>
              Los datos cuya conservación resulte innecesaria y no lleve implícita una obligación legal serán eliminados en un período mínimo de 12 meses. Cuando los datos deban conservarse por obligación jurídica (p. ej. facturación), la conservación será de hasta 10 años.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              8. Política de Cookies
            </h2>
            <p>
              Esta web utiliza cookies para garantizar su correcto funcionamiento y mejorar la experiencia de navegación:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Cookies propias (sesión):</strong> Garantizan que los usuarios que interactúan con el sitio sean humanos y no aplicaciones automatizadas. Combaten el spam.
              </li>
              <li>
                <strong>Cookies de terceros:</strong> Cada red social utiliza sus propias cookies. Además, se emplean herramientas de medición (como píxeles de seguimiento) y botones sociales del tipo «Me gusta» o «Compartir».
              </li>
              <li>
                <strong>Cookies de elaboración de perfiles:</strong> Las cookies de terceros instaladas se utilizan para la elaboración de perfiles de clientes. Esta actividad permite ofrecer a usuarias y clientas los productos y servicios que mejor satisfagan su experiencia. Si no estás de acuerdo, puedes oponerte dejando de navegar en esta web.
              </li>
            </ul>
            <p>
              Para navegar en carolinabarcellona.com únicamente es necesario aceptar las cookies necesarias haciendo clic en el botón correspondiente de la ventanilla emergente. Puedes aceptar o rechazar las demás cookies según tus preferencias.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              9. Seguridad
            </h2>
            <p>
              Carolina Barcellona cuenta con certificado SSL y medidas de seguridad convencionales adecuadas al volumen de la base de datos gestionada, para evitar la pérdida, uso indebido, alteración, acceso no autorizado o robo de datos personales.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#201415]">
              10. Derechos de la Usuaria
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, limitar, suprimir, oponerte y solicitar la portabilidad de tus datos personales en cualquier momento, así como a revocar tu consentimiento enviando un correo electrónico a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong> adjuntando copia de documento acreditativo de identidad.
            </p>
            <p className="text-xs text-[#7E5B20] font-semibold">
              Última revisión de esta política: 24/07/2026
            </p>
          </div>

          <div className="pt-6 border-t border-[#C7A46B]/20">
            <button
              onClick={onNavigateHome}
              className="px-6 py-2.5 rounded-full bg-[#201415] text-white text-xs font-bold hover:bg-[#B90040] transition-all cursor-pointer"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
