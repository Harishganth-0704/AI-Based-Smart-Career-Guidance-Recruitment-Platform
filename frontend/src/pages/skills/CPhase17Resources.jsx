// src/pages/skills/CPhase17Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase17Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 17: Preparing for Employment</h1>
                <p>Focus on the non-technical and meta-skills required to secure a job, including secure coding, interview preparation, and portfolio presentation.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase17Resources;
