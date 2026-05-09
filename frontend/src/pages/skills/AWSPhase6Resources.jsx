// src/pages/skills/AWSPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 6: Infrastructure as Code (IaC) and DevOps</h1>
                <p>Learn to manage infrastructure through code and automate application delivery with CloudFormation and AWS CI/CD tools.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Tutorials</h2>
                 <div className="resource-item">
                    <h3>What is AWS CloudFormation? (AWS)</h3>
                    <p>An official introductory video from AWS explaining the concepts of Infrastructure as Code and how CloudFormation works.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5Cn3h2k3p8A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>How to Setup a CI/CD Pipeline with GitHub Actions and AWS</h3>
                    <p>A detailed article from freeCodeCamp that provides a practical walkthrough of setting up a complete CI/CD pipeline to deploy an application to AWS.</p>
                    <a href="https://www.freecodecamp.org/news/how-to-setup-a-ci-cd-pipeline-with-github-actions-and-aws-s3/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase6Resources;
