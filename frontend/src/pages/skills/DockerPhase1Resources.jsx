import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Foundations of Containers & Docker Setup</h1>
                <p>Establish the conceptual foundation by understanding the "why" behind Docker and how containerization solves fundamental problems in software development.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Containers vs Virtual Machines </li>
                        <li>Docker Architecture & Components (Daemon, Client, Images, Containers)</li>
                        <li>Installing Docker on Windows/Mac/Linux</li>
                        <li>Docker CLI Basics (docker run, docker ps, docker pull)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Learn Docker in a Month of Lunches</h3>
                    <p>A practical, hands-on book that guides you through Docker concepts and commands in manageable, one-hour lessons. </p>
                    <a href="https://www.oreilly.com/library/view/learn-docker-in/9781617297052/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Docker Official Docs (Beginner Guide)</h3>
                    <p>The official "Get Started" guide from Docker, providing the most accurate and fundamental information for beginners.</p>
                    <a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>
                </div>
                
                {/* --- ADDED INSTALLATION GUIDES --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Install Docker Desktop on Windows</h3>
                    <p>The official documentation for installing Docker Desktop on a Windows machine.</p>
                    <a href="https://docs.docker.com/desktop/setup/install/windows-install/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Windows Install Guide</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Install Docker Desktop on Mac</h3>
                    <p>The official documentation for installing Docker Desktop on macOS (Intel or Apple Silicon).</p>
                    <a href="https://docs.docker.com/desktop/setup/install/mac-install/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Mac Install Guide</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Linux Post-installation Steps</h3>
                    <p>Important steps for Linux users to manage Docker as a non-root user and configure it properly.</p>
                    <a href="https://docs.docker.com/engine/install/linux-postinstall/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Linux Post-install Guide</a>
                </div>
                {/* --- END ADDED GUIDES --- */}

                {/* --- Course (REMOVED) --- */}

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Docker Tutorial for Beginners</h3>
                    <p>A comprehensive video tutorial for beginners covering what Docker is, its core concepts, and how to get started. [Image of Docker container vs VM comparison]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3c-iBn73dDE?si=644ZfAjZYy9er7o6"
                        title="YouTube video player (Docker Tutorial for Beginners)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase1Resources;

