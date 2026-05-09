// src/pages/MLPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Building Your ML Portfolio & Resume</h1>
                <p>Crafting a compelling portfolio and optimized resume to effectively showcase your machine learning skills and secure job opportunities.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>Portfolio Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>Purpose: Show your practical AI skills.</li>
                        <li>Key Points:
                            <ul>
                                <li>Projects to Showcase:
                                    <ul>
                                        <li>AI/ML models (classification, NLP, recommendation)</li>
                                        <li>Cloud-based AI apps (AWS/Azure deployment)</li>
                                        <li>Real datasets (Kaggle, open datasets)</li>
                                    </ul>
                                </li>
                                <li>Include for each project:
                                    <ul>
                                        <li>Problem → Approach → Tools → Results → GitHub/Live demo</li>
                                    </ul>
                                </li>
                                <li>Code & Hosting:
                                    <ul>
                                        <li>Clean, modular, commented code</li>
                                        <li>Use GitHub/GitLab</li>
                                        <li>Optional portfolio website (GitHub Pages / Wix / React)</li>
                                    </ul>
                                </li>
                                <li>Extras:
                                    <ul>
                                        <li>Open-source contributions</li>
                                        <li>Blogs or mini case studies</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>Resume Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>Purpose: Impress recruiters quickly.</li>
                        <li>Structure:
                            <ul>
                                <li>Header: Name, email, phone, LinkedIn, GitHub, portfolio</li>
                                <li>Summary: 2–3 lines of ML/AI skills & achievements</li>
                                <li>Skills: Programming, Tools, ML/DL, Cloud</li>
                                <li>Projects: 3–5 key projects with tools & outcomes</li>
                                <li>Education & Certifications: ML/AI courses, degrees</li>
                                <li>Experience/Internships: Focus on achievements</li>
                            </ul>
                        </li>
                        <li>Tips:
                            <ul>
                                <li>Keep to 1 page</li>
                                <li>Quantify achievements: “Improved model accuracy by 15%”</li>
                                <li>Use action verbs: Developed, Deployed, Optimized</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: How to Build a Machine Learning/Data Science Portfolio That Gets You Hired!</h3>
                    <p>A practical guide on building a portfolio that stands out to recruiters and helps you land a job in the ML/Data Science field.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/rQo1vkCe8OE?si=TVYV31rqU8w-wFd8"
                        title="YouTube video player (ML/Data Science Portfolio)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase10Resources;