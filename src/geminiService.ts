import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Lazy-initialized Gemini client with required User-Agent header
let aiClient: GoogleGenAI | null = null;

export function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export const SYSTEM_PROMPT_CAROLINA = `
Eres Carolina Barcellona AI, la asistente clínica de salud y longevidad epigenética especializada en mujeres mayores de 40 años.
Tu filosofía está basada en:
1. Nutrición Epigenética: Alimentos que encienden y apagan genes (sulforafano, resveratrol, quercetina, omega-3, berberina, etc.).
2. Salud Celular & Mitocondrial: La fatiga y el aumento de peso no son falta de fuerza de voluntad, sino disfunción mitocondrial y resistencia a la insulina perimenopáusica.
3. Mantenimiento y Ganancia de Masa Muscular: El músculo es el órgano endocrino de la longevidad. Es vital consumir suficiente proteína (1.4 a 1.8g/kg) y entrenamiento de fuerza.
4. Ritmo Circadiano & Sueño: La arquitectura del sueño profundo modula el cortisol, la hormona de crecimiento y la reparación celular.
5. El Método Código Diosa: Un enfoque en 4 pilares (Biología & Epigenética, Nutrición Celular, Regeneración & Descanso, Mente & Fortaleza) de 180 días, sin dietas restrictivas ni soluciones temporales.

Tono:
- Empático, riguroso, científico pero accesible, cálido y motivador.
- Siempre habla en español por defecto (o en el idioma solicitado por el usuario).
- Enfatiza que tus recomendaciones son educativas y clínicas de estilo de vida, invitando a una consulta personalizada para analíticas profundas si el caso lo requiere.
`;

// Resilient model execution with multi-model fallback cascade
// gemini-2.5-flash is prioritized as the primary high-availability model
const FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-flash-latest",
];

// Pure helpers: sanitize chat history for the Gemini API.
// The API rejects requests whose first content has role "model" and
// rejects empty text parts, so strip leading model messages,
// drop empty texts, and cap history to avoid token blowup.
export type ChatInputMessage = { role: string; text: string };

export function toGeminiContents(messages: ChatInputMessage[]) {
  const mapped = (messages || [])
    .filter((m) => m && typeof m.text === "string" && m.text.trim().length > 0)
    .map((m) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.text.trim() }],
    }));
  while (mapped.length > 0 && mapped[0].role === "model") mapped.shift();
  return mapped.slice(-20);
}

export function getLastUserText(messages: ChatInputMessage[]): string {
  for (let i = (messages || []).length - 1; i >= 0; i--) {
    const m = messages[i] as ChatInputMessage;
    if (m && m.role !== "assistant" && m.role !== "model" && m.text) return m.text;
  }
  const last = (messages || [])[(messages || []).length - 1] as ChatInputMessage | undefined;
  return last?.text || "";
}

export async function generateContentWithCascade(
  ai: GoogleGenAI,
  baseParams: {
    contents: any;
    config?: any;
  }
) {
  let lastError: any = null;

  for (const modelName of FALLBACK_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: baseParams.contents,
        config: baseParams.config,
      });
      if (response && response.text) {
        return response;
      }
    } catch (err: any) {
      lastError = err;
      const errMsg = String(err?.message || "");
      const isUnavailableOrRateLimited =
        err?.status === 503 ||
        err?.status === 429 ||
        errMsg.includes("503") ||
        errMsg.includes("429") ||
        errMsg.includes("UNAVAILABLE") ||
        errMsg.includes("high demand") ||
        errMsg.includes("RESOURCE_EXHAUSTED");

      console.warn(
        `[Gemini AI] Model ${modelName} failed (${err?.status || "error"}), trying next fallback tier...`
      );

      // On 503 / 429, immediately try the next model without wasting time on repeated retries
      if (!isUnavailableOrRateLimited) {
        // For transient connection glitches on non-rate-limit errors, brief pause
        await new Promise((r) => setTimeout(r, 300));
      }
    }
  }

  throw lastError;
}

