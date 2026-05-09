import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 11: Hands-on Labs & Platforms</h1><p>Master the platforms where you can safely and legally hone your practical cybersecurity skills.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Platforms</h2>
                <div className="resource-item"><h3>TryHackMe</h3><p>An excellent platform for beginners with structured learning paths and guided, hands-on exercises.</p><a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a></div>
                <div className="resource-item"><h3>Hack The Box</h3><p>The premier platform for practicing penetration testing skills on vulnerable machines in a real-world, black-box challenge environment.</p><a href="https://www.hackthebox.com" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Hack The Box</a></div>
                <div className="resource-item"><h3>VulnHub</h3><p>A massive, free repository of user-submitted vulnerable virtual machines to download and practice against in your local lab.</p><a href="https://www.vulnhub.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to VulnHub</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase11Resources;
