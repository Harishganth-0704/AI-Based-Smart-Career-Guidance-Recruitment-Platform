import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase15Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 15: Real-World Project Ideas</h1><p>Synthesize your knowledge into a portfolio of projects that demonstrate job-ready skills.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Inspiration & Ideas</h2>
            <div className="resource-item"><h3>Build a MERN Stack Project (freeCodeCamp)</h3><p>A complete, hands-on tutorial for building a full-stack application with MongoDB, Express, React, and Node.js—a cornerstone portfolio project.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/CvCiNeLnZ00" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    </div></>
);
export default ReactPhase15Resources;