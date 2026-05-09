// src/pages/skills/CPlusPlusPhase19Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase19Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 19: Interview Preparation</h1>
                <p>Prepare for technical interviews by practicing DSA problems, C++ language specifics, and system design.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Practice & Reading</h2>
                <div className="resource-item">
                    <h3>LeetCode</h3>
                    <p>The industry standard for practicing Data Structures and Algorithms problems. C++ is a first-class language on the platform.</p>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a>
                </div>
                <div className="resource-item">
                    <h3>"Cracking the Coding Interview" by Gayle Laakmann McDowell</h3>
                    <p>The classic guide to preparing for technical interviews at top tech companies, with a strong focus on problem-solving strategies.</p>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase19Resources;
