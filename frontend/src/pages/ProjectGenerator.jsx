import React, { useState } from 'react';
import { sendChatMessage } from '../services/api';
import './ProjectGenerator.css';

const ProjectGenerator = () => {
    const [role, setRole] = useState('');
    const [difficulty, setDifficulty] = useState('Beginner');
    const [isGenerating, setIsGenerating] = useState(false);
    const [projectIdea, setProjectIdea] = useState(null);
    const [error, setError] = useState(null);

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!role) {
            setError('Please enter a target role or skill.');
            return;
        }

        setIsGenerating(true);
        setError(null);
        setProjectIdea(null);

        const prompt = `You are an expert technical career coach. I need a unique, highly impressive portfolio project idea for a ${difficulty} level ${role}. 
        Do not give a generic idea like a to-do list or calculator. Give something that solves a real problem and would impress hiring managers.
        Format your response EXACTLY like this (use these exact headings):
        
        TITLE: [Project Name]
        
        PROBLEM: [What real-world problem does this solve?]
        
        FEATURES:
        - [Feature 1]
        - [Feature 2]
        - [Feature 3]
        
        TECH STACK: [Comma separated list of recommended technologies]
        
        HOW TO START: [One sentence on the very first step to take]`;

        try {
            const response = await sendChatMessage(prompt, []);
            
            // Assuming response has 'text' property from backend
            if (response && response.text) {
                parseProjectIdea(response.text);
            } else {
                setError('Received unexpected response from AI.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to generate project. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    const parseProjectIdea = (text) => {
        try {
            // Simple regex/split parsing based on expected headings
            const titleMatch = text.match(/TITLE:\s*(.*?)(?:\n|$)/i);
            const problemMatch = text.match(/PROBLEM:\s*(.*?)(?=\nFEATURES:)/is);
            const featuresMatch = text.match(/FEATURES:\s*(.*?)(?=\nTECH STACK:)/is);
            const techStackMatch = text.match(/TECH STACK:\s*(.*?)(?=\nHOW TO START:)/is);
            const startMatch = text.match(/HOW TO START:\s*(.*?)(?:\n|$)/is);

            if (!titleMatch) {
                // Fallback if AI didn't follow format exactly
                setProjectIdea({ raw: text });
                return;
            }

            setProjectIdea({
                title: titleMatch[1].replace(/\*\*/g, '').trim(),
                problem: problemMatch ? problemMatch[1].replace(/\*\*/g, '').trim() : '',
                features: featuresMatch ? featuresMatch[1].trim() : '',
                techStack: techStackMatch ? techStackMatch[1].replace(/\*\*/g, '').trim() : '',
                start: startMatch ? startMatch[1].replace(/\*\*/g, '').trim() : ''
            });
        } catch (err) {
            setProjectIdea({ raw: text });
        }
    };

    return (
        <div className="project-gen-container">
            <header className="project-gen-header">
                <h1>💡 AI Project Idea Generator</h1>
                <p>Build your portfolio. Stand out to recruiters. Get unique project ideas tailored to your skill level.</p>
            </header>

            <div className="project-gen-layout">
                <div className="project-gen-form-card glass">
                    <h3>Configure Your Project</h3>
                    <form onSubmit={handleGenerate}>
                        <div className="form-group">
                            <label>Target Role or Skill (e.g., React Developer, AI Engineer, Data Analyst)</label>
                            <input 
                                type="text" 
                                value={role} 
                                onChange={(e) => setRole(e.target.value)} 
                                placeholder="Enter your target role..." 
                            />
                        </div>
                        <div className="form-group">
                            <label>Difficulty Level</label>
                            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                                <option value="Beginner">Beginner (Learning the basics)</option>
                                <option value="Intermediate">Intermediate (Building portfolio)</option>
                                <option value="Advanced">Advanced (Impress Senior Engineers)</option>
                            </select>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="generate-btn" disabled={isGenerating}>
                            {isGenerating ? 'Generating Spark...' : 'Generate Project Idea ✨'}
                        </button>
                    </form>
                </div>

                <div className="project-gen-result-card glass">
                    {isGenerating ? (
                        <div className="loading-state">
                            <div className="loader"></div>
                            <p>Brainstorming with AI...</p>
                        </div>
                    ) : projectIdea ? (
                        projectIdea.raw ? (
                            <div className="raw-idea">
                                <h3>Generated Idea</h3>
                                <div style={{whiteSpace: 'pre-line'}}>{projectIdea.raw}</div>
                            </div>
                        ) : (
                            <div className="structured-idea fade-in">
                                <h2>{projectIdea.title}</h2>
                                
                                <div className="idea-section">
                                    <h4>🎯 The Problem</h4>
                                    <p>{projectIdea.problem}</p>
                                </div>
                                
                                <div className="idea-section">
                                    <h4>✨ Key Features</h4>
                                    <div style={{whiteSpace: 'pre-line', paddingLeft: '1rem', color: '#b0b0b0'}}>{projectIdea.features}</div>
                                </div>
                                
                                <div className="idea-section">
                                    <h4>🛠️ Recommended Tech Stack</h4>
                                    <div className="tech-stack-pills">
                                        {projectIdea.techStack.split(',').map((tech, i) => (
                                            <span key={i} className="tech-pill">{tech.trim()}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="idea-section highlight-box">
                                    <h4>🚀 First Step</h4>
                                    <p>{projectIdea.start}</p>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">🎨</div>
                            <p>Fill out the form to generate a customized, resume-ready project idea.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectGenerator;
