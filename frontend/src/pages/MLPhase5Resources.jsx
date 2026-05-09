// src/pages/MLPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Core Machine Learning Algorithms</h1>
                <p>Building a deep understanding of fundamental supervised and unsupervised learning algorithms and how to evaluate their performance.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Supervised Learning (e.g., Regression, Classification)</li>
                        <li>Unsupervised Learning (e.g., Clustering, Dimensionality Reduction)</li>
                        <li>Model Evaluation Metrics (e.g., Accuracy, Precision, Recall, F1-score)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow — Aurélien Géron</h3>
                    <p>A comprehensive and practical guide to machine learning, from fundamental concepts to deep learning applications.</p>
                    <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Machine Learning — Andrew Ng on Coursera</h3>
                    <p>A classic and highly-rated course that provides a strong theoretical foundation in machine learning.</p>
                    <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: StatQuest with Josh Starmer</h3>
                    <p>An excellent series of videos that breaks down complex machine learning and statistics concepts into simple, understandable pieces.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF"
                        title="YouTube video player (StatQuest)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase5Resources;