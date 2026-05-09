// src/pages/AIPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Cloud Platforms for AI (AWS, GCP, Azure)</h1>
                <p>Learning to leverage leading cloud platforms for building, deploying, and managing AI/ML workloads efficiently and at scale.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Cloud Fundamentals for ML:
                            <ul>
                                <li>Identity and Access Management (IAM), Networking, Storage, Compute resources specific to ML workloads</li>
                            </ul>
                        </li>
                        <li>Managed ML Services:
                            <ul>
                                <li>AWS Sagemaker, GCP Vertex AI, Azure ML — covering training, inference, and MLOps pipelines</li>
                            </ul>
                        </li>
                        <li>Cost & Infrastructure Design:
                            <ul>
                                <li>Spot instances, Autoscaling, Multi-AZ design for high availability</li>
                                <li>GPU infrastructure, Designing efficient inference endpoints</li>
                            </ul>
                        </li>
                        <li>Deployment Patterns:
                            <ul>
                                <li>Hybrid & Edge deployment patterns</li>
                                <li>Model serving architectures (serverless, microservices)</li>
                            </ul>
                        </li>
                        <li>Operations & Automation:
                            <ul>
                                <li>Logging, Monitoring, Secrets management</li>
                                <li>Infrastructure-as-Code (IaC) with tools like Terraform</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book/Guide: Official Cloud ML Documentation & Reference Architectures</h3>
                    <p>The most up-to-date and authoritative resources for learning about AI services on various cloud platforms.</p>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/sagemaker/" target="_blank" rel="noopener noreferrer" className="resource-link">AWS Sagemaker Documentation</a></li>
                        <li><a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener noreferrer" className="resource-link">GCP Vertex AI Documentation</a></li>
                        <li><a href="https://learn.microsoft.com/en-us/azure/machine-learning/?view=azureml-api-2" target="_blank" rel="noopener noreferrer" className="resource-link">Azure ML Documentation</a></li>
                    </ul>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: AWS Machine Learning Specialty / AWS Sagemaker Workshops</h3>
                    <p>Hands-on training from AWS to deeply understand and implement machine learning solutions on their platform.</p>
                    <a href="https://aws.amazon.com/training/learn-about/ai/" target="_blank" rel="noopener noreferrer" className="resource-link">AWS AI/ML Training</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: AWS Sagemaker Overview & Demos</h3>
                    <p>Visual introductions and practical demonstrations of Amazon SageMaker's capabilities for building, training, and deploying ML models.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Qv_Tr_BCFCQ?si=ETagaQFyiAEVVCVL"
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

export default AIPhase9Resources;