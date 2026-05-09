import React, { useState, useRef, useEffect } from 'react';
import './AIChatbot.css';
import axios from 'axios';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Hello! I am your CareerCraft AI Assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(scrollToBottom, 100);
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5001/api/career/chat', {
                message: input,
                history: messages.map(m => ({ sender: m.role === 'ai' ? 'bot' : 'user', text: m.text }))
            });

            const aiMessage = { 
                role: 'ai', 
                text: response.data.text || "I'm sorry, I couldn't process that. Please try again." 
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Chatbot Error:", error);
            setMessages(prev => [...prev, { role: 'ai', text: "Error: Could not connect to AI server. Please make sure the backend is running." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ai-chatbot-container">
            {/* Floating Toggle Button */}
            <button 
                className={`chatbot-toggle ${isOpen ? 'active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? '✕' : '🤖'}
            </button>

            {/* Chat Window - Always in DOM but hidden via CSS for better stability */}
            <div className={`chatbot-window glass ${isOpen ? 'show' : ''}`}>
                <div className="chatbot-header">
                    <h3>CareerCraft AI</h3>
                    <span>Always Online</span>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message-wrapper ${msg.role}`}>
                            <div className={`message-bubble ${msg.role}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="message-wrapper ai">
                            <div className="message-bubble ai typing">
                                AI is thinking...
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chatbot-input-area" onSubmit={handleSendMessage}>
                    <input 
                        type="text" 
                        placeholder="Ask me anything..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? '...' : '➤'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AIChatbot;
