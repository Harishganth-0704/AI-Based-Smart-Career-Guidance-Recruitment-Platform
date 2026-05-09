// src/pages/skills/JavaPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Under the Hood - JVM & Memory Management</h1>
                <p>Gain a foundational understanding of how the Java Virtual Machine manages memory, including the Stack, Heap, and Garbage Collection.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>Java Memory Management (Baeldung)</h3>
                    <p>A detailed article explaining the difference between Stack and Heap memory in the JVM and how they are used.</p>
                    <a href="https://www.baeldung.com/java-memory-management-interview-questions" target="_blank" rel="noopener noreferrer" className="resource-link">Read on Baeldung</a>
                </div>
                <div className="resource-item">
                    <h3>Garbage Collection in Java (in 100 seconds)</h3>
                    <p>A very fast, high-level animated video that explains the core concept of automatic garbage collection.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8jI-T32F224" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase15Resources;
