import { Testimonial, FaqItem, PillarItem, PracticalArea, DiagnosticCard } from './types';

export const PILLARS: PillarItem[] = [
  {
    id: 'pillar-b',
    letter: 'B',
    title: 'Biología & Epigenética',
    gradient: 'from-[#FF6161] to-[#EE295C]',
    accentHoverColor: 'group-hover:text-[#FF6161]',
    description: 'Comprende quién eres y cómo está cambiando tu cuerpo por dentro. Sin el ruido de dietas pasajeras. Datos analíticos avanzados, equilibrio hormonal y evaluación celular.'
  },
  {
    id: 'pillar-n',
    letter: 'N',
    title: 'Nutrición Ortomolecular',
    gradient: 'from-[#EE295C] to-[#FF6161]',
    accentHoverColor: 'group-hover:text-[#EE295C]',
    description: 'Audita lo que comes y sustituye la restricción por precisión celular. Estrategia nutricional que desinflama, apoya tu tiroides y reactiva la sensibilidad a la insulina.'
  },
  {
    id: 'pillar-m',
    letter: 'M',
    title: 'Movimiento & Fuerza',
    gradient: 'from-[#F69C05] to-[#FF6161]',
    accentHoverColor: 'group-hover:text-[#F69C05]',
    description: 'Construye tejido muscular metabólicamente activo adaptado a los 40+. Preserva tu masa ósea, estimula mitocondrias y mejora tu composición corporal sin agotamiento.'
  },
  {
    id: 'pillar-h',
    letter: 'H',
    title: 'Hábitos & Longevidad',
    gradient: 'from-[#C7A46B] to-[#EE295C]',
    accentHoverColor: 'group-hover:text-[#C7A46B]',
    description: 'Optimiza tu descanso circadiano, disuelve la niebla mental y regula el cortisol. Sistemas simples y consistentes que garantizan vitalidad para las próximas décadas.'
  }
];

export const PRACTICAL_AREAS: PracticalArea[] = [
  {
    id: 'area-cuerpo',
    title: 'Cuerpo & Metabolismo',
    status: 'active',
    statusLabel: 'Activo • Inscripciones Abiertas',
    description: 'Entrenamiento de fuerza inteligente. Nutrición epigenética sostenible. Desinflamación profunda y composición corporal sin reglas extremas ni pasar hambre.',
    bullets: [
      'Optimización hormonal y alivio de sofocos',
      'Pérdida de grasa visceral respetando masa muscular',
      'Salud digestiva y microbioma balanceado'
    ],
    icon: 'check_circle',
    ctaText: 'Ver Detalles & Dossier Completo'
  },
  {
    id: 'area-sueno',
    title: 'Cronobiología & Sueño',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    description: 'Restauración del ritmo circadiano, arquitectura del sueño REM y regulación avanzada del cortisol y la melatonina para un descanso reparador sin fármacos.',
    bullets: [
      'Higiene de luz matutina y sincronización celular',
      'Protocolos contra el despertar nocturno a las 3:00 AM',
      'Regulación del sistema nervioso parasimpático'
    ],
    icon: 'schedule',
    ctaText: 'Lista de Espera'
  },
  {
    id: 'area-mente',
    title: 'Mente & Bio-Longevidad',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    description: 'Eliminación de la niebla mental (brain fog), neuroprotección mitocondrial, enfoque ejecutivo y hábitos estratégicos para la mujer líder en su década de oro.',
    bullets: [
      'Noótropos naturales y alimentos pro-cognición',
      'Energía sostenida sin picos ni bajones de café',
      'Prevención de inflamación cerebral a largo plazo'
    ],
    icon: 'psychology',
    ctaText: 'Lista de Espera'
  }
];

