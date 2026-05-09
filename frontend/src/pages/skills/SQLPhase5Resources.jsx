import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Real-World Projects</h1>
                <p>Applying your SQL knowledge to design, build, and optimize database projects, demonstrating practical skills in data management and analysis.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>End-to-End Database Project: Design schema, populate data, write complex queries, build reports.</li>
                        <li>Integration: SQL + Python (pandas + SQL) or SQL + BI tools (Tableau/PowerBI).</li>
                        <li>Performance Tuning: Applying indexing and query optimization techniques within a project context.</li>
                        <li>Deployment: Moving queries/scripts to production, creating views or stored procedures for production use.</li>
                        <li>Best Practices: Documentation, version control for SQL scripts (using Git).</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: “SQL Notes for Professionals” (Free eBook)</h3>
                    <p>A comprehensive, example-driven free eBook covering a wide range of SQL topics, useful as a reference during projects. </p>
                    <a href="https://goalkicker.com/SQLBook/" target="_blank" rel="noopener noreferrer" className="resource-link">Download Free eBook</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: 10 Best SQL Project Ideas (GeeksforGeeks)</h3>
                    <p>A curated list of SQL project ideas to inspire your own projects and build your portfolio.</p>
                    <a href="https://www.geeksforgeeks.org/blogs/sql-project-ideas/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Data Analysis Projects (Playlist)</h3>
                    <p>A playlist showcasing various data analysis projects, many of which heavily involve SQL for data retrieval and manipulation. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLeo1K3hjS3utcb9nKtanhcn8jd2E0Hp9b"
                        title="YouTube video player (Data Analysis Projects Playlist)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase5Resources;
