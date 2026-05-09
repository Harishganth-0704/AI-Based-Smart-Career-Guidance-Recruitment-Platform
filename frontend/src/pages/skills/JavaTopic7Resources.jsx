// src/pages/skills/JavaPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Advanced OOP Concepts</h1>
                <p>Explore more sophisticated tools for abstraction and code organization, like abstract classes and interfaces.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>Inheritance vs Composition (Amigoscode)</h3>
                    <p>A video tutorial that clearly explains the difference between the "is-a" (inheritance) and "has-a" (composition) relationships, and why you should favor composition.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=D-S_8I24OaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Difference Between Abstract Class and Interface (GeeksforGeeks)</h3>
                    <p>A detailed article with a comparison table that clarifies when to use an abstract class versus an interface.</p>
                    <a href="https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase7Resources;