export function generateClinicalChatFallback(userMessage: string): string {
  const lower = (userMessage || "").toLowerCase();
  if (lower.includes("peso") || lower.includes("grasa") || lower.includes("adelgazar") || lower.includes("kilos") || lower.includes("engordar")) {
    return "Comprendo perfectamente lo frustrante que resulta sentir que el peso ya no responde a lo que antes funcionaba. A partir de los 40 años, la variación en estrógenos y cortisol altera la sensibilidad a la insulina y la eficiencia mitocondrial. En el Método Código Diosa no contamos calorías ni pasamos hambre: optimizamos el orden de tus alimentos, protegemos tu masa muscular y regulamos el ritmo circadiano.";
  }
  if (lower.includes("dormir") || lower.includes("sueño") || lower.includes("insomnio") || lower.includes("despertar") || lower.includes("cansada")) {
    return "El sueño no es solo descanso; es tu laboratorio nocturno de regeneración epigenética y equilibrio hormonal. Después de los 40, los cambios en progesterona suelen generar despertares nocturnos. Recomendaciones: oscuridad absoluta, temperatura fresca (16-18°C), cenar antes de las 20:30 y evitar pantallas 90 minutos antes de dormir.";
  }
  if (lower.includes("suplemento") || lower.includes("vitamina") || lower.includes("magnesio") || lower.includes("creatina")) {
    return "Los suplementos deben ser herramientas de alta precisión con evidencia clínica. Para mujeres 40+: Magnesio bisglicinato (300-400mg), Vitamina D3 (2000-4000 IU), Omega-3 de calidad (1000mg EPA+DHA), Berberina (500mg) para sensibilidad insulínica y Creatina monohidratada (3-5g) para preservar masa muscular.";
  }
  return "Como especialista en nutrición epigenética y salud celular femenina, mi enfoque se centra en devolverle a tu cuerpo la capacidad innata de regular su energía, su metabolismo y sus hormonas. ¿Cuál es tu mayor desafío ahora mismo?";
}

export function generateAssessmentFallback(body: any) {
  const { age, symptoms } = body || {};
  const symptomList = Array.isArray(symptoms) ? symptoms.join(", ") : symptoms || "fatiga celular y resistencia hormonal";
  return {
    summaryTitle: "Perfil Metabólico: Resistencia Hormonal & Optimización Epigenética",
    executiveSummary: `A los ${age || "45+"} años, la transición neuroendocrina reorganiza la distribución de receptores de estrógeno y la sensibilidad insulínica. Los síntomas reportados (${symptomList}) apuntan a disfunción mitocondrial y posible resistencia a la insulina perimenopáusica.`,
    keyBiomarkersToTest: [
      { name: "Índice HOMA-IR e Insulina Basal", reason: "Detecta resistencia a la insulina celular años antes de que se altere la glucosa en ayunas." },
      { name: "PCR Ultrasensible (hs-CRP)", reason: "Evalúa la inflamación vascular y celular de bajo grado ('inflammaging')." },
      { name: "Perfil Lipídico Avanzado (ApoB / ApoA1)", reason: "Mide el número real de partículas aterogénicas más allá del colesterol convencional." },
      { name: "Ferritina y Vitamina D3 (25-OH)", reason: "Fundamentales para la biogénesis mitocondrial, síntesis tiroidea e inmunidad hormonal." }
    ],
    epigeneticPillars: [
      { title: "Nutrición Epigenética Celular", action: "Priorizar 30g de proteína por comida y vegetales crucíferos ricos en sulforafano para detoxificación de estrógenos." },
      { title: "Sincronización Circadiana", action: "Cenar temprano (antes de las 20:30) y oscuridad absoluta para restaurar el pulso nocturno de hormona de crecimiento." },
      { title: "Músculo como Órgano Endocrino", action: "Incorporar 3 sesiones semanales de fuerza progresiva para activar transportadores GLUT4 independientes de insulina." }
    ],
    recommendedProgram: "Método Código Diosa 180 Días: Sistema Integral de Longevidad y Balance Metabólico Femenino"
  };
}

export function generateMealBiohackFallback(mealDesc: string) {
  return {
    analysis: `El plato "${mealDesc || "seleccionado"}" aporta nutrientes básicos, pero para maximizar la longevidad y atenuar el pico de glucosa en mujeres 40+, requiere optimización en la densidad proteica y fitoquímica.`,
    biohackAdjustments: [
      "Regla del orden alimentario: Consume primero las fibras verdes o ensalada, continúa con la proteína y grasas buenas, y deja los almidones o hidratos para el final.",
      "Añadir 1 cucharada de vinagre de manzana orgánico diluido en agua 10 minutos antes para ralentizar el vaciado gástrico y modular la respuesta insulínica.",
      "Incorporar grasas antiinflamatorias: Rocía con aceite de oliva virgen extra en crudo rico en oleocantal o espolvorea semillas de chía/lino molidas."
    ],
    longevityScore: 7,
    sirtuinBonusTip: "Añade cúrcuma con una pizca de pimienta negra o hierbas frescas (romero, orégano) para activar la vía NRF2 y estimular la biogénesis mitocondrial."
  };
}
