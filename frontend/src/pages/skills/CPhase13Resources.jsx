// src/pages/skills/CPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: The Build Process and Advanced Features</h1>
                <p>Manage multi-file projects, use the preprocessor effectively, and handle command-line arguments.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase13Resources;
