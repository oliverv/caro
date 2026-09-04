import { Type } from "@google/genai";
import {
  getGenAI,
  generateContentWithCascade,
  generateMealBiohackFallback,
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

  const { mealDescription } = body || {};
  if (!mealDescription || typeof mealDescription !== "string") {
    return res.status(400).json({ error: "Missing mealDescription" });
  }

  try {
    const ai = getGenAI();

    const prompt = `
Eres Carolina Barcellona, experta en nutrición epigenética y longevidad celular femenina 40+.
La usuaria te presenta el siguiente plato o comida habitual:
"${mealDescription}"

Tu objetivo es analizarlo con visión epigenética y aplicar "biohacks" nutricionales prácticos para:
1. Reducir el pico glucémico e insulínico.
2. Estimular la autofagia y vías de longevidad (Sirtuinas, AMPK).
3. Asegurar la saciedad y preservación de masa muscular.

Devuelve un JSON con:
- analysis: Breve evaluación nutricional y celular (máximo 2 párrafos).
- biohackAdjustments: Lista de 3 ajustes específicos y sencillos (orden de ingesta, adición de vinagre de manzana, especias antiinflamatorias, grasa buena, etc.).
- longevityScore: Puntuación de longevidad del 1 al 10.
- sirtuinBonusTip: Un consejo pro para potenciar sirtuinas o mitocondrias.
`;

    const response = await generateContentWithCascade(ai, {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
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
          required: [
            "analysis",
            "biohackAdjustments",
            "longevityScore",
            "sirtuinBonusTip",
          ],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return res.status(200).json({ result });
  } catch (error: any) {
    console.error("[Vercel API] Error in /api/ai/meal-biohack:", error?.message || error);
    const fallbackBiohack = generateMealBiohackFallback(mealDescription);
    return res.status(200).json({ result: fallbackBiohack, fallback: true });
  }
}
