// src/pages/CyberPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: System Hardening & Security Tools</h1>
                <p>Learning to secure operating systems, configure host-based security controls, and utilize common cybersecurity tools for defense and analysis.</p>
                {/* --- CORRECTED LINK --- */}
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>OS hardening (patching, disabling unused services, minimal install)</li>
                        <li>Secure configuration (CIS benchmarks, STIGs, Center for Internet Security)</li>
                        <li>Host-based firewall, SELinux/AppArmor, antivirus, EDR</li>
                        <li>Tools: Nmap, Nessus, OpenVAS, Snort, Suricata, OSSEC, Tripwire</li>
                        <li>Secure logging, audit trails, baseline deviations</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes/Guides --- */}
                <div className="resource-item">
                    <h3>📄 Free Books: FreeComputerBooks - Security & OS Hardening</h3>
                    <p>A collection of free resources including books on various security topics and operating system hardening.</p>
                    <a href="https://freecomputerbooks.com/compscspecialSecurityBooks.html" target="_blank" rel="noopener noreferrer" className="resource-link">Browse Free Books</a>
                </div>
                <div className="resource-item">
                    <h3>📄 Guide: CIS Benchmarks - Center for Internet Security</h3>
                    <p>Industry-recognized best practices for securely configuring systems, covering various operating systems and software.</p>
                    <a href="https://www.cisecurity.org/cis-benchmarks" target="_blank" rel="noopener noreferrer" className="resource-link">View CIS Benchmarks</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Courses: Cybrary / SANS modules on System Hardening & Tools</h3>
                    <p>Explore free and paid modules on system hardening techniques and usage of various security tools from leading platforms.</p>
                    <a href="https://www.sans.org/cyberaces" target="_blank" rel="noopener noreferrer" className="resource-link">Go to SANS Cyber Aces</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: What are CIS Benchmarks? and Why are CIS Benchmarks important?</h3>
                    <p>An explanatory video on the significance of CIS Benchmarks in establishing secure configurations for systems.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/2orzA98Ih0k?si=rLkY3YCQCPEuYKPt"
                        title="YouTube video player (CIS Benchmarks Explained)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase3Resources;