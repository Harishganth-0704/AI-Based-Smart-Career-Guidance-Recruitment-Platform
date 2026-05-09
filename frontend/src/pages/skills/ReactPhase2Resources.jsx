// src/pages/skills/ReactPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: React Basics & Core Concepts</h1>
                <p>Understand the core philosophy of React, its essential building blocks, and set up a modern development environment.</p>
                <Link to="/skills/react" className="back-link">← Back to React Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Learning Resources</h2>
                <div className="resource-item">
                    <h3>React Official Docs - Learn React</h3>
                    <p>The new, official React documentation is the best place to start. It offers excellent interactive examples and a well-structured tutorial.</p>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="resource-link">Start Learning</a>
                </div>
                <div className="resource-item">
                    <h3>Scrimba - Learn React for Free</h3>
                    <p>An interactive course that lets you code along with the instructor in a unique editor, providing a hands-on learning experience.</p>
                    <a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noopener noreferrer" className="resource-link">Try Scrimba</a>
                </div>
            </div>
        </div>
    </>
);
export default ReactPhase2Resources;
