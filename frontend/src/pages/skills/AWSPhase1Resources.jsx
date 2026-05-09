// src/pages/skills/AWSPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 1: Laying the Foundation</h1>
                <p>Understand the "what" and "why" of the cloud, its service models, and the AWS Global Infrastructure.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Overviews</h2>
                <div className="resource-item">
                    <h3>AWS Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>A comprehensive video that is perfect for absolute beginners, covering the fundamental concepts of cloud computing and the core AWS services.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ulprqHHWlng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>AWS Global Infrastructure</h3>
                    <p>An official interactive map and explanation from AWS about their global network of Regions, Availability Zones, and Edge Locations.</p>
                    <a href="https://aws.amazon.com/about-aws/global-infrastructure/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore the Map</a>
                </div>
                 <div className="resource-item">
                    <h3>How to Create an AWS Free Tier Account (freeCodeCamp)</h3>
                    <p>A step-by-step guide to safely setting up your AWS account, including the critical step of creating a billing alarm to avoid unexpected costs.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v3-gKvc9b-A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase1Resources;
