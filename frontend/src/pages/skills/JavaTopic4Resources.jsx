// src/pages/skills/JavaTopic4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaTopic4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1, Topic 1: Variables and Primitive Data Types</h1>
                <p>Learn Java's eight primitive data types for storing raw values like numbers, characters, and booleans.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Documentation & Tutorials</h2>
                <div className="resource-item">
                    <h3>Primitive Data Types (Official Oracle Docs)</h3>
                    <p>The canonical definitions and specifications for each of Java's eight primitive types from the official documentation. This is the ultimate source of truth.</p>
                    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                <div className="resource-item">
                    <h3>Java Primitives (Baeldung)</h3>
                    <p>A clear, practical article with examples, tables of sizes, and value ranges for each primitive type. Baeldung is a highly respected resource in the Java community.</p>
                    <a href="https://www.baeldung.com/java-primitives" target="_blank" rel="noopener noreferrer" className="resource-link">Read on Baeldung</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaTopic4Resources;

