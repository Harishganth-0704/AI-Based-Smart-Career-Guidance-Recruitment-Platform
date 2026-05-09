// src/pages/skills/CPlusPlusPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Data Structures & Algorithms (DSA) in C++</h1>
                <p>Understand how common data structures work internally and be able to implement them from scratch.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Practice & Courses</h2>
                <div className="resource-item">
                    <h3>Data Structures and Algorithms (GeeksforGeeks)</h3>
                    <p>A comprehensive, self-paced course covering all the essential data structures and algorithms with C++ examples.</p>
                    <a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>
                 <div className="resource-item">
                    <h3>LeetCode</h3>
                    <p>The industry standard for practicing DSA problems, which are a core part of technical interviews for C++ roles.</p>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase15Resources;
