// src/pages/CyberPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Portfolio & Resume Strategy</h1>
                <p>Crafting a powerful portfolio and an optimized resume to effectively highlight your cybersecurity skills and projects for career advancement.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Portfolio / Resume Strategy */}
            <div className="resource-section">
                <h2>Portfolio / Resume Key Points</h2>
                <div className="resource-item">
                    <ul>
                        <li>Projects to Showcase (3–5 high-impact):
                            <ul>
                                <li>Detailed description of each project.</li>
                                <li>Include architecture diagrams (where applicable).</li>
                                <li>Clearly define your role and contributions.</li>
                                <li>Highlight lessons learned and key takeaways.</li>
                                <li>Quantify outcomes and metrics (e.g., "identified 15 critical vulnerabilities," "reduced incident response time by 20%").</li>
                            </ul>
                        </li>
                        <li>Tools & Technologies Used:
                            <ul>
                                <li>List specific security tools (Nmap, Wireshark, Metasploit, SIEMs, EDRs).</li>
                                <li>Mention programming languages (Python, Bash, PowerShell).</li>
                                <li>Include cloud platforms and services if relevant (AWS Security Hub, Azure Sentinel).</li>
                            </ul>
                        </li>
                        <li>Certifications & Labs:
                            <ul>
                                <li>Clearly list relevant cybersecurity certifications (CompTIA Security+, CEH, OSCP, CISSP).</li>
                                <li>Mention hands-on lab experience (TryHackMe, Hack The Box, SANS labs).</li>
                            </ul>
                        </li>
                        <li>Blog / Write-ups:
                            <ul>
                                <li>Include links to any blog posts, CTF write-ups, or vulnerability research you've published.</li>
                                <li>Demonstrates communication skills and thought leadership.</li>
                            </ul>
                        </li>
                        <li>General Resume Tips:
                            <ul>
                                <li>Keep it concise and relevant to the roles you're applying for.</li>
                                <li>Use strong action verbs.</li>
                                <li>Tailor your resume for each job application by incorporating keywords from the job description.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: Give me 9min, and I'll improve your Cyber Security Resume By 187%</h3>
                    <p>A focused video offering quick and actionable tips to significantly enhance your cybersecurity resume.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/mhMVqwl_lfw?si=4V-e-h70HxOR1YAH"
                        title="YouTube video player (Improve Cyber Security Resume)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase13Resources;