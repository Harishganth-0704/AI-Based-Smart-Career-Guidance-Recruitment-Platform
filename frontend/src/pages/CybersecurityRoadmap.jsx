// src/pages/CybersecurityRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';

const styles = `
.cs-roadmap-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.cs-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.cs-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.cs-roadmap-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.cs-phase-card {
  background-color: #1e1e30;
  border: 1px solid #33334d;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.cs-phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cs-phase-header h2 {
  font-size: 1.6rem;
  color: #00e676;
  margin: 0;
}

.cs-phase-toggle {
  font-size: 2rem;
  color: #8258dc;
  transition: transform 0.3s ease;
}

.cs-phase-card.active .cs-phase-toggle {
  transform: rotate(45deg);
}

.cs-phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid #33334d;
}

.cs-phase-content p {
  color: #b0b0b0;
  line-height: 1.7;
}

.cs-resources-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #8258dc;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.cs-resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-2px);
}
`;

const roadmapStages = [
    { id: 1, title: 'Stage 1: IT & Networking Fundamentals', objective: 'Build a rock-solid understanding of how computers, operating systems, and networks function—the foundation for all cybersecurity concepts.' },
    { id: 2, title: 'Stage 2: Cybersecurity Foundations', objective: 'Learn the language and core principles of cybersecurity, including the CIA Triad, risk management, and major industry frameworks like NIST CSF.' },
    { id: 3, title: 'Stage 3: System Hardening & Security Tools', objective: 'Learn to reduce a system\'s attack surface by securing its configuration and master the core tools used to protect and monitor systems (Firewalls, EDR, SIEM).' },
    { id: 4, title: 'Stage 4: Cyber Defense & Blue Teaming', objective: 'Understand the practices of defending an organization\'s systems, including SOC operations, incident response, and threat intelligence.' },
    { id: 5, title: 'Stage 5: Offensive Security & Ethical Hacking', objective: 'Learn to think like an attacker by finding and exploiting vulnerabilities in a legal and ethical manner to identify weaknesses before adversaries do.' },
    { id: 6, title: 'Stage 6: Scripting & Automation', objective: 'Master Python, Bash, and PowerShell to automate repetitive tasks, parse logs, and build custom security tools.' },
    { id: 7, title: 'Stage 7: Cloud & DevSecOps Security', objective: 'Learn to secure modern cloud infrastructure and integrate security directly into the automated CI/CD development pipeline.' },
    { id: 8, title: 'Stage 8: Digital Forensics & Malware Analysis', objective: 'Specialize in the "crime scene investigation" of the digital world, learning to analyze breaches and reverse-engineer malicious software.' },
    { id: 9, title: 'Stage 9: Cryptography & Identity and Access Management', objective: 'Understand the science of secure communication and the discipline of ensuring the right individuals have the right access to the right resources.' },
    { id: 10, title: 'Stage 10: Certifications Roadmap', objective: 'Follow a structured path of industry-recognized certifications to validate your knowledge and pass HR filters.' },
    { id: 11, title: 'Stage 11: Hands-on Labs & Platforms', objective: 'Consolidate your commitment to hands-on learning by mastering platforms like TryHackMe and Hack The Box to build practical competence.' },
    { id: 12, title: 'Stage 12: Real-World Projects', objective: 'Move beyond labs by creating your own unique projects to demonstrate initiative, creativity, and problem-solving skills.' },
    { id: 13, title: 'Stage 13: Portfolio, Resume', objective: 'Learn to market your technical skills effectively by crafting a compelling resume, portfolio, and professional online presence.' },
    { id: 14, title: 'Stage 14: Interview Preparation', objective: 'Systematically prepare for the multi-stage cybersecurity interview, covering technical, behavioral, and hands-on assessments.' }
];


const CybersecurityRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="cs-roadmap-container">
                <header className="cs-roadmap-header">
                    <h1>The Cybersecurity Professional Roadmap</h1>
                    <p>A complete 14-stage blueprint to take you from a complete beginner to an industry-ready cybersecurity professional, focusing on foundational knowledge and hands-on skill development.</p>
                </header>
                <RecommendedChannels roadmapKey="cybersecurity" />
                {roadmapStages.map(stage => (
                    <div key={stage.id} className={`cs-phase-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="cs-phase-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="cs-phase-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="cs-phase-content">
                                <p>{stage.objective}</p>
                                <Link to={`/cybersecurity/resources/${stage.id}`} className="cs-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CybersecurityRoadmap;
