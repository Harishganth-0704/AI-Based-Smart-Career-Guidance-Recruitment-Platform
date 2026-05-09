// src/pages/MLPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: MLOps & Model Deployment</h1>
                <p>Learning the practices and tools to effectively deploy, monitor, and manage machine learning models in production environments.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Model Versioning</li>
                        <li>Continuous Integration/Continuous Deployment (CI/CD) for ML</li>
                        <li>Cloud Platforms: AWS, GCP, Azure for ML deployment</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Building Machine Learning Powered Applications — Emmanuel Ameisen</h3>
                    <p>A practical guide to taking machine learning models from idea to production, covering the entire development lifecycle.</p>
                    <a href="https://www.oreilly.com/library/view/building-machine-learning/9781492045113/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: MLOps: Deploying Machine Learning Models into Production — Coursera</h3>
                    <p>An introductory course focusing on the concepts and tools for deploying ML models and building a robust production environment.</p>
                    <a href="https://www.coursera.org/learn/introduction-to-machine-learning-in-production" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: MLOps Course – Build Machine Learning Production Grade Projects</h3>
                    <p>A comprehensive video course covering the end-to-end process of building and deploying production-grade machine learning systems.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-dJPoLm_gtE?si=ewwGAsEtruXf5qIN"
                        title="YouTube video player (MLOps Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                
                <div className="resource-item">
                    <h3>▶️ YouTube: How to Deploy ML Solutions with FastAPI, Docker, & AWS</h3>
                    <p>A practical tutorial demonstrating how to deploy machine learning models using modern tools like FastAPI, Docker, and AWS.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/pJ_nCklQ65w?si=QCdfPswco-PWZEZF"
                        title="YouTube video player (ML Deployment with FastAPI, Docker, AWS)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase7Resources;