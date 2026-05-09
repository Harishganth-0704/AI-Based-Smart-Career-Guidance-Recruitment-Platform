// src/pages/CloudPhase2Resources.Solutions Architect Associate
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core Cloud Concepts & Certified Solutions Architect Associate</h1>
                <p>Understanding fundamental cloud service models, core architectural components, and advanced networking principles within cloud environments.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Cloud service models: IaaS, PaaS, SaaS</li>
                        <li>Regions, Availability Zones, accounts and tenancy, multi-account strategy</li>
                        <li>VPC design: subnets, route tables, Internet Gateway, NAT Gateway, peering, Transit Gateway</li>
                        <li>Load balancing (ALB, NLB), auto scaling patterns</li>
                        <li>Storage on AWS: S3, EBS, EFS, Glacier and lifecycle policies</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📗 Guide: AWS official: AWS Well-Architected Framework</h3>
                    <p>Core design principles and best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the AWS cloud.</p>
                    <a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read AWS Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: AWS Certified Solutions Architect Associate (Udemy)</h3>
                    <p>Prepare for the AWS Solutions Architect Associate exam with this comprehensive course, covering key AWS services and architectural patterns.</p>
                    <a href="https://www.udemy.com/course/practice-exams-aws-certified-solutions-architect-associate/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: AWS Solutions Architect Associate Certification (SAA-C03) — freeCodeCamp</h3>
                    <p>A full, in-depth course preparing you for the AWS Solutions Architect Associate certification, covering all essential topics.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/c3Cn4xYfxJY?si=LlDZdYUXegvoOb4X"
                        title="YouTube video player (AWS Solutions Architect Associate Certification)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase2Resources;