// src/pages/AIPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Applied Machine Learning</h1>
                <p>Building, evaluating, and preparing machine learning models for production, from classic algorithms to modern deployment concerns.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Supervised Learning:
                            <ul>
                                <li>Regression, Classification, Ensembles, Tree-based models</li>
                            </ul>
                        </li>
                        <li>Unsupervised Learning:
                            <ul>
                                <li>Clustering, Dimensionality Reduction (PCA), Anomaly Detection</li>
                            </ul>
                        </li>
                        <li>Model Evaluation:
                            <ul>
                                <li>Cross-validation, Metrics (Precision/Recall/AUC), Calibration</li>
                            </ul>
                        </li>
                        <li>Feature Management:
                            <ul>
                                <li>Feature engineering, Pipelines, Feature Stores (concept & implementation)</li>
                            </ul>
                        </li>
                        <li>Production Concerns:
                            <ul>
                                <li>Inference latency, Batch vs Online scoring, Monitoring & Alerting</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow — Aurélien Géron</h3>
                    <p>An industry-standard guide for building machine learning models with practical, hands-on examples.</p>
                    <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Machine Learning — Coursera (Andrew Ng, Stanford)</h3>
                    <p>The classic introductory course on machine learning, providing a solid theoretical foundation.</p>
                    <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: StatQuest with Josh Starmer — ML concepts made simple</h3>
                    <p>Clear and intuitive explanations of core machine learning concepts, including classification, regression, and decision trees.</p>
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

export default AIPhase5Resources;