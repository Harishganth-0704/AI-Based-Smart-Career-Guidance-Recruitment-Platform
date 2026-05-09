import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase6Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 6: Forms & User Input</h1><p>Master the patterns for managing form state in React, from controlled components to powerful libraries.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Libraries & Guides</h2>
            <div className="resource-item"><h3>React Hook Form - Official Documentation</h3><p>The documentation for the modern, highly-performant standard for form management in React.</p><a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
            <div className="resource-item"><h3>React Hook Form in 15 Minutes (Web Dev Simplified)</h3><p>A quick and clear YouTube video that demonstrates the core concepts of React Hook Form.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/RkXv4AXXC_4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    </div></>
);
export default ReactPhase6Resources;