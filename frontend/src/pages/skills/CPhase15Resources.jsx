// src/pages/skills/CPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Debugging, Profiling, and Quality Assurance</h1>
                <p>Learn the professional toolchain for finding bugs (GDB), detecting memory errors (Valgrind), and identifying performance bottlenecks (gprof).</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
        </div>
    </>
);
export default CPhase15Resources;
