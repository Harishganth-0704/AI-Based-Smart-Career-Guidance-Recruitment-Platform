import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase5Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 5: Routing & Navigation</h1><p>Learn to build fluid Single-Page Applications (SPAs) with client-side routing using React Router.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Library & Tutorials</h2>
            <div className="resource-item"><h3>React Router Official Docs</h3><p>The definitive guide for learning the modern v6+ API of React Router, the industry standard for routing in React.</p><a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a></div>
            <div className="resource-item"><h3>React Router v6 Tutorial (freeCodeCamp)</h3><p>A full-length YouTube video that provides a practical, project-based introduction to the latest version of React Router.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/Ul3y1LXxzdU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    </div></>
);
export default ReactPhase5Resources;
