// src/pages/skills/ReactPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: React Hooks (Foundational & Advanced)</h1>
                <p>Master the functions that let you "hook into" React's state and lifecycle features.</p>
                <Link to="/skills/react" className="back-link">← Back to React Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Custom Hook Recipes</h2>
                <div className="resource-item">
                    <h3>React Hooks Explained in 15 Minutes (Web Dev Simplified)</h3>
                    <p>A concise and clear YouTube playlist covering the most important React Hooks for beginners.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O6P86uwfdR0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>usehooks.com</h3>
                    <p>A fantastic collection of reusable, production-ready custom React hook recipes that you can use in your projects.</p>
                    <a href="https://usehooks.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Custom Hooks</a>
                </div>
            </div>
        </div>
    </>
);
export default ReactPhase3Resources;
