// src/pages/AIPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: MLOps & Deployment (Production-Grade ML)</h1>
                <p>Mastering the principles and practices of MLOps to build, deploy, and maintain robust, scalable, and reliable machine learning systems in production.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>CI/CD for ML:
                            <ul>
                                <li>Pipelines for data validation, model training, testing, and deployment</li>
                            </ul>
                        </li>
                        <li>Model Lifecycle & Reproducibility:
                            <ul>
                                <li>Model versioning (MLflow, DVC), Experiment tracking</li>
                            </ul>
                        </li>
                        <li>Infrastructure & Scaling:
                            <ul>
                                <li>Containerization (Docker), Kubernetes for scalable inference</li>
                                <li>Serverless deployment options (e.g., AWS Lambda, Google Cloud Functions)</li>
                            </ul>
                        </li>
                        <li>Monitoring & Observability:
                            <ul>
                                <li>Drift detection (data and concept drift), Data quality monitoring</li>
                                <li>Latency/SLOs, A/B testing for models</li>
                            </ul>
                        </li>
                        <li>Governance & Optimization:
                            <ul>
                                <li>Security, Access control, Model governance</li>
                                <li>Cost optimization for training and inference</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Introducing MLOps — Mark Treveil, et al. (O’Reilly)</h3>
                    <p>A practical introduction to MLOps that helps you deliver ML models reliably and efficiently through automation.</p>
                    <a href="https://www.amazon.in/Introducing-MLOps-Delivering-Through-Automation/dp/1492083291" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: MLOps (Google Cloud) Specialization / MLOps Fundamentals — Coursera</h3>
                    <p>Learn the foundational principles of Machine Learning Operations (MLOps) to build and maintain ML systems in production.</p>
                    <a href="https://www.coursera.org/learn/mlops-fundamentals" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: DataTalks.Club & MLflow tutorials — practical MLOps walkthroughs</h3>
                    <p>Practical, community-driven tutorials and talks on various MLOps topics and tools like MLflow.</p>
                    {/* A direct link is best for a YouTube channel page */}
                    <a href="https://www.youtube.com/c/DataTalksClub" target="_blank" rel="noopener noreferrer" className="resource-link">Go to YouTube Channel</a>
                </div>
            </div>
        </div>
    </>
);

export default AIPhase8Resources;