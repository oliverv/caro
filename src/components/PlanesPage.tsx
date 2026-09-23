import React, { useState } from 'react';

interface PlanesPageProps {
  onOpenBookingModal: () => void;
  onNavigateHome: () => void;
  onOpenProgramModal: () => void;
}

const TESTIMONIALS = [
  {
    name: 'Vanesa Carolina',
    tag: 'Metabolismo Optimizado',
    text: '«Mi experiencia con Carolina ha sido excelente. Su atención personalizada y recomendaciones valiosas han sido clave para mejorar mi metabolismo e ir alcanzando mis objetivos de salud.»',
  },
  {
    name: 'Carmen Moreno',
    tag: 'Paz Mental & Nutrición',
    text: '«Conocer a Caro me cambió la relación con la comida, con mi cuerpo y conmigo. Te escucha, te entiende y te guía sin juicios.»',
  },
  {
    name: 'Raquel Llorente',
    tag: 'Método Código Diosa',
    text: '«Me llevo una nueva forma de comer divertida y disfrutona, no una dieta. Antes llegaba muerta al final del día, ¡y ahora me sobran baterías!»',
  },
];

const FAQ_ITEMS = [
  {
    q: '¿Qué pasa después de aplicar?',
    a: 'Carolina revisa tu solicitud, te contacta por WhatsApp y, si el método encaja contigo, te envía el enlace de pago seguro.',
    defaultOpen: true,
  },
  {
    q: '¿Cómo son las 6 mentorías?',
    a: 'Son sesiones individuales por videollamada de 60 minutos espaciadas a lo largo de los 6 meses. Analizamos tus avances, ajustamos nutrición, suplementación y hábitos según la respuesta de tu cuerpo.',
    defaultOpen: false,
  },
  {
    q: '¿Me ayuda con los sofocos y los cambios del climaterio?',
    a: 'Absolutamente. El programa está diseñado expresamente para abordar la perimenopausia y menopausia, reequilibrando el sistema nervioso, reduciendo la inflamación sistémica y estabilizando la fluctuación estrogénica.',
    defaultOpen: false,
  },
  {
    q: '¿Necesito hacerme los informes de Axo o Epixlife?',
    a: 'No son obligatorios. Son herramientas complementarias de alta precisión para quienes deseen medir su bioquímica al detalle. Si prefieres no hacerlos, el método se adapta perfectamente con tu historia clínica y sintomatología.',
    defaultOpen: true,
  },
  {
    q: '¿Puedo pagarlo en cuotas?',
    a: 'Sí, dispones de la opción de 6 cuotas de 165 € al mes a través de tarjeta o mediante la integración con Klarna, sin complicaciones.',
    defaultOpen: false,
  },
  {
    q: '¿Es online o presencial?',
    a: 'Ofrecemos ambas modalidades. La inmensa mayoría de alumnas participan 100% online desde cualquier parte de España y Europa con mentorías individuales por videollamada y canal directo de WhatsApp. También disponemos de sesiones presenciales puntuales en España según disponibilidad.',
    defaultOpen: false,
  },
];

