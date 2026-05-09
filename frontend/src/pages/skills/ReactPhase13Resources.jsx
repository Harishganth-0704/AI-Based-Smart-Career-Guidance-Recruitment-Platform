import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase13Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 13: React with TypeScript</h1><p>Learn to use TypeScript to add static types, catch errors early, and build more robust, scalable applications.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Guides & Cheatsheets</h2>
            <div className="resource-item"><h3>React TypeScript Cheatsheet</h3><p>An invaluable community-maintained resource with examples for typing everything in React, from components to hooks.</p><a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Cheatsheet</a></div>
            <div className="resource-item"><h3>TypeScript Handbook</h3><p>The official documentation for TypeScript, providing a comprehensive guide to the language's features.</p><a href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Handbook</a></div>
        </div>
    </div></>
);
export default ReactPhase13Resources;