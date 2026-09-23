export type Language = 'es' | 'en' | 'fr';

export interface TranslationSchema {
  nav: {
    inicio: string;
    sobreMi: string;
    planes: string;
    programasEspecializados: string;
    diosaProgramTitle: string;
    diosaProgramDesc: string;
    suenoProgramTitle: string;
    suenoProgramDesc: string;
    menteProgramTitle: string;
    menteProgramDesc: string;
    calculadora: string;
    evidencia: string;
    testimonios: string;
    faq: string;
    descubreMetodo: string;
    reservaCita: string;
    navegacionPrincipal: string;
    autodiagnostico: string;
    atencionDirecto: string;
    solicitarEvaluacion: string;
    studioLocation: string;
    idioma: string;
    blog: string;
    contacto: string;
    herramientas: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaCalculator: string;
    trustYears: string;
    trustEpigenetics: string;
    trustPersonalized: string;
  };
  audioWelcome: {
    badge: string;
    title: string;
    subtitle: string;
    play: string;
    pause: string;
    transcriptBtn: string;
    hideTranscript: string;
    transcriptText: string;
    duration: string;
  };
  pillars: {
    badge: string;
    title: string;
    description: string;
    items: {
      id: string;
      letter: string;
      title: string;
      gradient: string;
      accentHoverColor: string;
      description: string;
    }[];
  };
  practicalAreas: {
    title: string;
    subtitle: string;
    areas: {
      id: string;
      title: string;
      status: 'active' | 'upcoming';
      statusLabel: string;
      description: string;
      bullets: string[];
      icon: string;
      ctaText: string;
    }[];
  };
  whoIsItFor: {
    badge: string;
    title: string;
    description: string;
    tags: string[];
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    ageLabel: string;
    weightLabel: string;
    activityLabel: string;
    activityOptions: {
      sedentary: string;
      moderate: string;
      strength: string;
    };
    goalLabel: string;
    goalOptions: {
      metabolism: string;
      muscle: string;
      hormones: string;
    };
    calculateBtn: string;
    resultsTitle: string;
    proteinTarget: string;
    proteinPerMeal: string;
    trainingTarget: string;
    circadianWindow: string;
    biomarkersTitle: string;
    consultCarolinaBtn: string;
    copyBtn: string;
    copiedMsg: string;
    disclaimer: string;
  };
  diagnosticSection: {
    badge: string;
    title: string;
    subtitle: string;
    bannerPrompt: string;
    bannerBtn: string;
    cards: {
      id: string;
      icon: string;
      title: string;
      description: string;
      badgeBg: string;
      iconColor: string;
      borderColor: string;
    }[];
  };
  diagnosticModal: {
    title: string;
    stepOf: string;
    previous: string;
    resultBadge: string;
    resultTitle: string;
    resultStateLabel: string;
    nextStepTitle: string;
    nextStepDesc: string;
    whatsappCta: string;
    retakeBtn: string;
    levels: {
      low: {
        level: string;
        color: string;
        summary: string;
        pillar: string;
      };
      medium: {
        level: string;
        color: string;
        summary: string;
        pillar: string;
      };
      high: {
        level: string;
        color: string;
        summary: string;
        pillar: string;
      };
    };
    questions: {
      id: string;
      category: string;
      title: string;
      options: { text: string; score: number; note: string }[];
    }[];
  };
  bioStory: {
    heading: string;
    badge: string;
    specialistTitle: string;
    title: string;
    para1: string;
    para2: string;
    statYears: string;
    statYearsLabel: string;
    statPersonal: string;
    statPersonalLabel: string;
    statRating: string;
    statRatingLabel: string;
    contactBtn: string;
    trajectoryBtn: string;
  };
  clinicalEvidence: {
    badge: string;
    title: string;
    subtitle: string;
    cases: {
      id: string;
      clientProfile: string;
      age: number;
      symptoms: string;
      intervention: string;
      duration: string;
      markers: {
        name: string;
        before: string;
        after: string;
        unit: string;
        status: string;
      }[];
      doctorNote: string;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    googleLink: string;
    items: {
      id: string;
      name: string;
      initials: string;
      location: string;
      program: string;
      rating: number;
      text: string;
    }[];
  };
  faqs: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      question: string;
      answerLead?: string;
      answer: string;
    }[];
  };
  ctaSection: {
    badge: string;
    title: string;
    description: string;
    whatsappBtn: string;
    calendlyBtn: string;
    bookingBtn: string;
    locationNote: string;
  };
  collaborations: {
    title: string;
    partners: string[];
  };
  footer: {
    brandDesc: string;
    location: string;
    exploreTitle: string;
    inicio: string;
    sobreMi: string;
    metodoDiosa: string;
    testEvaluacion: string;
    calculadora: string;
    casosExito: string;
    preguntasFrecuentes: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterBtn: string;
    newsletterSuccess: string;
    paymentMethods: string;
    allRights: string;
    legalNotice: string;
    privacyPolicy: string;
    cookiePolicy: string;
  };
  programModal: {
    badge: string;
    title: string;
    subtitle: string;
    structureTitle: string;
    phases: {
      number: number;
      title: string;
      description: string;
      color: string;
    }[];
    includedTitle: string;
    includedItems: string[];
    ctaWhatsapp: string;
    backBtn: string;
  };
  waitlistModal: {
    badge: string;
    desc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    goalLabel: string;
    goalPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  trajectoryModal: {
    title: string;
    specialist: string;
    sectionTitle: string;
    intro: string;
    items: {
      icon: string;
      color: string;
      bold: string;
      desc: string;
    }[];
    outro: string;
    closeBtn: string;
  };
  bookingModal: {
    badge: string;
    title: string;
    subtitle: string;
    modalityLabel: string;
    modalities: {
      online: { title: string; desc: string };
      inPerson: { title: string; desc: string };
      express: { title: string; desc: string };
    };
    dateLabel: string;
    timeLabel: string;
    priorityLabel: string;
    priorityOptions: string[];
    recentLabsLabel: string;
    recentLabsOptions: { yes: string; no: string; inProgress: string };
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    confirmBtn: string;
    successTitle: string;
    successDesc: string;
    addToCalendarBtn: string;
    whatsappConfirmBtn: string;
    closeBtn: string;
  };
  floatingWhatsapp: {
    tooltip: string;
    aria: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      planes: 'Planes',
      programasEspecializados: 'Programas Especializados',
      diosaProgramTitle: 'Código Diosa 180 Días',
      diosaProgramDesc: 'Metabolismo, equilibrio hormonal y longevidad celular.',
      suenoProgramTitle: 'Cronobiología & Sueño',
      suenoProgramDesc: 'Ritmo circadiano y arquitectura de descanso.',
      menteProgramTitle: 'Mente & Bio-Longevidad',
      menteProgramDesc: 'Claridad mental y bio-hacking para mujeres 40+.',
      calculadora: 'Calculadora 40+',
      evidencia: 'Evidencia Clínica',
      testimonios: 'Casos de Éxito',
      faq: 'Preguntas Frecuentes',
      descubreMetodo: 'Descubre mi método',
      reservaCita: 'Reservar Cita',
      navegacionPrincipal: 'Navegación Principal',
      autodiagnostico: 'Autodiagnóstico 40+',
      atencionDirecto: 'Atención & Contacto Directo',
      solicitarEvaluacion: 'Solicitar Evaluación Inicial',
      studioLocation: 'Biolifestyle Studio • Pozuelo de Alarcón / Madrid',
      idioma: 'Idioma',
      blog: 'Blog',
      contacto: 'Contacto',
      herramientas: 'Herramientas'
    },
    hero: {
      badge: "Women's Health & Longevity para mujeres 40+",
      titleLine1: 'Tu cuerpo cambia después de los 40.',
      titleHighlight: 'Tu estrategia también.',
      subtitle: 'Nutrición Epigenética: bio-hackea tus genes, recupera tu peso ideal y libera tu brillo interior.',
      description: 'Para mujeres que quieren entender su biología, optimizar su salud y vivir esta etapa con más energía, fuerza y bienestar duradero.',
      ctaPrimary: 'Descubre mi método',
      ctaSecondary: 'Únete a la revolución',
      ctaCalculator: 'Calcula tus Necesidades 40+',
      trustYears: '+6 Años Especializada',
      trustEpigenetics: 'Nutrición Epigenética',
      trustPersonalized: 'Enfoque Clínico 100% Personalizado'
    },
    audioWelcome: {
      badge: 'Mensaje de Voz',
      title: 'Unas palabras de Carolina para ti',
      subtitle: 'Escucha por qué el enfoque genérico no funciona después de los 40 y cómo la nutrición celular marca la diferencia.',
      play: 'Reproducir mensaje de bienvenida',
      pause: 'Pausar mensaje',
      transcriptBtn: 'Ver transcripción',
      hideTranscript: 'Ocultar transcripción',
      transcriptText: '«Hola, soy Carolina Barcellona. Si estás aquí es probable que sientas que las cosas que antes te funcionaban para mantenerte enérgica o en tu peso ya no dan resultado. No es tu culpa: tu biología, tus mitocondrias y tus receptores hormonales han cambiado. En mi consulta no imponemos sacrificios ni dietas fotocopiadas; analizamos tu epigenética y tu estilo de vida para diseñar un sistema sostenible que te devuelva la fuerza y la serenidad. Bienvenida a tu nueva etapa.»',
      duration: '0:25 min'
    },
    pillars: {
      badge: 'Marco Arquitectónico de Salud',
      title: 'El Método Código Diosa',
      description: 'Un marco estructurado para el crecimiento y optimización biológica. Te ayuda a construir claridad, disciplina metabólica y vitalidad sostenida en tu cuerpo y descanso. No motivación pasajera: sistemas que funcionan y se multiplican con el tiempo.',
      items: [
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
      ]
    },
    practicalAreas: {
      title: 'Aplicado en 3 Áreas Prácticas',
      subtitle: 'Un protocolo tripartito diseñado para armonizar tu biología, tu energía vital y tu longevidad mental.',
      areas: [
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
      ]
    },
    whoIsItFor: {
      badge: 'Filosofía & Longevidad',
      title: '¿Para quién es?',
      description: 'Para mujeres de alto rendimiento y conciencia biológica que buscan estructura, no ruido. Que están cansadas de empezar de cero con dietas genéricas. Que están listas para aplicar, probar, ajustar y prosperar. No es solo un programa: es un sistema que usarás de por vida.',
      tags: ['Biología femenina 40+', 'Sin restricciones agresivas', 'Sostenible para siempre']
    },
    calculator: {
      badge: 'Herramienta de Precisión Celular',
      title: 'Calculadora de Longevidad & Proteína 40+',
      subtitle: 'Tras los 40, la resistencia anabólica exige mayor precisión en aminoácidos y estímulo de fuerza. Calcula tus requerimientos óptimos.',
      ageLabel: 'Edad (Años)',
      weightLabel: 'Peso actual (kg)',
      activityLabel: 'Nivel de actividad física',
      activityOptions: {
        sedentary: 'Sedentaria (Poco o ningún ejercicio)',
        moderate: 'Moderada (Caminatas / Yoga 2-3 días)',
        strength: 'Activa / Fuerza (Fuerza o deporte 3-5 días)'
      },
      goalLabel: 'Prioridad principal',
      goalOptions: {
        metabolism: 'Recomposición corporal y grasa visceral',
        muscle: 'Prevención de sarcopenia y fuerza ósea',
        hormones: 'Equilibrio hormonal y energía mitocondrial'
      },
      calculateBtn: 'Calcular mi Estrategia Biológica',
      resultsTitle: 'Tus Parámetros Fisiológicos Óptimos',
      proteinTarget: 'Objetivo de Proteína Diaria',
      proteinPerMeal: 'Umbral de Leucina por Comida',
      trainingTarget: 'Estímulo de Fuerza Semanal',
      circadianWindow: 'Ventana Nutricional Circadiana',
      biomarkersTitle: 'Biomarcadores Clave a Revisar en Sangre',
      consultCarolinaBtn: 'Enviar este perfil a Carolina por WhatsApp',
      copyBtn: 'Copiar Resultados',
      copiedMsg: '¡Copiado en el portapapeles!',
      disclaimer: 'Cálculo de referencia nutricional basado en evidencia clínica ortomolecular para mujeres 40+. No sustituye el diagnóstico médico individual.'
    },
    diagnosticSection: {
      badge: 'Autodiagnóstico',
      title: '¿Por qué estás aquí?',
      subtitle: 'Reconocer las señales de tu cuerpo es el primer paso hacia la transformación epigenética.',
      bannerPrompt: '¿Te reconoces en dos o más de estos patrones biológicos?',
      bannerBtn: 'Completar Test de Longevidad (2 min)',
      cards: [
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
      ]
    },
    diagnosticModal: {
      title: 'Diagnóstico de Salud Biológica',
      stepOf: 'Paso',
      previous: 'Pregunta anterior',
      resultBadge: 'Resultado de Evaluación 40+',
      resultTitle: 'Diagnóstico de Salud Biológica',
      resultStateLabel: 'Estado Fisiológico Evaluado',
      nextStepTitle: 'Siguiente paso recomendado:',
      nextStepDesc: 'Carolina puede analizar estos datos junto con tus analíticas de sangre recientes en una consulta de evaluación para diseñar tu plan exacto sin improvisar.',
      whatsappCta: 'Enviar este resultado a Carolina en WhatsApp',
      retakeBtn: 'Volver a realizar el test',
      levels: {
        low: {
          level: 'Equilibrio Fisiológico Favorable',
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          summary: 'Tu biología responde favorablemente, pero es el momento perfecto de blindar tu masa muscular y proteger tu salud celular ante la transición hormonal de los próximos años.',
          pillar: 'Pilares clave: Movimiento de Fuerza y Hábitos de Longevidad.'
        },
        medium: {
          level: 'Alerta de Desregulación Metabólica y Hormonal Temprana',
          color: 'text-amber-800 bg-amber-50 border-amber-200',
          summary: 'Tu cuerpo está manifestando la transición 40+: resistencia a la insulina incipiente, impacto en cortisol nocturno y redistribución de adiposidad. Continuar con dietas genéricas empeorará la retención.',
          pillar: 'Pilares clave: Reset Celular (Nutrición Ortomolecular) y Sincronización Circadiana.'
        },
        high: {
          level: 'Desajuste Bio-Hormonal & Epigenético Significativo',
          color: 'text-[#EE295C] bg-[#F8CFD5]/30 border-[#EE295C]/30',
          summary: 'Tus marcadores de fatiga, sueño interrumpido e inflamación sugieren un estrés oxidativo y mitocondrial importante. Necesitas un protocolo clínico 1 a 1 para desinflamar, reactivar tu tiroides y recuperar tu bienestar sin pasar hambre.',
          pillar: 'Recomendación inmediata: Programa Código Diosa 180 Días con supervisión clínica directa.'
        }
      },
      questions: [
        {
          id: 'q-energy',
          category: 'Energía & Mitocondrias',
          title: '¿Cómo experimentas tu energía a lo largo de la jornada?',
          options: [
            { text: 'Despierto con vitalidad constante y mantengo el ritmo hasta la noche sin altibajos.', score: 0, note: 'Óptima regulación' },
            { text: 'Tengo un bajón acusado a media tarde y dependo del café o dulce para continuar.', score: 2, note: 'Resistencia a la glucosa y fatiga adrenal' },
            { text: 'Me despierto agotada aun durmiendo 8 horas; siento fatiga crónica generalizada.', score: 3, note: 'Agotamiento mitocondrial y celular' }
          ]
        },
        {
          id: 'q-sleep',
          category: 'Cronobiología & Descanso',
          title: '¿Cómo es tu patrón de descanso nocturno?',
          options: [
            { text: 'Duermo de un tirón y me levanto reparada.', score: 0, note: 'Ritmo circadiano alineado' },
            { text: 'Me despierto recurrentemente entre las 2 y 4 AM o sufro sofocos nocturnos.', score: 3, note: 'Fluctuación de estrógenos y pico de cortisol' },
            { text: 'Me cuesta conciliar el sueño y mi mente no para de rumiar pendientes.', score: 2, note: 'Desregulación del eje HPA y melatonina' }
          ]
        },
        {
          id: 'q-metabolism',
          category: 'Metabolismo & Composición Corporal',
          title: '¿Has notado cambios corporales que antes no ocurrían?',
          options: [
            { text: 'Mantengo mi composición corporal y digestión ágil sin cambios drásticos.', score: 0, note: 'Metabolismo flexible' },
            { text: 'Haciendo lo mismo de siempre, ahora acumulo grasa abdominal e hinchazón constante.', score: 3, note: 'Resistencia insulínica e inflamación de bajo grado' },
            { text: 'Siento digestiones lentas y retención de líquidos periódica.', score: 2, note: 'Microbioma alterado y sobrecarga hepática' }
          ]
        },
        {
          id: 'q-brain',
          category: 'Mente & Enfoque',
          title: '¿Has experimentado "niebla mental" (brain fog) o dispersión?',
          options: [
            { text: 'No, mantengo agudeza mental, memoria nítida y concentración.', score: 0, note: 'Neuroprotección adecuada' },
            { text: 'Ocasionalmente me cuesta encontrar palabras o concentrarme en tareas complejas.', score: 2, note: 'Neuroinflamación leve y variabilidad estrogénica' },
            { text: 'Frecuentemente olvido cosas cotidianas y siento que mi mente está espesa o dispersa.', score: 3, note: 'Impacto cognitivo de la transición 40+' }
          ]
        }
      ]
    },
    bioStory: {
      heading: 'No buscaba otra dieta genérica. Diseñé una estrategia real.',
      badge: 'Experta en Epigenética & Salud Femenina',
      specialistTitle: 'Health & Longevity Specialist 40+',
      title: 'Nutrición clínica, medicina del estilo de vida y optimización biológica.',
      para1: 'Con más de 6 años de experiencia trabajando con mujeres y diseñando estrategias personalizadas de nutrición y bienestar integral. Su formación integra nutrición clínica e integrativa, dietoterapia, nutrición ortomolecular, nutrigenética, epigenética y lifestyle medicine.',
      para2: 'Ha colaborado con centros especializados de Madrid, acompañando procesos clave de metabolismo, recomposición corporal, salud digestiva y envejecimiento saludable. Su enfoque nunca parte de plantillas genéricas: integra tu historia, tus marcadores analíticos y tus metas para construir una estrategia que funcione con tu biología real.',
      statYears: '6+',
      statYearsLabel: 'Años de Trayectoria',
      statPersonal: '100%',
      statPersonalLabel: 'Personalizado',
      statRating: '5.0',
      statRatingLabel: 'En Google Reviews',
      contactBtn: 'Contactar con Carolina',
      trajectoryBtn: 'Conoce mi trayectoria completa'
    },
    clinicalEvidence: {
      badge: 'Evidencia Basada en Datos',
      title: 'Transformaciones Clínicas y Biomarcadores',
      subtitle: 'Casos reales de mujeres 40+ monitorizadas con analíticas de laboratorio antes y después del protocolo Código Diosa.',
      cases: [
        {
          id: 'case-1',
          clientProfile: 'Elena R. • Directora Financiera',
          age: 48,
          symptoms: 'Resistencia a la insulina, aumento de perímetro abdominal y fatiga vespertina.',
          intervention: 'Protocolo de Nutrición Epigenética, desinflamación hepática y entrenamiento de fuerza con ventana 14:10.',
          duration: '12 semanas (Método Código Diosa)',
          markers: [
            { name: 'Insulina en Ayunas', before: '14.8', after: '5.4', unit: 'µIU/mL', status: '-63% (Rango óptimo)' },
            { name: 'Índice HOMA-IR', before: '3.4', after: '1.1', unit: 'ratio', status: 'Sensibilidad restaurada' },
            { name: 'Grasa Visceral', before: 'Nivel 9', after: 'Nivel 5', unit: 'escala', status: '-4 niveles' }
          ],
          doctorNote: 'Normalización completa del perfil glucémico sin medicación; recuperación de cintura anatómica y energía sostenida.'
        },
        {
          id: 'case-2',
          clientProfile: 'Marta G. • Arquitecta',
          age: 52,
          symptoms: 'Despertares nocturnos a las 3:00 AM, sofocos intensos y niebla mental ejecutiva.',
          intervention: 'Sincronización circadiana de luz, magnesio ortomolecular, fitoestrógenos y regulación de cortisol.',
          duration: '8 semanas',
          markers: [
            { name: 'Cortisol Salivar Nocturno', before: '18.2', after: '4.1', unit: 'nmol/L', status: 'Curva fisiológica normal' },
            { name: 'Proteína C Reactiva (hs-CRP)', before: '3.8', after: '0.6', unit: 'mg/L', status: 'Inflamación resuelta' },
            { name: 'Eficiencia del Sueño', before: '58%', after: '89%', unit: 'score', status: '+31% calidad REM' }
          ],
          doctorNote: 'Desaparición de los sofocos en un 90% y claridad cognitiva restablecida para jornadas de alta demanda.'
        }
      ]
    },
    testimonials: {
      badge: 'Casos Reales',
      title: 'Inspírate con estas historias',
      subtitle: 'Mujeres que ya trabajaron conmigo y recuperaron su bienestar y peso ideal.',
      googleLink: 'Leer reseñas en mi perfil de Google',
      items: [
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
      ]
    },
    faqs: {
      badge: 'Claridad Absoluta',
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas transparentes sobre cómo construimos tu estrategia de longevidad.',
      items: [
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
          answer: 'Es un proceso personalizado de 180 días (6 meses) para mujeres 40+ que quieren comprender los cambios de su cuerpo, mejorar su salud y construir hábitos que puedan sostener a largo plazo. Comenzamos con una evaluación profunda de tu situación actual, analíticas y objetivos, adaptando continuamente el plan al ritmo biológico de tu cuerpo.'
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
      ]
    },
    ctaSection: {
      badge: 'Tu Nueva Etapa Empieza Aquí',
      title: 'Es tu hora de brillar con salud celular y vitalidad.',
      description: 'No esperes a que el cansancio o los cambios hormonales decidan por ti. Da el paso hacia una salud consciente, informada y a tu medida.',
      whatsappBtn: 'Contactar con Carolina',
      calendlyBtn: 'Agendar en Calendly',
      bookingBtn: 'Reservar Sesión de Valoración',
      locationNote: 'Consultas presenciales en Pozuelo / Madrid y online a todo el mundo'
    },
    collaborations: {
      title: 'Colaboraciones Clínicas & Red Profesional en Madrid',
      partners: ['AXO LONGEVITY', 'EPIXLIFE']
    },
    footer: {
      brandDesc: 'Nutrición Epigenética, optimización metabólica y medicina del estilo de vida para mujeres después de los 40.',
      location: 'Biolifestyle Studio • Pozuelo de Alarcón / Madrid',
      exploreTitle: 'Explorar',
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      metodoDiosa: 'Método Código Diosa 180',
      testEvaluacion: 'Test de Autoevaluación',
      calculadora: 'Calculadora 40+',
      casosExito: 'Casos de Éxito',
      preguntasFrecuentes: 'Preguntas Frecuentes',
      newsletterTitle: 'Newsletter Celular 40+',
      newsletterDesc: 'Píldoras semanales de ciencia epigenética, cronobiología y recetas funcionales para potenciar tu metabolismo.',
      newsletterPlaceholder: 'Tu correo electrónico',
      newsletterBtn: 'Suscribirme',
      newsletterSuccess: '¡Gracias por unirte a la comunidad de mujeres 40+! Te llegará un correo de bienvenida.',
      paymentMethods: 'MÉTODOS DE PAGO:',
      allRights: 'Todos los derechos reservados.',
      legalNotice: 'Aviso Legal',
      privacyPolicy: 'Política de Privacidad',
      cookiePolicy: 'Política de Cookies'
    },
    programModal: {
      badge: 'Programa Activo • Inscripciones Abiertas',
      title: 'El Método Código Diosa · 180 Días',
      subtitle: 'Diagnóstico + 3 fases: Activación, Reparación o Construcción, Optimización. Para mujeres 40+.',
      structureTitle: 'Diagnóstico + 3 fases en un flujo continuo',
      phases: [
        {
          number: 0,
          title: 'Diagnóstico — Eres única y tus necesidades también lo son',
          description: 'Recolección de datos + información de la persona para personalizar el método. Cada dato conecta con la transformación: un flujo continuo, no un bloque separado.',
          color: 'bg-[#C7A46B]'
        },
        {
          number: 1,
          title: 'Fase 1 · Activación — Primero bajamos el ruido',
          description: 'Estrés, inflamación, desorden interno. Calmamos el sistema para que el cuerpo vuelva a responder.',
          color: 'bg-[#FF6161]'
        },
        {
          number: 2,
          title: 'Fase 2 · Reparación o Construcción — Después reparamos',
          description: 'Metabolismo, músculo, estabilidad hormonal. Reconstruimos la base fisiológica.',
          color: 'bg-[#EE295C]'
        },
        {
          number: 3,
          title: 'Fase 3 · Optimización — Y entonces afinamos',
          description: 'Energía, longevidad, coherencia biológica, belleza. Afinamos para sostener el resultado décadas.',
          color: 'bg-[#F69C05]'
        }
      ],
      includedTitle: '¿Qué incluye el acompañamiento?',
      includedItems: [
        'Sesiones 1 a 1 de valoración clínica',
        'Estrategia epigenética personalizada',
        'Soporte semanal vía WhatsApp privado',
        'Pautas de fuerza y actividad metabólica',
        'Recetarios antiinflamatorios y listas',
        'Ajustes bioindividuales en cada etapa'
      ],
      ctaWhatsapp: 'Consultar Disponibilidad con Carolina',
      backBtn: 'Volver'
    },
    waitlistModal: {
      badge: 'Lista de Espera Anticipada',
      desc: 'Sé de las primeras en acceder a este nuevo protocolo con plazas limitadas y supervisión personalizada de Carolina.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      goalLabel: '¿Cuál es tu mayor desafío en esta área? (Opcional)',
      goalPlaceholder: 'Ej: Despertares a las 3 AM, falta de concentración...',
      submitBtn: 'Unirme a la lista prioritaria',
      successTitle: '¡Estás en la lista prioritaria!',
      successDesc: 'Te avisaremos con acceso exclusivo y tarifa preferencial en cuanto abramos plazas.',
      closeBtn: 'Cerrar'
    },
    trajectoryModal: {
      title: 'Carolina Barcellona',
      specialist: 'Nutricionista Clínica, Epigenética & Longevidad 40+',
      sectionTitle: 'Trayectoria y Formación Especializada',
      intro: 'Carolina Barcellona cuenta con más de 6 años guiando a mujeres en su transición biológica de los 40 y 50 años. Su metodología integra las ramas más rigurosas y modernas de la ciencia de la salud:',
      items: [
        {
          icon: 'school',
          color: 'text-[#FF6161]',
          bold: 'Nutrición Clínica e Integrativa:',
          desc: 'Especialización en dietoterapia avanzada y modulación de patologías metabólicas.'
        },
        {
          icon: 'biotech',
          color: 'text-[#EE295C]',
          bold: 'Nutrigenética & Epigenética:',
          desc: 'Estudio de cómo la alimentación y el estilo de vida activan o silencian genes protectores de longevidad.'
        },
        {
          icon: 'medication',
          color: 'text-[#F69C05]',
          bold: 'Nutrición Ortomolecular:',
          desc: 'Uso terapéutico de micronutrientes y adaptógenos de grado clínico para regeneración celular.'
        },
        {
          icon: 'fitness_center',
          color: 'text-[#C7A46B]',
          bold: 'Medicina del Movimiento y Estilo de Vida:',
          desc: 'Entrenamiento de hipertrofia funcional y preservación ósea adaptado a la mujer madura.'
        }
      ],
      outro: 'Desde su espacio en Biolifestyle Studio (Pozuelo de Alarcón, Madrid) y a través de su consulta online internacional, acompaña a mujeres profesionales que necesitan dejar de improvisar y disponer de una hoja de ruta con evidencia científica y calidez humana.',
      closeBtn: 'Entendido'
    },
    bookingModal: {
      badge: 'Consulta Inicial de Valoración',
      title: 'Reserva tu Sesión con Carolina',
      subtitle: 'Una llamada de 20 minutos para analizar tu perfil biológico, revisar tus prioridades y determinar la mejor ruta para ti.',
      modalityLabel: 'Modalidad de consulta',
      modalities: {
        online: {
          title: 'Videollamada Online 1 a 1',
          desc: 'Vía Google Meet o Zoom. Desde cualquier país.'
        },
        inPerson: {
          title: 'Presencial en Pozuelo / Madrid',
          desc: 'En Biolifestyle Studio. Análisis presencial.'
        },
        express: {
          title: 'Evaluación Exprés por WhatsApp',
          desc: 'Audio y revisión preliminar de analíticas.'
        }
      },
      dateLabel: 'Fecha preferida',
      timeLabel: 'Franja horaria',
      priorityLabel: '¿Cuál es tu prioridad biológica más urgente?',
      priorityOptions: [
        'Hinchazón constante, aumento de grasa abdominal o peso estancado',
        'Sofocos, sudoración nocturna o desbalance hormonal',
        'Cansancio crónico, niebla mental y falta de enfoque',
        'Optimización global de longevidad celular y fuerza muscular'
      ],
      recentLabsLabel: '¿Dispones de análisis de sangre de los últimos 6 meses?',
      recentLabsOptions: {
        yes: 'Sí, tengo analíticas recientes',
        no: 'No, hace más de 6 meses',
        inProgress: 'Me las realizaré próximamente'
      },
      nameLabel: 'Tu nombre completo',
      namePlaceholder: 'Ej: Carmen Sánchez',
      phoneLabel: 'Número de WhatsApp',
      phonePlaceholder: '+34 600 000 000',
      confirmBtn: 'Confirmar Solicitud de Cita',
      successTitle: '¡Cita pre-agendada con éxito!',
      successDesc: 'Nos pondremos en contacto contigo por WhatsApp en menos de 24 horas laborables para confirmar la hora exacta y enviarte tu cuestionario clínico previo.',
      addToCalendarBtn: 'Añadir recordatorio a mi calendario',
      whatsappConfirmBtn: 'Confirmar ahora por WhatsApp',
      closeBtn: 'Cerrar'
    },
    floatingWhatsapp: {
      tooltip: 'Hablar con Carolina',
      aria: 'Abrir chat de WhatsApp con Carolina'
    }
  },

  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About Me',
      planes: 'Programs',
      programasEspecializados: 'Specialized Programs',
      diosaProgramTitle: 'Diosa Code 180 Days',
      diosaProgramDesc: 'Metabolism, hormonal balance and cellular longevity.',
      suenoProgramTitle: 'Chronobiology & Sleep',
      suenoProgramDesc: 'Circadian rhythm and deep sleep architecture.',
      menteProgramTitle: 'Mind & Bio-Longevity',
      menteProgramDesc: 'Cognitive clarity and bio-hacking for women 40+.',
      calculadora: '40+ Calculator',
      evidencia: 'Clinical Evidence',
      testimonios: 'Success Stories',
      faq: 'FAQ',
      descubreMetodo: 'Discover My Method',
      reservaCita: 'Book Consultation',
      navegacionPrincipal: 'Main Navigation',
      autodiagnostico: 'Self-Assessment 40+',
      atencionDirecto: 'Direct Care & Contact',
      solicitarEvaluacion: 'Request Initial Evaluation',
      studioLocation: 'Biolifestyle Studio • Pozuelo de Alarcón / Madrid',
      idioma: 'Language',
      blog: 'Blog',
      contacto: 'Contact',
      herramientas: 'Tools'
    },
    hero: {
      badge: "Women's Health & Longevity for Women 40+",
      titleLine1: 'Your body changes after 40.',
      titleHighlight: 'Your strategy must too.',
      subtitle: 'Epigenetic Nutrition: bio-hack your genes, reclaim your ideal weight, and unlock your radiant vitality.',
      description: 'Designed for women seeking to understand their biology, optimize their health, and navigate this chapter with lasting energy, muscle strength, and deep well-being.',
      ctaPrimary: 'Discover My Method',
      ctaSecondary: 'Join the Movement',
      ctaCalculator: 'Calculate Your 40+ Targets',
      trustYears: '+6 Years Specialized',
      trustEpigenetics: 'Epigenetic Nutrition',
      trustPersonalized: '100% Tailored Clinical Care'
    },
    audioWelcome: {
      badge: 'Voice Note',
      title: 'A Personal Welcome from Carolina',
      subtitle: 'Listen to why standard diets fail after 40 and how cellular precision nutrition transforms your biology.',
      play: 'Play welcome voice note',
      pause: 'Pause audio',
      transcriptBtn: 'Read transcript',
      hideTranscript: 'Hide transcript',
      transcriptText: '"Hello, I am Carolina Barcellona. If you are here, you likely feel that the routines that used to keep you energetic and lean are no longer working. It is not your fault: your biology, mitochondria, and hormonal receptors have shifted. In my practice, we do not impose copy-pasted diets or severe deprivation; we audit your epigenetics and lifestyle to engineer a sustainable system that restores your strength and inner calm. Welcome to your golden decade."',
      duration: '0:25 min'
    },
    pillars: {
      badge: 'Health Architecture Framework',
      title: 'The Diosa Code Method',
      description: 'A structured blueprint for biological growth and optimization. Build mental clarity, metabolic discipline, and sustained vitality in your body and rest. Not fleeting motivation: systems that compound over time.',
      items: [
        {
          id: 'pillar-b',
          letter: 'B',
          title: 'Biology & Epigenetics',
          gradient: 'from-[#FF6161] to-[#EE295C]',
          accentHoverColor: 'group-hover:text-[#FF6161]',
          description: 'Understand who you are and how your cellular biochemistry is evolving. Advanced blood biomarkers, hormonal rebalancing, and deep cellular assessment without diet noise.'
        },
        {
          id: 'pillar-n',
          letter: 'N',
          title: 'Orthomolecular Nutrition',
          gradient: 'from-[#EE295C] to-[#FF6161]',
          accentHoverColor: 'group-hover:text-[#EE295C]',
          description: 'Audit dietary triggers and replace restriction with cellular precision. Nutritional strategies that eliminate chronic inflammation, support thyroid health, and reactivate insulin sensitivity.'
        },
        {
          id: 'pillar-m',
          letter: 'M',
          title: 'Movement & Strength',
          gradient: 'from-[#F69C05] to-[#FF6161]',
          accentHoverColor: 'group-hover:text-[#F69C05]',
          description: 'Build metabolically active muscle mass adapted for 40+. Safeguard bone mineral density, boost mitochondrial density, and refine body composition without burnout.'
        },
        {
          id: 'pillar-h',
          letter: 'H',
          title: 'Habits & Longevity',
          gradient: 'from-[#C7A46B] to-[#EE295C]',
          accentHoverColor: 'group-hover:text-[#C7A46B]',
          description: 'Synchronize your circadian rest, lift executive brain fog, and tame cortisol spikes. Seamless daily systems that guarantee peak vitality for decades to come.'
        }
      ]
    },
    practicalAreas: {
      title: 'Applied Across 3 Core Domains',
      subtitle: 'A tripartite clinical protocol engineered to harmonize your biology, vital energy, and cognitive longevity.',
      areas: [
        {
          id: 'area-cuerpo',
          title: 'Body & Metabolism',
          status: 'active',
          statusLabel: 'Active • Enrollment Open',
          description: 'Smart resistance training. Sustainable epigenetic nutrition. Deep systemic anti-inflammation and body recomposition without extreme starvation.',
          bullets: [
            'Hormonal optimization and hot flash relief',
            'Visceral fat loss while protecting lean muscle mass',
            'Gut microbiome restoration and swift digestion'
          ],
          icon: 'check_circle',
          ctaText: 'View Details & Full Dossier'
        },
        {
          id: 'area-sueno',
          title: 'Chronobiology & Sleep',
          status: 'upcoming',
          statusLabel: 'Coming Soon',
          description: 'Circadian rhythm reset, REM sleep architecture restoration, and targeted cortisol-melatonin modulation for deep, unmedicated rest.',
          bullets: [
            'Morning lux exposure protocols and cellular clocks',
            'Protocols targeting 3:00 AM nocturnal awakenings',
            'Parasympathetic nervous system recovery'
          ],
          icon: 'schedule',
          ctaText: 'Join Waitlist'
        },
        {
          id: 'area-mente',
          title: 'Mind & Bio-Longevity',
          status: 'upcoming',
          statusLabel: 'Coming Soon',
          description: 'Eradication of brain fog, mitochondrial neuroprotection, executive focus, and strategic habits for the high-performing woman.',
          bullets: [
            'Clinical nootropics and pro-cognitive nutrition',
            'Sustained mental energy without caffeine crashes',
            'Long-term brain neuro-inflammation prevention'
          ],
          icon: 'psychology',
          ctaText: 'Join Waitlist'
        }
      ]
    },
    whoIsItFor: {
      badge: 'Philosophy & Longevity',
      title: 'Who Is This For?',
      description: 'For high-performing, biologically conscious women seeking clear structure over conflicting noise. Women who are tired of restarting generic diets and are ready to test, adjust, and thrive. This is not another diet: it is an operating system you will rely on for life.',
      tags: ['Female biology 40+', 'No severe deprivation', 'Sustainable for life']
    },
    calculator: {
      badge: 'Cellular Precision Tool',
      title: 'Longevity & Protein Calculator 40+',
      subtitle: 'After 40, anabolic resistance requires precise amino acid thresholds and targeted resistance volume. Calculate your scientific targets.',
      ageLabel: 'Age (Years)',
      weightLabel: 'Current weight (kg)',
      activityLabel: 'Physical Activity Level',
      activityOptions: {
        sedentary: 'Sedentary (Little to no structured exercise)',
        moderate: 'Moderate (Brisk walks / Pilates / Yoga 2-3 days)',
        strength: 'Active / Strength (Resistance training 3-5 days)'
      },
      goalLabel: 'Primary Focus',
      goalOptions: {
        metabolism: 'Body recomposition & visceral fat reduction',
        muscle: 'Sarcopenia prevention & bone density',
        hormones: 'Hormonal balance & mitochondrial energy'
      },
      calculateBtn: 'Compute My Biological Strategy',
      resultsTitle: 'Your Optimal Physiological Parameters',
      proteinTarget: 'Daily Protein Target',
      proteinPerMeal: 'Leucine Threshold Per Meal',
      trainingTarget: 'Weekly Strength Stimulus',
      circadianWindow: 'Circadian Feeding Window',
      biomarkersTitle: 'Priority Blood Biomarkers to Screen',
      consultCarolinaBtn: 'Send this profile to Carolina via WhatsApp',
      copyBtn: 'Copy Results',
      copiedMsg: 'Copied to clipboard!',
      disclaimer: 'Nutritional reference calculation based on orthomolecular clinical evidence for women 40+. Does not replace individual medical guidance.'
    },
    diagnosticSection: {
      badge: 'Self-Assessment',
      title: 'Why Are You Here?',
      subtitle: 'Recognizing your body’s biological cues is the first step toward epigenetic transformation.',
      bannerPrompt: 'Do you identify with two or more of these biological patterns?',
      bannerBtn: 'Complete Longevity Test (2 min)',
      cards: [
        {
          id: 'diag-1',
          icon: 'thermostat',
          title: 'Hot Flashes & Body Shifts',
          description: 'You sense your body evolving—hot flashes, stubborn abdominal adiposity, altered digestion, or slower recovery—and you want a personalized strategy.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#FF6161]',
          borderColor: 'border-[#F8CFD5]'
        },
        {
          id: 'diag-2',
          icon: 'battery_charging_full',
          title: 'Loss of Vitality & Stamina',
          description: 'You feel low on energy and want to wake up feeling strong, active, and fully connected with your physiology every morning.',
          badgeBg: 'bg-amber-50',
          iconColor: 'text-[#F69C05]',
          borderColor: 'border-[#F69C05]/30'
        },
        {
          id: 'diag-3',
          icon: 'psychology_alt',
          title: 'Brain Fog & Focus Lapses',
          description: 'You notice mental fogginess, word-finding friction, or fluctuating focus that interferes with your executive and personal rhythm.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#EE295C]',
          borderColor: 'border-[#F8CFD5]'
        },
        {
          id: 'diag-4',
          icon: 'self_improvement',
          title: 'Insomnia, Stress & Mood Changes',
          description: 'Your sleep (insomnia, night awakenings), stress tolerance, or mood have shifted and you want a compassionate, science-backed approach for this life stage.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#FF6161]',
          borderColor: 'border-[#F8CFD5]'
        },
        {
          id: 'diag-5',
          icon: 'all_inclusive',
          title: 'Long-Term Sustainability',
          description: 'You refuse another punitive diet. You want an elevated lifestyle plan you can integrate and enjoy for the next 30+ years.',
          badgeBg: 'bg-amber-50',
          iconColor: 'text-[#F69C05]',
          borderColor: 'border-[#F69C05]/30'
        },
        {
          id: 'diag-6',
          icon: 'supervised_user_circle',
          title: '1-on-1 Clinical Guidance',
          description: 'You want to stop guessing alone and partner with a specialized clinician who analyzes your labs and builds a custom roadmap.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#EE295C]',
          borderColor: 'border-[#F8CFD5]'
        }
      ]
    },
    diagnosticModal: {
      title: 'Biological Health Assessment',
      stepOf: 'Step',
      previous: 'Previous question',
      resultBadge: '40+ Assessment Outcome',
      resultTitle: 'Biological Health Diagnostic',
      resultStateLabel: 'Evaluated Physiological Status',
      nextStepTitle: 'Recommended Next Step:',
      nextStepDesc: 'Carolina can review these symptoms alongside your recent lab panels in a private evaluation session to map your exact biological strategy.',
      whatsappCta: 'Send My Results to Carolina on WhatsApp',
      retakeBtn: 'Retake Assessment',
      levels: {
        low: {
          level: 'Favorable Physiological Equilibrium',
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          summary: 'Your biology is responding well, but this is the critical window to fortify lean muscle mass and protect cellular reserves ahead of future hormonal shifts.',
          pillar: 'Key Pillars: Strength Movement & Longevity Habits.'
        },
        medium: {
          level: 'Early Metabolic & Hormonal Dysregulation Alert',
          color: 'text-amber-800 bg-amber-50 border-amber-200',
          summary: 'Your body is signaling the 40+ transition: nascent insulin resistance, nocturnal cortisol spikes, and visceral fat redistribution. Standard diets will worsen fluid retention.',
          pillar: 'Key Pillars: Cellular Reset (Orthomolecular Nutrition) & Circadian Timing.'
        },
        high: {
          level: 'Significant Bio-Hormonal & Epigenetic Imbalance',
          color: 'text-[#EE295C] bg-[#F8CFD5]/30 border-[#EE295C]/30',
          summary: 'Chronic fatigue, broken sleep, and inflammation indicate significant oxidative and mitochondrial stress. A tailored 1-on-1 clinical protocol is needed to rebalance thyroid and restore vitality.',
          pillar: 'Immediate Recommendation: Diosa Code 180 Days Program with direct clinical supervision.'
        }
      },
      questions: [
        {
          id: 'q-energy',
          category: 'Energy & Mitochondria',
          title: 'How do your energy levels feel throughout the day?',
          options: [
            { text: 'I wake up refreshed and maintain steady stamina until bedtime without crashes.', score: 0, note: 'Optimal cellular regulation' },
            { text: 'I experience a sharp mid-afternoon crash and rely on coffee or sugar to keep going.', score: 2, note: 'Glucose instability and adrenal fatigue' },
            { text: 'I wake up exhausted despite 8 hours of sleep; I feel persistent fatigue.', score: 3, note: 'Mitochondrial and cellular depletion' }
          ]
        },
        {
          id: 'q-sleep',
          category: 'Chronobiology & Rest',
          title: 'What does your nocturnal sleep pattern look like?',
          options: [
            { text: 'I sleep uninterrupted and wake up deeply restored.', score: 0, note: 'Aligned circadian rhythm' },
            { text: 'I routinely wake between 2:00 and 4:00 AM or struggle with night sweats.', score: 3, note: 'Estrogen fluctuation & cortisol surge' },
            { text: 'I struggle to fall asleep because my mind is racing with racing thoughts.', score: 2, note: 'HPA axis and melatonin dysregulation' }
          ]
        },
        {
          id: 'q-metabolism',
          category: 'Metabolism & Body Composition',
          title: 'Have you noticed bodily changes that never occurred before?',
          options: [
            { text: 'My body composition and digestion remain stable without drastic swings.', score: 0, note: 'Metabolic flexibility' },
            { text: 'Doing the exact same things as before, I now accumulate belly fat and constant bloating.', score: 3, note: 'Insulin resistance & low-grade inflammation' },
            { text: 'I experience sluggish digestion and cyclical water retention.', score: 2, note: 'Altered microbiome & sluggish liver clearance' }
          ]
        },
        {
          id: 'q-brain',
          category: 'Mind & Focus',
          title: 'Have you experienced executive brain fog or scattered attention?',
          options: [
            { text: 'No, my memory, mental sharpness, and executive focus are crystal clear.', score: 0, note: 'Robust neuroprotection' },
            { text: 'I occasionally struggle to find words or sustain focus on intricate tasks.', score: 2, note: 'Mild neuro-inflammation & estrogenic shifts' },
            { text: 'I frequently misplace thoughts, forget daily items, and feel cognitively depleted.', score: 3, note: 'Noticeable 40+ cognitive transition impact' }
          ]
        }
      ]
    },
    bioStory: {
      heading: 'I was not looking for another generic diet. I designed a real clinical strategy.',
      badge: 'Expert in Epigenetics & Women’s Health',
      specialistTitle: 'Health & Longevity Specialist 40+',
      title: 'Clinical nutrition, lifestyle medicine, and biological optimization.',
      para1: 'With over 6 years of clinical practice guiding women through personalized nutritional and health strategies. Her credentials span clinical & integrative nutrition, medical dietetics, orthomolecular medicine, nutrigenomics, epigenetics, and functional lifestyle medicine.',
      para2: 'Having partnered with specialized medical and wellness centers in Madrid, she orchestrates metabolic renewal, body recomposition, digestive health, and graceful longevity. She rejects one-size-fits-all meal plans: integrating your biological markers, unique history, and lifestyle into a protocol that works with your actual physiology.',
      statYears: '6+',
      statYearsLabel: 'Years of Practice',
      statPersonal: '100%',
      statPersonalLabel: 'Personalized',
      statRating: '5.0',
      statRatingLabel: 'On Google Reviews',
      contactBtn: 'Connect with Carolina',
      trajectoryBtn: 'View Full Clinical Credentials'
    },
    clinicalEvidence: {
      badge: 'Data-Driven Clinical Evidence',
      title: 'Clinical Case Studies & Biomarkers',
      subtitle: 'Real laboratory biomarker outcomes from women 40+ monitored before and after completing the Diosa Code protocol.',
      cases: [
        {
          id: 'case-1',
          clientProfile: 'Elena R. • Chief Financial Officer',
          age: 48,
          symptoms: 'Insulin resistance, creeping abdominal girth, and severe afternoon fatigue.',
          intervention: 'Epigenetic nutrition protocol, liver detoxification, resistance training with 14:10 circadian fasting window.',
          duration: '12 weeks (Diosa Code Method)',
          markers: [
            { name: 'Fasting Insulin', before: '14.8', after: '5.4', unit: 'µIU/mL', status: '-63% (Optimal health range)' },
            { name: 'HOMA-IR Index', before: '3.4', after: '1.1', unit: 'ratio', status: 'Insulin sensitivity fully restored' },
            { name: 'Visceral Fat Rating', before: 'Level 9', after: 'Level 5', unit: 'scale', status: '-4 levels reduction' }
          ],
          doctorNote: 'Complete glycemic normalization without prescription medication; restored waistline and sustained executive stamina.'
        },
        {
          id: 'case-2',
          clientProfile: 'Marta G. • Lead Architect',
          age: 52,
          symptoms: '3:00 AM awakenings, debilitating hot flashes, and cognitive brain fog.',
          intervention: 'Circadian lux realignment, clinical orthomolecular magnesium, phyto-actives, and adrenal cortisol modulation.',
          duration: '8 weeks',
          markers: [
            { name: 'Nocturnal Salivary Cortisol', before: '18.2', after: '4.1', unit: 'nmol/L', status: 'Physiological curve restored' },
            { name: 'High-Sensitivity CRP (hs-CRP)', before: '3.8', after: '0.6', unit: 'mg/L', status: 'Systemic inflammation resolved' },
            { name: 'Sleep Efficiency Score', before: '58%', after: '89%', unit: 'score', status: '+31% deep REM architecture' }
          ],
          doctorNote: '90% resolution of vasomotor hot flashes with sharp mental focus restored during high-stress architectural work.'
        }
      ]
    },
    testimonials: {
      badge: 'Real Stories',
      title: 'Be Inspired by Their Journeys',
      subtitle: 'Women who transformed their physiology, reclaimed their ideal shape, and unlocked lasting wellness.',
      googleLink: 'Read all reviews on my Google Profile',
      items: [
        {
          id: 'test-1',
          name: 'Raquel Llorente',
          initials: 'RL',
          location: 'Madrid • Google Verified Review',
          program: 'Diosa Code Method',
          rating: 5,
          text: '“Carolina is a truly wonderful practitioner! The outcome of this journey has been a complete 10/10. My chronic bloating is gone, and I finally understand what nourishes my body. I gained an enjoyable relationship with food, not another diet. I used to rely on 4 coffees a day just to survive; now I have abundant energy! I lost 6 kg of fat progressively without ever feeling hungry.”'
        },
        {
          id: 'test-2',
          name: 'Carmen Moreno',
          initials: 'CM',
          location: 'Pozuelo • Google Verified Review',
          program: '1-on-1 Clinical Mentorship',
          rating: 5,
          text: '“Meeting Carolina changed my relationship with nutrition, my body, and myself. I originally came to improve my diet, but experienced a much deeper transformation. Today I feel more energized, peaceful, and have an enlightened understanding of true nourishment. She listens, understands, and guides without judgment. I would choose her a thousand times over.”'
        },
        {
          id: 'test-3',
          name: 'Vanesa Carolina',
          initials: 'VC',
          location: 'Madrid • Google Verified Review',
          program: 'Metabolic Optimization',
          rating: 5,
          text: '“My experience with Carolina has been exceptional. Her personalized care and sharp clinical insights were pivotal in revitalizing my metabolism and achieving my health goals at an age where I felt nothing worked anymore. Highly recommended for any woman seeking genuine, lasting change!”'
        }
      ]
    },
    faqs: {
      badge: 'Absolute Clarity',
      title: 'Frequently Asked Questions',
      subtitle: 'Transparent answers regarding how we engineer your personalized longevity roadmap.',
      items: [
        {
          id: 'faq-1',
          question: 'Is Carolina Barcellona qualified to design an individualized protocol for me?',
          answerLead: 'Yes. Carolina Barcellona brings over 6 years of specialized clinical experience guiding women through evidence-based health and nutrition.',
          answer: 'Her clinical background includes clinical & integrative nutrition, dietotherapy, orthomolecular nutrition, nutrigenomics, epigenetics, lifestyle medicine, and movement coaching. Her approach never relies on generic templates: she synthesizes your health history, goals, and comprehensive blood work to build an individualized clinical roadmap.'
        },
        {
          id: 'faq-2',
          question: 'Why is the Diosa Method fundamentally different?',
          answerLead: 'It is not another diet, nor an off-the-shelf protocol.',
          answer: 'The Diosa Code starts with your unique biochemistry: your personal history, life chapter, habits, and how your body responds to the biological shifts of 40+. We integrate metabolic optimization, strength, circadian sleep, and cortisol modulation. Rather than adding rigid rules, you learn to collaborate with your biology.'
        },
        {
          id: 'faq-3',
          question: 'What does the Diosa Method process involve?',
          answer: 'It is a personalized 180-day (6-month) journey for women 40+ who want to understand bodily changes, improve cellular health, and install lasting habits. We begin with a deep clinical audit of your blood work, lifestyle markers, and goals, continually calibrating the plan to your biological response.'
        },
        {
          id: 'faq-4',
          question: 'What role does physical exercise play in the method?',
          answer: 'Movement is vital after 40. It is not about punishing cardio or exhaustive workouts, but discovering the exact dose of progressive strength training, joint mobility, and daily activity to stimulate bone density, preserve muscle, and restore insulin sensitivity.'
        },
        {
          id: 'faq-5',
          question: 'Can this method alleviate hot flashes and perimenopausal symptoms?',
          answer: 'Yes. Hot flashes, night sweats, sleep disruption, and mood fluctuations stem from estrogen fluctuations and neuroendocrine shifts. We address the modifiable epigenetic and lifestyle factors so you navigate this transition with calm, energy, and comfort.'
        },
        {
          id: 'faq-6',
          question: 'Are your protocols affiliated with multi-level marketing brands like Herbalife?',
          answerLead: 'Not at all.',
          answer: 'My practice is grounded strictly in clinical science, individual customization, and long-term sustainability. I never endorse multi-level marketing supplements or synthetic quick fixes lacking evidence.'
        },
        {
          id: 'faq-7',
          question: 'What types of supplements do you typically recommend?',
          answer: 'Supplementation is never a generic one-size-fits-all bandaid. When clinically indicated, I curate high-purity pharmaceutical-grade vitamins, minerals, omega fatty acids, amino acids, or adaptogens tailored to your blood work. Fewer pills, maximum biological purpose.'
        }
      ]
    },
    ctaSection: {
      badge: 'Your New Chapter Begins Today',
      title: 'It is your time to radiate cellular health and vitality.',
      description: 'Do not wait for chronic exhaustion or hormonal shifts to dictate your future. Take the definitive step toward informed, elevated health tailored to you.',
      whatsappBtn: 'Message Carolina on WhatsApp',
      calendlyBtn: 'Schedule on Calendly',
      bookingBtn: 'Book Discovery Session',
      locationNote: 'In-person sessions in Pozuelo / Madrid & Online worldwide'
    },
    collaborations: {
      title: 'Clinical Collaborations & Professional Medical Network in Madrid',
      partners: ['AXO LONGEVITY', 'EPIXLIFE']
    },
    footer: {
      brandDesc: 'Epigenetic Nutrition, metabolic optimization, and lifestyle medicine for women after 40.',
      location: 'Biolifestyle Studio • Pozuelo de Alarcón / Madrid',
      exploreTitle: 'Explore',
      inicio: 'Home',
      sobreMi: 'About Me',
      metodoDiosa: 'Diosa Code 180 Method',
      testEvaluacion: 'Self-Assessment Quiz',
      calculadora: '40+ Calculator',
      casosExito: 'Success Stories',
      preguntasFrecuentes: 'FAQ',
      newsletterTitle: 'Cellular 40+ Newsletter',
      newsletterDesc: 'Weekly insights on epigenetic science, circadian bio-hacking, and functional recipes to empower your metabolism.',
      newsletterPlaceholder: 'Enter your email address',
      newsletterBtn: 'Subscribe',
      newsletterSuccess: 'Thank you for joining our community of women 40+! A welcome email is on its way.',
      paymentMethods: 'PAYMENT METHODS:',
      allRights: 'All rights reserved.',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy'
    },
    programModal: {
      badge: 'Active Program • Enrollment Open',
      title: 'The Diosa Code Method · 180 Days',
      subtitle: 'Diagnostics + 3 phases: Activation, Repair or Rebuild, Optimization. For women 40+.',
      structureTitle: 'Diagnostics + 3 phases in one continuous flow',
      phases: [
        {
          number: 0,
          title: 'Diagnostics — You are unique, and so are your needs',
          description: 'Data + personal context collection to personalize the method. Every data point feeds the transformation: one continuous flow, not a separate block.',
          color: 'bg-[#C7A46B]'
        },
        {
          number: 1,
          title: 'Phase 1 · Activation — First we lower the noise',
          description: 'Stress, inflammation, internal disorder. We calm the system so the body responds again.',
          color: 'bg-[#FF6161]'
        },
        {
          number: 2,
          title: 'Phase 2 · Repair or Rebuild — Then we repair',
          description: 'Metabolism, muscle, hormonal stability. We rebuild the physiological foundation.',
          color: 'bg-[#EE295C]'
        },
        {
          number: 3,
          title: 'Phase 3 · Optimization — Then we fine-tune',
          description: 'Energy, longevity, biological coherence, radiance. We fine-tune to sustain results for decades.',
          color: 'bg-[#F69C05]'
        }
      ],
      includedTitle: 'What is included in the program?',
      includedItems: [
        '1-on-1 private clinical evaluation sessions',
        'Tailored epigenetic nutrition blueprint',
        'Weekly direct support via private WhatsApp',
        'Metabolic strength & movement guidance',
        'Anti-inflammatory recipes & curated grocery guides',
        'Bio-individual adjustments at every milestone'
      ],
      ctaWhatsapp: 'Inquire Availability with Carolina',
      backBtn: 'Back'
    },
    waitlistModal: {
      badge: 'Early Priority Waitlist',
      desc: 'Be among the first to gain priority access to this new specialized protocol with limited cohorts and personalized supervision by Carolina.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      goalLabel: 'What is your primary challenge in this area? (Optional)',
      goalPlaceholder: 'E.g., 3:00 AM awakenings, brain fog, fatigue...',
      submitBtn: 'Join Priority Waitlist',
      successTitle: 'You are on the priority list!',
      successDesc: 'We will notify you with exclusive early access and preferred tuition when enrollment opens.',
      closeBtn: 'Close'
    },
    trajectoryModal: {
      title: 'Carolina Barcellona',
      specialist: 'Clinical Nutritionist, Epigenetics & Longevity 40+',
      sectionTitle: 'Professional Background & Clinical Credentials',
      intro: 'Carolina Barcellona brings over 6 years of focused clinical practice guiding women through their 40s and 50s biological transition. Her methodology integrates the most rigorous disciplines of medical and wellness science:',
      items: [
        {
          icon: 'school',
          color: 'text-[#FF6161]',
          bold: 'Clinical & Integrative Nutrition:',
          desc: 'Advanced medical dietotherapy and therapeutic modulation of metabolic conditions.'
        },
        {
          icon: 'biotech',
          color: 'text-[#EE295C]',
          bold: 'Nutrigenetics & Epigenetics:',
          desc: 'How specific nutrients and lifestyle factors upregulate or silence longevity-protective gene expression.'
        },
        {
          icon: 'medication',
          color: 'text-[#F69C05]',
          bold: 'Orthomolecular Nutrition:',
          desc: 'Targeted therapeutic micro-nutrition and clinical-grade adaptogens for cellular renewal.'
        },
        {
          icon: 'fitness_center',
          color: 'text-[#C7A46B]',
          bold: 'Movement Medicine & Functional Lifestyle:',
          desc: 'Functional hypertrophy and bone preservation training calibrated for the mature female body.'
        }
      ],
      outro: 'From her private clinic at Biolifestyle Studio in Pozuelo de Alarcón (Madrid) and through her international online consultations, she guides high-achieving women who are ready to replace guesswork with evidence-based science and empathetic mentorship.',
      closeBtn: 'Understood'
    },
    bookingModal: {
      badge: 'Initial Discovery Session',
      title: 'Book Your Consultation with Carolina',
      subtitle: 'A complimentary 20-minute consultation to review your biological profile, identify your key priorities, and map your ideal clinical route.',
      modalityLabel: 'Consultation Modality',
      modalities: {
        online: {
          title: '1-on-1 Online Video Call',
          desc: 'Via Google Meet or Zoom. Available worldwide.'
        },
        inPerson: {
          title: 'In-Person (Pozuelo / Madrid)',
          desc: 'At Biolifestyle Studio. Face-to-face evaluation.'
        },
        express: {
          title: 'Express WhatsApp Consultation',
          desc: 'Direct voice note & initial lab review.'
        }
      },
      dateLabel: 'Preferred Date',
      timeLabel: 'Time Slot',
      priorityLabel: 'What is your most pressing biological priority?',
      priorityOptions: [
        'Persistent bloating, abdominal weight gain or stalled metabolism',
        'Hot flashes, night sweats or severe hormonal imbalance',
        'Chronic exhaustion, executive brain fog and lack of clarity',
        'Comprehensive cellular longevity optimization and muscle strength'
      ],
      recentLabsLabel: 'Do you have blood lab results from the last 6 months?',
      recentLabsOptions: {
        yes: 'Yes, I have recent lab results',
        no: 'No, older than 6 months',
        inProgress: 'I will be testing soon'
      },
      nameLabel: 'Your Full Name',
      namePlaceholder: 'E.g., Sarah Jenkins',
      phoneLabel: 'WhatsApp Phone Number',
      phonePlaceholder: '+1 (555) 000-0000',
      confirmBtn: 'Confirm Appointment Request',
      successTitle: 'Appointment Pre-Booked Successfully!',
      successDesc: 'We will reach out to you via WhatsApp within 24 business hours to confirm your exact time slot and send your preparatory clinical intake form.',
      addToCalendarBtn: 'Add reminder to my calendar',
      whatsappConfirmBtn: 'Confirm right now via WhatsApp',
      closeBtn: 'Close'
    },
    floatingWhatsapp: {
      tooltip: 'Chat with Carolina',
      aria: 'Open WhatsApp chat with Carolina'
    }
  },

  fr: {
    nav: {
      inicio: 'Accueil',
      sobreMi: 'À propos',
      planes: 'Programmes',
      programasEspecializados: 'Programmes Spécialisés',
      diosaProgramTitle: 'Code Déesse 180 Jours',
      diosaProgramDesc: 'Métabolisme, équilibre hormonal et longévité cellulaire.',
      suenoProgramTitle: 'Chronobiologie & Sommeil',
      suenoProgramDesc: 'Rythme circadien et architecture du sommeil profond.',
      menteProgramTitle: 'Esprit & Bio-Longévité',
      menteProgramDesc: 'Clarté mentale et bio-hacking pour femmes 40+.',
      calculadora: 'Calculateur 40+',
      evidencia: 'Preuves Cliniques',
      testimonios: 'Témoignages',
      faq: 'FAQ',
      descubreMetodo: 'Découvrir ma méthode',
      reservaCita: 'Prendre Rendez-vous',
      navegacionPrincipal: 'Navigation Principale',
      autodiagnostico: 'Auto-évaluation 40+',
      atencionDirecto: 'Contact & Accompagnement',
      solicitarEvaluacion: 'Demander un Bilan Initial',
      studioLocation: 'Biolifestyle Studio • Pozuelo de Alarcón / Madrid',
      idioma: 'Langue',
      blog: 'Blog',
      contacto: 'Contact',
      herramientas: 'Outils'
    },
    hero: {
      badge: "Santé Féminine & Longévité pour Femmes 40+",
      titleLine1: 'Votre corps change après 40 ans.',
      titleHighlight: 'Votre stratégie doit changer aussi.',
      subtitle: 'Nutrition Épigénétique : optimisez vos gènes, retrouvez votre poids idéal et révélez votre éclat intérieur.',
      description: 'Pour les femmes qui souhaitent comprendre leur biologie, revitaliser leur métabolisme et vivre cette étape avec une énergie durable et une force sereine.',
      ctaPrimary: 'Découvrir ma méthode',
      ctaSecondary: 'Rejoindre la révolution',
      ctaCalculator: 'Calculer vos Besoins 40+',
      trustYears: '+6 Ans de Spécialisation',
      trustEpigenetics: 'Nutrition Épigénétique',
      trustPersonalized: 'Approche Clinique 100% Personnalisée'
    },
    audioWelcome: {
      badge: 'Message Vocal',
      title: 'Un message personnel de Carolina',
      subtitle: 'Écoutez pourquoi les régimes conventionnels échouent après 40 ans et comment la précision cellulaire transforme votre quotidien.',
      play: 'Écouter le message vocal',
      pause: 'Mettre en pause',
      transcriptBtn: 'Lire la transcription',
      hideTranscript: 'Masquer la transcription',
      transcriptText: '« Bonjour, je suis Carolina Barcellona. Si vous êtes ici, c\'est sans doute que les routines qui fonctionnaient auparavant pour garder votre poids ou votre énergie ne suffisent plus. Ce n\'est pas de votre faute : votre métabolisme et vos récepteurs hormonaux ont évolué. Dans ma consultation, nous ne prescrivons aucun régime restrictif générique ; nous auditons votre épigénétique et votre mode de vie pour concevoir un système durable qui restaure votre force et votre sérénité. Bienvenue dans votre nouvelle décennie dorée. »',
      duration: '0:25 min'
    },
    pillars: {
      badge: 'Architecture de Santé Globale',
      title: 'La Méthode Code Déesse',
      description: 'Un cadre rigoureux pour votre épanouissement et optimisation biologique. Bâtissez une clarté mentale, une discipline métabolique et une vitalité soutenue. Pas une simple motivation : des systèmes durables qui se renforcent avec le temps.',
      items: [
        {
          id: 'pillar-b',
          letter: 'B',
          title: 'Biologie & Épigénétique',
          gradient: 'from-[#FF6161] to-[#EE295C]',
          accentHoverColor: 'group-hover:text-[#FF6161]',
          description: 'Comprenez comment évolue votre biochimie interne. Analyse biologique avancée, harmonisation hormonale et évaluation cellulaire loin des bruits de régimes éphémères.'
        },
        {
          id: 'pillar-n',
          letter: 'N',
          title: 'Nutrition Orthomoléculaire',
          gradient: 'from-[#EE295C] to-[#FF6161]',
          accentHoverColor: 'group-hover:text-[#EE295C]',
          description: 'Auditez vos aliments et remplacez la restriction par la précision cellulaire. Une stratégie qui apaise l\'inflammation, soutient la thyroïde et réactive la sensibilité à l\'insuline.'
        },
        {
          id: 'pillar-m',
          letter: 'M',
          title: 'Mouvement & Force',
          gradient: 'from-[#F69C05] to-[#FF6161]',
          accentHoverColor: 'group-hover:text-[#F69C05]',
          description: 'Développez une masse musculaire métaboliquement active adaptée aux 40+. Préservez votre capital osseux, stimulez vos mitochondries et sculptez votre corps sans épuisement.'
        },
        {
          id: 'pillar-h',
          letter: 'H',
          title: 'Habitudes & Longévité',
          gradient: 'from-[#C7A46B] to-[#EE295C]',
          accentHoverColor: 'group-hover:text-[#C7A46B]',
          description: 'Synchronisez votre repos circadien, dissipez le brouillard mental et régulez le cortisol. Des rituels simples et constants pour garantir votre vitalité sur les décennies à venir.'
        }
      ]
    },
    practicalAreas: {
      title: 'Décliné en 3 Domaines Pratiques',
      subtitle: 'Un protocole tripartite conçu pour harmoniser votre biologie, votre énergie vitale et votre longévité cognitive.',
      areas: [
        {
          id: 'area-cuerpo',
          title: 'Corps & Métabolisme',
          status: 'active',
          statusLabel: 'Actif • Inscriptions Ouvertes',
          description: 'Musculation fonctionnelle intelligente. Nutrition épigénétique pérenne. Désinflammation profonde et recomposition corporelle sans faim ni privation extrême.',
          bullets: [
            'Régulation hormonale et apaisement des bouffées de chaleur',
            'Perte de graisse viscérale tout en préservant la masse maigre',
            'Santé digestive et rééquilibrage du microbiote'
          ],
          icon: 'check_circle',
          ctaText: 'Voir Détails & Dossier Complet'
        },
        {
          id: 'area-sueno',
          title: 'Chronobiologie & Sommeil',
          status: 'upcoming',
          statusLabel: 'Prochainement',
          description: 'Restauration du rythme circadien, architecture du sommeil paradoxal et modulation ciblée cortisol-mélatonine pour un repos réparateur sans somnifères.',
          bullets: [
            'Exposition à la lumière matinale et horloges cellulaires',
            'Protocoles contre les réveils nocturnes de 3h du matin',
            'Apaisement du système nerveux parasympathique'
          ],
          icon: 'schedule',
          ctaText: 'Liste d\'Attente'
        },
        {
          id: 'area-mente',
          title: 'Esprit & Bio-Longévité',
          status: 'upcoming',
          statusLabel: 'Prochainement',
          description: 'Élimination du brouillard cérébral, neuroprotection mitochondriale, concentration exécutive et habitudes de pointe pour femmes leaders.',
          bullets: [
            'Nootropiques naturels et aliments pro-cognition',
            'Énergie constante sans dépendance aux pics de café',
            'Prévention durable de la neuro-inflammation'
          ],
          icon: 'psychology',
          ctaText: 'Liste d\'Attente'
        }
      ]
    },
    whoIsItFor: {
      badge: 'Philosophie & Longévité',
      title: 'À qui s\'adresse cette méthode ?',
      description: 'Aux femmes actives et conscientes de leur biologie qui recherchent de la clarté et une méthode scientifique. Celles qui en ont assez de repartir de zéro avec des régimes génériques. Ce n\'est pas un énième programme : c\'est un système de vie que vous conserverez pour toujours.',
      tags: ['Biologie féminine 40+', 'Sans privation drastique', 'Durable à vie']
    },
    calculator: {
      badge: 'Outil de Précision Cellulaire',
      title: 'Calculateur de Longévité & Protéines 40+',
      subtitle: 'Après 40 ans, la résistance anabolique exige un apport précis en acides aminés et un entraînement en résistance ciblé.',
      ageLabel: 'Âge (Ans)',
      weightLabel: 'Poids actuel (kg)',
      activityLabel: 'Niveau d\'activité physique',
      activityOptions: {
        sedentary: 'Sédentaire (Peu ou pas d\'exercice régulier)',
        moderate: 'Modéré (Marche active / Yoga / Pilates 2-3 fois/semaine)',
        strength: 'Active / Musculation (Renforcement 3-5 fois/semaine)'
      },
      goalLabel: 'Objectif Prioritaire',
      goalOptions: {
        metabolism: 'Recomposition corporelle et déstockage viscéral',
        muscle: 'Prévention de la sarcopénie et densité osseuse',
        hormones: 'Équilibre hormonal et vitalité mitochondriale'
      },
      calculateBtn: 'Calculer ma Stratégie Biologique',
      resultsTitle: 'Vos Paramètres Physiologiques Ciblés',
      proteinTarget: 'Objectif Protéique Journalier',
      proteinPerMeal: 'Seuil de Leucine par Repas',
      trainingTarget: 'Séances de Renforcement Hebdomadaires',
      circadianWindow: 'Fenêtre Nutritionnelle Circadienne',
      biomarkersTitle: 'Biomarqueurs Clés à Contrôler en Laboratoire',
      consultCarolinaBtn: 'Transmettre ce profil à Carolina sur WhatsApp',
      copyBtn: 'Copier les Résultats',
      copiedMsg: 'Copié dans le presse-papiers !',
      disclaimer: 'Calcul indicatif basé sur les données cliniques de nutrition orthomoléculaire pour femmes 40+. Ne remplace pas un diagnostic médical.'
    },
    diagnosticSection: {
      badge: 'Auto-diagnostic',
      title: 'Pourquoi êtes-vous ici ?',
      subtitle: 'Identifier les signaux de votre corps constitue le premier pas vers votre transformation épigénétique.',
      bannerPrompt: 'Vous reconnaissez-vous dans au moins deux de ces schémas biologiques ?',
      bannerBtn: 'Passer le Test de Longévité (2 min)',
      cards: [
        {
          id: 'diag-1',
          icon: 'thermostat',
          title: 'Bouffées de Chaleur & Silhouette',
          description: 'Vous sentez votre silhouette changer — bouffées de chaleur, stockage abdominal inhabituel, digestion ralentie — et souhaitez une méthode personnalisée.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#FF6161]',
          borderColor: 'border-[#F8CFD5]'
        },
        {
          id: 'diag-2',
          icon: 'battery_charging_full',
          title: 'Baisse d\'Énergie & Vitalité',
          description: 'Vous manquez d\'énergie au réveil et souhaitez vous sentir forte, vive et en harmonie avec votre corps chaque matin.',
          badgeBg: 'bg-amber-50',
          iconColor: 'text-[#F69C05]',
          borderColor: 'border-[#F69C05]/30'
        },
        {
          id: 'diag-3',
          icon: 'psychology_alt',
          title: 'Brouillard Mental & Attention',
          description: 'Vous ressentez des pertes de concentration, une mémoire ralentie ou une clarté mentale fluctuante qui pénalise vos activités professionnelles.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#EE295C]',
          borderColor: 'border-[#F8CFD5]'
        },
        {
          id: 'diag-4',
          icon: 'self_improvement',
          title: 'Insomnie, Stress & Humeur',
          description: 'Votre sommeil (insomnie, réveils nocturnes), votre stress ou votre humeur ont changé et vous souhaitez les apaiser avec une stratégie bienveillante et scientifique adaptée à cette étape.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#FF6161]',
          borderColor: 'border-[#F8CFD5]'
        },
        {
          id: 'diag-5',
          icon: 'all_inclusive',
          title: 'Durabilité sur le Long Terme',
          description: 'Vous refusez un autre régime punitif. Vous désirez un art de vivre élégant que vous prendrez plaisir à maintenir pendant des décennies.',
          badgeBg: 'bg-amber-50',
          iconColor: 'text-[#F69C05]',
          borderColor: 'border-[#F69C05]/30'
        },
        {
          id: 'diag-6',
          icon: 'supervised_user_circle',
          title: 'Accompagnement Clinique Individuel',
          description: 'Vous souhaitez cesser d\'improviser seule et vous faire guider par une spécialiste qui intègre vos analyses et votre parcours.',
          badgeBg: 'bg-[#F8CFD5]/40',
          iconColor: 'text-[#EE295C]',
          borderColor: 'border-[#F8CFD5]'
        }
      ]
    },
    diagnosticModal: {
      title: 'Bilan de Santé Biologique',
      stepOf: 'Étape',
      previous: 'Question précédente',
      resultBadge: 'Résultat d\'Évaluation 40+',
      resultTitle: 'Diagnostic de Santé Biologique',
      resultStateLabel: 'Statut Physiologique Observé',
      nextStepTitle: 'Prochaine étape conseillée :',
      nextStepDesc: 'Carolina peut analyser ces données avec vos bilans sanguins récents lors d\'une consultation dédiée pour définir votre stratégie exacte.',
      whatsappCta: 'Envoyer ce résultat à Carolina sur WhatsApp',
      retakeBtn: 'Recommencer le test',
      levels: {
        low: {
          level: 'Équilibre Physiologique Favorable',
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          summary: 'Votre biologie réagit bien, mais c\'est le moment idéal pour verrouiller votre masse musculaire et préserver vos réserves cellulaires face aux changements hormonaux à venir.',
          pillar: 'Piliers clés : Mouvement de Force et Habitudes de Longévité.'
        },
        medium: {
          level: 'Alerte de Dérégulation Métabolique et Hormonale Précoce',
          color: 'text-amber-800 bg-amber-50 border-amber-200',
          summary: 'Votre organisme exprime la transition 40+ : résistance débutante à l\'insuline, pic de cortisol nocturne et rétention. Les régimes hypocaloriques aggraveront la fatigue.',
          pillar: 'Piliers clés : Reset Cellulaire (Nutrition Orthomoléculaire) & Synchronisation Circadienne.'
        },
        high: {
          level: 'Déséquilibre Bio-Hormonal & Épigénétique Marqué',
          color: 'text-[#EE295C] bg-[#F8CFD5]/30 border-[#EE295C]/30',
          summary: 'La fatigue chronique, le sommeil haché et l\'inflammation témoignent d\'un stress oxydatif important. Un accompagnement clinique individuel est indispensable.',
          pillar: 'Recommandation immédiate : Programme Code Déesse 180 Jours avec supervision clinique directe.'
        }
      },
      questions: [
        {
          id: 'q-energy',
          category: 'Énergie & Mitochondries',
          title: 'Comment qualifieriez-vous votre niveau d\'énergie durant la journée ?',
          options: [
            { text: 'Je me réveille en pleine forme et conserve un rythme stable jusqu\'au soir sans coup de barre.', score: 0, note: 'Régulation optimale' },
            { text: 'J\'ai un net coup de fatigue l\'après-midi et dépends du café ou du sucre pour continuer.', score: 2, note: 'Instabilité glycémique et fatigue surrénalienne' },
            { text: 'Je me réveille épuisée malgré 8 heures au lit ; je ressens une fatigue constante.', score: 3, note: 'Épuisement mitochondrial profond' }
          ]
        },
        {
          id: 'q-sleep',
          category: 'Chronobiologie & Repos',
          title: 'À quoi ressemble votre sommeil nocturne ?',
          options: [
            { text: 'Je dors d\'une traite et me lève parfaitement reposée.', score: 0, note: 'Rythme circadien aligné' },
            { text: 'Je me réveille systématiquement entre 2h et 4h du matin ou souffre de sueurs nocturnes.', score: 3, note: 'Fluctuation d\'œstrogènes et pic de cortisol' },
            { text: 'J\'ai du mal à m\'endormir car mon esprit ressasse continuellement des pensées.', score: 2, note: 'Dérégulation axe HPA et mélatonine' }
          ]
        },
        {
          id: 'q-metabolism',
          category: 'Métabolisme & Silhouette',
          title: 'Avez-vous remarqué des changements corporels qui ne se produisaient jamais auparavant ?',
          options: [
            { text: 'Je conserve ma silhouette et ma digestion reste fluide sans variations brutales.', score: 0, note: 'Flexibilité métabolique' },
            { text: 'En mangeant de la même façon, j\'accumule de la graisse abdominale et des ballonnements fréquents.', score: 3, note: 'Résistance à l\'insuline et inflammation diffuse' },
            { text: 'Je souffre de lenteurs digestives et de rétention d\'eau cyclique.', score: 2, note: 'Microbiote perturbé et surcharge hépatique' }
          ]
        },
        {
          id: 'q-brain',
          category: 'Esprit & Clarté Mentale',
          title: 'Ressentez-vous du "brouillard mental" ou des pertes de concentration ?',
          options: [
            { text: 'Non, ma vivacité intellectuelle, ma mémoire et mon focus restent très nets.', score: 0, note: 'Neuroprotection efficace' },
            { text: 'J\'ai parfois du mal à trouver mes mots ou à maintenir mon attention sur des dossiers complexes.', score: 2, note: 'Neuro-inflammation légère et fluctuation hormonale' },
            { text: 'J\'oublie fréquemment des détails du quotidien et ressens une lenteur cognitive.', score: 3, note: 'Impact cognitif de la transition 40+' }
          ]
        }
      ]
    },
    bioStory: {
      heading: 'Je ne cherchais pas un énième régime. J\'ai conçu une vraie stratégie clinique.',
      badge: 'Spécialiste en Épigénétique & Santé Féminine',
      specialistTitle: 'Health & Longevity Specialist 40+',
      title: 'Nutrition clinique, médecine du mode de vie et optimisation biologique.',
      para1: 'Avec plus de 6 ans d\'expérience clinique auprès des femmes, concevant des stratégies de bien-être et de nutrition sur mesure. Sa formation allie nutrition clinique intégrative, diétothérapie médicale, nutrition orthomoléculaire, nutrigénomique, épigénétique et médecine fonctionnelle.',
      para2: 'Ayant exercé en collaboration avec des centres médicaux à Madrid, elle accompagne les transitions métaboliques, le raffermissement musculaire, la santé intestinale et le vieillissement harmonieux. Sa méthode rejette les modèles préformatés : elle croise votre histoire, vos bilans sanguins et vos aspirations réelles.',
      statYears: '6+',
      statYearsLabel: 'Ans d\'Expérience',
      statPersonal: '100%',
      statPersonalLabel: 'Sur Mesure',
      statRating: '5.0',
      statRatingLabel: 'Sur Google Reviews',
      contactBtn: 'Prendre contact avec Carolina',
      trajectoryBtn: 'Découvrir mon parcours complet'
    },
    clinicalEvidence: {
      badge: 'Preuves Cliniques Mesurées',
      title: 'Résultats Cliniques & Biomarqueurs',
      subtitle: 'Bilans sanguins et analyses réelles de femmes 40+ avant et après le protocole Code Déesse.',
      cases: [
        {
          id: 'case-1',
          clientProfile: 'Elena R. • Directrice Financière',
          age: 48,
          symptoms: 'Résistance à l\'insuline, prise de tour de taille et fatigue intense en fin d\'après-midi.',
          intervention: 'Protocole de nutrition épigénétique, détox hépatique et renforcement musculaire avec fenêtre 14:10.',
          duration: '12 semaines (Méthode Code Déesse)',
          markers: [
            { name: 'Insuline à Jeun', before: '14.8', after: '5.4', unit: 'µIU/mL', status: '-63% (Plage optimale)' },
            { name: 'Indice HOMA-IR', before: '3.4', after: '1.1', unit: 'ratio', status: 'Sensibilité rétablie' },
            { name: 'Graisse Viscérale', before: 'Niveau 9', after: 'Niveau 5', unit: 'échelle', status: '-4 niveaux' }
          ],
          doctorNote: 'Normalisation glycémique totale sans médication ; réduction du tour de taille et regain d\'endurance exécutive.'
        },
        {
          id: 'case-2',
          clientProfile: 'Marta G. • Architecte',
          age: 52,
          symptoms: 'Réveils à 3h du matin, bouffées de chaleur invalidantes et brouillard cérébral.',
          intervention: 'Synchronisation circadienne lumineuse, magnésium orthomoléculaire, phyto-œstrogènes et modulation du cortisol.',
          duration: '8 semaines',
          markers: [
            { name: 'Cortisol Salivaire Nocturne', before: '18.2', after: '4.1', unit: 'nmol/L', status: 'Courbe physiologique normale' },
            { name: 'CRP Ultra-Sensible (hs-CRP)', before: '3.8', after: '0.6', unit: 'mg/L', status: 'Inflammation résolue' },
            { name: 'Score d\'Efficacité du Sommeil', before: '58%', after: '89%', unit: 'score', status: '+31% sommeil réparateur' }
          ],
          doctorNote: 'Disparition de 90% des bouffées de chaleur et rétablissement d\'une clarté cognitive parfaite lors de projets intenses.'
        }
      ]
    },
    testimonials: {
      badge: 'Témoignages Réels',
      title: 'Laissez-vous inspirer par ces parcours',
      subtitle: 'Des femmes qui ont travaillé à mes côtés et ont retrouvé silhouette et sérénité.',
      googleLink: 'Consulter les avis sur mon profil Google',
      items: [
        {
          id: 'test-1',
          name: 'Raquel Llorente',
          initials: 'RL',
          location: 'Madrid • Avis vérifié Google',
          program: 'Méthode Code Déesse',
          rating: 5,
          text: '« Carolina est une praticienne remarquable ! Le résultat pour moi a été un 10/10. Mes problèmes de ballonnements ont disparu et je sais désormais comment nourrir mon organisme avec plaisir. J\'ai perdu 6 kg de graisse progressivement sans jamais souffrir de la faim. J\'ai retrouvé une énergie débordante ! »'
        },
        {
          id: 'test-2',
          name: 'Carmen Moreno',
          initials: 'CM',
          location: 'Pozuelo • Avis vérifié Google',
          program: 'Accompagnement 1 à 1',
          rating: 5,
          text: '« Rencontrer Caro a transformé ma relation avec l\'alimentation et avec mon corps. J\'étais venue pour améliorer mes repas, et j\'ai vécu une métamorphose bien plus profonde. Aujourd\'hui je ressens une paix et une énergie incomparables. Elle écoute, comprend et guide avec bienveillance. »'
        },
        {
          id: 'test-3',
          name: 'Vanesa Carolina',
          initials: 'VC',
          location: 'Madrid • Avis vérifié Google',
          program: 'Optimisation Métabolique',
          rating: 5,
          text: '« Mon expérience avec Carolina a été excellente. Ses recommandations cliniques précises ont été déterminantes pour relancer mon métabolisme à une période où je pensais que rien ne fonctionnait. Je la recommande chaleureusement à toute femme en quête d\'un changement sincère ! »'
        }
      ]
    },
    faqs: {
      badge: 'Clarté Totale',
      title: 'Questions Fréquentes',
      subtitle: 'Des réponses transparentes sur l\'élaboration de votre feuille de route de longévité.',
      items: [
        {
          id: 'faq-1',
          question: 'Carolina Barcellona est-elle qualifiée pour concevoir un protocole adapté à mes besoins ?',
          answerLead: 'Oui. Carolina Barcellona possède plus de 6 ans d\'expérience clinique spécialisée dans l\'accompagnement des femmes.',
          answer: 'Sa formation réunit la nutrition clinique intégrative, la diétothérapie, la micronutrition orthomoléculaire, la nutrigénomique, l\'épigénétique et la médecine du mode de vie. Sa pratique ne repose jamais sur des protocoles préfabriqués : elle analyse vos antécédents, vos bilans sanguins et vos objectifs pour bâtir une démarche personnalisée.'
        },
        {
          id: 'faq-2',
          question: 'En quoi la Méthode Déesse est-elle différente ?',
          answerLead: 'Ce n\'est ni un énième régime, ni un protocole impersonnel.',
          answer: 'La Méthode Code Déesse part de votre singularité biologique : de votre histoire, de vos biomarqueurs et de la façon dont votre corps réagit après 40 ans. Nous combinons métabolisme, musculation, repos circadien et gestion du cortisol pour travailler avec votre physiologie, et non contre elle.'
        },
        {
          id: 'faq-3',
          question: 'En quoi consiste le parcours de la méthode Déesse ?',
          answer: 'C\'est un accompagnement personnalisé de 180 jours (6 mois) pour femmes 40+ désireuses de comprendre leurs mutations biologiques et d\'adopter des réflexes pérennes. Nous débutons par un bilan approfondi de vos analyses et ajustons continuellement la stratégie à votre rythme biologique.'
        },
        {
          id: 'faq-4',
          question: 'Quelle place occupe le mouvement dans la Méthode ?',
          answer: 'L\'exercice physique est un pilier fondamental après 40 ans. Il ne s\'agit pas de vous épuiser en cardio intensif, mais de combiner judicieusement renforcement musculaire, mobilité et mouvement quotidien pour protéger la densité osseuse et relancer la sensibilité insulinique.'
        },
        {
          id: 'faq-5',
          question: 'La méthode peut-elle m\'aider face aux bouffées de chaleur et à la préménopause ?',
          answer: 'Oui. Les bouffées de chaleur, sueurs nocturnes, insomnies et variations d\'humeur découlent des fluctuations hormonales. Nous agissons sur les facteurs épigénétiques modulables pour que vous traversiez cette période avec sérénité et vitalité.'
        },
        {
          id: 'faq-6',
          question: 'Vos programmes sont-ils associés à des marques de vente pyramidale comme Herbalife ?',
          answerLead: 'Absolument pas.',
          answer: 'Ma pratique s\'appuie rigoureusement sur la science médicale, la personnalisation clinique et la durabilité à long terme. Je ne travaille avec aucun produit marketing ou substitut artificiel.'
        },
        {
          id: 'faq-7',
          question: 'Quels types de compléments conseillez-vous habituellement ?',
          answer: 'La supplémentation n\'est jamais systématique. Lorsqu\'elle est indiquée, je sélectionne des vitamines, minéraux, acides aminés ou adaptogènes de qualité pharmaceutique ciblés selon vos analyses sanguines. Moins de gélules superflues, plus d\'efficacité ciblée.'
        }
      ]
    },
    ctaSection: {
      badge: 'Votre Nouvelle Étape Commence Ici',
      title: 'Il est temps de rayonner de vitalité et de force cellulaire.',
      description: 'N\'attendez plus que la fatigue ou les variations hormonales choisissent à votre place. Faites le choix d\'une santé éclairée et sur mesure.',
      whatsappBtn: 'Échanger avec Carolina',
      calendlyBtn: 'Prendre RDV sur Calendly',
      bookingBtn: 'Réserver un Bilan Initial',
      locationNote: 'Consultations en présentiel à Pozuelo / Madrid & en ligne dans le monde entier'
    },
    collaborations: {
      title: 'Collaborations Cliniques & Réseau Professionnel à Madrid',
      partners: ['AXO LONGEVITY', 'EPIXLIFE']
    },
    footer: {
      brandDesc: 'Nutrition Épigénétique, optimisation métabolique et médecine du mode de vie pour femmes après 40 ans.',
      location: 'Biolifestyle Studio • Pozuelo de Alarcón / Madrid',
      exploreTitle: 'Explorer',
      inicio: 'Accueil',
      sobreMi: 'À propos',
      metodoDiosa: 'Méthode Code Déesse 180',
      testEvaluacion: 'Test d\'Auto-évaluation',
      calculadora: 'Calculateur 40+',
      casosExito: 'Témoignages',
      preguntasFrecuentes: 'FAQ',
      newsletterTitle: 'Lettre Cellulaire 40+',
      newsletterDesc: 'Chaque semaine, l\'essentiel de la science épigénétique, de la chronobiologie et des recettes saines pour votre métabolisme.',
      newsletterPlaceholder: 'Votre adresse email',
      newsletterBtn: 'S\'abonner',
      newsletterSuccess: 'Merci de rejoindre notre communauté de femmes 40+ ! Un email de bienvenue vous a été envoyé.',
      paymentMethods: 'MOYENS DE PAIEMENT :',
      allRights: 'Tous droits réservés.',
      legalNotice: 'Mentions Légales',
      privacyPolicy: 'Politique de Confidentialité',
      cookiePolicy: 'Gestion des Cookies'
    },
    programModal: {
      badge: 'Programme Actif • Inscriptions Ouvertes',
      title: 'Méthode Code Déesse · 180 Jours',
      subtitle: 'Diagnostic + 3 phases : Activation, Réparation ou Construction, Optimisation. Pour femmes 40+.',
      structureTitle: 'Diagnostic + 3 phases en un flux continu',
      phases: [
        {
          number: 0,
          title: 'Diagnostic — Vous êtes unique, vos besoins aussi',
          description: 'Collecte de données + informations personnelles pour personnaliser la méthode. Chaque donnée alimente la transformation : un flux continu, pas un bloc séparé.',
          color: 'bg-[#C7A46B]'
        },
        {
          number: 1,
          title: 'Phase 1 · Activation — D\'abord apaiser le bruit',
          description: 'Stress, inflammation, désordre interne. Nous apaisons le système pour que le corps réponde à nouveau.',
          color: 'bg-[#FF6161]'
        },
        {
          number: 2,
          title: 'Phase 2 · Réparation ou Construction — Ensuite réparer',
          description: 'Métabolisme, muscle, stabilité hormonale. Nous reconstruisons la base physiologique.',
          color: 'bg-[#EE295C]'
        },
        {
          number: 3,
          title: 'Phase 3 · Optimisation — Puis affiner',
          description: 'Énergie, longévité, cohérence biologique, éclat. Nous affinons pour des résultats durables.',
          color: 'bg-[#F69C05]'
        }
      ],
      includedTitle: 'Que comprend l\'accompagnement ?',
      includedItems: [
        'Séances individuelles de consultation clinique',
        'Stratégie nutritionnelle épigénétique sur mesure',
        'Support hebdomadaire direct sur WhatsApp privé',
        'Protocoles de renforcement musculaire adapté',
        'Livrets de recettes anti-inflammatoires et fiches pratiques',
        'Ajustements individualisés à chaque étape'
      ],
      ctaWhatsapp: 'Vérifier la Disponibilité avec Carolina',
      backBtn: 'Retour'
    },
    waitlistModal: {
      badge: 'Liste d\'Attente Prioritaire',
      desc: 'Soyez parmi les premières à bénéficier d\'un accès privilégié à ce nouveau protocole sous la supervision directe de Carolina.',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Adresse email',
      emailPlaceholder: 'vous@email.com',
      goalLabel: 'Quel est votre plus grand défi dans ce domaine ? (Facultatif)',
      goalPlaceholder: 'Ex : Réveils à 3h, manque de concentration, fatigue...',
      submitBtn: 'Rejoindre la liste prioritaire',
      successTitle: 'Vous êtes inscrite sur la liste prioritaire !',
      successDesc: 'Nous vous préviendrons en avant-première dès l\'ouverture des places avec des conditions préférentielles.',
      closeBtn: 'Fermer'
    },
    trajectoryModal: {
      title: 'Carolina Barcellona',
      specialist: 'Nutritionniste Clinique, Épigénétique & Longévité 40+',
      sectionTitle: 'Parcours et Qualifications Cliniques',
      intro: 'Carolina Barcellona accompagne depuis plus de 6 ans les femmes dans leur transition biologique des 40 et 50 ans. Son approche conjugue les domaines les plus avancés de la santé intégrative :',
      items: [
        {
          icon: 'school',
          color: 'text-[#FF6161]',
          bold: 'Nutrition Clinique & Intégrative :',
          desc: 'Spécialisation en diétothérapie médicale et rééquilibrage métabolique.'
        },
        {
          icon: 'biotech',
          color: 'text-[#EE295C]',
          bold: 'Nutrigénétique & Épigénétique :',
          desc: 'Étude de la modulation de l\'expression des gènes protecteurs de longévité par l\'alimentation.'
        },
        {
          icon: 'medication',
          color: 'text-[#F69C05]',
          bold: 'Nutrition Orthomoléculaire :',
          desc: 'Utilisation thérapeutique de micronutriments et adaptogènes purs pour la régénération cellulaire.'
        },
        {
          icon: 'fitness_center',
          color: 'text-[#C7A46B]',
          bold: 'Médecine du Mouvement & Mode de Vie :',
          desc: 'Renforcement musculaire fonctionnel et préservation de la masse osseuse adaptés au corps féminin mature.'
        }
      ],
      outro: 'Depuis son cabinet à Biolifestyle Studio (Pozuelo de Alarcón, Madrid) et via ses consultations en ligne à l\'international, elle aide les femmes actives à s\'appuyer sur des fondements scientifiques solides dans un cadre chaleureux et bienveillant.',
      closeBtn: 'Compris'
    },
    bookingModal: {
      badge: 'Bilan Initial de Découverte',
      title: 'Planifier votre Séance avec Carolina',
      subtitle: 'Un échange de 20 minutes pour analyser votre profil biologique, identifier vos priorités majeures et définir le protocole le plus adapté.',
      modalityLabel: 'Modalité de consultation',
      modalities: {
        online: {
          title: 'Visioconférence 1 à 1 en Ligne',
          desc: 'Via Google Meet ou Zoom. Disponible dans le monde entier.'
        },
        inPerson: {
          title: 'En Présentiel à Pozuelo / Madrid',
          desc: 'Au Biolifestyle Studio. Évaluation physique complète.'
        },
        express: {
          title: 'Évaluation Express sur WhatsApp',
          desc: 'Message vocal et pré-analyse de vos bilans sanguins.'
        }
      },
      dateLabel: 'Date souhaitée',
      timeLabel: 'Créneau horaire',
      priorityLabel: 'Quelle est votre priorité biologique essentielle ?',
      priorityOptions: [
        'Ballonnements constants, prise de masse grasse abdominale ou poids bloqué',
        'Bouffées de chaleur, sueurs nocturnes ou déséquilibre hormonal',
        'Fatigue chronique, brouillard mental et baisse de concentration',
        'Optimisation globale de la longévité cellulaire et force musculaire'
      ],
      recentLabsLabel: 'Disposez-vous d\'un bilan sanguin de moins de 6 mois ?',
      recentLabsOptions: {
        yes: 'Oui, j\'ai des analyses récentes',
        no: 'Non, datant de plus de 6 mois',
        inProgress: 'Je vais en réaliser prochainement'
      },
      nameLabel: 'Votre nom complet',
      namePlaceholder: 'Ex : Claire Dubois',
      phoneLabel: 'Numéro WhatsApp',
      phonePlaceholder: '+33 6 00 00 00 00',
      confirmBtn: 'Valider ma Demande de Rendez-vous',
      successTitle: 'Séance pré-réservée avec succès !',
      successDesc: 'Nous vous contacterons par WhatsApp sous 24 heures ouvrées pour confirmer l\'horaire définitif et vous transmettre votre questionnaire clinique préalable.',
      addToCalendarBtn: 'Ajouter le rappel à mon calendrier',
      whatsappConfirmBtn: 'Confirmer immédiatement sur WhatsApp',
      closeBtn: 'Fermer'
    },
    floatingWhatsapp: {
      tooltip: 'Discuter avec Carolina',
      aria: 'Ouvrir la conversation WhatsApp avec Carolina'
    }
  }
};
