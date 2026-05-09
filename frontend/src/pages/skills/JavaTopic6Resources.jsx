// src/pages/skills/JavaPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Classes, Objects, and Constructors</h1>
                <p>Translate OOP concepts into practical Java code by creating and manipulating classes and objects.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Documentation & Practice</h2>
                <div className="resource-item">
                    <h3>Classes (Official Oracle Docs)</h3>
                    <p>The official documentation provides a thorough guide to defining classes, creating objects, and using constructors.</p>
                    <a href="https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>HackerRank - Java Object Oriented Programming</h3>
                    <p>A set of hands-on coding challenges to practice your OOP skills in a practical context.</p>
                    <a href="https://www.hackerrank.com/domains/java/java-oop" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Challenge</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase6Resources;
