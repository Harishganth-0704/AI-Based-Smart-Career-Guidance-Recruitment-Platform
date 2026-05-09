// src/pages/skills/JavaPhase21Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase21Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 20: Writing Professional Code</h1>
                <p>Learn the principles and patterns that lead to clean, maintainable, scalable, and professional-quality code.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Books & Principles</h2>
                <div className="resource-item">
                    <h3>"Clean Code" by Robert C. Martin</h3>
                    <p>A legendary book that is considered essential reading for any professional software developer, focusing on writing readable and maintainable code.</p>
                </div>
                <div className="resource-item">
                    <h3>SOLID Principles (Baeldung)</h3>
                    <p>An article explaining the five fundamental principles of object-oriented design that help create understandable, flexible, and maintainable systems.</p>
                    <a href="https://www.baeldung.com/solid-principles" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase21Resources;
