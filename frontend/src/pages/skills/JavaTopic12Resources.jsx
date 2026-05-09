// src/pages/skills/JavaPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Type-Safe Code - Generics & Enums</h1>
                <p>Write more robust, readable, and reusable code by enforcing type constraints at compile time and creating fixed sets of constants.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Videos</h2>
                 <div className="resource-item">
                    <h3>Java Generics Tutorial (Jenkov)</h3>
                    <p>An excellent and clear text-based introduction to the topic of Generics in Java, including bounded types and wildcards.</p>
                    <a href="http://tutorials.jenkov.com/java-generics/index.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>Generics in Java (Telusko)</h3>
                    <p>A video tutorial that provides a clear, visual explanation of why generics are needed and how to use them to create type-safe code.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K1iu1kXkVoA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase12Resources;
