import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Portfolio & Resume Strategy</h1>
                <p>Showcasing your SQL skills through real-world projects, a strong GitHub presence, and a recruiter-friendly resume highlighting measurable achievements.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Focus Areas */}
            <div className="resource-section">
                <h2>Key Focus Areas</h2>
                <div className="resource-item">
                    <ul>
                        <li>Building a public portfolio (GitHub, Kaggle, or personal website)</li>
                        <li>Writing impactful resume bullet points using metrics</li>
                        <li>Displaying projects that reflect real business use-cases</li>
                        <li>Creating a LinkedIn profile optimized for SQL/Data jobs</li>
                    </ul>
                </div>
            </div>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>How to structure a project (problem → data → queries → insights → visualization)</li>
                        <li>Writing clean, readable SQL and commenting best practices</li>
                        <li>Using Git for version control and publishing projects</li>
                        <li>Showcasing database design (ER diagrams, normalization examples)</li>
                        <li>Writing data-driven resume achievements</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: How to Create a Data Analyst Resume (DataCamp)</h3>
                    <p>An article providing templates and examples for creating an effective data analyst resume, often heavily featuring SQL skills.</p>
                    <a href="https://www.datacamp.com/blog/data-analyst-resume" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DataCamp Blog</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: CareerFoundry – Create a Job-Winning Data Resume</h3>
                    <p>A video guide focused on crafting a resume that stands out for data-related roles, including tips on highlighting SQL projects and skills. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/WizLaDdsHUs?si=fvFQG3lYLhDZIfSI"
                        title="YouTube video player (Create a Job-Winning Data Resume)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase6Resources;
