// src/pages/skills/CPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Anatomy of a C Program & Compilation</h1>
                <p>Deconstruct a C program into its core sections and understand the four-stage compilation model (preprocessing, compilation, assembly, linking).</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Articles</h2>
                <div className="resource-item">
                    <h3>Compilation Process in C (GeeksForGeeks)</h3>
                    <p>A clear article that explains the four stages of compilation: Preprocessing, Compiling, Assembling, and Linking, with examples. Understanding this process is crucial for debugging complex build issues.</p>
                    <a href="https://www.geeksforgeeks.org/compilation-process-in-c/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
                <div className="resource-item">
                    <h3>Basic Structure of a C Program (GeeksForGeeks)</h3>
                    <p>This article breaks down the different sections of a C program, from the documentation and link sections to the main function and subprograms.</p>
                    <a href="https://www.geeksforgeeks.org/basic-structure-of-a-c-program/" target="_blank" rel="noopener noreferrer" className="resource-link">See the Structure</a>
                </div>
            </div>
        </div>
    </>
);
export default CPhase3Resources;

