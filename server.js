require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Interview question database
const interviewQuestions = {
  technical: [
    "Explain the difference between let, const, and var in JavaScript",
    "What is React's virtual DOM?",
    "How would you optimize a slow SQL query?"
  ],
  behavioral: [
    "Tell me about a time you faced a difficult challenge",
    "How do you handle conflicts in a team?",
    "Describe a project you're particularly proud of"
  ]
};

// API endpoints
app.post('/api/chat', async (req, res) => {
  try {
    const { message, context } = req.body;

    // Get relevant interview questions
    const questions = interviewQuestions[context] || [];

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an AI interview coach. Help users practice for ${context} interviews.`
        },
        { role: "user", content: message }
      ],
      temperature: 0.7,
    });

    res.json({
      answer: completion.data.choices[0].message.content,
      suggestedQuestions: questions.slice(0, 3)
    });

  } catch (error) {
    console.error('AI error:', error);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));