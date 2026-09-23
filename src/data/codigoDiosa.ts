/**
 * Código Diosa — single source of truth (Production handoff v2, Sep 2026).
 *
 * - Plan length: 180 days (6 months). The old 90-day / €750 framing is retired.
 * - Price: PENDING client confirmation. Never publish a number — use PRICE_PENDING.
 * - Partners are external add-ons: pricing + checkout happen on their sites.
 * - Second Google Form link is NOT implemented (purpose unconfirmed).
 */

export const CODIGO_DIOSA = {
  planDays: 180,
  planLabelEs: '180 días · 6 meses',
  planLabelEn: '180 days · 6 months',

  // Price is pending — render placeholder / "price on request" state.
  pricePending: true as const,

  applyFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfKDIAwk20xEIZWxstOqi2-L51rfwUAhV9ymJI3vy_ZgqE5Vw/viewform',

  // NOTE: second form link pasted by client without explanation — DO NOT USE
  // until she confirms purpose:
  // https://docs.google.com/forms/d/e/1FAIpQLSd98nx_XUr-KBVVNcLoL0W8uyH45keZDbCBROR4hFocbHzQHA/viewform

  partners: {
    axo: {
      name: 'Axo Longevity',
      whatWeTestUrl: 'https://www.axolongevity.com/es/what-we-test',
      referralUrl: 'https://axo.link/carolina',
      note: 'Test vendido por separado en la web de Axo. Precio y checkout en axo.link/carolina.',
    },
    epixlife: {
      name: 'Epixlife',
      reportUrl: 'https://epixlife.com/informe-optimizacion/',
      note: 'Informe vendido por separado en epixlife.com.',
    },
  },

  paymentMethods: ['Stripe', 'Klarna'] as const,

  // Method narrative: Diagnóstico blends into 3 phases (single flow).
  phasesEs: [
    {
      id: 'diagnostico',
      step: 'Diagnóstico',
      title: 'Diagnóstico — Eres única y tus necesidades también lo son',
      description:
        'Recolección de datos + información de la persona para personalizar el método. Cada dato recogido aquí conecta visiblemente con los pasos de la transformación: un flujo continuo, no un bloque separado.',
    },
    {
      id: 'activacion',
      step: 'Fase 1 · Activación',
      title: 'Activación — Primero bajamos el ruido',
      description: 'Estrés, inflamación, desorden interno. Calmamos el sistema para que el cuerpo vuelva a responder.',
    },
    {
      id: 'reparacion',
      step: 'Fase 2 · Reparación o Construcción',
      title: 'Reparación o Construcción — Después reparamos',
      description: 'Metabolismo, músculo, estabilidad hormonal. Reconstruimos la base fisiológica.',
    },
    {
      id: 'optimizacion',
      step: 'Fase 3 · Optimización',
      title: 'Optimización — Y entonces afinamos',
      description: 'Energía, longevidad, coherencia biológica, belleza. Afinamos para sostener el resultado décadas.',
    },
  ],

  // Hero copy proposals (§6) — PENDING Carolina approval. Neither is live.
  // To activate after approval, set heroOption to 'A' | 'B' and wire the
  // dossier hero to heroCopy[CODIGO_DIOSA.heroOption]. Live copy stays
  // untouched until then.
  heroOption: 'none' as 'none' | 'A' | 'B',
  heroCopy: {
    A: {
      headline: 'Tu cuerpo no necesita más dietas. Necesita un método.',
      cta: 'Empieza tu diagnóstico',
    },
    B: {
      headline: 'Recupera el control de tu cuerpo, en la etapa que más lo necesita.',
      cta: 'Aplica al Método Código Diosa',
    },
  },

  // Expanded climacteric pain points (client-confirmed).
  painPointsEs: [
    'Falta de tiempo',
    'Cambios en el cuerpo',
    'Falta de energía',
    'Sofocos',
    'Insomnio',
    'Cambios en el estado de ánimo',
  ],
} as const;

export type CodigoDiosaPhase = (typeof CODIGO_DIOSA.phasesEs)[number];
