import { Type } from "@google/genai";
import {
  getGenAI,
  generateContentWithCascade,
  generateAssessmentFallback,
} from "../../src/server/geminiService";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const { age, symptoms, energyLevel, sleepHours, dietType, exerciseType } = body || {};

  try {
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
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
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
          required: [
            "summaryTitle",
            "executiveSummary",
            "keyBiomarkersToTest",
            "epigeneticPillars",
            "recommendedProgram",
          ],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return res.status(200).json({ result });
  } catch (error: any) {
    console.error("[Vercel API] Error in /api/ai/analyze-assessment:", error?.message || error);
    const fallbackAssessment = generateAssessmentFallback(body);
    return res.status(200).json({ result: fallbackAssessment, fallback: true });
  }
}
