// src/pages/skills/ReactPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: State Management Approaches</h1>
                <p>Explore scalable solutions for managing application state, from Context API to libraries like Zustand and Redux.</p>
                <Link to="/skills/react" className="back-link">← Back to React Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Libraries & Guides</h2>
                <div className="resource-item">
                    <h3>React Official Docs - Sharing State Between Components</h3>
                    <p>The official guide to understanding the different strategies for state management, including Context.</p>
                    <a href="https://react.dev/learn/sharing-state-between-components" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>Zustand - Official Documentation</h3>
                    <p>Clear and concise documentation for getting started with Zustand, a popular lightweight state management library.</p>
                    <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a>
                </div>
                <div className="resource-item">
                    <h3>Redux Essentials Tutorial by Dave Gray</h3>
                    <p>A comprehensive YouTube series that is highly recommended for learning the modern Redux Toolkit.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NqzdVN2tyvQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default ReactPhase4Resources;