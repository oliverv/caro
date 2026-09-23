import {
  getGenAI,
  generateContentWithCascade,
  generateClinicalChatFallback,
  toGeminiContents,
  getLastUserText,
  SYSTEM_PROMPT_CAROLINA,
} from "../_geminiService.js";

export default async function handler(req: any, res: any) {
  // CORS configuration
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

  const { messages, userContext } = body || {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Missing or invalid messages array" });
  }

  try {
    const ai = getGenAI();

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

    const reply =
      response.text ||
      "Disculpa, no pude procesar la consulta en este momento. Por favor, intenta de nuevo.";
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("[Vercel API] Error in /api/ai/chat:", error?.message || error);
    const lastUserMsg = getLastUserText(Array.isArray(messages) ? messages : []);
    const fallbackReply = generateClinicalChatFallback(lastUserMsg);
    return res.status(200).json({ reply: fallbackReply, fallback: true });
  }
}
