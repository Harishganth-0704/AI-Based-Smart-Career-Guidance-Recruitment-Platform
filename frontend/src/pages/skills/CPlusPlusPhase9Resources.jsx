// src/pages/skills/CPlusPlusPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Advanced OOP & Design Principles</h1>
                <p>Master the four pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism) and the SOLID principles.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>Virtual Functions in C++ (The Cherno)</h3>
                    <p>A crucial video for understanding runtime polymorphism, explaining what `virtual` functions are and how they work.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/o_I-gg4t2V4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>SOLID Principles in C++ (DigitalOcean)</h3>
                    <p>A well-written article that explains the five SOLID principles of object-oriented design with C++ examples.</p>
                    <a href="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-5-principles-of-object-oriented-design" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase9Resources;
