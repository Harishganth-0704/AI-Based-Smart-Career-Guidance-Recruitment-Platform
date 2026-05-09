// src/pages/CyberPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Interview Preparation</h1>
                <p>Sharpening your technical, problem-solving, and behavioral skills to ace cybersecurity interviews and secure your desired role.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics for Interview Preparation</h2>
                <div className="resource-item">
                    <ul>
                        <li>Scenario Questions:
                            <ul>
                                <li>Prepare for questions like: "Design secure authentication for a web app" or "Outline incident response steps for a data breach."</li>
                            </ul>
                        </li>
                        <li>Whiteboarding & Design:
                            <ul>
                                <li>Practice threat modeling exercises on a whiteboard.</li>
                                <li>Be ready to discuss architectural tradeoffs for security, scalability, and cost.</li>
                            </ul>
                        </li>
                        <li>Practical Application:
                            <ul>
                                <li>Engage in mock interviews to simulate real-world scenarios.</li>
                                <li>Practice CTF (Capture The Flag) challenges under time limits to hone your problem-solving skills.</li>
                            </ul>
                        </li>
                        <li>Review Security Concepts:
                            <ul>
                                <li>Revisit common penetration testing methodologies and challenges.</li>
                                <li>Understand defensive scenarios and how to respond to various attack vectors.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: Top 30 Cyber Security Interview Questions & Answers</h3>
                    <p>A video guide covering frequently asked cybersecurity interview questions and effective strategies for answering them.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/v0el2gamx0Q?si=bgVm2E6ZwXCloFV1"
                        title="YouTube video player (Top Cyber Security Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase14Resources;