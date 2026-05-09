// src/components/Chatbot.jsx

import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! I\'m your career assistant. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { sender: 'user', text: inputValue };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputValue('');
        setIsLoading(true);

        // --- Backend API Call ---
        try {
            const { sendChatMessage } = await import('../services/api');
            const response = await sendChatMessage(inputValue, messages);

            if (response.success && response.text) {
                setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: response.text }]);
            } else {
                setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "Sorry, I couldn't generate a response. Please try again." }]);
            }
        } catch (error) {
            console.error("Error calling Backend API:", error);
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'There was an error connecting to the AI. Please try again later.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h3>CareerCraft AI</h3>
                    <button className="close-btn" onClick={toggleChatbot}>—</button>
                </div>
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message bot typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form className="chatbot-input-form" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Ask a question..."
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
                    </button>
                </form>
            </div>
            <button className="chatbot-toggle-button" onClick={toggleChatbot}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`icon-chat ${isOpen ? 'hidden' : ''}`}><path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`icon-close ${isOpen ? '' : 'hidden'}`}><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
            </button>
        </div>
    );
};

export default Chatbot;
