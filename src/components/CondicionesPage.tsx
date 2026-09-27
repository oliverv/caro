import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CondicionesPageProps {
  onNavigateHome: () => void;
  onNavigatePrivacy: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-2">
    <h2 className="font-serif text-xl font-bold text-[#201415]">{title}</h2>
    {children}
  </div>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] leading-relaxed text-[#685354]">{children}</p>
);

export const CondicionesPage: React.FC<CondicionesPageProps> = ({ onNavigateHome, onNavigatePrivacy }) => {
  const { language } = useLanguage();

  return (
    <article id="condiciones-page" className="w-full bg-[#F6F1EA] text-[#201415] pb-24">
      {/* Breadcrumb */}
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
              Aviso Legal & Condiciones de Contratación
            </span>
          </nav>
          {/* Download original */}
          <a
            href="/assets/CondicionesContratacion.docx"
            download
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-[#8A6A32] hover:text-[#EE295C] transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">download</span>
            Descargar DOC
          </a>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 md:px-8 pt-12 space-y-6">
        {/* ── AVISO LEGAL ── */}
        <div className="bg-white rounded-3xl fine-border shadow-md p-8 sm:p-12 space-y-6 text-[15px] leading-relaxed text-[#685354]">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#201415]">Aviso Legal</h1>
            <p className="text-xs text-[#C7A46B] font-bold uppercase tracking-widest mt-1">
              Carolina Barcellona · carolinabarcellona.com
            </p>
          </div>

          <P>
            En Carolina Barcellona procuramos administrar de forma transparente y respetuosa nuestra web y oferta. En cumplimiento a las leyes aplicables se han configurado un conjunto de Avisos, Políticas y Términos con la finalidad de establecer relaciones transparentes. Navegar en esta web, apps, redes sociales y contratar nuestros productos implica que estás de acuerdo y aceptas las legalidades establecidas en todos ellos.
          </P>

          <div className="text-[13px] bg-[#F6F1EA] rounded-xl p-4 space-y-1 font-mono">
            <p><strong>Sitio:</strong> https://carolinabarcellona.com/</p>
            <p><strong>Administradora:</strong> Carolina Barcellona</p>
            <p><strong>Contacto:</strong> contacto@carolinabarcellona.com</p>
          </div>

          <Section title="Alojamiento y registro de la base de datos">
            <P>
              https://carolinabarcellona.com/ está alojada bajo medidas básicas de seguridad. El detalle completo del tratamiento de datos personales se encuentra en la{' '}
              <button type="button" onClick={onNavigatePrivacy} className="text-[#EE295C] underline font-medium cursor-pointer">
                Política de Privacidad
              </button>.
            </P>
          </Section>

          <Section title="Navegación">
            <P>
              Navegar en esta web implica la aceptación de todos los términos legales establecidos. Para hacerlo únicamente es necesario pulsar el botón ACEPTAR las Cookies de su elección al ingresar en la web, lo cual conlleva la aceptación de las Políticas de Cookies y Privacidad. Si no estáis conforme con las cookies necesarias no podrás usar esta web.
            </P>
          </Section>

          <Section title="Objeto de esta página web">
            <P>
              https://carolinabarcellona.com/ se integra de varias páginas diseñadas con fines comerciales y promocionales. También existen formularios interactivos de contacto donde las personas interesadas pueden contratar los productos de Carolina Barcellona, teniendo en cuenta que el envío desde dichos formularios conlleva un tratamiento de datos detallado en la Política de Privacidad.
            </P>
          </Section>

          <Section title="Ejercicio de derechos">
            <P>
              Siempre podrás retirar, acceder, rectificar, suprimir, oponer, limitar y/o pedir la portabilidad de tus datos tratados por Carolina Barcellona, enviando un email a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong>.
            </P>
          </Section>

          <Section title="Almacenamiento y conservación de información personal">
            <P>
              Esta web almacena principalmente la información personal obtenida en la suscripción al Newsletter, las cookies y la obtenida para cumplir con la contratación de productos. El almacenamiento se realiza en soportes convencionales y seguros. Dicha información es tratada confidencialmente y no es cedida a ningún tercero. Ten en cuenta que existen servicios con integración a terceras apps que pueden tener acuerdos propios con terceras partes — recomendamos consultar la Política de Cookies.
            </P>
          </Section>

          <Section title="No responsabilidad">
            <P>
              Carolina Barcellona no puede ser responsable de la información de destino de los enlaces a otros contenidos, porque no tiene conocimiento efectivo de que la actividad a la que remite deja de ser lícita. Si advertís contenido ilegal, por favor avisad a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong>.
            </P>
          </Section>

          <Section title="Información sobre seguridad">
            <P>
              Carolina Barcellona cuenta con certificado SSL y medidas de seguridad adecuadas para evitar la pérdida, uso indebido, alteración, acceso no autorizado o robo de datos personales. En caso de hackeo, Carolina Barcellona no será responsable por daños derivados del uso del sitio o cualquier app vinculada.
            </P>
          </Section>

          <Section title="Propiedad intelectual">
            <P>
              Exceptuando los derechos de otros Autores, Carolina Barcellona cuenta con todos los derechos sobre todos los elementos creativos que se muestran en esta web (fotografías, copywriting, posts del blog, contenidos, diseño, emails, vídeos, audios y demás obras), protegidos por la legislación en Propiedad Intelectual nacional e internacional. Cualquier uso no autorizado puede suponer una violación de dichas leyes.
            </P>
            <P>
              Carolina Barcellona NO autoriza la reproducción, exhibición ni modificación (total ni parcial) de ningún contenido bajo su explotación, tampoco autoriza la distribución ni venta de ninguno de ellos.
            </P>
          </Section>

          <Section title="Licencias">
            <P>
              Carolina Barcellona, su logotipo, diseño y maquetas son de uso exclusivo de la Administradora. Para solicitar una licencia dirija un correo a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong> con asunto <em>SOLICITO LICENCIA</em>.
            </P>
          </Section>
        </div>

        {/* ── CONDICIONES DE CONTRATACIÓN ── */}
        <div className="bg-white rounded-3xl fine-border shadow-md p-8 sm:p-12 space-y-6 text-[15px] leading-relaxed text-[#685354]">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#201415]">Condiciones de Contratación</h1>
            <p className="text-xs text-[#C7A46B] font-bold uppercase tracking-widest mt-1">
              Carolina Barcellona · Madrid, España
            </p>
          </div>

          <div className="text-[13px] bg-[#F6F1EA] rounded-xl p-4 space-y-1 font-mono">
            <p><strong>Administradora y vendedora:</strong> Carolina Barcellona</p>
            <p><strong>Domicilio:</strong> Madrid, España</p>
            <p><strong>Email de contacto:</strong> contacto@carolinabarcellona.com</p>
            <p><strong>Idioma de contratación:</strong> Español</p>
          </div>

          <Section title="Cliente y contratación">
            <P>
              La persona mayor de edad (18 años cumplidos o más) que adquiere un producto o servicio de Carolina Barcellona a través de las plataformas descritas se configura como cliente. El cliente es la única persona responsable de proporcionar datos correctos y actualizados en el momento de la compra.
            </P>
          </Section>

          <Section title="Precio">
            <P>
              El monto asignado a cada producto o servicio será el visible en el momento de pago e incluye IVA.
            </P>
          </Section>

          <Section title="Servicios ofertados">
            <P>En esta web está a la venta el <strong className="text-[#201415]">Plan Gran Diosa en 7+</strong>:</P>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Modalidad esmeralda individual (para 1 persona) — PVP 70 €</li>
              <li>Modalidad esmeralda dúo (para 2 personas) — PVP 100 €</li>
              <li>Modalidad oro individual (para 1 persona) — PVP 1.000 €</li>
              <li>Modalidad diamante individual (para 1 persona) — PVP 1.200 €</li>
            </ul>
          </Section>

          <Section title="Método de pago">
            <P>
              El pago es gestionado por la empresa de procesamiento que el cliente elige (tarjeta de crédito o débito, Stripe, Klarna). Hasta que el método de pago confirme el pedido, no se comenzará el proceso de entrega. Para dudas escribe a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong> con asunto <em>duda/fallo en compra</em>.
            </P>
          </Section>

          <Section title="Políticas del servicio">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tiempo de contestación de email: desde un par de horas hasta 48 horas hábiles.</li>
              <li>Si no recibes acceso al producto dentro de 48 horas hábiles, escribe a contacto@carolinabarcellona.com con asunto <em>NO HE RECIBIDO ACCESO AL PRODUCTO</em>.</li>
              <li>Solo procede la devolución cuando transcurran 14 días desde la compra sin recibir acceso ni instrucciones, y tras haberlo notificado sin recibir respuesta.</li>
              <li>No proceden devoluciones en productos rebajados ni en productos personalizados (p. ej. test epigenético).</li>
            </ul>
          </Section>

          <Section title="Anulación de compra">
            <P>
              Si el cliente ha realizado más de una solicitud de reembolso, la contratación puede no ser aprobada. En caso de desaprobación, el cliente recibirá un email con la explicación correspondiente.
            </P>
          </Section>

          <Section title="Envío (test epigenético)">
            <P>
              Los gastos de envío de muestras corren a cargo del cliente y solo se dará seguimiento cuando esté completamente pagado. El envío deberá realizarse por correo certificado siguiendo las instrucciones de Carolina Barcellona.
            </P>
          </Section>

          <Section title="Garantías y devoluciones">
            <P>
              El cliente que se beneficie de una devolución procedente será reembolsado mediante el mismo método de pago, proceso que puede tardar de 30 a 60 días. La devolución implica los gastos descritos en el apartado de políticas del servicio.
            </P>
          </Section>

          <Section title="Terminación del contrato">
            <P>
              Para el servicio de coaching de 6 sesiones, la contratación se ejecutará en el plazo máximo de 3 meses naturales. Las sesiones no son acumulables ni prorrogables.
            </P>
            <P>
              Para el test epigenético, el contrato se tendrá por ejecutado cuando se entreguen los resultados al cliente, siempre que haya enviado sus muestras correctamente en el plazo máximo de 3 meses desde la contratación.
            </P>
          </Section>

          <Section title="Resolución de conflictos">
            <P>
              Cualquier controversia judicial se resolverá en los Tribunales de Madrid, España. Para reclamaciones, dirija un correo a <strong className="text-[#201415]">contacto@carolinabarcellona.com</strong> indicando nombre, dirección postal, copia de DNI/NIE/Pasaporte y el motivo de la reclamación.
            </P>
          </Section>

          <Section title="Modificación de estas condiciones">
            <P>
              Carolina Barcellona se reserva el derecho a modificar estas condiciones en cualquier momento. Las compras quedan sujetas a las condiciones vigentes al momento del pago.
            </P>
          </Section>

          <div className="pt-6 border-t border-[#C7A46B]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <button
              onClick={onNavigateHome}
              className="px-6 py-2.5 rounded-full bg-[#201415] text-white text-xs font-bold hover:bg-[#EE295C] transition-all cursor-pointer"
            >
              Volver al Inicio
            </button>
            <a
              href="/assets/CondicionesContratacion.docx"
              download
              className="flex items-center gap-1.5 text-[12px] font-semibold text-[#8A6A32] hover:text-[#EE295C] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Descargar documento completo
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};
