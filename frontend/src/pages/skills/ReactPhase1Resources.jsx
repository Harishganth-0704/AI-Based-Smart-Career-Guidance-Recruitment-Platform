// src/pages/skills/ReactPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Web & JavaScript Prerequisites</h1>
                <p>Build an unshakable understanding of HTML, CSS, and modern JavaScript (ES6+).</p>
                <Link to="/skills/react" className="back-link">← Back to React Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Core Learning Resources</h2>
                <div className="resource-item">
                    <h3>MDN Web Docs - Learn Web Development</h3>
                    <p>The ultimate free reference and structured guide for HTML, CSS, and JavaScript. Considered the gold standard for web documentation.</p>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noopener noreferrer" className="resource-link">Go to MDN</a>
                </div>
                <div className="resource-item">
                    <h3>The Odin Project - Foundations</h3>
                    <p>A complete, project-based curriculum that forces you to build real things to learn the fundamentals of the web.</p>
                    <a href="https://www.theodinproject.com/paths/foundations/courses/foundations" target="_blank" rel="noopener noreferrer" className="resource-link">Start The Odin Project</a>
                </div>
                <div className="resource-item">
                    <h3>The Complete JavaScript Course (Udemy)</h3>
                    <p>A comprehensive paid video course by Jonas Schmedtmann with detailed explanations and projects for beginners to master JavaScript.</p>
                    <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noopener noreferrer" className="resource-link">View on Udemy</a>
                </div>
            </div>
        </div>
    </>
);
export default ReactPhase1Resources;

