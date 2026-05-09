// src/pages/skills/JavaTopic5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaTopic5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1, Topic 2: Operators and Expressions</h1>
                <p>Master the symbols used to perform arithmetic, assignment, relational, and logical operations.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Documentation</h2>
                <div className="resource-item">
                    <h3>Java Operators (DataCamp)</h3>
                    <p>A concise and well-organized list of all operator types with simple, easy-to-understand examples, perfect for a quick overview.</p>
                    <a href="https://www.datacamp.com/community/tutorials/operators-in-java" target="_blank" rel="noopener noreferrer" className="resource-link">Read on DataCamp</a>
                </div>
                 <div className="resource-item">
                    <h3>Operators (Official Oracle Docs)</h3>
                    <p>The definitive guide from Oracle covering all operators, including their precedence and associativity, for a deep and accurate understanding.</p>
                    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaTopic5Resources;

