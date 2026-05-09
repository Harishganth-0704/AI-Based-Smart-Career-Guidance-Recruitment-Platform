// src/pages/CloudPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Interview Preparation</h1>
                <p>Sharpening your technical and architectural skills, along with problem-solving and communication, to excel in Cloud Architect interviews.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>System Design for Cloud:
                            <ul>
                                <li>Explain tradeoffs (cost, performance, reliability, security).</li>
                                <li>High Availability (HA) and Disaster Recovery (DR) strategies.</li>
                                <li>Data partitioning, caching, and database selection.</li>
                            </ul>
                        </li>
                        <li>Common AWS Scenario Questions:
                            <ul>
                                <li>Designing a multi-tier web application.</li>
                                <li>Migrating an on-premise database to AWS.</li>
                                <li>Implementing cross-region DR.</li>
                                <li>Setting up secure multi-account environments.</li>
                            </ul>
                        </li>
                        <li>Hands-on Interview Practice:
                            <ul>
                                <li>Whiteboard architecture diagrams effectively.</li>
                                <li>Analyze CloudWatch logs and metrics.</li>
                                <li>Create simple CloudFormation/Terraform templates in an interview lab setting.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: AWS Interview Questions And Answers</h3>
                    <p>A video guide covering common AWS interview questions and providing insights into effective answers.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/y1sCHWOAZgU?si=5TWe-8Mrp-_NPszV"
                        title="YouTube video player (AWS Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase13Resources;