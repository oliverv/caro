import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

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
