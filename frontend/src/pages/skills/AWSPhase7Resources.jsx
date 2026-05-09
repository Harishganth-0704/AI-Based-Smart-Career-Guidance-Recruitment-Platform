// src/pages/skills/AWSPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 7: Governance, Security, and Optimization</h1>
                <p>Focus on managing cloud environments at scale with services for governance, security, monitoring, and cost optimization.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Documentation</h2>
                <div className="resource-item">
                    <h3>AWS Organizations - Official Documentation</h3>
                    <p>The official guide to using AWS Organizations for central governance and management of multiple AWS accounts.</p>
                    <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                <div className="resource-item">
                    <h3>Amazon CloudWatch Concepts</h3>
                    <p>The official documentation explaining the core components of CloudWatch, including Metrics, Alarms, Logs, and Dashboards.</p>
                    <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase7Resources;
