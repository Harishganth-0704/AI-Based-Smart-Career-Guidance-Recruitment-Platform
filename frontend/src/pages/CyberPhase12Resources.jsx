// src/pages/CyberPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Real-World Projects</h1>
                <p>Applying cybersecurity knowledge to practical projects to build a strong portfolio and demonstrate hands-on defense and offense capabilities.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics (Project Ideas) */}
            <div className="resource-section">
                <h2>Project Ideas</h2>
                <div className="resource-item">
                    <ul>
                        <li>Build a fully secured web app (front end, API, DB) with defense in depth, logging, alerts</li>
                        <li>Create a small red-team / blue-team exercise in your lab (you play both roles)</li>
                        <li>Simulate phishing + social engineering campaign (harmless) in a controlled lab environment</li>
                        <li>Build malware demo (e.g., simple backdoor) and analyze it</li>
                        <li>Design an enterprise IAM + PKI system</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: 13 Cyber Security Projects to get you HIRED</h3>
                    <p>A video showcasing various cybersecurity project ideas that can help you build an impressive portfolio and get hired.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/CWtLdR2SxNY?si=xJALQaJcT3Jr6Nc9"
                        title="YouTube video player (13 Cyber Security Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase12Resources;