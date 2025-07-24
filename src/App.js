import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState('technical');
  const [isListening, setIsListening] = useState(false);

  const getAIResponse = async (message) => {
    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message,
        context
      });
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      return {
        answer: "I couldn't connect to the AI service. Please try again.",
        suggestedQuestions: []
      };
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Get AI response
    const { answer, suggestedQuestions } = await getAIResponse(input);
    setMessages(prev => [...prev, { text: answer, sender: 'ai' }]);

    // Show suggested questions
    if (suggestedQuestions.length > 0) {
      setTimeout(() => {
        setMessages(prev => [...prev,
          {
            text: "Suggested follow-up questions:",
            sender: 'system'
          },
          ...suggestedQuestions.map(q => ({ text: q, sender: 'suggestion' }))
        ]);
      }, 500);
    }
  };

  const toggleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Speech recognition not supported in your browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    if (!isListening) {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech error:', event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>MindReplica Interview Coach</h1>
        <select
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="context-selector"
        >
          <option value="technical">Technical Interview</option>
          <option value="behavioral">Behavioral Interview</option>
        </select>
      </div>

      <div className="chat-container">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
            {msg.sender === 'suggestion' && (
              <button
                onClick={() => setInput(msg.text)}
                className="suggestion-button"
              >
                Use this question
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="input-area">
        <button
          onClick={toggleSpeechRecognition}
          className={`mic-button ${isListening ? 'active' : ''}`}
        >
          🎤
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type or speak your question..."
        />

        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;