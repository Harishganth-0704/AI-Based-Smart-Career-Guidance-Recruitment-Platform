// src/pages/CyberPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Cloud & DevSecOps Security</h1>
                <p>Securing cloud environments and integrating security practices throughout the DevOps lifecycle (DevSecOps) for robust and resilient systems.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Cloud security fundamentals (shared responsibility model, IAM, network isolation)</li>
                        <li>Secure CI/CD, container security, supply chain security</li>
                        <li>Secrets management, vaults, encryption, key rotation</li>
                        <li>Cloud-native security tools (cloud provider’s security services)</li>
                        <li>Infrastructure as Code security: policy as code, IaC scanning (e.g. TerraScan, Checkov)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books --- */}
                <div className="resource-item">
                    <h3>📗 Book: Delta Protect eBooks on Cloud Security</h3>
                    <p>Access a collection of eBooks from Delta Protect focused on various aspects of cloud security best practices and insights.</p>
                    <a href="https://en.deltaprotect.com/ebooks" target="_blank" rel="noopener noreferrer" className="resource-link">View eBooks</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Cyber Security: DevSecOps — Coursera</h3>
                    <p>Learn to integrate security practices into the entire DevOps pipeline, from development to deployment and operations.</p>
                    <a href="https://www.coursera.org/learn/cyber-security-devsecops" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera Course</a>
                </div>

                {/* --- Free Labs --- */}
                <div className="resource-item">
                    <h3>💻 Free Labs: TryHackMe Cloud Tracks</h3>
                    <p>Engage in hands-on labs focused on cloud security, allowing you to practice identifying and mitigating cloud vulnerabilities.</p>
                    <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Web App Vulnerabilities - DevSecOps Course</h3>
                    <p>A video explaining common web application vulnerabilities and how DevSecOps practices help to secure them.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/F5KJVuii0Yw?si=u3QEYRyQMvnNC0dF"
                        title="YouTube video player (Web App Vulnerabilities - DevSecOps Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase7Resources;