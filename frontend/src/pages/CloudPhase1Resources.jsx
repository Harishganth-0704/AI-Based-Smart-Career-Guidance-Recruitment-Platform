// src/pages/CloudPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Foundation of IT & Networking</h1>
                <p>Building a fundamental understanding of operating systems, networking, storage, and basic scripting — essential groundwork for cloud architecture.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>OS basics (Linux administration, processes, permissions)</li>
                        <li>TCP/IP, routing, subnetting, DNS, VPNs</li>
                        <li>Storage fundamentals (block vs object vs file), RAID, disks IOPS</li>
                        <li>Virtualization (VMs) and containers overview</li>
                        <li>Basic scripting (bash, Python) and Git</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Linux Basics for Hackers</h3>
                    <p>A good hands-on introduction to Linux, covering essential commands and system administration relevant to IT foundations.</p>
                    <a href="https://www.amazon.in/Kali-Linux-Beginners-Intermediates-Cybersecurity/dp/1951737180/ref=sr_1_1?crid=1VQ0UVADUUCVM&dib=eyJ2IjoiMSJ9.heMoZTbXhSsjyGYMqbWERjfpHFfRf_9gMZIAVrvCqo0B5CtCoxT05Lde2xFI2CJ20kx_xjTotsndc1duxG5kdXEmPXb9ek6peQHa8VIKnJk.griaak4p52f3uFFge-1eZm6FupohzOPdm_l7Fqigauw&dib_tag=se&keywords=Linux+Basics+for+Hackers+%28good+hands-on+Linux+intro%29&nsdOptOutParam=true&qid=1760111325&sprefix=linux+basics+for+hackers+good+hands-on+linux+intro+%2Caps%2C357&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: “Networking Fundamentals” or “Computer Networking” — Coursera</h3>
                    <p>Learn the basics of computer networking, including protocols, security, and common vulnerabilities.</p>
                    <a href="https://www.coursera.org/learn/network-security-database-vulnerabilities" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Cloud Computing Explained: The Most Important Concepts To Know</h3>
                    <p>An introductory video explaining core cloud computing concepts, laying the groundwork for more advanced topics.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZaA0kNm18pE?si=8Tw1IvaXM2UmPB-y"
                        title="YouTube video player (Cloud Computing Explained)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase1Resources;