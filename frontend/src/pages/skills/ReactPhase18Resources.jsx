import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase18Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 18: Interview Preparation</h1><p>Prepare for technical interviews by practicing coding challenges, communication, and system design.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Practice & Preparation</h2>
            <div className="resource-item"><h3>LeetCode</h3><p>The industry standard for practicing data structures and algorithm problems, a key part of technical screenings.</p><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a></div>
            <div className="resource-item"><h3>Great Frontend</h3><p>A platform with practice questions and resources specifically for frontend and UI/System Design interviews.</p><a href="https://www.greatfrontend.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Great Frontend</a></div>
        </div>
    </div></>
);
export default ReactPhase18Resources;