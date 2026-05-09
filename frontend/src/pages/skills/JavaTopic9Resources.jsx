// src/pages/skills/JavaPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Handling the Unexpected - Exception Handling</h1>
                <p>Write resilient and robust code that can gracefully handle runtime errors and exceptional conditions.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>Java Exception Handling (Amigoscode)</h3>
                    <p>A practical video tutorial that clearly explains how to use `try`, `catch`, and `finally`, and the important difference between checked and unchecked exceptions.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sqdoafgK_5s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Exceptions in Java (BeginnersBook)</h3>
                    <p>A comprehensive text-based tutorial that covers the exception hierarchy, common exception types, and how to create custom exceptions.</p>
                    <a href="https://beginnersbook.com/2013/04/java-exception-handling/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase9Resources;
