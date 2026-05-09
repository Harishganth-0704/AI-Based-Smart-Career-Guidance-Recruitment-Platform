// src/pages/skills/AWSPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 4: Embracing Cloud-Native & Serverless</h1>
                <p>Shift to modern, event-driven, serverless patterns using AWS Lambda, API Gateway, and Step Functions.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Workshops</h2>
                <div className="resource-item">
                    <h3>Build a Serverless Web App on AWS (freeCodeCamp)</h3>
                    <p>A complete video course that guides you through building a full serverless application using Lambda, API Gateway, S3, and DynamoDB.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OkW-lcn25xc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>AWS Serverless Workshops</h3>
                    <p>A collection of free, hands-on workshops from AWS that provide practical experience in building a variety of serverless applications.</p>
                    <a href="https://workshops.aws/category/serverless" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Workshops</a>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase4Resources;
