import React, { useState, useEffect } from 'react';
import './Certificates.css';

const Certificates = () => {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('careerCraftGamification');
        if (storedData) {
            const parsed = JSON.parse(storedData);
            setBadges(parsed.badges || ['Newcomer 🎯']);
        } else {
            setBadges(['Newcomer 🎯']);
        }
    }, []);

    const downloadMockCertificate = (badgeName) => {
        alert(`Downloading your ${badgeName} Certificate... (Simulated)`);
        // In a real app, we could generate a PDF here
    };

    return (
        <div className="certificates-page">
            <header className="page-header">
                <h1>🏆 Your Skill Achievements</h1>
                <p>Verify your expertise with AI-generated badges and certificates.</p>
            </header>

            <div className="badge-grid">
                {badges.map((badge, index) => (
                    <div key={index} className="certificate-card glass fade-in">
                        <div className="cert-ribbon">AI Verified</div>
                        <div className="cert-icon">🥇</div>
                        <h3>{badge}</h3>
                        <p>Certified by CareerCraft AI Engine</p>
                        <div className="cert-meta">
                            <span>Issue Date: {new Date().toLocaleDateString()}</span>
                            <span>ID: CC-{Math.floor(Math.random() * 100000)}</span>
                        </div>
                        <button className="cert-btn" onClick={() => downloadMockCertificate(badge)}>
                            Download PDF
                        </button>
                    </div>
                ))}
            </div>

            <div className="how-to-earn glass">
                <h3>How to earn more?</h3>
                <ul>
                    <li>🎯 Complete high-score Mock Interviews.</li>
                    <li>📄 Analyze your resume to reach a 90+ score.</li>
                    <li>🔥 Maintain a 7-day learning streak.</li>
                    <li>💡 Generate and complete AI project ideas.</li>
                </ul>
            </div>
        </div>
    );
};

export default Certificates;
