import React from 'react';

interface SobreMiPageProps {
  onOpenBookingModal: () => void;
  onNavigateHome: () => void;
  onNavigatePlanes: () => void;
}

export const SobreMiPage: React.FC<SobreMiPageProps> = ({
  onOpenBookingModal,
  onNavigateHome,
  onNavigatePlanes,
}) => {
  return (
    <div id="sobre-mi-page" className="w-full bg-surface text-on-surface">
      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter pt-space-xl pb-space-2xl text-center flex flex-col items-center">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-space-sm">
          <button onClick={onNavigateHome} className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            Inicio
          </button>
          <span className="text-on-surface-variant/40 font-body-sm text-body-sm">/</span>
          <span className="font-body-sm text-body-sm text-on-surface font-medium">Sobre mí</span>
        </nav>
        <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-tertiary font-bold mb-space-sm">
          Mentora & Autora de El Código Diosa
        </p>
        <div className="inline-flex items-center px-space-md py-1 rounded-full bg-surface-container mb-space-lg shadow-sm">
          <span className="font-label-sm text-label-sm text-primary font-semibold tracking-wide">
            Tu código no es tu destino
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface max-w-4xl tracking-tight leading-tight mb-space-md">
          Reprograma tu biología: <br className="hidden sm:inline" />
          <span className="italic font-normal font-headline-lg text-primary">El arte de habitar en ti.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Soberanía Biológica: Ciencia rigurosa y conciencia corporal puestas al servicio de tu longevidad y vitalidad femenina tras los 40.
        </p>
      </section>

      {/* SECTION 2: STORY (TWO COLUMNS) */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter pb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-4 bg-surface-container rounded-[48px] -rotate-2 transform-gpu filter blur-xl opacity-75 pointer-events-none" />
              <div className="relative w-full aspect-[2/3] rounded-t-[180px] rounded-b-[32px] overflow-hidden bg-surface-container-high shadow-[0_16px_40px_-8px_rgba(104,83,84,0.12)]">
                <img
                  alt="Carolina Barcellona practicando yoga y consciencia corporal"
                  className="w-full h-full object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-xSbN3a7SCLc3CtdRqJe6urPdVBaUG9NBoghbFs6FuQHPEi9NQoSgqK4youeUKdRkWhjpwAJcn_9rE5c26x4-DJynHpTkdlUW4c3WGDx2kIUr4_-FyGLsO7PQUF4SFU2isRgTXZdi9xSczSjErPSMEnLLHmw9yJbo1zhFqyYOMtilby9_p28Zthjh7qoUjWnu0dAPAlncJgmercT2SqZf2hvDZh-BW7n7r7Qv5a-DHD_i8YgY3puLhgI3bCtquFupP2A"
                />
                <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-[20px] bg-surface-container-lowest/90 backdrop-blur-md shadow-md text-center">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Carolina Barcellona</h3>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary mt-1 font-semibold">
                    Especialista en Medicina del Estilo de Vida
                  </p>
                </div>
              </div>
            </div>
            {/* Accreditation Tag */}
            <div className="mt-space-lg w-full max-w-[380px] bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface leading-snug">UCM Nirakara Labs</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Medicina del Estilo de Vida • Universidad Complutense de Madrid</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story */}
          <div className="lg:col-span-7 flex flex-col pt-space-xs">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
              Hola, soy Carolina
            </h2>
            <p className="font-script-accent text-script-accent text-tertiary mb-space-lg leading-tight">
              No siempre habité mi cuerpo en paz.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface font-medium mb-space-lg leading-relaxed">
              Llevo más de seis años acompañando a mujeres a recuperar su energía, su metabolismo y su bienestar. Combino nutrición personalizada, medicina del estilo de vida, salud funcional y biohacking, con la base de mi formación como profesora de yoga certificada.
            </p>
            <div className="flex flex-col gap-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <p>
                Durante años, mi vida transcurrió entre shootings fotográficos y aeropuertos internacionales de moda mientras, en silencio, mi cuerpo reflejaba el impacto acumulativo de vivir desconectada de mi propia biología.
              </p>
              <p>
                Mi piel, mis niveles de energía, mi relación con la comida y mi salud general se convirtieron en señales de alarma de un desequilibrio mucho más profundo. Pero fue la maternidad la que me obligó a detenerme por completo, escucharme de verdad y reconstruirme desde los mismos cimientos.
              </p>
              <p>
                Ese fue el inicio de un camino de transformación que no comenzó en un aula teórica, sino en la necesidad vital de recuperar mi propio equilibrio físico, hormonal y mental. Comencé a estudiar, investigar y experimentar en mi propio organismo la íntima relación entre nutrición celular, sistema nervioso autónomo, inflamación crónica, movimiento consciente, descanso y presencia corporal.
              </p>
            </div>
            {/* CTAs */}
            <div className="mt-space-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-full font-title-md text-title-md text-on-primary bg-gradient-to-r from-secondary-container to-primary shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:shadow-[0_12px_28px_rgba(238,41,92,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Reserva tu sesión informativa gratuita</span>
              </button>
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-full font-title-md text-title-md text-on-surface bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-all"
                href="https://wa.me/34601317959"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: QUOTE BAND */}
      <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-2xl px-gutter relative overflow-hidden my-space-xl">
        <div className="absolute inset-0 bg-radial from-primary/20 via-transparent to-transparent pointer-events-none opacity-60" />
        <div className="w-full max-w-[900px] mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="font-headline-lg text-display-lg text-secondary-fixed-dim select-none leading-none mb-space-sm block">"</span>
          <blockquote className="font-headline-md text-headline-md md:text-headline-lg text-inverse-on-surface font-normal leading-relaxed tracking-tight mb-space-sm">
            «Y comprendí algo esencial: el cuerpo responde a cómo pensamos, respiramos, descansamos, nos alimentamos y nos relacionamos con nosotras mismas. Cuando el organismo recupera su coherencia, cambia la energía,{' '}
            <span className="font-script-accent text-script-accent text-secondary-fixed-dim whitespace-nowrap">cambia la frecuencia</span>.»
          </blockquote>
        </div>
      </section>

      {/* SECTION 4: PROOF STRIP & TESTIMONIAL */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter py-space-xl flex flex-col items-center">
        <div className="w-full max-w-[820px] grid grid-cols-1 md:grid-cols-3 gap-space-lg md:gap-0 bg-surface-container-lowest p-space-lg rounded-[28px] shadow-sm mb-space-xl">
          <div className="flex flex-col items-center text-center px-space-md">
            <span className="font-headline-lg text-display-lg text-primary font-semibold leading-tight">6+</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary mt-1">Años de Trayectoria</span>
          </div>
          <div className="flex flex-col items-center text-center px-space-md md:border-x md:border-outline-variant/30">
            <span className="font-headline-lg text-display-lg text-primary font-semibold leading-tight">100%</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary mt-1">Personalizado</span>
          </div>
          <div className="flex flex-col items-center text-center px-space-md">
            <div className="flex items-center gap-1 text-tertiary-container mb-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-headline-lg text-display-lg text-primary font-semibold leading-tight">5.0</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary mt-1">En Google Reviews</span>
          </div>
        </div>
        {/* Testimonial */}
        <div className="w-full max-w-[760px] bg-surface-container-lowest p-space-xl rounded-[24px] shadow-[0_8px_30px_-4px_rgba(104,83,84,0.07)] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-space-sm">
            <div className="flex text-tertiary-container">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold px-2 py-0.5 rounded-full bg-surface-container">
              Verificada en Google
            </span>
          </div>
          <p className="font-headline-sm text-headline-sm text-on-surface font-normal italic leading-relaxed mb-space-md max-w-xl">
            "Conocer a Caro me cambió la relación con la comida, con mi cuerpo y conmigo. Te escucha, te entiende y te guía sin juicios."
          </p>
          <span className="font-title-md text-title-md text-tertiary font-bold tracking-tight">
            — Carmen Moreno
          </span>
        </div>
      </section>

      {/* SECTION 5: CREDENTIALS */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter py-space-2xl">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <p className="font-label-md text-label-md uppercase tracking-[0.18em] text-tertiary font-bold mb-space-xs">
            Rigor Científico & Acreditación
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
            El Respaldo Detrás de la Transformación
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            He unido mi experiencia vital con una formación académica de excelencia para ofrecerte resultados medibles y sostenibles:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {[
            {
              icon: 'local_hospital',
              title: 'Medicina del Estilo de Vida',
              subtitle: 'Universidad Complutense de Madrid',
              desc: 'Formación avanzada en Nirakara Labs y Facultad de Medicina UCM sobre modificación de hábitos y reversión de factores de riesgo.',
            },
            {
              icon: 'biotech',
              title: 'Nutrición Ortomolecular',
              subtitle: 'UCAM (Univ. Católica de Murcia)',
              desc: 'Equilibrio celular de micronutrientes, aminoácidos, cofactores enzimáticos y modulación mitocondrial individualizada.',
            },
            {
              icon: 'self_improvement',
              title: 'Kundalini Yoga & Mindfulness',
              subtitle: 'Instructora Certificada IKYTA',
              desc: 'Técnicas de regulación del tono vagal, respiración diafragmática y coherencia cardíaca para calmar el sistema simpático.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-surface-container-lowest p-space-xl rounded-[24px] shadow-[0_8px_30px_-4px_rgba(104,83,84,0.07)] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">{card.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{card.title}</h3>
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold mb-space-md">{card.subtitle}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: METHOD */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter py-space-2xl">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <p className="font-label-md text-label-md uppercase tracking-[0.18em] text-tertiary font-bold mb-space-xs">
            Tu Ritual de Transformación
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
            El Método Código Diosa
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Mi método no es una dieta restrictiva: es una reprogramación integral para recuperar tu soberanía biológica en 3 fases secuenciales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {[
            { num: '01', badge: 'DIAGNÓSTICO', title: 'Alta Precisión Celular', desc: 'Evaluamos tu historia, tus hábitos y, si lo deseas, tus biomarcadores sanguíneos para saber exactamente dónde empezar.' },
            { num: '02', badge: 'PROTOCOLO', title: 'Nutrición & Longevidad', desc: 'Estructuramos tu plan nutricional antiinflamatorio, sincronización circadiana, fuerza progresiva y suplementación ortomolecular precisa, si es necesaria.' },
            { num: '03', badge: 'MENTORÍA', title: 'Acompañamiento 1 a 1', desc: '6 mentorías 1:1 con Carolina, mensajes directos por WhatsApp y ajustes continuos basados en tu evolución para sostener los cambios de por vida.' },
          ].map((card) => (
            <div key={card.num} className="bg-surface-container-lowest p-space-xl rounded-[28px] shadow-[0_8px_30px_-4px_rgba(104,83,84,0.07)] relative overflow-hidden flex flex-col justify-between group">
              <div className="mb-space-lg">
                <span className="font-headline-lg text-display-lg text-outline-variant/50 block select-none leading-none mb-space-sm group-hover:text-primary transition-colors">
                  {card.num}
                </span>
                <p className="font-label-md text-label-md uppercase tracking-wider text-tertiary font-bold mb-1">{card.badge}</p>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
              <div className="w-8 h-1 rounded-full bg-primary/20" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-2xl px-gutter relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary/25 via-transparent to-transparent pointer-events-none" />
        <div className="w-full max-w-[820px] mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg text-inverse-on-surface tracking-tight leading-tight mb-space-xl max-w-xl">
            ¿Lista para descifrar tu código biológico y vivir en coherencia?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-space-md mb-space-md w-full sm:w-auto">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded-full font-title-md text-title-md text-on-primary bg-gradient-to-r from-secondary-container to-primary shadow-[0_8px_24px_-2px_rgba(238,41,92,0.4)] hover:shadow-[0_12px_32px_rgba(238,41,92,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Aplicar al Método
            </button>
            <button
              onClick={() => onNavigatePlanes()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-full font-title-md text-title-md text-inverse-on-surface bg-transparent hover:bg-inverse-on-surface/10 transition-colors cursor-pointer"
            >
              Reservar Cita
            </button>
          </div>
          <a
            className="font-body-md text-body-md text-secondary-fixed-dim hover:text-on-primary underline underline-offset-4 transition-colors mb-space-sm cursor-pointer"
            onClick={() => onNavigatePlanes()}
            href="#"
          >
            Ver Planes & Precios
          </a>
          <p className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">
            Sin compromiso al aplicar
          </p>
        </div>
      </section>
    </div>
  );
};
