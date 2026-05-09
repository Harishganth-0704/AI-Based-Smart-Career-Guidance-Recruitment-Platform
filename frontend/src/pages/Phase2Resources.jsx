// src/pages/Phase2.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase2 = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Mathematical & Statistical Foundations</h1>
                <p>Building the core mathematical and statistical intuition necessary for understanding machine learning algorithms.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics - UPDATED */}
            <div className="resource-section">
                <h2>Key Concepts</h2>
                <div className="resource-item">
                    <ul>
                        <li>Math:
                            <ul>
                                <li>Linear Algebra: Vectors, Matrices, Eigenvalues</li>
                                <li>Calculus: Derivatives, Gradients (for backpropagation)</li>
                            </ul>
                        </li>
                        <li>Statistics:
                            <ul>
                                <li>Descriptive stats, Probability, Distributions</li>
                                <li>Hypothesis testing, p-values, Confidence intervals</li>
                                <li>Correlation, Regression basics</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources - REMAINS THE SAME */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Practical Statistics for Data Scientists – Peter Bruce</h3>
                    <p>Focuses on the practical application of statistical methods in data science and avoids heavy mathematical theory.</p>
                    <a href="https://www.amazon.in/Practical-Statistics-Data-Scientists-Edition/dp/149207294X" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Mathematics for Machine Learning – Coursera</h3>
                    <p>An excellent specialization from Imperial College London covering the essential math prerequisites for ML and AI.</p>
                    <a href="https://www.coursera.org/specializations/mathematics-machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: StatQuest with Josh Starmer – Statistics Playlist</h3>
                    <p>Complex statistical concepts explained with clear, easy-to-follow videos and examples.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default Phase2;