// src/pages/skills/JavaTopic1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaTopic1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 0, Topic 1: The Java Ecosystem Demystified</h1>
                <p>Understand the roles of the JDK (for development), JRE (for running), and JVM (for executing) to grasp Java's "Write Once, Run Anywhere" philosophy.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>JDK vs JRE vs JVM (Baeldung)</h3>
                    <p>A definitive article that clearly explains the differences between the core components of the Java platform.</p>
                    <a href="https://www.baeldung.com/jdk-vs-jre-vs-jvm" target="_blank" rel="noopener noreferrer" className="resource-link">Read on Baeldung</a>
                </div>
                 <div className="resource-item">
                    <h3>Java Virtual Machine Explained (freeCodeCamp)</h3>
                    <p>A video that dives into the architecture and function of the JVM, the heart of the Java platform.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2i_6M-agJ-E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JavaTopic1Resources;

