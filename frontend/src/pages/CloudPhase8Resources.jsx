// src/pages/CloudPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Cloud Networking Mastery</h1>
                <p>Achieving expert-level understanding and implementation of advanced networking concepts and services within cloud environments.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Advanced routing, BGP (for Direct Connect/VPN), Transit Gateway design</li>
                        <li>Network performance tuning, hybrid connectivity (Direct Connect + VPN), latency mitigation</li>
                        <li>PrivateLink, VPC endpoints, security at network layer, service mesh for microservices (App Mesh)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📗 Book: AWS Transit Gateway</h3>
                    <p>A focused guide on understanding and implementing AWS Transit Gateway for simplifying network topology and connectivity.</p>
                    <a href="https://www.amazon.in/AWS-Transit-Gateway-Tutorial-aws-networking-services-ebook/dp/B0CLKBH8Q4/ref=sr_1_2?crid=1RV2MCOE8F1PD&dib=eyJ2IjoiMSJ9.jt48NYpgzusIDAkbzrY_MWMujGgx3iUmiCGN0PPQDfsUwCj91SRgzfsgRfCIEvu4.GlJV2yCIINoHAmw-qbj66yF_NCl3uByPZGL1CiwM448&dib_tag=se&keywords=AWS+VPC+%26+Transit+Gateway&qid=1760196314&sprefix=aws+vpc+%26+transit+gateway%2Caps%2C805&sr=8-2" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Cloud Networking — Coursera</h3>
                    <p>Gain a deeper understanding of cloud networking concepts, including virtual networks, load balancing, and advanced connectivity.</p>
                    <a href="https://www.coursera.org/learn/cloud-networking" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Google Cloud Networking</h3>
                    <p>An introduction to Google Cloud's networking services and how to design robust network architectures on GCP.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/KayF1osXrOk?si=c9N80zPdP6THtXkY"
                        title="YouTube video player (Google Cloud Networking)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase8Resources;