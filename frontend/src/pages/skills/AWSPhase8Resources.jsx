// src/pages/skills/AWSPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const AWSPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Phase 8: Professional Readiness and Certification</h1>
                <p>Consolidate knowledge by learning the AWS Well-Architected Framework and preparing for industry-recognized certifications.</p>
                <Link to="/skills/aws" className="back-link">← Back to AWS Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Frameworks & Certification Prep</h2>
                <div className="resource-item">
                    <h3>AWS Well-Architected Framework (Official Whitepaper)</h3>
                    <p>The official guide that helps cloud architects build secure, high-performing, resilient, and efficient infrastructure. Essential reading for any AWS professional.</p>
                    <a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">Download PDF</a>
                </div>
                <div className="resource-item">
                    <h3>AWS Certified Solutions Architect - Associate (SAA-C03) Full Course (freeCodeCamp)</h3>
                    <p>A complete, 13-hour video course from Andrew Brown that covers all the topics needed to prepare for the cornerstone SAA certification.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ia-UEYYR44s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default AWSPhase8Resources;
