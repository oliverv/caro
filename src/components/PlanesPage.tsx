import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CODIGO_DIOSA } from '../data/codigoDiosa';

interface PlanesPageProps {
  onOpenBookingModal: () => void;
  onNavigateHome: () => void;
  onOpenProgramModal: () => void;
}

export const PlanesPage: React.FC<PlanesPageProps> = ({
  onOpenBookingModal,
  onNavigateHome,
  onOpenProgramModal
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'diosa' | 'intensivo' | 'mantenimiento'>('diosa');

  const openWhatsApp = (planName: string) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=34601317959&text=Hola%20Carolina,%20estoy%20interesada%20en%20el%20plan%20de%20nutrici%C3%B3n%20${encodeURIComponent(planName)}`,
      '_blank'
    );
  };

  return (
    <article id="planes-page" className="w-full bg-[#F6F1EA] text-[#201415] pb-24">
      {/* Breadcrumbs */}
      <section className="border-b border-[#C7A46B]/20 bg-white/40 backdrop-blur-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between text-[13px]">
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
              {language === 'es' ? 'Planes de Nutrición' : 'Nutrition Plans'}
            </span>
          </nav>
          <span className="text-[11px] uppercase tracking-widest text-[#EE295C] font-bold">
            Inscripciones Abiertas • Plazas Limitadas
          </span>
        </div>
      </section>

      {/* Hero Header */}
      <header className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8CFD5]/50 text-[#EE295C] text-[12px] font-bold tracking-widest uppercase mb-4 fine-border">
          <span>Epinutrición & Hábitos Saludables</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#201415] tracking-tight max-w-4xl mx-auto leading-tight">
          {language === 'es'
            ? 'Planes de Nutrición Personalizada y Salud Integral'
            : 'Personalized Nutrition & Integral Health Plans'}
        </h1>

        <p className="mt-4 text-lg text-[#EE295C] font-serif italic max-w-2xl mx-auto">
          «Tus genes no son tu destino, sólo tu punto de partida.»
        </p>

        <p className="mt-3 text-base text-[#685354] max-w-2xl mx-auto leading-relaxed">
          {language === 'es'
            ? 'Transforma tu bienestar metabólico, elimina la inflamación celular y reconquista tu vitalidad con protocolos 100% individualizados.'
            : 'Transform your metabolic health, resolve cellular inflammation, and reclaim your vitality with fully individualized protocols.'}
        </p>
      </header>

      {/* Interactive Plan Selector Tabs */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12">
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-2xl fine-border shadow-xs gap-1">
            <button
              onClick={() => setActiveTab('diosa')}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                activeTab === 'diosa'
                  ? 'bg-[#EE295C] text-white shadow-sm'
                  : 'text-[#685354] hover:text-[#201415] hover:bg-[#F6F1EA]'
              }`}
            >
              El Método Código Diosa (180 Días)
            </button>
            <button
              onClick={() => setActiveTab('intensivo')}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                activeTab === 'intensivo'
                  ? 'bg-[#EE295C] text-white shadow-sm'
                  : 'text-[#685354] hover:text-[#201415] hover:bg-[#F6F1EA]'
              }`}
            >
              Plan Reset Metabólico (30 Días)
            </button>
            <button
              onClick={() => setActiveTab('mantenimiento')}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                activeTab === 'mantenimiento'
                  ? 'bg-[#EE295C] text-white shadow-sm'
                  : 'text-[#685354] hover:text-[#201415] hover:bg-[#F6F1EA]'
              }`}
            >
              Mentoría & Longevidad Continua
            </button>
          </div>
        </div>

        {/* Selected Plan Details Card */}
        {activeTab === 'diosa' && (
          <div className="bg-white rounded-3xl fine-border shadow-xl p-8 sm:p-12 border-2 border-[#EE295C]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#EE295C] to-[#FF6161] text-white text-[11px] font-bold tracking-widest uppercase py-1.5 px-6 rounded-bl-2xl shadow-sm">
              Programa Estrella
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C7A46B] font-bold">
                    Hoja de Ruta hacia tu Soberanía Biológica
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201415] mt-1">
                    El Método Código Diosa (180 Días · 6 meses)
                  </h2>
                  <p className="text-[15px] text-[#685354] mt-2">
                    Acompañamiento clínico integral de 6 meses para mujeres 40+ que desean resetear su metabolismo, regular hormonas y alcanzar una composición corporal definida y saludable sin pasar hambre. Esto no es otro programa de fitness.
                  </p>
                  <p className="text-[13px] text-[#201415] mt-2 font-semibold bg-[#F6F1EA] border border-[#C7A46B]/30 rounded-xl px-3 py-2">
                    Precio a consultar — pendiente de confirmación final. Sin compromiso al aplicar.
                  </p>
                </div>

                {/* Qué incluye (Exact from carolinabarcellona.com) */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#201415]">
                    Qué incluye exactamente:
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6F1EA]/60 fine-border">
                      <span className="material-symbols-outlined text-[#EE295C] text-[20px] shrink-0 mt-0.5">
                        dna
                      </span>
                      <div>
                        <p className="text-[14px] font-bold text-[#201415]">
                          Test de Optimización Epigenética
                        </p>
                        <p className="text-[12px] text-[#685354]">
                          Análisis de expresión génica celular, biomarcadores de inflamación (hs-CRP), resistencia a la insulina y perfil lipídico avanzado.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6F1EA]/60 fine-border">
                      <span className="material-symbols-outlined text-[#EE295C] text-[20px] shrink-0 mt-0.5">
                        vital_signs
                      </span>
                      <div>
                        <p className="text-[14px] font-bold text-[#201415]">
                          Protocolo VIP de Longevidad & Suplementación
                        </p>
                        <p className="text-[12px] text-[#685354]">
                          Nutrición ortomolecular basada en alimentos reales, modulación de autofagia celular y pauta de suplementación limpia sin intermediarios.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6F1EA]/60 fine-border">
                      <span className="material-symbols-outlined text-[#EE295C] text-[20px] shrink-0 mt-0.5">
                        support_agent
                      </span>
                      <div>
                        <p className="text-[14px] font-bold text-[#201415]">
                          Mentoría 1:1 y Biohacking Personalizado
                        </p>
                        <p className="text-[12px] text-[#685354]">
                          Sesiones de seguimiento quincenal con Carolina, sincronización de luz circadiana, fuerza metabólica y resolución de dudas por WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={onOpenProgramModal}
                    className="px-6 py-3 rounded-full bg-white border-2 border-[#201415] hover:border-[#EE295C] hover:text-[#EE295C] text-[#201415] font-bold text-[14px] transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Ver Detalles & Dossier Completo</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <a
                    href={CODIGO_DIOSA.applyFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white font-bold text-[14px] shadow-md hover:opacity-95 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Aplicar al Método</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </a>

                  <button
                    onClick={() => openWhatsApp('Método Código Diosa 180 Días')}
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-emerald-600 font-bold text-[14px] shadow-xs transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Consultar por WhatsApp</span>
                  </button>
                </div>

                {/* Official Partners — external add-ons */}
                <div className="pt-2 p-4 rounded-2xl bg-[#F6F1EA]/60 fine-border">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#201415]">
                    Official Partners · complementos opcionales
                  </p>
                  <p className="text-[12px] text-[#685354] mt-1">
                    No incluidos en el precio del plan. Precio y compra en sus webs.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a
                      href={CODIGO_DIOSA.partners.axo.referralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white fine-border text-[12px] font-bold text-[#201415] hover:text-[#EE295C] transition-colors"
                    >
                      Axo Longevity ↗
                    </a>
                    <a
                      href={CODIGO_DIOSA.partners.epixlife.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white fine-border text-[12px] font-bold text-[#201415] hover:text-[#EE295C] transition-colors"
                    >
                      Epixlife ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Photo & Badge Sidebar */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-[340px] rounded-2xl overflow-hidden fine-border shadow-lg bg-[#201415]">
                  <img
                    src="https://carolinabarcellona.com/wp-content/uploads/2025/03/dxye1d08biy-1024x768.jpg"
                    alt="Planes de nutrición personalizada"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#C7A46B] font-bold uppercase tracking-wider">
                      <span>Duración: 180 Días · 6 meses</span>
                      <span>Modalidad: Online o Presencial</span>
                    </div>
                    <p className="text-[13px] text-white/80 leading-snug">
                      Incluye acceso a la plataforma privada, guías de menú de temporada, recetas desinflamatorias y audios de regulación nerviosa.
                    </p>
                  </div>
                </div>

                {/* Payment Methods — confirmed: Stripe + Klarna */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-[#685354] font-semibold uppercase tracking-wider">
                  <span>Métodos de Pago:</span>
                  <span className="px-2 py-0.5 rounded bg-white fine-border text-[#201415]">Stripe</span>
                  <span className="px-2 py-0.5 rounded bg-white fine-border text-[#201415]">Klarna</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'intensivo' && (
          <div className="bg-white rounded-3xl fine-border shadow-xl p-8 sm:p-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201415]">
              Plan Reset Metabólico (30 Días)
            </h2>
            <p className="text-[15px] text-[#685354] mt-2 max-w-3xl">
              Diseñado para mujeres que necesitan una intervención focalizada de 4 semanas para deshinchar el abdomen, reactivar la digestión lenta y cortar los antojos de azúcar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#F6F1EA] fine-border">
                <span className="material-symbols-outlined text-[#EE295C] mb-2">auto_fix_high</span>
                <p className="font-bold text-sm">Auditoría Nutricional Inicial</p>
                <p className="text-xs text-[#685354] mt-1">Detección de alimentos desencadenantes de hinchazón.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F1EA] fine-border">
                <span className="material-symbols-outlined text-[#EE295C] mb-2">restaurant_menu</span>
                <p className="font-bold text-sm">Menú Antiinflamatorio 30D</p>
                <p className="text-xs text-[#685354] mt-1">Platos sencillos, nutritivos y reconfortantes.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F1EA] fine-border">
                <span className="material-symbols-outlined text-[#EE295C] mb-2">forum</span>
                <p className="font-bold text-sm">2 Consultas de Revisión</p>
                <p className="text-xs text-[#685354] mt-1">Acompañamiento directo con Carolina.</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3 rounded-full bg-[#201415] text-white hover:bg-[#EE295C] font-bold text-[14px] transition-all cursor-pointer"
              >
                Solicitar Cita de Admisión
              </button>
              <button
                onClick={() => openWhatsApp('Plan Reset Metabólico 30 Días')}
                className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-[14px] transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Preguntar por WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'mantenimiento' && (
          <div className="bg-white rounded-3xl fine-border shadow-xl p-8 sm:p-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201415]">
              Mentoría & Longevidad Continua
            </h2>
            <p className="text-[15px] text-[#685354] mt-2 max-w-3xl">
              Para graduadas del Método Código Diosa que desean un acompañamiento estacional (primavera, verano, otoño, invierno) para consolidar su juventud biológica año tras año.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#F6F1EA] fine-border">
                <p className="font-bold text-sm text-[#EE295C]">Revisión Analítica Estacional</p>
                <p className="text-xs text-[#685354] mt-1">Monitoreo periódico de lípidos, glucemia e inflamación celular.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F1EA] fine-border">
                <p className="font-bold text-sm text-[#EE295C]">Ajuste de Cargas & Fuerza</p>
                <p className="text-xs text-[#685354] mt-1">Progresión muscular adaptada a tus etapas de vida.</p>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => openWhatsApp('Mentoría Continua de Longevidad')}
                className="px-6 py-3 rounded-full bg-[#201415] text-white hover:bg-[#EE295C] font-bold text-[14px] transition-all cursor-pointer"
              >
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Real Customer Testimonials (from carolinabarcellona.com/planes-nutricion-personalizada/) */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#EE295C] font-bold">
            Historias Reales • Resultados Reales
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#201415] mt-1">
            Qué dicen mis clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Raquel Llorente */}
          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg font-bold text-[#201415]">Raquel Llorente</span>
                <span className="text-amber-500 text-sm">★★★★★</span>
              </div>
              <p className="text-[13px] text-[#685354] leading-relaxed italic">
                «Carolina, una persona maravillosa! He estado realizando el programa durante 90 días y los resultados han sido mejores de lo que me esperaba! Buscaba una solución para reducir la hinchazón que me condicionaba la forma de vestir y salir con amigas. Primero, la hinchazón está totalmente controlada. Segundo, una forma de comer disfrutona y sostenible. Tercero, antes llegaba muerta y tomaba 4 cafés, ahora me sobran baterías! Y cuarto, he perdido 6kg de grasa de manera progresiva y sin pasar hambre. Solo puedo dar las gracias a Carolina!! 🤍»
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C7A46B]/20 text-[11px] text-[#EE295C] font-bold uppercase tracking-wider">
              -6kg de Grasa • Método Código Diosa
            </div>
          </div>

          {/* Carmen Moreno */}
          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg font-bold text-[#201415]">Carmen Moreno</span>
                <span className="text-amber-500 text-sm">★★★★★</span>
              </div>
              <p className="text-[13px] text-[#685354] leading-relaxed italic">
                «Conocer a Caro me cambió la relación con la comida, con mi cuerpo y conmigo. Llegué buscando mejorar mi alimentación y me encontré con un proceso mucho más profundo. Hoy me siento con más energía, más paz y una visión totalmente distinta de lo que significa nutrirme. Te escucha, te entiende y te guía sin juicios. Es una profesional increíble y una persona aún más bonita. 💗»
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C7A46B]/20 text-[11px] text-[#EE295C] font-bold uppercase tracking-wider">
              Paz Mental & Nutrición
            </div>
          </div>

          {/* Vanesa Carolina */}
          <div className="bg-white p-6 rounded-2xl fine-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg font-bold text-[#201415]">Vanesa Carolina</span>
                <span className="text-amber-500 text-sm">★★★★★</span>
              </div>
              <p className="text-[13px] text-[#685354] leading-relaxed italic">
                «Mi experiencia con Carolina ha sido excelente. Su atención personalizada y recomendaciones valiosas han sido clave para mejorar mi metabolismo e ir alcanzando mis objetivos de salud en una etapa donde todo parecía estancado. ¡Altamente recomendado para cualquier mujer!»
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C7A46B]/20 text-[11px] text-[#EE295C] font-bold uppercase tracking-wider">
              Metabolismo Optimizado
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
