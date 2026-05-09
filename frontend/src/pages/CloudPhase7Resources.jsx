// src/pages/CloudPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Architectures & Design Patterns</h1>
                <p>Delving into advanced cloud architectural patterns, event-driven systems, multi-cloud strategies, and crucial cost optimization techniques.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Event-driven architectures (SNS, SQS, EventBridge), microservices patterns</li>
                        <li>Multi-account and multi-region architectures (global services, failover)</li>
                        <li>Hybrid cloud and migration strategies (VM import, DMS, Snow family)</li>
                        <li>Cost optimization patterns (right-sizing, spot instances, savings plans)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Guide --- */}
                <div className="resource-item">
                    <h3>📄 Guide: AWS Well-Architected Framework Whitepapers</h3>
                    <p>Comprehensive whitepapers covering key pillars of architectural excellence: Operational Excellence, Reliability, Performance Efficiency, and Cost Optimization.</p>
                    <a href="https://docs.aws.amazon.com/pdfs/wellarchitected/latest/framework/wellarchitected-framework.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">Read AWS Whitepapers</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Microservices Architecture: Design Patterns & Principles Specialization (Coursera)</h3>
                    <p>Learn to design and implement robust microservices architectures, understanding key patterns and principles.</p>
                    <a href="https://www.coursera.org/specializations/packt-microservices-architecture-design-patterns-principles" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera Specialization</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: What is the AWS Well-Architected Framework?</h3>
                    <p>An introductory video explaining the core concepts and benefits of the AWS Well-Architected Framework for cloud design.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/MpDJ6TCWKjk?si=-6f6M9x0OtTTssJO"
                        title="YouTube video player (AWS Well-Architected Framework)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase7Resources;