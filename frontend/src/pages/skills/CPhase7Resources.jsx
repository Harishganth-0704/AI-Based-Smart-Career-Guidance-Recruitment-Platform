// src/pages/skills/CPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Modular Programming with Functions</h1>
                <p>Encapsulate logic into reusable blocks and master parameter passing, including emulating "call by reference" with pointers.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase7Resources;
