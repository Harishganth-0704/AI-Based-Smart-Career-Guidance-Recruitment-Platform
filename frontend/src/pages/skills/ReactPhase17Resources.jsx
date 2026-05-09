import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase17Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 17: Portfolio & Resume Strategy</h1><p>Learn to effectively market your skills by creating a compelling portfolio and resume.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Guides & Examples</h2>
            <div className="resource-item"><h3>Awesome GitHub Profile README</h3><p>A curated list of awesome READMEs to inspire you when creating your own GitHub profile page.</p><a href="https://github.com/abhisheknaiidu/awesome-github-profile-readme" target="_blank" rel="noopener noreferrer" className="resource-link">Get Inspired</a></div>
        </div>
    </div></>
);
export default ReactPhase17Resources;