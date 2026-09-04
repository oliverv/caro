import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

// Lazy-initialized Gemini client with required User-Agent header
let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
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

const SYSTEM_PROMPT_CAROLINA = `
Eres Carolina Barcellona AI, la asistente clínica de salud y longevidad epigenética especializada en mujeres mayores de 40 años.
Tu filosofía está basada en:
1. Nutrición Epigenética: Alimentos que encienden y apagan genes (sulforafano, resveratrol, quercetina, omega-3, berberina, etc.).
2. Salud Celular & Mitocondrial: La fatiga y el aumento de peso no son falta de fuerza de voluntad, sino disfunción mitocondrial y resistencia a la insulina perimenopáusica.
3. Mantenimiento y Ganancia de Masa Muscular: El músculo es el órgano endocrino de la longevidad. Es vital consumir suficiente proteína (1.4 a 1.8g/kg) y entrenamiento de fuerza.
4. Ritmo Circadiano & Sueño: La arquitectura del sueño profundo modula el cortisol, la hormona de crecimiento y la reparación celular.
5. El Método Código Diosa: Un enfoque en 4 pilares (Biología & Epigenética, Nutrición Celular, Regeneración & Descanso, Mente & Fortaleza) de 90 días, sin dietas restrictivas ni soluciones temporales.

Tono:
- Empático, riguroso, científico pero accesible, cálido y motivador.
- Siempre habla en español por defecto (o en el idioma solicitado por el usuario).
- Enfatiza que tus recomendaciones son educativas y clínicas de estilo de vida, invitando a una consulta personalizada para analíticas profundas si el caso lo requiere.
`;

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Endpoint: Upload Carolina's real voice recording (.opus, .mp3, .m4a, etc.)
app.post("/api/upload-audio", (req, res) => {
  try {
    const { base64Data, fileName } = req.body;
    if (!base64Data) {
      return res.status(400).json({ error: "Faltan los datos del audio." });
    }

    const rawExt = path.extname(fileName || "").toLowerCase() || ".opus";
    const allowed = [".opus", ".ogg", ".mp3", ".m4a", ".wav"];
    const ext = allowed.includes(rawExt) ? rawExt : ".opus";
    const safeName = `carolina-welcome${ext}`;

    const targetDir = path.join(process.cwd(), "public", "audio");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, safeName);
    const buffer = Buffer.from(base64Data, "base64");
    fs.writeFileSync(filePath, buffer);

    console.log(`[Audio Upload] Archivo de voz guardado en ${filePath} (${buffer.length} bytes)`);
    res.json({ success: true, audioUrl: `/audio/${safeName}?v=${Date.now()}` });
  } catch (err: any) {
    console.error("Audio upload error:", err);
    res.status(500).json({ error: err.message || "Error al guardar el audio de voz." });
  }
});

// Resilient model execution with multi-model fallback cascade
// gemini-2.5-flash is prioritized as the primary high-availability model
const FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-flash-latest",
];

// Pure helper: Gemini rejects a first content with role "model" and
// empty text parts — strip leading model messages and cap history.
function toGeminiContents(messages: Array<{ role: string; text: string }>) {
  const mapped = (messages || [])
    .filter((m) => m && typeof m.text === "string" && m.text.trim().length > 0)
    .map((m) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.text.trim() }],
    }));
  while (mapped.length > 0 && mapped[0].role === "model") mapped.shift();
  return mapped.slice(-20);
}

function getLastUserText(messages: Array<{ role: string; text: string }>): string {
  for (let i = (messages || []).length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m && m.role !== "assistant" && m.role !== "model" && m.text) return m.text;
  }
  return messages?.[messages.length - 1]?.text || "";
}

async function generateContentWithCascade(
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

// Endpoint: AI Clinical Consultation Chat
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { messages, userContext } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Missing or invalid messages array" });
    }

    const ai = getGenAI();

    // Convert messages to Gemini conversation format (sanitized:
    // no leading model message, no empty parts, capped history)
    const contents = toGeminiContents(messages);
    if (contents.length === 0) {
      return res.status(400).json({ error: "Missing or invalid messages array" });
    }

    let contextInstruction = SYSTEM_PROMPT_CAROLINA;
    if (userContext) {
      contextInstruction += `\nInformación de la usuaria: ${JSON.stringify(userContext)}`;
    }

    const response = await generateContentWithCascade(ai, {
      contents,
      config: {
        systemInstruction: contextInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Disculpa, no pude procesar la consulta en este momento. Por favor, intenta de nuevo.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error (/api/ai/chat):", error?.message || error);
    // Graceful clinical fallback so the patient/user never experiences a broken chat
    const { messages } = req.body || {};
    const lastUserMsg = getLastUserText(Array.isArray(messages) ? messages : []);
    const fallbackReply = generateClinicalChatFallback(lastUserMsg);
    res.json({ reply: fallbackReply, fallback: true });
  }
});

