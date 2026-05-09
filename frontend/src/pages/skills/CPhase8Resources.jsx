// src/pages/skills/CPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Aggregate Data: Arrays and Strings</h1>
                <p>Handle collections of data using arrays and understand C's specific implementation of strings as null-terminated character arrays.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase8Resources;
