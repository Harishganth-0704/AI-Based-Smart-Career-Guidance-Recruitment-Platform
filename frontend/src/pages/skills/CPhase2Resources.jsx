// src/pages/skills/CPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Environment Setup and First Program</h1>
                <p>Establish a professional development environment using VS Code and GCC/GDB and successfully compile and run your first program.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Setup Guides</h2>
                <div className="resource-item">
                    <h3>C/C++ for Visual Studio Code</h3>
                    <p>The official documentation for configuring the Microsoft C/C++ extension, including setup for GCC on Windows via MinGW-w64 and on other platforms.</p>
                    <a href="https://code.visualstudio.com/docs/languages/cpp" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>C Programming Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>This comprehensive video course begins with a detailed walkthrough of setting up your development environment on both Windows and Mac, and compiling your first "Hello, World!" application.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPhase2Resources;

