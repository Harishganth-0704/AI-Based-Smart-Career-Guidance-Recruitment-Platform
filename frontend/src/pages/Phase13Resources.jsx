// src/pages/Phase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Building Your Data Science Portfolio</h1>
                <p>Strategies and tools to showcase your skills and projects, building a compelling portfolio for job applications and career growth.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Portfolio Building Steps:
                            <ul>
                                <li>Create and maintain a strong GitHub profile</li>
                                <li>Add comprehensive project READMEs with explanations and visual dashboards</li>
                                <li>Build a personal website (portfolio + blog for thought leadership)</li>
                                <li>Craft a resume: Emphasize Skills → Projects → Impact</li>
                            </ul>
                        </li>
                        <li>Tools for Professional Presence:
                            <ul>
                                <li>Notion (for project documentation/planning)</li>
                                <li>GitHub Pages (for simple project websites)</li>
                                <li>Canva (for professional resume design)</li>
                                <li>LinkedIn Optimization (profile, networking, content sharing)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Show Your Work! – Austin Kleon</h3>
                    <p>A guide on how to be findable, how to use the network, and how to stay true to yourself in the creative age.</p>
                    <a href="https://www.amazon.in/Show-Your-Work-Austin-Kleon/dp/076117897X" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Build Your Data Science Portfolio – DataCamp</h3>
                    <p>Learn how to select, refine, and present your data science projects to create an impressive portfolio.</p>
                    <a href="https://www.datacamp.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DataCamp</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: How to Build a Data Science Portfolio (Ken Jee)</h3>
                    <p>Practical advice and a step-by-step guide on creating a compelling data science portfolio to land your dream job.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Yk-unX4KnV4?si=sKEeZiFU9A5B6pHx"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default Phase13Resources;