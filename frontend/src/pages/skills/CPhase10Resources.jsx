// src/pages/skills/CPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Dynamic Memory Allocation</h1>
                <p>Learn to manually manage memory on the heap using `malloc`, `calloc`, `realloc`, and `free`.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase10Resources;
