// src/pages/CyberPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Digital Forensics & Malware Analysis</h1>
                <p>Developing expertise in investigating cyber incidents, recovering digital evidence, and analyzing malicious software to understand its behavior and impact.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Disk forensics, memory forensics, file carving</li>
                        <li>Network forensics, packet capture (PCAPs), traffic analysis</li>
                        <li>Malware types and behavior, static vs dynamic analysis</li>
                        <li>Reverse engineering (disassembly, decompilers, debugging)</li>
                        <li>Sandbox analysis, signature-based vs behavioral detection</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books --- */}
                <div className="resource-item">
                    <h3>📗 Book: FreeComputerBooks for Reverse Engineering, Forensics</h3>
                    <p>Access a vast collection of free books covering various aspects of reverse engineering, digital forensics, and cybersecurity.</p>
                    <a href="https://freecomputerbooks.com/compscspecialSecurityBooks.html" target="_blank" rel="noopener noreferrer" className="resource-link">Browse Free Books</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Cyber Security: Digital Forensics — Coursera</h3>
                    <p>An introductory course to digital forensics, covering techniques for evidence collection, preservation, and analysis.</p>
                    <a href="https://www.coursera.org/learn/cyber-security-digital-forensics" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Malware Analysis and Introduction to Assembly Language — Coursera</h3>
                    <p>Learn the fundamentals of malware analysis and gain an introduction to assembly language, crucial for understanding malicious code.</p>
                    <a href="https://www.coursera.org/learn/malware-analysis-and-assembly" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- Lab Platforms --- */}
                <div className="resource-item">
                    <h3>💻 Lab Platforms: TryHackMe for Forensic Labs</h3>
                    <p>Hands-on labs and guided exercises specifically focused on digital forensics, allowing you to practice investigation techniques.</p>
                    <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Digital Forensics Full Course for Beginners</h3>
                    <p>A comprehensive video course covering the basics of digital forensics, from incident response to evidence analysis.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vD7uJ8aP0zA?si=W6PRpR1pj6aZY2FB"
                        title="YouTube video player (Digital Forensics Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Malware Analysis Full Course - Learn Practical Malware Analysis!</h3>
                    <p>A detailed video course on practical malware analysis, covering techniques for understanding and combating malicious software.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qA0YcYMRWyI?si=3Ld-Bhuji4w3On3Q"
                        title="YouTube video player (Malware Analysis Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase8Resources;