// src/pages/CyberPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Cybersecurity Foundations</h1>
                <p>Building a strong understanding of core cybersecurity principles, common threats, vulnerabilities, and essential security controls.</p>
                <Link to="/cybersecurity" className="back-link">← Back to CyberSecurity Specialist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>CIA triad (Confidentiality, Integrity, Availability), security principles (least privilege, defense in depth, fail-safe defaults)</li>
                        <li>Threats, vulnerabilities, risk assessment, threat modeling</li>
                        <li>Common attack types: malware, phishing, DoS, brute force, injection, social engineering</li>
                        <li>Security controls: preventive, detective, corrective</li>
                        <li>Security policies, frameworks & compliance (ISO 27001, NIST, GDPR)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books/Notes --- */}
                <div className="resource-item">
                    <h3>📄 Free Resources: Simplilearn Free Cybersecurity eBooks</h3>
                    <p>Access a collection of free e-books covering various topics in cybersecurity, ideal for foundational knowledge.</p>
                    <a href="https://www.simplilearn.com/resources/cyber-security/ebooks" target="_blank" rel="noopener noreferrer" className="resource-link">View eBooks</a>
                </div>
                <div className="resource-item">
                    <h3>📗 Book: A Practical Guide to Cyber Security for Small Businesses</h3>
                    <p>A pragmatic guide focusing on cybersecurity best practices and strategies specifically for small to medium-sized businesses.</p>
                    <a href="https://www.booleanlogical.com/cybersecurity-books/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More</a>
                </div>
                <div className="resource-item">
                    <h3>📄 Notes: Cybersecurity Roadmap Articles (e.g., GeeksforGeeks)</h3>
                    <p>Articles outlining a foundational path in cybersecurity, often including key concepts and learning resources.</p>
                    <a href="https://www.geeksforgeeks.org/ethical-hacking/cybersecurity-roadmap/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Articles</a>
                </div>
                <div className="resource-item">
                    <h3>📄 Notes: NIST Cybersecurity Framework</h3>
                    <p>The official framework from NIST providing a common language and systematic approach to managing cybersecurity risk.</p>
                    <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="resource-link">View Framework</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Google Cybersecurity Professional Certificate — Coursera</h3>
                    <p>A comprehensive program designed to prepare you for entry-level cybersecurity roles, covering core concepts and practical skills.</p>
                    <a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: The “Land a Cybersecurity Job in 10 Months” Roadmap Video</h3>
                    <p>A video outlining a strategic roadmap and resources to help you kickstart a career in cybersecurity.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/v7BNtpw53AA?si=EFc53Ed76L9bfJRO"
                        title="YouTube video player (Cybersecurity Job Roadmap)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase2Resources;