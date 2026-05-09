// src/pages/AIPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core Mathematics for AI</h1>
                <p>Developing a robust understanding of the mathematical foundations — linear algebra, calculus, probability, and optimization — crucial for comprehending AI algorithms.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Linear Algebra:
                            <ul>
                                <li>Vectors, Matrices, Eigenvectors, Singular Value Decomposition (SVD)</li>
                            </ul>
                        </li>
                        <li>Multivariable Calculus:
                            <ul>
                                <li>Derivatives, Gradients (for backpropagation), Jacobians, Hessians, Chain Rule</li>
                            </ul>
                        </li>
                        <li>Probability & Statistics:
                            <ul>
                                <li>Distributions, Bayes Theorem, Expectation, Variance</li>
                            </ul>
                        </li>
                        <li>Optimization:
                            <ul>
                                <li>Gradient Descent variants, Convex vs Non-convex optimization</li>
                            </ul>
                        </li>
                        <li>Numerical methods, error analysis, matrix conditioning</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Mathematics for Machine Learning — Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong</h3>
                    <p>A foundational text covering the essential mathematics for understanding and developing machine learning algorithms.</p>
                    <a href="https://www.amazon.in/Mathematics-Machine-Learning-Deisenroth/dp/110845514X" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Mathematics for Machine Learning Specialization — Coursera (Imperial College)</h3>
                    <p>This specialization provides a comprehensive review of the core mathematical concepts required for machine learning.</p>
                    <a href="https://www.coursera.org/specializations/mathematics-machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: 3Blue1Brown — Essence of linear algebra series</h3>
                    <p>Gain intuitive visual understanding of linear algebra concepts crucial for AI and machine learning.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fNk_zzaMoSs?si=lInFl1R22bBKATYU"
                        title="YouTube video player (Essence of linear algebra)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: 3Blue1Brown — Essence of neural networks series</h3>
                    <p>Visual explanations of how neural networks work, from basic principles to backpropagation.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/aircAruvnKk?si=dkDfBok2PmsYlakK"
                        title="YouTube video player (Essence of neural networks)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default AIPhase2Resources;