function generateClinicalChatFallback(userMessage: string): string {
  const lower = (userMessage || "").toLowerCase();
  if (lower.includes("peso") || lower.includes("grasa") || lower.includes("adelgazar") || lower.includes("kilos") || lower.includes("engordar")) {
    return "Comprendo perfectamente lo frustrante que resulta sentir que el peso ya no responde a lo que antes funcionaba. A partir de los 40 años, la variación en estrógenos y cortisol altera la sensibilidad a la insulina y la eficiencia mitocondrial celular. En el Método Código Diosa no contamos calorías ni pasamos hambre: optimizamos el orden de tus alimentos (primero fibra y proteína, luego almidones), protegemos tu masa muscular y regulamos el ritmo circadiano. ¿Te gustaría que revisemos juntos tus horarios de comida o tu nivel de energía actual?";
  }
  if (lower.includes("dormir") || lower.includes("sueño") || lower.includes("insomnio") || lower.includes("despertar") || lower.includes("cansada")) {
    return "El sueño no es solo descanso; es tu laboratorio nocturno de regeneración epigenética y equilibrio hormonal. Después de los 40, los cambios en progesterona suelen generar despertares nocturnos entre las 2 y las 4 AM con pequeños picos de cortisol. Te sugiero cenar al menos 2.5 horas antes de acostarte priorizando magnesio bisglicinato, filtrar pantallas azules después de las 20:30 y exponerte a la luz natural en los primeros 30 minutos al despertar. ¿A qué hora sueles cenar e ir a dormir?";
  }
  if (lower.includes("suplemento") || lower.includes("vitamina") || lower.includes("magnesio") || lower.includes("creatina")) {
    return "Los suplementos deben ser herramientas de alta precisión con evidencia clínica. Para la salud celular y longevidad en mujeres 40+, tres pilares clave son: Magnesio bisglicinato o treonato (apoyo neuromuscular y control glucémico), Creatina monohidrato (3 a 5g diarios para soporte mitocondrial y fuerza) y Omega-3 rico en EPA/DHA para modular la inflamación silenciosa. ¿Tienes alguna analítica reciente sobre la que quieras consultar?";
  }
  return "Como especialista en nutrición epigenética y salud celular femenina, mi enfoque se centra en devolverle a tu cuerpo la capacidad innata de regular su energía, su metabolismo y sus hormonas. No creemos en dietas restrictivas ni soluciones temporales; diseñamos un sistema basado en tu biología real. Cuéntame: ¿cuál es el síntoma o desafío que más impacta hoy en tu vitalidad?";
}

function generateAssessmentFallback(body: any) {
  const { age, symptoms } = body || {};
  const symptomList = Array.isArray(symptoms) ? symptoms.join(", ") : symptoms || "fatiga celular y resistencia hormonal";
  return {
    summaryTitle: "Perfil Metabólico: Resistencia Hormonal & Optimización Epigenética",
    executiveSummary: `A los ${age || "45+"} años, la transición neuroendocrina reorganiza la distribución de receptores de estrógeno y la sensibilidad insulínica. Los síntomas reportados (${symptomList}) no son falta de fuerza de voluntad, sino una respuesta adaptativa mitocondrial que requiere sincronización de ritmos circadianos y densidad nutricional de alta biodisponibilidad.`,
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
    recommendedProgram: "Método Código Diosa 90 Días: Sistema Integral de Longevidad y Balance Metabólico Femenino"
  };
}

function generateMealBiohackFallback(mealDesc: string) {
  return {
    analysis: `El plato "${mealDesc || "seleccionado"}" aporta nutrientes básicos, pero para maximizar la longevidad y atenuar el pico de glucosa en mujeres 40+, requiere optimización en la densidad de polifenoles y en el ratio proteína-almidón.`,
    biohackAdjustments: [
      "Regla del orden alimentario: Consume primero las fibras verdes o ensalada, continúa con la proteína y grasas buenas, y deja los almidones o hidratos para el final.",
      "Añadir 1 cucharada de vinagre de manzana orgánico diluido en agua 10 minutos antes para ralentizar el vaciado gástrico y modular la respuesta insulínica.",
      "Incorporar grasas antiinflamatorias: Rocía con aceite de oliva virgen extra en crudo rico en oleocantal o espolvorea semillas de chía/lino molidas."
    ],
    longevityScore: 8,
    sirtuinBonusTip: "Añade cúrcuma con una pizca de pimienta negra o hierbas frescas (romero, orégano) para activar la vía NRF2 y estimular la biogénesis mitocondrial."
  };
}

