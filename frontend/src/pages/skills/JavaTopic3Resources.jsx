// src/pages/skills/JavaTopic3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaTopic3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 0, Topic 3: Your First Java Program</h1>
                <p>Write, compile, and run a simple "Hello, World!" program to verify that your development environment is correctly configured.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Getting Started</h2>
                <div className="resource-item">
                    <h3>Java Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>This comprehensive video provides a visual walkthrough of creating your first project in IntelliJ, writing the "Hello, World!" code, and running it. It's the perfect way to confirm your setup is working.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A74TOX80u_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaTopic3Resources;

