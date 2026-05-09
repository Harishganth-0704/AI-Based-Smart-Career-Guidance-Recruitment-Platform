// src/pages/CyberPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Cyber Defense & Blue Teaming</h1>
                <p>Developing skills in defensive cybersecurity operations, including security operations center (SOC) workflows, incident response, and threat intelligence.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Security operations center (SOC) workflows: alert triage, incident response, threat hunting</li>
                        <li>Detection: IDS/IPS, SIEM, EDR, log aggregation, correlation</li>
                        <li>Incident response phases: preparation, detection & analysis, containment, eradication, recovery</li>
                        <li>Threat intelligence, CTI (Cyber Threat Intelligence), IoCs (Indicator of Compromise)</li>
                        <li>Red vs blue team interaction, threat hunting methodology</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Free Labs --- */}
                <div className="resource-item">
                    <h3>💻 Free Labs: TryHackMe (Blue Team Exercises)</h3>
                    <p>Hands-on labs and exercises specifically designed to develop and test your defensive cybersecurity skills.</p>
                    <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a>
                </div>

                {/* --- Blogs --- */}
                <div className="resource-item">
                    <h3>📄 Blogs: Free Threat Intelligence / Incident Response Resources (ThreatIntelligence.com)</h3>
                    <p>Access a variety of articles and resources on threat intelligence, incident response, and cybersecurity best practices.</p>
                    <a href="https://www.threatintelligence.com/resources" target="_blank" rel="noopener noreferrer" className="resource-link">View Resources</a>
                </div>

                {/* --- Training --- */}
                <div className="resource-item">
                    <h3>🎓 Training: SANS Training / Modules in Detection, Incident Handling</h3>
                    <p>Explore SANS training and free modules covering crucial aspects of security detection and incident response.</p>
                    <a href="https://www.sans.org/cyberaces" target="_blank" rel="noopener noreferrer" className="resource-link">Go to SANS Cyber Aces</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Security Certification Roadmap (Paul Jerimy)</h3>
                    <p>A comprehensive visual guide to various cybersecurity certifications, helping you plan your career progression in security.</p>
                    <a href="https://pauljerimy.com/security-certification-roadmap/" target="_blank" rel="noopener noreferrer" className="resource-link">View Roadmap</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Introduction To Blue Team Operations</h3>
                    <p>A video providing an overview of blue team operations, focusing on defensive cybersecurity strategies and practices.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kkjsQV64r14?si=DltdhHlQsaWWykV9"
                        title="YouTube video player (Introduction To Blue Team Operations)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Wireshark For Blue Teams</h3>
                    <p>Learn how to use Wireshark, a powerful network protocol analyzer, for defensive security tasks and threat analysis.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/OjQ0gncwS7I?si=W4yhcGJGWfkc_jUV"
                        title="YouTube video player (Wireshark For Blue Teams)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase4Resources;