// src/pages/CloudPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Certified Solutions Architect Professional </h1>
                <p>Delving into more complex cloud architectural patterns, advanced networking, and deep dives into cloud service capabilities for robust solutions.</p>
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
                    <h3>📗 Guide: AWS Certification pages & exam guides (SAA-C03)</h3>
                    <p>Official AWS resources providing detailed information and study guides for the Solutions Architect Associate certification.</p>
                    <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener noreferrer" className="resource-link">View AWS Certification Guide</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Ultimate AWS Certified Solutions Architect Professional (Udemy)</h3>
                    <p>An advanced course designed for those looking to achieve the AWS Certified Solutions Architect Professional certification, focusing on complex architectural scenarios.</p>
                    <a href="https://www.udemy.com/course/aws-solutions-architect-professional/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: AWS Solutions Architect Professional (SAP-C02) Certification Course</h3>
                    <p>A comprehensive video course to help you prepare for the AWS Solutions Architect Professional certification exam, covering advanced topics and best practices.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/hyEw7dQ9-JE?si=LKpcXRepjM2II2IS"
                        title="YouTube video player (AWS Solutions Architect Professional)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase3Resources;