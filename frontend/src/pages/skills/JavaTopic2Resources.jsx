// src/pages/skills/JavaTopic2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaTopic2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 0, Topic 2: Your Professional Toolkit Setup</h1>
                <p>Install and configure the JDK and the IntelliJ IDEA IDE.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Installation & Setup</h2>
                <div className="resource-item">
                    <h3>Install IntelliJ IDEA (JetBrains)</h3>
                    <p>The official, detailed documentation from JetBrains for installing their industry-standard IDE on various operating systems.</p>
                    <a href="https://www.jetbrains.com/help/idea/installation-guide.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>How to Install Java JDK and IntelliJ IDEA (Programming with Mosh)</h3>
                    <p>A clear, step-by-step video guide on installing the necessary tools for Java development on a Windows machine.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8cm1x4bC610" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaTopic2Resources;

