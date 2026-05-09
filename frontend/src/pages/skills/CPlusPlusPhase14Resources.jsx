// src/pages/skills/CPlusPlusPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Templates & Generic Programming</h1>
                <p>Learn to write code that is independent of any particular type, the foundation of the STL.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Videaos</h2>
                <div className="resource-item">
                    <h3>Templates in C++ (The Cherno)</h3>
                    <p>A video tutorial that explains the concept of templates and how to write both function and class templates.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/I-hZkUa9mIs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase14Resources;
