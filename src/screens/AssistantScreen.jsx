import Header from '../components/Header';
import './AssistantScreen.css';
import { useState } from 'react';

const AssistantScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      text: '¡Hola Nacho! Soy Jarvis, tu asistente personal inteligente. ¿En qué puedo ayudarte hoy?',
      time: '10:30 AM'
    },
    {
      id: 2,
      type: 'user',
      text: 'Tengo evaluación de matemática el viernes',
      time: '10:32 AM'
    },
    {
      id: 3,
      type: 'assistant',
      text: 'Perfecto. ¿Quieres que te prepare un plan de estudio?',
      time: '10:33 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputText,
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Simular respuesta del asistente después de un breve delay
      setTimeout(() => {
        const assistantReply = {
          id: messages.length + 2,
          type: 'assistant',
          text: 'He recibido tu mensaje. Estoy procesándolo...',
          time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantReply]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="assistant-screen">
      <Header title="Jarvis" />
      <main className="assistant-main">
        <div className="chat-container">
          <div className="chat-header">
            <div className="assistant-avatar">
              <div className="avatar-glow"></div>
              <span className="avatar-icon">🤖</span>
            </div>
            <div className="assistant-info">
              <h2 className="assistant-name">Jarvis</h2>
              <span className="assistant-status">Online</span>
            </div>
          </div>

          <div className="messages-wrapper">
            <div className="messages-container">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.type === 'user' ? 'message-user' : 'message-assistant'}`}
                >
                  {message.type === 'assistant' && (
                    <div className="message-avatar-small">
                      🤖
                    </div>
                  )}
                  <div className="message-bubble">
                    <p className="message-text">{message.text}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                  {message.type === 'user' && (
                    <div className="message-avatar-small user-avatar">
                      👤
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="input-container">
            <button className="mic-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-btn" onClick={handleSendMessage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AssistantScreen;
