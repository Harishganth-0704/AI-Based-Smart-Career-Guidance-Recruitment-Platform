// src/pages/skills/JavaPhase16Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Writing Modern Java (Java 8+)</h1>
                <p>Master the functional programming features that have become the modern standard for writing concise, expressive, and efficient Java code.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Guides</h2>
                <div className="resource-item">
                    <h3>Java 8 Tutorial (freeCodeCamp)</h3>
                    <p>A full video course focused on the revolutionary features introduced in Java 8, including Lambda Expressions, the Stream API, and the new Date/Time API.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gp_n0S-32sE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Baeldung - Java 8 Streams</h3>
                    <p>A comprehensive set of articles and tutorials on using the Stream API for functional-style data processing.</p>
                    <a href="https://www.baeldung.com/java-8-streams" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase16Resources;
