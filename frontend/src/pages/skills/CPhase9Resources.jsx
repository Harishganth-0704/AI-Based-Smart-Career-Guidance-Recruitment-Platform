// src/pages/skills/CPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: The Soul of C: Pointers and Memory Addressing</h1>
                <p>Gain a deep, intuitive understanding of pointers, memory addresses, and pointer arithmetic.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase9Resources;
