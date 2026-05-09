// src/pages/skills/AWSPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 5: Containers and Modern Application Deployment</h1>
                <p>Master AWS's suite of services for running and managing containerized applications with ECS, EKS, and Fargate.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>Deploy a containerized application with AWS Fargate</h3>
                    <p>A hands-on tutorial from AWS that walks you through dockerizing an application, pushing it to ECR, and deploying it with Fargate.</p>
                    <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-deployment.html" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>Amazon ECS vs EKS (TechWorld with Nana)</h3>
                    <p>A clear and concise video explaining the key differences between AWS's two container orchestration services.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OF9h-TjXF4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase5Resources;
