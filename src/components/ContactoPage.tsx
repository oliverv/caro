import React, { useState } from 'react';

interface ContactoPageProps {
  onNavigateHome: () => void;
  onNavigatePrivacy: () => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({ onNavigateHome, onNavigatePrivacy }) => {
  const [submitted, setSubmitted] = useState(false);
  const [experienciaPrevia, setExperienciaPrevia] = useState<'no' | 'si'>('no');
  const [motivo, setMotivo] = useState('salud');
  const [chips, setChips] = useState<Record<string, boolean>>({
    'Digestión / Hinchazón': true,
    'Peso / Grasa visceral': false,
    'Energía / Fatiga': true,
    'Calidad del Sueño': false,
    'Inflamación / Dolores': false,
    'Claridad Mental': false,
    'Equilibrio Hormonal': true,
    'Hábitos Sostenibles': false,
  });

  const toggleChip = (key: string) => {
    setChips((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contacto-page" className="w-full bg-surface text-on-surface">
      {/* SECTION 1: HEADER */}
      <section className="w-full max-w-7xl mx-auto px-gutter pt-space-xl pb-space-2xl text-center flex flex-col items-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-secondary-container/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <nav aria-label="Migas de pan" className="flex items-center gap-2 mb-space-md">
            <button onClick={onNavigateHome} className="font-body-sm text-body-sm text-outline hover:text-primary transition-colors cursor-pointer">Inicio</button>
            <span className="text-outline-variant font-body-sm">/</span>
            <span className="font-body-sm text-body-sm text-primary font-medium">Contacto</span>
          </nav>
          <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase mb-space-sm">
            Nutrissia Wellness • Pozuelo / Madrid
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold mb-space-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Consulta Inicial sin coste
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mb-space-xs">
            Contacto
          </h1>
          <p className="font-headline-sm text-headline-sm text-tertiary italic font-normal mb-space-md">
            Carolina Barcellona — Nutrissia Wellness
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Cuéntame tu momento vital y tus objetivos. Responderé personalmente en menos de 24 horas laborables.
          </p>
        </div>
      </section>

      {/* SECTION 2: THREE CONTACT ROUTES */}
      <section className="w-full max-w-7xl mx-auto px-gutter mb-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {[
            {
              step: 'Ruta 01 • Integral',
              icon: 'arrow_outward',
              title: 'Aplicar al Método',
              desc: 'Para empezar el Método Código Diosa de 180 días. Rellenas un formulario y Carolina te contacta.',
              ctaLabel: 'Aplicar al Método',
              ctaPrimary: true,
              ctaHref: '#cuestionario',
              ctaIcon: 'arrow_forward',
            },
            {
              step: 'Ruta 02 • Diagnóstico',
              icon: 'calendar_month',
              title: 'Reservar llamada de 20 min',
              desc: 'Una llamada de 20 minutos para analizar tu perfil biológico, revisar tus prioridades y determinar la mejor ruta para ti.',
              ctaLabel: 'Reservar Cita',
              ctaPrimary: false,
              ctaHref: '#cuestionario',
              ctaIcon: 'event_available',
            },
            {
              step: 'Ruta 03 • Inmediata',
              icon: 'chat',
              title: 'Escribir por WhatsApp',
              desc: 'Para una duda rápida o una consulta directa. Responderemos con discreción y celeridad clínica.',
              ctaLabel: 'Escribir por WhatsApp',
              ctaPrimary: false,
              ctaHref: 'https://wa.me/34601317959',
              ctaIcon: 'chat',
              external: true,
            },
          ].map((route) => (
            <div key={route.title} className="group relative flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/5 rounded-bl-[80px] pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-space-lg text-tertiary group-hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[24px]">{route.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm text-tertiary tracking-wider uppercase block mb-1">{route.step}</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">{route.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-xl">{route.desc}</p>
              </div>
              <a
                className={`inline-flex items-center justify-center w-full rounded-full px-space-lg py-3 font-title-md text-title-md transition-all ${
                  route.ctaPrimary
                    ? 'bg-gradient-to-r from-secondary-container to-primary text-on-primary shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:shadow-[0_12px_28px_rgba(238,41,92,0.45)] hover:scale-[1.01] active:scale-[0.99]'
                    : 'bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low active:scale-[0.99]'
                }`}
                href={route.ctaHref}
                target={route.external ? '_blank' : undefined}
                rel={route.external ? 'noopener noreferrer' : undefined}
              >
                <span>{route.ctaLabel}</span>
                <span className="material-symbols-outlined ml-2 text-[20px]">{route.ctaIcon}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MAIN TWO-COLUMN AREA */}
      <section className="w-full max-w-7xl mx-auto px-gutter mb-space-2xl" id="cuestionario">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* LEFT: FORM */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-lg shadow-sm p-space-lg sm:p-space-2xl">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary-container flex items-center justify-center text-on-primary shadow-lg mb-space-lg">
                  <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-sm">
                  ¡Formulario Enviado con Éxito!
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-xl max-w-lg">
                  Gracias por tu confianza. He recibido tus respuestas y me pondré en contacto contigo en menos de 24 horas laborables con una valoración personalizada y confidencial.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-secondary-container to-primary px-space-lg py-3.5 font-title-md text-title-md text-on-primary shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
                  href="https://wa.me/34601317959?text=Hola%20Carolina,%20acabo%20de%20enviar%20mi%20cuestionario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  Confirmar también por WhatsApp
                </a>
                <button
                  className="mt-space-md inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">replay</span>
                  Enviar otro formulario
                </button>
              </div>
            ) : (
              <>
                <div className="max-w-2xl mb-space-xl">
                  <div className="flex items-center gap-2 mb-space-xs">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase">Formulario Confidencial</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs">
                    Cuestionario de Valoración Inicial
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Si prefieres escribirme antes de aplicar, este cuestionario me ayuda a orientarte.
                  </p>
                </div>
                <form className="flex flex-col gap-space-xl" onSubmit={handleSubmit}>
                  {/* A: TUS DATOS */}
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs">
                      <span className="font-label-md text-label-md text-tertiary tracking-wider uppercase font-bold">A) Tus Datos</span>
                      <span className="font-label-sm text-label-sm text-outline">* Campos requeridos</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      {[
                        { id: 'nombre', label: 'Nombre Completo *', type: 'text', placeholder: 'Ej. María Gómez' },
                        { id: 'email', label: 'Correo Electrónico *', type: 'email', placeholder: 'maria@ejemplo.com' },
                        { id: 'telefono', label: 'Teléfono / WhatsApp *', type: 'tel', placeholder: '+34 600 000 000' },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-1.5">
                          <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor={field.id}>
                            {field.label}
                          </label>
                          <input
                            className="w-full h-12 px-4 rounded-md bg-surface-container-low text-on-surface font-body-md placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_3px_rgba(226,29,84,0.15)] transition-all"
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            required
                            type={field.type}
                          />
                        </div>
                      ))}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="nacimiento">
                          Fecha de Nacimiento *
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-md bg-surface-container-low text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_3px_rgba(226,29,84,0.15)] transition-all"
                          id="nacimiento"
                          name="nacimiento"
                          required
                          type="date"
                        />
                      </div>
                    </div>
                  </div>

                  {/* B: TU OBJETIVO */}
                  <div className="flex flex-col gap-space-lg pt-space-md">
                    <span className="font-label-md text-label-md text-tertiary tracking-wider uppercase font-bold">B) Tu Objetivo</span>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">¿Cuál es tu motivo principal de consulta?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                        {[
                          { val: 'salud', label: 'Quiero mejorar mi salud' },
                          { val: 'peso', label: 'Bajar de peso y grasa' },
                          { val: 'vitalidad', label: 'Verme y sentirme mejor' },
                        ].map((opt) => (
                          <label
                            key={opt.val}
                            className={`cursor-pointer flex items-center justify-center p-3 rounded-full font-title-md text-body-md transition-all text-center ${
                              motivo === opt.val
                                ? 'bg-surface-container text-primary font-semibold shadow-sm'
                                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                            }`}
                          >
                            <input
                              className="sr-only"
                              name="motivo_principal"
                              type="radio"
                              value={opt.val}
                              checked={motivo === opt.val}
                              onChange={() => setMotivo(opt.val)}
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">Aspectos prioritarios que deseas mejorar:</label>
                        <span className="font-label-sm text-label-sm text-tertiary">Selecciona los que apliquen</span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {Object.entries(chips).map(([key, active]) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleChip(key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full font-body-sm text-body-sm transition-all ${
                              active
                                ? 'bg-surface-container text-primary font-bold shadow-sm'
                                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[16px]">{active ? 'check' : 'add'}</span>
                            {key}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* C: TU HISTORIA */}
                  <div className="flex flex-col gap-space-lg pt-space-md">
                    <span className="font-label-md text-label-md text-tertiary tracking-wider uppercase font-bold">C) Tu Historia</span>
                    <div className="flex flex-col gap-2.5">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">¿Has probado antes otros métodos, dietas o terapias?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                        {[
                          { val: 'si' as const, label: 'Sí, he probado antes' },
                          { val: 'no' as const, label: 'No, es mi primera vez' },
                        ].map((opt) => (
                          <label
                            key={opt.val}
                            className={`cursor-pointer flex items-center gap-3 p-4 rounded-md transition-all ${
                              experienciaPrevia === opt.val
                                ? 'bg-surface-container text-primary font-semibold'
                                : 'bg-surface-container-low hover:bg-surface-container'
                            }`}
                          >
                            <input
                              className="w-4 h-4 text-primary focus:ring-0"
                              name="experiencia_previa"
                              type="radio"
                              value={opt.val}
                              checked={experienciaPrevia === opt.val}
                              onChange={() => setExperienciaPrevia(opt.val)}
                            />
                            <span className="font-title-md text-body-md text-on-surface">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                      {experienciaPrevia === 'si' && (
                        <textarea
                          className="w-full p-4 rounded-md bg-surface-container-low text-on-surface font-body-md placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_3px_rgba(226,29,84,0.15)] transition-all resize-y mt-2"
                          placeholder="¿Qué funcionó y qué no funcionó en esas experiencias?"
                          rows={2}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="mensaje">
                        Mensaje Adicional o Síntomas Particulares (opcional)
                      </label>
                      <textarea
                        className="w-full p-4 rounded-md bg-surface-container-low text-on-surface font-body-md placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_3px_rgba(226,29,84,0.15)] transition-all resize-y"
                        id="mensaje"
                        placeholder="Cuéntame cualquier detalle de tu día a día, horarios o sensaciones..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* D: CHECKBOXES LEGALES */}
                  <div className="flex flex-col gap-3 pt-space-xs">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input className="mt-1 w-4 h-4 text-primary rounded focus:ring-0" required type="checkbox" defaultChecked />
                      <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Acepto el tratamiento de mis datos de acuerdo con la{' '}
                        <button type="button" onClick={onNavigatePrivacy} className="text-primary underline font-medium cursor-pointer">
                          Política de Privacidad
                        </button>
                        . Tus datos están seguros y nunca serán cedidos a terceros.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input className="mt-1 w-4 h-4 text-primary rounded focus:ring-0" required type="checkbox" defaultChecked />
                      <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Acepto que Carolina trate los datos de salud que comparto en este formulario para responder a mi consulta.
                      </span>
                    </label>
                  </div>

                  {/* E: SUBMIT */}
                  <div className="pt-space-xs">
                    <button
                      className="w-full flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-secondary-container to-primary px-space-xl py-4 font-title-md text-title-md text-on-primary shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:shadow-[0_12px_28px_rgba(238,41,92,0.45)] hover:scale-[1.005] active:scale-[0.99] transition-all cursor-pointer"
                      type="submit"
                    >
                      <span>Enviar Consulta Inicial a Carolina</span>
                      <span className="material-symbols-outlined text-[22px]">send</span>
                    </button>
                  </div>

                  {/* F: TRUST BADGES */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-sm">
                    {[
                      { icon: null, text1: '★ 5.0', text2: 'en Google' },
                      { icon: 'timer', text1: null, text2: '< 24 h laborables' },
                      { icon: 'verified_user', text1: null, text2: 'Sin compromiso' },
                    ].map((badge, i) => (
                      <div key={i} className="flex items-center justify-center gap-2 p-2.5 rounded-full bg-surface-container-low text-on-surface">
                        {badge.icon && <span className="material-symbols-outlined text-primary text-[18px]">{badge.icon}</span>}
                        {badge.text1 && <span className="text-tertiary font-bold text-sm leading-none">{badge.text1}</span>}
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">{badge.text2}</span>
                      </div>
                    ))}
                  </div>
                </form>
              </>
            )}
          </div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-28">
            {/* Studio Card */}
            <div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase font-bold">Ubicación Central</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">Madrid</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Studio & Consultas</h3>
              <div className="relative w-full h-44 rounded-md overflow-hidden bg-surface-container flex items-center justify-center shadow-inner"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcNX2h9nm7eRAWu19fzFsPSNNdN828oTIwwB61lrZwv1ypZC1YxTvBRB9gNEQlSARYmf7GnVG_dRhPq45Rb6dup0EM3Eh4u5Kx89jfb7He-skGleNivFVqOBs4S1KcF7ZJM7eAfX803DxdRWP6yEbB8zQhpKBIrMPfCms4CsZSOfyWyIzAFYdQ9rU8uwSjatUDOBpyytJfTlqxkXNZicPlI9L6M9cjB-gh5YD0CKMtNZyA6lXXY0G_ow')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-surface-container-lowest/60 backdrop-blur-[2px]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg text-on-primary">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <span className="mt-1 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold shadow-sm">
                    Biolifestyle Studio Pozuelo
                  </span>
                </div>
                <a
                  className="absolute bottom-2 right-2 z-10 px-3 py-1 rounded-full bg-surface-container-lowest/90 text-on-surface text-label-sm font-semibold hover:bg-surface-container-lowest shadow-sm flex items-center gap-1"
                  href="https://maps.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Google Maps</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </div>
              <div className="flex flex-col gap-space-md pt-space-xs">
                {[
                  { icon: 'location_on', label: 'Dirección', val: 'Calle Camino de los Bonetes 2, 28250 Madrid (Pozuelo de Alarcón)' },
                  { icon: 'schedule', label: 'Horario de Atención', val: 'Lunes a Jueves: 9:00 - 17:00\nViernes: Evaluaciones online con cita previa' },
                  { icon: 'phone', label: 'Teléfono / WhatsApp', val: '+34 601 31 79 59', href: 'tel:+34601317959' },
                  { icon: 'mail', label: 'Correo Electrónico', val: 'info@nutrissiawellness.com', href: 'mailto:info@nutrissiawellness.com' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center shrink-0 text-primary">
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors font-medium break-all">
                          {item.val}
                        </a>
                      ) : (
                        <span className="font-body-sm text-body-sm text-on-surface leading-snug whitespace-pre-line">{item.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="mt-2 inline-flex items-center justify-center w-full rounded-full bg-surface-container-lowest px-4 py-2.5 font-title-md text-body-md text-on-surface shadow-sm hover:bg-surface-container-low active:scale-[0.99] transition-all"
                href="https://wa.me/34601317959"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined mr-2 text-[20px] text-tertiary">chat</span>
                Escribir por WhatsApp
              </a>
            </div>

            {/* Modalities Card */}
            <div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
              <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase font-bold">Modalidades</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">¿Cómo prefieres que hablemos?</h3>
              <div className="flex flex-col gap-space-md">
                {[
                  { icon: 'videocam', title: 'Videollamada Online 1 a 1', desc: 'Vía Google Meet o Zoom. Desde cualquier país.' },
                  { icon: 'spa', title: 'Presencial en Pozuelo / Madrid', desc: 'En Biolifestyle Studio. Análisis presencial.' },
                  { icon: 'forum', title: 'Evaluación Exprés por WhatsApp', desc: 'Audio y revisión preliminar de analíticas.' },
                ].map((m) => (
                  <div key={m.title} className="flex items-start gap-3.5 p-3 rounded-md bg-surface-container-low">
                    <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 text-tertiary shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-body-md text-on-surface font-semibold">{m.title}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Card */}
            <div className="bg-surface-container-low rounded-lg shadow-sm p-space-lg flex flex-col gap-space-sm relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary-container/10 pointer-events-none" />
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">public</span>
                <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase font-bold">Atención Internacional</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">¿Vives fuera de Madrid o España?</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Muchas de mis clientas realizan el método de forma 100% online por videoconferencia, desde cualquier lugar.
              </p>
              <div className="pt-2 flex items-center gap-2 text-primary font-title-md text-body-sm font-semibold">
                <span>Soporte en español, inglés y francés</span>
                <span className="material-symbols-outlined text-[16px]">language</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-2xl relative overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10 flex flex-col items-center">
          <span className="font-label-md text-label-md text-tertiary-fixed tracking-[0.25em] uppercase mb-space-sm">
            Decisión Consciente
          </span>
          <h2 className="font-display-lg text-display-lg text-inverse-on-surface mb-space-sm tracking-tight">
            Es tu hora de empezar.
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant/90 max-w-xl mx-auto mb-space-xl leading-relaxed">
            No esperes a que el cansancio o los cambios hormonales decidan por ti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-md">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary-container to-primary px-space-xl py-3.5 font-title-md text-title-md text-on-primary shadow-[0_8px_24px_-2px_rgba(238,41,92,0.45)] hover:shadow-[0_12px_28px_rgba(238,41,92,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              href="#cuestionario"
            >
              <span>Aplicar al Método</span>
              <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent px-space-lg py-3.5 font-title-md text-title-md text-inverse-on-surface hover:bg-surface-variant/10 active:scale-[0.98] transition-all"
              href="#cuestionario"
            >
              Reservar llamada de 20 min
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
