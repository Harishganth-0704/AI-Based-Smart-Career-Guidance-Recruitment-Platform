// src/pages/Phase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: MLOps & Deployment</h1>
                <p>Learning to productionize machine learning models, ensuring reliable deployment, monitoring, and maintenance in real-world applications.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Concepts:
                            <ul>
                                <li>Model versioning, CI/CD, pipelines</li>
                            </ul>
                        </li>
                        <li>Tools:
                            <ul>
                                <li>MLflow, DVC (Data Version Control), Docker, GitHub Actions</li>
                            </ul>
                        </li>
                        <li>Cloud Deployment:
                            <ul>
                                <li>AWS Sagemaker, GCP AI Platform, Azure ML</li>
                            </ul>
                        </li>
                        <li>APIs for Model Serving:
                            <ul>
                                <li>FastAPI, Flask</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Introducing MLOps – Mark Treveil & Alok Shukla</h3>
                    <p>A comprehensive introduction to MLOps, covering the principles and practices for effective machine learning operations.</p>
                    <a href="https://www.amazon.in/Introducing-MLOps-Delivering-Through-Automation/dp/1492083291" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: MLOps Fundamentals – Coursera (Google Cloud)</h3>
                    <p>Learn the core principles of MLOps and how to apply them for reliable and efficient ML systems.</p>
                    <a href="https://www.coursera.org/learn/mlops-fundamentals" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: End-to-End ML Deployment with FastAPI & Docker (Krish Naik)</h3>
                    <p>A practical walkthrough on deploying machine learning models using modern tools like FastAPI and Docker.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UbCWoMf80PY?si=Z6FwaTTnUwvslwNu"
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

export default Phase9Resources;