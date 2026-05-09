import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Automation & Real-World Integrations</h1>
                <p>Learn to automate tasks using cron and systemd, and integrate Bash scripting with other tools like SSH, Git, and CI/CD pipelines.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>`Cron` for task scheduling </li>
                        <li>`systemd` timers</li>
                        <li>SSH automation</li>
                        <li>Git hooks</li>
                        <li>CI/CD pipeline scripting</li>
                        <li>System monitoring scripts</li>
                        <li>Log parsing</li>
                        <li>Cybersecurity tooling automation</li>
                        <li>Notifications script (e.g., sending email/slack alerts)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Platform --- */}
                <div className="resource-item">
                    <h3>💻 Platform: Crontab guru</h3>
                    <p>An interactive editor to help you create and understand cron schedule expressions. </p>
                    <a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Crontab.guru</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Learn Bash Quickly: A Hands-on approach to Linux Automation (Udemy)</h3>
                    <p>A hands-on course focused on automating Linux tasks using Bash scripting, from simple to complex operations. </p>
                    <a href="https://www.udemy.com/course/learn-bash-quickly/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: CRON Jobs Explained and an Example put in Production in 5 minutes!</h3>
                    <p>A quick, practical video explaining what cron jobs are and how to deploy one in a production environment. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qzX9tpNNFJ0?si=Nn1PDHLGM4wZ9Mo3"
                        title="YouTube video player (CRON Jobs Explained)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase5Resources;
