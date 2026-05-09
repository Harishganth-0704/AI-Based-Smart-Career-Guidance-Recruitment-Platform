// src/pages/skills/CPlusPlusPhase18Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase18Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 18: Project Ideas</h1>
                <p>Synthesize your knowledge by building a portfolio of complete, polished projects.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Libraries for Projects</h2>
                <div className="resource-item">
                    <h3>SFML (Simple and Fast Multimedia Library)</h3>
                    <p>A great, easy-to-use library for creating 2D games and multimedia applications, perfect for beginner projects like Snake or Pong.</p>
                    <a href="https://www.sfml-dev.org/tutorials/2.6/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to SFML</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase18Resources;
