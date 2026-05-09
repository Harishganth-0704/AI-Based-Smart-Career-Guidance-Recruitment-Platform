// src/pages/skills/CPlusPlusPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Error Handling & Debugging</h1>
                <p>Learn to write robust code with C++ exception handling and use professional tools like GDB and Valgrind to find bugs.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tools & Tutorials</h2>
                <div className="resource-item">
                    <h3>Exceptions in C++ (The Cherno)</h3>
                    <p>A video explaining how to use `try`, `catch`, and `throw` for modern C++ exception handling.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/i_wDa2AS_8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Valgrind Quick Start Guide</h3>
                    <p>The official guide for getting started with Valgrind, an indispensable tool for finding memory leaks and errors in C++ programs.</p>
                    <a href="https://valgrind.org/docs/manual/qs-manual.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase11Resources;
