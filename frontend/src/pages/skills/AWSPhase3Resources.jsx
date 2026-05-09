// src/pages/skills/AWSPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 3: Building Scalable and Resilient Architectures</h1>
                <p>Learn to combine services to build scalable and fault-tolerant systems using Elastic Load Balancing and Auto Scaling.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>Tutorial: Set up a Scaled and Load-Balanced Application</h3>
                    <p>The official, end-to-end AWS tutorial for creating a complete auto-scaling architecture with a load balancer, launch template, and auto scaling group.</p>
                    <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/tutorial-as-application-load-balancer.html" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorial</a>
                </div>
                 <div className="resource-item">
                    <h3>What is Elastic Load Balancing? (AWS Docs)</h3>
                    <p>The official documentation explaining the different types of load balancers (Application, Network, Gateway) and their use cases.</p>
                    <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-elastic-load-balancing.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase3Resources;
