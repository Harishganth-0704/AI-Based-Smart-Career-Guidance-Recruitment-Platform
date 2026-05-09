import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Real-World Projects</h1>
                <p>Apply your scripting and automation skills to build practical, real-world projects for your portfolio.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics (Project Ideas) - UPDATED STRUCTURE */}
            <div className="resource-section">
                <h2>Project Ideas</h2>

                <div className="resource-item">
                    <h3>1) File Organizer Tool</h3>
                    <p>Automatically sort files into folders by extension (images, docs, videos).</p>
                </div>
                <div className="resource-item">
                    <h3>2) System Resource Monitor</h3>
                    <p>Display CPU, RAM, disk usage at intervals + log into a file.</p>
                </div>
                <div className="resource-item">
                    <h3>3) Automated Backup Script</h3>
                    <p>Backup important folders with timestamp + compression (e.g., using `tar`).</p>
                </div>
                <div className="resource-item">
                    <h3>4) Log File Analyzer</h3>
                    <p>Parse system/app logs (`/var/log/syslog`) → count errors, warnings, specific events.</p>
                </div>
                <div className="resource-item">
                    <h3>5) To-Do CLI App</h3>
                    <p>Add, list, and remove tasks that are stored in a simple text file or JSON.</p>
                </div>
                <div className="resource-item">
                    <h3>6) Password Generator</h3>
                    <p>Generate secure random passwords with optional length & symbols.</p>
                </div>
                <div className="resource-item">
                    <h3>7) Git Automation Script</h3>
                    <p>Automate common Git workflows like add, commit, push, or branch switching.</p>
                </div>
                <div className="resource-item">
                    <h3>8) Service/Process Watchdog</h3>
                    <p>Monitor a specific process → restart it if it stops → notify or log the event.</p>
                </div>
                <div className="resource-item">
                    <h3>9) Docker Helper Script</h3>
                    <p>Utility to start/stop/list containers and clean unused images or volumes.</p>
                </div>
                <div className="resource-item">
                    <h3>10) Multi-Server Deployment Script</h3>
                    <p>Deploy & configure apps over SSH → great DevOps experience.</p>
                </div>
            </div>

        </div>
    </>
);

export default BashPhase6Resources;

