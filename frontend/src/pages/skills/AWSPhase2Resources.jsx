// src/pages/skills/AWSPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 2: Mastering the Core Services</h1>
                <p>Build hands-on skills with EC2 (compute), S3/EBS (storage), VPC (networking), and RDS/DynamoDB (databases).</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>Getting Started with Amazon EC2</h3>
                    <p>The official guide from AWS for launching, connecting to, and cleaning up your first virtual server in the cloud.</p>
                    <a href="https://aws.amazon.com/ec2/getting-started/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Host a Static Website on AWS</h3>
                    <p>A hands-on tutorial that teaches you how to use Amazon S3 to host a static website, a fundamental and common use case.</p>
                    <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/hosting-static-website.html" target="_blank" rel="noopener noreferrer" className="resource-link">Start the Tutorial</a>
                </div>
                 <div className="resource-item">
                    <h3>Amazon VPC - A Complete Guide (GeeksforGeeks)</h3>
                    <p>A comprehensive article explaining the core components of a Virtual Private Cloud, including subnets, route tables, and gateways.</p>
                    <a href="https://www.geeksforgeeks.org/amazon-vpc-virtual-private-cloud/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase2Resources;