export const DIAGNOSTIC_CARDS: DiagnosticCard[] = [
  {
    id: 'diag-1',
    icon: 'thermostat',
    title: 'Sofocos y cambios en el cuerpo',
    description: 'Sientes que tu cuerpo está cambiando —sofocos, cambios en la composición corporal, inflamación, digestión o recuperación— y quieres comprender qué está pasando para responder a esta nueva etapa con una estrategia personalizada.',
    badgeBg: 'bg-[#F8CFD5]/40',
    iconColor: 'text-[#FF6161]',
    borderColor: 'border-[#F8CFD5]'
  },
  {
    id: 'diag-2',
    icon: 'battery_charging_full',
    title: 'Pérdida de energía y vitalidad',
    description: 'Sientes que has perdido vitalidad y quieres volver a sentirte fuerte, activa y conectada con tu cuerpo, despertando cada mañana con entusiasmo real.',
    badgeBg: 'bg-amber-50',
    iconColor: 'text-[#F69C05]',
    borderColor: 'border-[#F69C05]/30'
  },
  {
    id: 'diag-3',
    icon: 'psychology_alt',
    title: 'Niebla mental y falta de enfoque',
    description: 'Notas más niebla mental, dificultad para concentrarte o cambios en tu claridad mental que antes no tenías y que interfieren en tu ritmo profesional y personal.',
    badgeBg: 'bg-[#F8CFD5]/40',
    iconColor: 'text-[#EE295C]',
    borderColor: 'border-[#F8CFD5]'
  },
  {
    id: 'diag-4',
    icon: 'self_improvement',
    title: 'Insomnio, estrés y cambios en el estado de ánimo',
    description: 'Tu sueño (insomnio, despertares), tu estrés o tu estado de ánimo han cambiado y quieres aprender a regularlos desde una estrategia integral y compasiva con tu fisiología en esta etapa.',
    badgeBg: 'bg-[#F8CFD5]/40',
    iconColor: 'text-[#FF6161]',
    borderColor: 'border-[#F8CFD5]'
  },
  {
    id: 'diag-5',
    icon: 'all_inclusive',
    title: 'Sostenibilidad a largo plazo',
    description: 'No quieres otra dieta restrictiva. Quieres un estilo de vida personalizado que puedas disfrutar, integrar y sostener con placer durante décadas.',
    badgeBg: 'bg-amber-50',
    iconColor: 'text-[#F69C05]',
    borderColor: 'border-[#F69C05]/30'
  },
  {
    id: 'diag-6',
    icon: 'supervised_user_circle',
    title: 'Acompañamiento clínico 1 a 1',
    description: 'Quieres dejar de hacerlo sola y contar con la experiencia de una profesional que integre tus datos, tu historia y tus objetivos para diseñar una ruta a tu medida.',
    badgeBg: 'bg-[#F8CFD5]/40',
    iconColor: 'text-[#EE295C]',
    borderColor: 'border-[#F8CFD5]'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Raquel Llorente',
    initials: 'RL',
    location: 'Madrid • Verificada en Google',
    program: 'Método Código Diosa',
    rating: 5,
    text: '“¡Carolina, una persona maravillosa! El resultado de este proceso para mí ha sido de 10. Los problemas de hinchazón están controlados y ya sé lo que debo comer. Me llevo una nueva forma de comer divertida y disfrutona, no una dieta. Antes llegaba muerta al final del día tomándome hasta 4 cafés, ¡y ahora me sobran baterías! He perdido 6kg de grasa de manera progresiva y sin pasar hambre.”'
  },
  {
    id: 'test-2',
    name: 'Carmen Moreno',
    initials: 'CM',
    location: 'Pozuelo • Verificada en Google',
    program: 'Acompañamiento 1 a 1',
    rating: 5,
    text: '“Conocer a Caro me cambió la relación con la comida, con mi cuerpo y conmigo. Llegué buscando mejorar mi alimentación y me encontré con un proceso mucho más profundo. Hoy me siento con más energía, más paz y una visión totalmente distinta de lo que significa nutrirme. Te escucha, te entiende y te guía sin juicios. La elegiría una y mil veces.”'
  },
  {
    id: 'test-3',
    name: 'Vanesa Carolina',
    initials: 'VC',
    location: 'Madrid • Verificada en Google',
    program: 'Optimización Metabólica',
    rating: 5,
    text: '“Mi experiencia con Carolina ha sido excelente. Su atención personalizada y recomendaciones valiosas han sido clave para mejorar mi metabolismo e ir alcanzando mis objetivos de salud en una etapa donde creía que nada funcionaba. ¡Altamente recomendado para cualquier mujer que busque un cambio genuino!”'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Carolina Barcellona está capacitada para diseñar un tratamiento adecuado para mí?',
    answerLead: 'Sí. Carolina Barcellona cuenta con más de 6 años de experiencia trabajando con mujeres y diseñando estrategias personalizadas de nutrición, salud y bienestar.',
    answer: 'Su formación integra nutrición clínica e integrativa, dietoterapia, nutrición ortomolecular, nutrigenética, nutrigenómica, epigenética, lifestyle medicine, coaching de hábitos y movimiento, con una especialización creciente en salud femenina y longevidad. Su enfoque no parte de protocolos genéricos: integra tu historia, tus objetivos y, cuando está indicado, tus datos biológicos para construir una estrategia personalizada.'
  },
  {
    id: 'faq-2',
    question: '¿Por qué el método Diosa es diferente?',
    answerLead: 'No es otra dieta, ni un protocolo genérico.',
    answer: 'El Método Código Diosa parte de ti: de tu historia, tu momento vital, tus objetivos, tus hábitos y de cómo está respondiendo tu cuerpo a los cambios que llegan después de los 40. Integramos nutrición, metabolismo, movimiento, descanso, gestión del estrés y cambio de hábitos. No se trata de hacer más ni de seguir otra lista rígida de reglas, sino de aprender a trabajar con tu biología.'
  },
  {
    id: 'faq-3',
    question: '¿En qué consiste el proceso del método Diosa?',
    answer: 'Es un proceso personalizado de 180 días (seis meses) para mujeres 40+ que quieren comprender los cambios de su cuerpo, mejorar su salud y construir hábitos que puedan sostener a largo plazo. Comenzamos con una evaluación profunda de tu situación actual, analíticas y objetivos, adaptando continuamente el plan al ritmo biológico de tu cuerpo.'
  },
  {
    id: 'faq-4',
    question: '¿Qué papel tiene el movimiento en el Método?',
    answer: 'El movimiento es una parte fundamental de la salud después de los 40. No se trata de entrenar más o terminar exhausta, sino de encontrar la combinación adecuada de fuerza, movilidad, actividad diaria y recuperación para favorecer tu composición corporal, preservar hueso y reactivar tu sensibilidad insulínica.'
  },
  {
    id: 'faq-5',
    question: '¿Puede ayudarme con los sofocos y cambios del climaterio?',
    answer: 'Sí. Los sofocos, sudoraciones nocturnas, alteraciones del sueño y cambios de ánimo forman parte de la fluctuación hormonal. Trabajamos sobre los factores de estilo de vida modulables para que atravieses esta transición con calma, recursos y máximo bienestar.'
  },
  {
    id: 'faq-6',
    question: '¿Tus planes están relacionados con empresas como Herbalife o multinivel?',
    answerLead: 'En absoluto.',
    answer: 'Mi método se basa exclusivamente en la ciencia clínica, la personalización individual y la sostenibilidad a largo plazo. No trabajo con suplementos de marketing multinivel ni con atajos artificiales sin evidencia.'
  },
  {
    id: 'faq-7',
    question: '¿Qué tipo de suplementos sueles recomendar?',
    answer: 'La suplementación no es el punto de partida ni una solución universal. Cuando está indicada, la selecciono de forma personalizada con vitaminas, minerales, ácidos grasos, aminoácidos o adaptógenos de alta pureza. Menos suplementos por rutina. Más precisión y propósito.'
  }
];

export const ASSETS = {
  // Remote fallback (white script, shown with invert treatment on cream).
  logo: 'https://carolinabarcellona.com/wp-content/uploads/2025/03/cropped-image00098.png',
  // Local-first logo (transparent PNG derived from client bicolor artwork).
  logoLocal: '/assets/Logo-C_barcellona_bicolor_2.png',
  heroBg: '/assets/carolina-hero.jpg',
  movementPhoto: '/assets/carolina-movement.jpg',
  vitalityPhoto: '/assets/carolina-vitality.jpg',
  portraitRedDress: '/assets/carolina-portrait.jpg'
};
