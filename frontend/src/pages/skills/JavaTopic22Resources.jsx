// src/pages/skills/JavaPhase22Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase22Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 21 & 22: Portfolio & Interview Prep</h1>
                <p>Synthesize your skills by building portfolio projects and prepare for the job market by practicing common interview questions.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Practice Platforms</h2>
                <div className="resource-item">
                    <h3>LeetCode</h3>
                    <p>The premier platform for practicing data structures and algorithm problems, a key part of technical interviews for Java roles.</p>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a>
                </div>
                <div className="resource-item">
                    <h3>HackerRank - Java</h3>
                    <p>Offers a wide range of Java-specific challenges and interview preparation kits to hone your problem-solving skills.</p>
                    <a href="https://www.hackerrank.com/domains/java" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on HackerRank</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase22Resources;
