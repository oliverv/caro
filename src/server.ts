import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { getGenAI, generateContentWithCascade, generateClinicalChatFallback, generateAssessmentFallback, generateMealBiohackFallback, SYSTEM_PROMPT_CAROLINA } from "./geminiService";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

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

// Endpoint: AI Clinical Consultation Chat
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { messages, userContext } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Missing or invalid messages array" });
    }

    const ai = getGenAI();

    // Convert messages to Gemini conversation format
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.text }],
    }));

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
    const lastUserMsg = Array.isArray(messages) && messages.length > 0 ? messages[messages.length - 1].text : "";
    const fallbackReply = generateClinicalChatFallback(lastUserMsg);
    res.json({ reply: fallbackReply, fallback: true });
  }
});

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

export default app;
