// src/pages/skills/CPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Operators and Bit Manipulation</h1>
                <p>Master the full spectrum of C operators, with a special emphasis on bitwise operations for low-level programming.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tutorials</h2>
                <div className="resource-item">
                    <h3>Bitwise Operators in C (GeeksForGeeks)</h3>
                    <p>A comprehensive article explaining AND, OR, XOR, NOT, and shift operators with clear examples and use cases. Understanding these is essential for low-level systems and embedded programming.</p>
                    <a href="https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
                <div className="resource-item">
                    <h3>Bit Twiddling Hacks by Sean Eron Anderson</h3>
                    <p>An extensive and famous collection of highly optimized, low-level bit manipulation algorithms and tricks. This is a must-read for anyone serious about performance-oriented C programming.</p>
                    <a href="https://graphics.stanford.edu/~seander/bithacks.html" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Hacks</a>
                </div>
            </div>
        </div>
    </>
);
export default CPhase5Resources;

