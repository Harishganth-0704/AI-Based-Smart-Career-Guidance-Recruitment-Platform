import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase8Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 8: Component Architecture & Best Practices</h1><p>Learn the principles and patterns for structuring your React applications to be clean, maintainable, and scalable.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Guides & Methodologies</h2>
            <div className="resource-item"><h3>React Official Docs - Thinking in React</h3><p>The official guide on how to approach building a React UI, breaking it down into a component hierarchy.</p><a href="https://react.dev/learn/thinking-in-react" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a></div>
            <div className="resource-item"><h3>Atomic Design by Brad Frost</h3><p>A popular mental model for structuring components into a design system, organized by complexity from atoms to pages.</p><a href="https://atomicdesign.bradfrost.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn Atomic Design</a></div>
        </div>
    </div></>
);
export default ReactPhase8Resources;