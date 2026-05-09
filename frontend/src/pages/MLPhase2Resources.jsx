// src/pages/MLPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Mathematics for Machine Learning</h1>
                <p>Building the essential mathematical foundation in linear algebra, calculus, and probability required to understand machine learning algorithms.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Linear Algebra</li>
                        <li>Probability & Statistics</li>
                        <li>Calculus</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Mathematics for Machine Learning — Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong</h3>
                    <p>A foundational book that bridges the gap between mathematical concepts and machine learning applications.</p>
                    <a href="https://mml-book.github.io/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Mathematics for Machine Learning Specialization — Coursera</h3>
                    <p>A comprehensive specialization covering the core mathematical concepts needed for a career in machine learning.</p>
                    <a href="https://www.coursera.org/specializations/mathematics-machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Essence of linear algebra — 3Blue1Brown</h3>
                    <p>A visually intuitive series that explains the fundamental concepts of linear algebra, crucial for understanding AI.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
                        title="YouTube video player (Essence of linear algebra)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase2Resources;