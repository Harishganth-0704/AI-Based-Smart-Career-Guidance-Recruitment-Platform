// src/pages/CyberPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: IT & Networking Fundamentals</h1>
                <p>Building the essential groundwork in operating systems, networking, and basic scripting to understand the landscape of cybersecurity.</p>
                {/* --- CORRECTED LINK --- */}
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Operating systems (Windows, Linux): file systems, permissions, processes, kernel basics</li>
                        <li>Networking fundamentals: OSI model, TCP/IP, subnetting, routing, NAT, DNS, ARP, DHCP</li>
                        <li>Basic protocols: HTTP, HTTPS, FTP, SMTP, SSH, TLS/SSL, DNS, ICMP</li>
                        <li>Hardware & architecture: CPU, memory, storage, disks, buses, I/O</li>
                        <li>Virtualization and containers: hypervisors, VM, containers (Docker basics)</li>
                        <li>Basic scripting: shell/batch, introduction to Python</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books/Notes --- */}
                <div className="resource-item">
                    <h3>📄 Free Book/Notes: Cyber Security for Beginners (PDF)</h3>
                    <p>An introductory resource covering fundamental concepts of cybersecurity for new learners.</p>
                    <a href="https://www.researchgate.net/publication/375075414_Cyber_Security_for_Beginners" target="_blank" rel="noopener noreferrer" className="resource-link">Read PDF</a>
                </div>
                <div className="resource-item">
                    <h3>📄 Notes: Digital Notes on Cyber Security (R18A0521)</h3>
                    <p>Covers basic concepts, threats, and models in cybersecurity from an academic perspective.</p>
                    <a href="https://mrcet.com/pdf/Lab%20Manuals/IT/CYBER%20SECURITY%20%28R18A0521%29.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">Read PDF</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: SANS Cyber Aces (free foundational security & technology courses)</h3>
                    <p>Offers free foundational courses in cybersecurity and related IT technologies, a great starting point for beginners.</p>
                    <a href="https://www.sans.org/cyberaces" target="_blank" rel="noopener noreferrer" className="resource-link">Go to SANS Cyber Aces</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Cybrary free courses on IT fundamentals / networking</h3>
                    <p>Access free courses on IT fundamentals and networking from Cybrary, a leading online cybersecurity training platform.</p>
                    <a href="https://www.cybrary.it/free-content" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Cybrary</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Internet Networks & Network Security</h3>
                    <p>An introductory video explaining how internet networks function and fundamental concepts of network security.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/NIRXtMg-0z8?si=O3mrV1I5xA6NB0YZ"
                        title="YouTube video player (Internet Networks & Network Security)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase1Resources;