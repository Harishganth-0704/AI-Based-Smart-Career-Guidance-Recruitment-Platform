// src/pages/skills/CPlusPlusPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: File Handling</h1>
                <p>Learn to read from and write to files using C++'s fstream library for data persistence.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>File Handling in C++ (GeeksforGeeks)</h3>
                    <p>A comprehensive guide with code examples for reading from and writing to files using `ifstream` and `ofstream`.</p>
                    <a href="https://www.geeksforgeeks.org/file-handling-c-classes/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase12Resources;
