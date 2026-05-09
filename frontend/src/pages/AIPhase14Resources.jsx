// src/pages/AIPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Portfolio, Resume & Career Strategy</h1>
                <p>Translating your technical skills and projects into a compelling professional narrative to impress recruiters and land your target role.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>Portfolio Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>Purpose: Show your practical AI engineering skills.</li>
                        <li>Projects to Showcase:
                            <ul>
                                <li>AI/ML models (e.g., classification, NLP, recommendation systems)</li>
                                <li>Cloud-based AI applications (demonstrating AWS/Azure deployment)</li>
                                <li>Projects using real datasets (from Kaggle, open government data, etc.)</li>
                            </ul>
                        </li>
                        <li>Key Information to Include for Each Project:
                            <ul>
                                <li>Problem → Approach → Tools → Results → Link to GitHub/Live Demo</li>
                            </ul>
                        </li>
                        <li>Code & Hosting:
                            <ul>
                                <li>Ensure clean, modular, and well-commented code.</li>
                                <li>Use GitHub or GitLab for version control and code visibility.</li>
                                <li>Optional: A dedicated portfolio website (GitHub Pages, Wix, or a custom React app).</li>
                            </ul>
                        </li>
                        <li>Extras to Stand Out:
                            <ul>
                                <li>Contributions to open-source projects.</li>
                                <li>Blog posts or mini case studies explaining your projects or learnings.</li>
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
                        <li>Purpose: Impress recruiters and pass initial screenings quickly.</li>
                        <li>Structure:
                            <ul>
                                <li>Header: Name, Email, Phone, LinkedIn, GitHub, Portfolio link.</li>
                                <li>Summary: 2–3 powerful lines highlighting your AI skills and key achievements.</li>
                                <li>Skills: Programming languages, Tools (Docker, Kubernetes), ML/DL frameworks, Cloud platforms.</li>
                                <li>Projects: 3–5 of your best projects with tools used and measurable outcomes.</li>
                                <li>Education & Certifications: Relevant degrees and AI/ML certifications.</li>
                                <li>Experience/Internships: Focus on achievements, not just responsibilities.</li>
                            </ul>
                        </li>
                        <li>Tips for Success:
                            <ul>
                                <li>Keep it to a single page.</li>
                                <li>Quantify achievements: “Improved model accuracy by 15%” or “Reduced inference latency by 300ms.”</li>
                                <li>Use action verbs: Developed, Deployed, Optimized, Architected, Engineered.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default AIPhase14Resources;