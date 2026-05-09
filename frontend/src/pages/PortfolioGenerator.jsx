import React, { useState } from 'react';
import { sendChatMessage } from '../services/api';
import './PortfolioGenerator.css';

const PortfolioGenerator = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        bio: '',
        skills: '',
        github: '',
        linkedin: ''
    });
    
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedHtml, setGeneratedHtml] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.role) {
            setError('Name and Role are required.');
            return;
        }

        setIsGenerating(true);
        setError(null);
        setGeneratedHtml('');

        const prompt = `
        You are an expert web developer. Create a single-file 'index.html' portfolio website for:
        Name: ${formData.name}
        Role: ${formData.role}
        Bio: ${formData.bio}
        Skills: ${formData.skills}
        GitHub: ${formData.github}
        LinkedIn: ${formData.linkedin}

        Requirements:
        1. MUST be a single HTML file containing all CSS within <style> tags. Do not use external CSS files.
        2. Use a modern, beautiful Dark Mode theme (Glassmorphism, gradients, neon accents).
        3. Include standard sections: Hero/About, Skills, and Contact.
        4. Make it fully responsive.
        5. RETURN ONLY THE HTML CODE. DO NOT INCLUDE MARKDOWN BACKTICKS (like \`\`\`html) AND NO EXPLANATIONS. Start strictly with <!DOCTYPE html>.
        `;

        try {
            const response = await sendChatMessage(prompt, []);
            if (response && response.text) {
                // Clean up in case AI still adds markdown blocks
                let cleanHtml = response.text.replace(/```html/g, '').replace(/```/g, '').trim();
                setGeneratedHtml(cleanHtml);
            } else {
                throw new Error('Failed to generate portfolio.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while communicating with the AI.');
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadHtml = () => {
        if (!generatedHtml) return;
        const blob = new Blob([generatedHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${formData.name.replace(/\s+/g, '_')}_Portfolio.html`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="portfolio-generator-page">
            <header className="portfolio-header">
                <h1>🌐 AI Portfolio Generator</h1>
                <p>Generate a complete, personalized, and beautiful portfolio website in seconds using AI.</p>
            </header>

            <div className="portfolio-layout">
                <div className="portfolio-form-card glass">
                    <h2>Website Content</h2>
                    <form onSubmit={handleGenerate}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="role" placeholder="Target Role (e.g. AI Engineer)" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="github" placeholder="GitHub URL" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea name="bio" placeholder="Short Bio about yourself" rows="3" onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <textarea name="skills" placeholder="Top Skills (e.g. React, Python, Node.js)" rows="2" onChange={handleChange}></textarea>
                        </div>
                        
                        {error && <div className="error-message">{error}</div>}
                        
                        <button type="submit" className="generate-btn" disabled={isGenerating}>
                            {isGenerating ? '✨ Coding Your Website...' : '🚀 Generate Website'}
                        </button>
                    </form>
                </div>

                <div className="portfolio-preview-card glass">
                    <h2>Live Preview</h2>
                    {isGenerating ? (
                        <div className="loading-state">
                            <div className="loader"></div>
                            <p>Writing HTML & CSS magic...</p>
                        </div>
                    ) : generatedHtml ? (
                        <div className="preview-container fade-in">
                            <iframe 
                                srcDoc={generatedHtml} 
                                title="Portfolio Preview"
                                className="portfolio-iframe"
                            ></iframe>
                            <div className="action-buttons">
                                <button className="download-code-btn" onClick={downloadHtml}>
                                    💾 Download Code (index.html)
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="empty-preview">
                            <div className="empty-icon">💻</div>
                            <p>Your AI-generated website will appear here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioGenerator;
