// src/pages/skills/CPlusPlusPhase16Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Real-World Applications (Career Path)</h1>
                <p>Begin to specialize in a domain like Game Development, Embedded Systems, or High-Performance Computing.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Specialization Resources</h2>
                <div className="resource-item">
                    <h3>Unreal Engine C++ Developer Course (GameDev.tv on Udemy)</h3>
                    <p>A massive, project-based course for those interested in game development, teaching C++ in the context of the Unreal Engine.</p>
                    <a href="https://www.udemy.com/course/unrealcourse/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                 <div className="resource-item">
                    <h3>learnopengl.com</h3>
                    <p>An extensive, high-quality, and free resource for learning modern OpenGL, a core skill for graphics programming.</p>
                    <a href="https://learnopengl.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn OpenGL</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase16Resources;
