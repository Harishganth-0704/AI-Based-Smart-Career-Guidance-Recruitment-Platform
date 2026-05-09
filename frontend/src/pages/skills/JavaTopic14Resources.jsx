// src/pages/skills/JavaPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Concurrent Programming - Multithreading</h1>
                <p>Understand how to execute multiple tasks concurrently and how to manage shared resources safely.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Videos</h2>
                <div className="resource-item">
                    <h3>Java Multithreading (GeeksforGeeks)</h3>
                    <p>A comprehensive tutorial covering thread creation, lifecycle, synchronization, and inter-thread communication.</p>
                    <a href="https://www.geeksforgeeks.org/java-multithreading-tutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>Multithreading in Java Explained in 10 Minutes</h3>
                    <p>A quick and effective video that covers the core concepts of creating threads and the problem of thread interference.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eQk5AWcTS8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase14Resources;
