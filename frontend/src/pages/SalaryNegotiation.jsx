import React, { useState, useRef, useEffect } from 'react';
import { sendNegotiationMessage } from '../services/api';
import './SalaryNegotiation.css';

const SalaryNegotiation = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        targetSalary: ''
    });
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleStart = (e) => {
        e.preventDefault();
        if (!formData.role || !formData.company || !formData.targetSalary) return;
        
        setIsStarted(true);
        // Initial message from AI
        setMessages([
            { sender: 'recruiter', text: `Hi there! I'm the recruiter for ${formData.company}. We're very excited about your background for the ${formData.role} position. Before we move to the final offer stage, I wanted to discuss your salary expectations. What are you looking for?` }
        ]);
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMsg = { sender: 'user', text: input };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setInput('');
        setIsTyping(true);

        try {
            const response = await sendNegotiationMessage(
                formData.role,
                formData.company,
                formData.targetSalary,
                updatedMessages.slice(0, -1), // Don't send the one we just added in history
                userMsg.text
            );

            if (response && response.text) {
                setMessages(prev => [...prev, { sender: 'recruiter', text: response.text }]);
            } else {
                setMessages(prev => [...prev, { sender: 'recruiter', text: "I'm having trouble connecting to my HR system right now. Let's resume this later." }]);
            }
        } catch (error) {
            console.error('Negotiation error:', error);
            setMessages(prev => [...prev, { sender: 'recruiter', text: "Sorry, I seem to have lost connection. Could you repeat that?" }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleEnd = () => {
        if(window.confirm("Are you sure you want to end the negotiation simulation?")) {
            setIsStarted(false);
            setMessages([]);
            setFormData({ role: '', company: '', targetSalary: '' });
        }
    };

    return (
        <div className="negotiation-simulator-page">
            <div className="negotiation-header">
                <h1>🤝 AI Salary Negotiation Simulator</h1>
                <p>Practice negotiating your salary with a tough AI HR recruiter before the real deal.</p>
            </div>

            <div className="negotiation-layout">
                {!isStarted ? (
                    <div className="setup-card fade-in">
                        <h2>Set up your simulation</h2>
                        <form className="setup-form" onSubmit={handleStart}>
                            <div className="form-group">
                                <label>Target Role</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Senior React Developer" 
                                    value={formData.role}
                                    onChange={e => setFormData({...formData, role: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Google, Startup Inc" 
                                    value={formData.company}
                                    onChange={e => setFormData({...formData, company: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Absolute Dream Salary (AI will use this secretly)</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. $150,000 or ₹30 LPA" 
                                    value={formData.targetSalary}
                                    onChange={e => setFormData({...formData, targetSalary: e.target.value})}
                                    required
                                />
                            </div>
                            <button type="submit" className="start-btn">Begin Negotiation Simulation</button>
                        </form>
                    </div>
                ) : (
                    <div className="chat-card fade-in">
                        <div className="chat-header">
                            <div className="recruiter-info">
                                <h3>Alex (HR Recruiter)</h3>
                                <p>{formData.company}</p>
                            </div>
                            <button onClick={handleEnd} className="end-btn">End Simulation</button>
                        </div>
                        
                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="typing-indicator">Alex is typing...</div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-input-area">
                            <form className="chat-input-form" onSubmit={handleSend}>
                                <input 
                                    type="text" 
                                    placeholder="Type your response to the recruiter..." 
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    disabled={isTyping}
                                />
                                <button type="submit" className="send-btn" disabled={isTyping || !input.trim()}>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalaryNegotiation;