const FaqItem: React.FC<{ q: string; a: string; defaultOpen: boolean }> = ({ q, a, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden">
      <button
        className="w-full px-space-lg py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="font-title-lg text-title-lg text-on-surface font-medium">{q}</span>
        <span className={`material-symbols-outlined text-primary text-[24px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
};

export const PlanesPage: React.FC<PlanesPageProps> = ({
  onOpenBookingModal,
  onNavigateHome,
}) => {
  return (
    <div id="planes-page" className="w-full bg-surface text-on-surface">
      {/* 1. HEADER */}
      <section className="relative w-full overflow-hidden pb-space-2xl pt-space-xl">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-b from-primary-fixed/30 via-surface-container/20 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[1120px] mx-auto px-gutter pt-2 pb-8">
          <nav className="flex items-center gap-2 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
            <button onClick={onNavigateHome} className="hover:text-primary transition-colors cursor-pointer">Inicio</button>
            <span className="text-tertiary">/</span>
            <span className="text-on-surface font-semibold">El Método Código Diosa</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary-fixed/30 text-tertiary mb-space-md">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                <span className="font-label-sm text-label-sm uppercase tracking-[0.14em]">Programa activo · 180 días · Mujeres 40+</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-[1.08] mb-space-md">
                El Método Código Diosa
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-space-xl">
                Un proceso de 180 días para entender tu biología, bajar el ruido y reconstruir tu energía. No es otro programa de fitness.
              </p>
              <div className="flex flex-wrap items-center gap-space-md mb-space-xl w-full sm:w-auto">
                <button
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center justify-center font-title-md text-title-md text-on-primary bg-gradient-to-r from-secondary-container to-primary px-8 py-4 rounded-full shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:shadow-[0_12px_28px_rgba(238,41,92,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Aplicar al Método
                </button>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center font-title-md text-title-md text-on-surface bg-surface-container-lowest px-7 py-3.5 rounded-full shadow-sm hover:bg-surface-container-low transition-all"
                >
                  Ver cómo funciona
                </a>
              </div>
              <div className="w-full bg-surface-container-low/60 rounded-2xl px-space-md py-space-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                  {[
                    { icon: 'verified', text: '+6 años de exp.' },
                    { icon: 'groups', text: '6 mentorías 1:1' },
                    { icon: 'auto_awesome', text: '100% personalizado' },
                    { icon: 'star', text: '5.0 en Google' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">{item.icon}</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Hero Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-72 h-72 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none" />
              <div className="relative z-10 w-full max-w-[420px]">
                <div className="rounded-t-full rounded-b-[2.5rem] p-3 bg-surface-container-lowest shadow-[0_20px_48px_-12px_rgba(104,83,84,0.18)]">
                  <div className="rounded-t-full rounded-b-[2rem] overflow-hidden aspect-[3/4] relative bg-surface-container">
                    <img
                      alt="Carolina Barcellona"
                      className="w-full h-full object-cover object-center"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1Wor7YcVWQZGpXxF42E3sYgoHW_y37bxIcHP3PbXQ_FN8DG3kv_dlB9ULbC5u70JTu9rQr1w_o_ErEIoq_-F35POpo_K3EZb5ZJ8RMNGeBruHQc6xtJfOhO5XkBKeKwwn7AIPGfaRYKLsIE-hyRKAa1xIQLT-ynFnvfNspnMeXmvrKRVeEFzxRIr3Ys_brRlDiBjA0bKPuUTim68ulv2P-w_Y2FaQdxD-1V7w12HLQiSAoAh_L-stLis9jZ"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 right-4 z-20 flex items-center gap-2.5 bg-surface-container-lowest px-5 py-3 rounded-full shadow-[0_12px_28px_rgba(104,83,84,0.12)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-title-md text-title-md text-on-surface">180 Días de Transformación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="w-full py-space-2xl bg-surface-container-low">
        <div className="max-w-[1120px] mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.16em] mb-space-xs block">¿Te reconoces?</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
              Después de los 40, tu cuerpo habla un idioma nuevo.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Sofocos que llegan sin avisar. Noches en las que te despiertas a las 3:00 y ya no vuelves a dormir. Un ánimo que sube y baja sin motivo aparente. Energía que se apaga a media tarde y una niebla mental que antes no tenías.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {[
              { icon: 'thermostat', title: 'Sofocos', desc: 'Picos térmicos repentinos y desajuste vasorregulador que interrumpen tu jornada.', primary: true },
              { icon: 'bedtime', title: 'Insomnio y despertares', desc: 'Vigilia en fase REM a las 3:00 am por fluctuación de progesterona y cortisol.', primary: false },
              { icon: 'waves', title: 'Cambios en el estado de ánimo', desc: 'Oscilaciones emocionales inexplicables vinculadas al eje hormonal ovárico-cerebral.', primary: true },
              { icon: 'lens_blur', title: 'Niebla mental', desc: 'Pérdida de agudeza, foco disperso y lentitud cognitiva transitoria.', primary: false },
              { icon: 'battery_low', title: 'Cansancio y falta de energía', desc: 'Agotamiento mitocondrial que no cede con descanso pasivo ni café.', primary: true },
              { icon: 'vital_signs', title: 'Un cuerpo que cambia aunque hagas lo mismo', desc: 'Resistencia metabólica donde las dietas del pasado ya no surten efecto alguno.', primary: false },
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-space-md group-hover:bg-primary-container transition-colors ${item.primary ? 'bg-primary-fixed/40' : 'bg-surface-container-high'}`}>
                  <span className={`material-symbols-outlined group-hover:text-on-primary transition-colors text-[24px] ${item.primary ? 'text-primary' : 'text-tertiary'}`}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface mb-1">{item.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-space-xl">
            <p className="font-headline-sm text-headline-sm italic text-on-surface">
              "No es falta de voluntad. Tu biología necesita otra estrategia."
            </p>
          </div>
        </div>
      </section>

      {/* 3. NOT ANOTHER FITNESS PROGRAM */}
      <section className="w-full py-space-xl">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="bg-surface-container p-space-xl md:p-space-2xl rounded-xl text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="font-label-md text-label-md text-primary uppercase tracking-[0.16em] mb-2 block">Paradigma Biológico 40+</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">
                Esto no es un programa de fitness más
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Aquí no cuentas calorías ni te castigas con más ejercicio. Tu cuerpo tiene una jerarquía: primero se siente seguro, luego se equilibra… y solo después transforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE METHOD TIMELINE */}
      <section className="w-full py-space-2xl" id="como-funciona">
        <div className="max-w-[1120px] mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-2xl">
            <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.16em] mb-space-xs block">El método</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
              Eres única y tus necesidades también lo son
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Antes de proponerte nada, reunimos tus datos y tu historia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {[
              { num: 1, color: 'bg-tertiary', textColor: 'text-tertiary', badge: 'Semanas 0-2', title: 'Diagnóstico', desc: 'Reunimos tus datos y tu historia para personalizar cada paso.', sub: 'Evaluación Inicial', dataItems: [{ icon: 'assignment', label: 'Datos', val: 'Cuestionario, historia y evaluación' }, { icon: 'map', label: 'Protocolo', val: 'Tu mapa personal' }, { icon: 'person', label: 'Mentoría 1:1', val: 'Mentoría 1' }] },
              { num: 2, color: 'bg-secondary-container', textColor: 'text-secondary', badge: 'Meses 1-2', title: 'Fase 1 · Activación', desc: 'Primero bajamos el ruido: estrés, inflamación, desorden interno.', sub: 'Anti-inflamación', dataItems: [{ icon: 'monitoring', label: 'Datos', val: 'Sueño, estrés, digestión' }, { icon: 'restaurant', label: 'Protocolo', val: 'Nutrición, sueño y estrés' }, { icon: 'person', label: 'Mentoría 1:1', val: 'Mentoría 2' }] },
              { num: 3, color: 'bg-primary', textColor: 'text-primary', badge: 'Meses 3-4', title: 'Fase 2 · Reparación', desc: 'Reparamos: metabolismo, músculo, microbiota, estabilidad hormonal.', sub: 'Metabolismo & Masa Magra', dataItems: [{ icon: 'bar_chart', label: 'Datos', val: 'Metabolismo y composición corporal' }, { icon: 'fitness_center', label: 'Protocolo', val: 'Nutrición, ejercicio y soporte' }, { icon: 'groups', label: 'Mentoría 1:1', val: 'Mentorías 3 y 4' }] },
              { num: 4, color: 'bg-tertiary-container', textColor: 'text-tertiary', badge: 'Meses 5-6', title: 'Fase 3 · Optimización', desc: 'Afinamos: energía, longevidad, coherencia biológica y belleza.', sub: 'Soberanía Duradera', dataItems: [{ icon: 'balance', label: 'Datos', val: 'Comparación con punto de partida' }, { icon: 'all_inclusive', label: 'Protocolo', val: 'Ajustes finos que se sostienen' }, { icon: 'groups', label: 'Mentoría 1:1', val: 'Mentorías 5 y 6' }] },
            ].map((phase) => (
              <div key={phase.num} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-space-md">
                    <div className={`w-8 h-8 rounded-full ${phase.color} text-on-primary flex items-center justify-center font-bold text-xs shadow-sm`}>
                      {phase.num}
                    </div>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${phase.textColor} font-semibold`}>{phase.badge}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{phase.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">{phase.desc}</p>
                </div>
                <div className="space-y-space-sm bg-surface-container-low/50 rounded-lg p-3">
                  {phase.dataItems.map((di) => (
                    <div key={di.label} className="flex items-start gap-2">
                      <span className={`material-symbols-outlined ${phase.textColor} text-[18px] shrink-0 mt-0.5`}>{di.icon}</span>
                      <div className="min-w-0">
                        <span className={`font-label-sm text-label-sm ${phase.textColor} uppercase block`}>{di.label}</span>
                        <span className="font-body-sm text-body-sm text-on-surface block leading-tight">{di.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUOTE BAND */}
      <section className="w-full py-space-2xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-tertiary/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10">
          <p className="font-headline-lg text-headline-lg leading-tight tracking-tight">
            Tu cuerpo no necesita más teoría. Necesita{' '}
            <span className="font-script-accent text-primary-fixed text-5xl md:text-6xl normal-case block sm:inline mt-2 sm:mt-0">señales claras</span>, repetidas en el tiempo.
          </p>
        </div>
      </section>

      {/* 6. WHAT'S INCLUDED */}
      <section className="w-full py-space-2xl">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="text-center mb-space-xl">
            <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.16em] mb-space-xs block">Estructura Integral</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Todo lo que incluye tu plan
            </h2>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-xl md:p-space-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-md">
              {[
                '6 mentorías 1:1 con Carolina',
                'Programa personalizado basado en tu evaluación',
                'Plan nutricional adaptado',
                'Protocolo de suplementación, si es necesario',
                'Gestión del estrés, del sueño y del descanso',
                'Ejercicio físico adaptado a tu cronobiología',
                'Mensajes directos con Carolina por WhatsApp',
                'Plantillas de seguimiento y diario para ver tu evolución',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-on-tertiary-fixed text-[16px]">check</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-medium">{item}</span>
                </div>
              ))}
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-on-tertiary-fixed text-[16px]">check</span>
                </div>
                <span className="font-body-md text-body-md text-on-surface font-medium">Ajustes continuos del plan a medida que tu cuerpo responde</span>
              </div>
            </div>
            <div className="mt-space-xl pt-space-lg flex justify-center">
              <div className="bg-surface-container-low px-5 py-2.5 rounded-full inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px]">info</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">No incluye los tests opcionales de Axo Longevity y Epixlife: se contratan aparte.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="w-full py-space-2xl bg-surface-container-low">
        <div className="max-w-2xl mx-auto px-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-space-xl md:p-space-2xl shadow-md text-center relative overflow-hidden">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-md">
              Plan único
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
              Método Código Diosa · 180 días
            </h3>
            <div className="my-space-lg">
              <div className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
                6 × 165 €<span className="text-2xl font-normal text-on-surface-variant">/mes</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 font-medium">
                o 950 € en un pago
              </p>
            </div>
            <div className="space-y-space-sm max-w-md mx-auto text-left mb-space-xl">
              {['6 mentorías 1:1 con Carolina', 'Programa y plan nutricional personalizados', 'Soporte directo por WhatsApp'].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">{line}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mb-space-xl text-left">
              <div className="bg-surface-container-low p-3.5 rounded-xl">
                <span className="font-label-sm text-label-sm uppercase text-tertiary block font-semibold">Opcional</span>
                <span className="font-body-sm text-body-sm text-on-surface">Test de sangre Axo Longevity — 450 €</span>
              </div>
              <div className="bg-surface-container-low p-3.5 rounded-xl">
                <span className="font-label-sm text-label-sm uppercase text-tertiary block font-semibold">Opcional</span>
                <span className="font-body-sm text-body-sm text-on-surface">Informe Epixlife — Consultar a Carolina</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mb-space-lg opacity-70">
              {['STRIPE', 'KLARNA', 'VISA', 'MASTERCARD'].map((m) => (
                <span key={m} className="font-label-md text-label-md font-bold text-on-surface-variant tracking-wider">{m}</span>
              ))}
            </div>
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center justify-center font-title-md text-title-md text-on-primary bg-gradient-to-r from-secondary-container to-primary w-full py-4 rounded-full shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all mb-3 cursor-pointer"
            >
              Aplicar al Método
            </button>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Primero aplicas, después hablamos. Sin compromiso al aplicar.
            </p>
          </div>
        </div>
      </section>

      {/* 8. PARTNERS */}
      <section className="w-full py-space-xl bg-surface-container-low/60">
        <div className="max-w-[1120px] mx-auto px-gutter text-center">
          <p className="font-label-md text-label-md text-tertiary tracking-widest uppercase font-bold mb-space-xs">
            OFFICIAL PARTNERS • COMPLEMENTOS OPCIONALES
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-space-lg">
            No incluidos en el precio del plan. Precio y compra en sus webs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg max-w-3xl mx-auto mb-space-md text-left">
            {[
              { name: 'Axo Longevity', tag: 'Bioquímica', desc: 'Análisis de sangre preventivo con más de 100 biomarcadores.', price: '450 €', url: 'https://axolongevity.com', icon: 'biotech' },
              { name: 'Epixlife', tag: 'Epigenética', desc: 'Informe de optimización nutricional a partir de una muestra de cabello. Orientativo, no es un diagnóstico médico.', price: 'Consultar', url: '#', icon: 'spa' },
            ].map((partner) => (
              <div key={partner.name} className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{partner.name}</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container font-label-md text-label-md font-bold text-on-surface">{partner.tag}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">{partner.desc}</p>
                </div>
                <a
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-surface-container text-on-surface font-title-md text-title-md hover:bg-surface-container-high transition-colors"
                  href={partner.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{partner.name}</span>
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </a>
              </div>
            ))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant/70 max-w-lg mx-auto">
            Enlaces de afiliada: Contratando con el código #CARO recibes 50€ de descuento en tu membresía Axo Longevity.
          </p>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="max-w-[1120px] mx-auto px-gutter py-space-2xl text-center">
        <p className="font-label-md text-label-md text-tertiary tracking-widest uppercase font-bold mb-space-xs">
          HISTORIAS REALES • RESULTADOS REALES
        </p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xl">
          Qué dicen mis clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-lg text-left">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-surface-container-lowest p-7 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-tertiary">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
                    Verificada en Google
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-6">{t.text}</p>
              </div>
              <div>
                <p className="font-title-md text-title-md font-bold text-on-surface mb-2">— {t.name}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-2 font-title-md text-title-md text-primary font-semibold hover:underline"
          href="https://google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Leer reseñas en Google</span>
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
      </section>

      {/* 10. FAQ */}
      <section className="max-w-[840px] mx-auto px-gutter pb-space-2xl">
        <div className="text-center mb-space-xl">
          <p className="font-label-md text-label-md text-tertiary tracking-widest uppercase font-bold mb-space-xs">
            DUDAS FRECUENTES
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Preguntas sobre el plan</h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={faq.defaultOpen} />
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="w-full bg-[#201415] text-on-secondary py-space-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-secondary-container/10 pointer-events-none" />
        <div className="max-w-[840px] mx-auto px-gutter text-center relative z-10 flex flex-col items-center">
          <span className="font-label-md text-label-md text-tertiary-fixed tracking-widest uppercase font-bold mb-space-sm">
            TU NUEVA ETAPA COMIENZA AQUÍ
          </span>
          <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest mb-space-lg max-w-2xl leading-tight">
            Deja de adivinar. Empieza por entender tu cuerpo.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-space-md w-full max-w-md">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-title-md text-title-md font-bold text-center shadow-[0_8px_24px_-2px_rgba(238,41,92,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Aplicar al Método
            </button>
            <a
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-transparent text-surface-container-lowest font-title-md text-title-md font-semibold text-center hover:bg-surface-container-lowest/10 transition-colors shadow-sm"
              href="https://api.whatsapp.com/send/?phone=34601317959"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar llamada de 20 min
            </a>
          </div>
          <p className="font-body-sm text-body-sm text-surface-variant/70">
            Sin compromiso al aplicar • Pago seguro con Stripe • Klarna disponible
          </p>
        </div>
      </section>
    </div>
  );
};
