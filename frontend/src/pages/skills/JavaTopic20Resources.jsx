// src/pages/skills/JavaPhase20Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase20Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 19: Ensuring Quality - Testing</h1>
                <p>Learn the principles and practices of automated testing to ensure code quality, prevent regressions, and build confidence in your software.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Frameworks & Guides</h2>
                <div className="resource-item">
                    <h3>JUnit 5 User Guide</h3>
                    <p>The official documentation for the standard framework for writing and running unit tests in Java.</p>
                    <a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Introduction to Mockito (Baeldung)</h3>
                    <p>A practical guide to using the most popular mocking framework for isolating units of code during testing.</p>
                    <a href="https://www.baeldung.com/mockito-series" target="_blank" rel="noopener noreferrer" className="resource-link">Read on Baeldung</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase20Resources;
