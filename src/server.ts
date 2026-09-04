import express from 'express';
import { getGenAI } from './src/server/geminiService';

const app = express();

app.use(express.json());

// Example endpoint for AI chat
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const ai = getGenAI();
    
    // Your chat logic here
    res.json({ reply: 'Response from Gemini AI' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

export default app;
