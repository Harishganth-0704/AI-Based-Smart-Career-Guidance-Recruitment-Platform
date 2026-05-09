// src/pages/skills/JavaPhase19Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase19Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 18: Project & Dependency Management</h1>
                <p>Learn to automate the process of compiling, testing, and packaging a project with build tools like Maven or Gradle.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Build Tools</h2>
                <div className="resource-item">
                    <h3>Maven in 5 Minutes</h3>
                    <p>The official quick-start guide from Maven to understand its core concepts, conventions, and build lifecycle.</p>
                    <a href="https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>Introduction to Gradle</h3>
                    <p>A video tutorial for beginners explaining the more modern and flexible build tool, Gradle, which is standard for Android development.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0-S-b-g_5-M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase19Resources;
