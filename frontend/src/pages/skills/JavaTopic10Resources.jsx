// src/pages/skills/JavaPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Working with Text - String Handling</h1>
                <p>Effectively use Java's classes for creating, manipulating, and comparing text data, with a focus on performance.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Articles</h2>
                <div className="resource-item">
                    <h3>String vs StringBuilder vs StringBuffer (GeeksForGeeks)</h3>
                    <p>A crucial article that explains the difference in mutability and thread safety between Java's core string classes and why it matters for performance.</p>
                    <a href="https://www.geeksforgeeks.org/string-vs-stringbuilder-vs-stringbuffer-in-java/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Comparison</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase10Resources;
