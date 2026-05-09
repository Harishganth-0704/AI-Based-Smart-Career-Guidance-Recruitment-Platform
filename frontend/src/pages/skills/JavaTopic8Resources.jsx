// src/pages/skills/JavaPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Organizing Your Code</h1>
                <p>Learn to structure larger projects using packages and control the visibility and behavior of classes and their members with modifiers.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Documentation</h2>
                <div className="resource-item">
                    <h3>Controlling Access to Members of a Class (Oracle Docs)</h3>
                    <p>The official guide to using access modifiers (`public`, `private`, `protected`, and package-private) to enforce encapsulation.</p>
                    <a href="https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase8Resources;
