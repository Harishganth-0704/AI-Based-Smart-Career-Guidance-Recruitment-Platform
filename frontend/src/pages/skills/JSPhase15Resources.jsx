import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Portfolio & Resume Strategy</h1>
                <p>Strategically building your portfolio and resume to showcase your JavaScript projects and skills effectively for job applications.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Selecting key projects (showcasing different skills)</li>
                        <li>Writing clean README files for GitHub repositories</li>
                        <li>Hosting code publicly (GitHub)</li>
                        <li>Creating a personal developer portfolio website</li>
                        <li>Highlighting tech stack and tools used</li>
                        <li>Quantifying achievements with measurable outcomes</li>
                        <li>Optimizing LinkedIn and GitHub profiles</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: freeCodeCamp – How to Build a Developer Portfolio</h3>
                    <p>An article providing practical steps and tips for creating an effective developer portfolio website to showcase your projects and skills.</p>
                    <a href="https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to freeCodeCamp</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Developer Portfolio Website Tutorial JavaScript</h3>
                    <p>A video tutorial guiding you through the process of building a developer portfolio website using JavaScript and related technologies. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xV7S8BhIeBo?si=13PEj5mxL6kqBwax"
                        title="YouTube video player (Developer Portfolio Website Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase15Resources;
