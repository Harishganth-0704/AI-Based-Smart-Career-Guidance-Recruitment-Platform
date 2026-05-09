import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase9Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 9: Styling in React</h1><p>Explore popular approaches to styling, including CSS Modules, CSS-in-JS, and the dominant Tailwind CSS.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Styling Solutions</h2>
            <div className="resource-item"><h3>Tailwind CSS - Official Documentation</h3><p>The documentation for the utility-first framework that has become the most popular styling solution in the modern React ecosystem.</p><a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
            <div className="resource-item"><h3>Styled-Components - Official Documentation</h3><p>A popular CSS-in-JS library that uses tagged template literals to create React components with styles attached.</p><a href="https://styled-components.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
        </div>
    </div></>
);
export default ReactPhase9Resources;