// Endpoint: AI Epigenetic Assessment Analyzer
app.post("/api/ai/analyze-assessment", async (req, res) => {
  try {
    const { age, symptoms, energyLevel, sleepHours, dietType, exerciseType } = req.body;

    const ai = getGenAI();

    const prompt = `
Genera una Evaluación Epigenética y Metabólica personalizada para una mujer con estos datos:
- Edad: ${age || "No especificada (aprox 40-55 años)"}
- Síntomas o desafíos principales: ${Array.isArray(symptoms) ? symptoms.join(", ") : symptoms || "Grasa visceral, fatiga, niebla mental"}
- Nivel de energía percibido (1-10): ${energyLevel || "5"}/10
- Horas y calidad de sueño: ${sleepHours || "6 horas"}
- Tipo de alimentación habitual: ${dietType || "Estándar"}
- Actividad física / Ejercicio: ${exerciseType || "Sedentaria o cardio suave"}

Proporciona una respuesta en formato JSON estructurado con los siguientes campos:
1. summaryTitle: un título corto y empático (ej. "Perfil Metabólico: Resistencia Hormonal & Fatiga Celular")
2. executiveSummary: párrafo breve que explique qué está pasando biológicamente con sus mitocondrias y receptores de estrógeno/cortisol.
3. keyBiomarkersToTest: lista de 4-5 biomarcadores analíticos recomendados para evaluar en sangre (ej. HOMA-IR, PCR ultrasensible, Ferritina, etc.) con una breve justificación de cada uno.
4. epigeneticPillars: lista de 3 pilares clave de acción inmediata (Nutrición Celular, Ritmo Circadiano, Músculo/Metabolismo), con recomendación concreta para cada uno.
5. recommendedProgram: nombre del programa sugerido (ej. "Método Código Diosa 90 Días" o "Reset Metabólico 30 Días") y por qué es ideal para ella.
`;

    const response = await generateContentWithCascade(ai, {
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT_CAROLINA,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summaryTitle: { type: Type.STRING },
            executiveSummary: { type: Type.STRING },
            keyBiomarkersToTest: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  reason: { type: Type.STRING },
                },
                required: ["name", "reason"],
              },
            },
            epigeneticPillars: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  action: { type: Type.STRING },
                },
                required: ["title", "action"],
              },
            },
            recommendedProgram: { type: Type.STRING },
          },
          required: ["summaryTitle", "executiveSummary", "keyBiomarkersToTest", "epigeneticPillars", "recommendedProgram"],
        },
      },
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json({ result: parsedData });
  } catch (error: any) {
    console.error("Gemini API Error (/api/ai/analyze-assessment):", error?.message || error);
    // Graceful clinical fallback so the assessment never fails
    const fallbackAssessment = generateAssessmentFallback(req.body);
    res.json({ result: fallbackAssessment, fallback: true });
  }
});

// Endpoint: AI Meal Biohacker
app.post("/api/ai/meal-biohack", async (req, res) => {
  try {
    const { mealDescription } = req.body;
    if (!mealDescription) {
      return res.status(400).json({ error: "Falta la descripción del plato." });
    }

    const ai = getGenAI();

    const prompt = `
Analiza el siguiente plato o comida consumida por una mujer mayor de 40 años que busca longevidad, prevención de sarcopenia y control de glucosa:
Plato: "${mealDescription}"

Devuelve un JSON estructurado con:
- analysis: Breve diagnóstico sobre impacto glucémico, aporte proteico y densidad celular.
- biohackAdjustments: Lista de 3 ajustes específicos para bio-hackear este plato (ej: orden de ingestión, grasas saludables ricas en polifenoles, adición de crucíferas o vinagre de sidra).
- longevityScore: Puntuación de 1 a 10 de este plato para mujeres 40+.
- sirtuinBonusTip: Un consejo específico sobre fitoquímicos activadores de sirtuinas o autofagia.
`;

    const response = await generateContentWithCascade(ai, {
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT_CAROLINA,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            biohackAdjustments: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            longevityScore: { type: Type.NUMBER },
            sirtuinBonusTip: { type: Type.STRING },
          },
          required: ["analysis", "biohackAdjustments", "longevityScore", "sirtuinBonusTip"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    res.json({ result });
  } catch (error: any) {
    console.error("Gemini API Error (/api/ai/meal-biohack):", error?.message || error);
    // Graceful clinical fallback so meal biohacking never fails
    const fallbackBiohack = generateMealBiohackFallback(req.body?.mealDescription);
    res.json({ result: fallbackBiohack, fallback: true });
  }
});

// Vite middleware & Static handling
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
