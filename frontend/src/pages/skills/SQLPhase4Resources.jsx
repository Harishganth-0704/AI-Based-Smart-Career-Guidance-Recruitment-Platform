import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Data Engineering</h1>
                <p>Applying SQL skills in the context of data engineering, including ETL processes, data warehousing, and integrating SQL with programming languages like Python.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Working with Large Datasets</li>
                        <li>ETL Concepts (Extract, Transform, Load)</li>
                        <li>Data Warehousing (Star Schema, Fact/Dimension Tables)</li>
                        <li>Connecting SQL with Python (using `sqlite3`, `psycopg2`, `SQLAlchemy`)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: The Data Warehouse Toolkit by Ralph Kimball</h3>
                    <p>A foundational book on dimensional modeling and data warehouse design, essential for understanding data engineering principles. </p>
                    <a href="https://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: IBM Data Engineering Notes (GitHub)</h3>
                    <p>Comprehensive notes from the IBM Data Engineering Professional Certificate, covering introductory concepts and workflows.</p>
                    <a href="https://github.com/DE-romane/IBM-Data-Engineering-Professional-Certificate-notes/blob/main/01-Introduction%20to%20Data%20Engineering%20note.md" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub Repo</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Data Warehouse - The Ultimate Guide (Udemy)</h3>
                    <p>A comprehensive guide to understanding data warehousing concepts, design principles, and implementation strategies. [Image of data warehouse architecture diagram]</p>
                    <a href="https://www.udemy.com/course/data-warehouse-the-ultimate-guide/?couponCode=MT251028G15" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Data Engineering Course for Beginners</h3>
                    <p>A beginner-friendly video course introducing the core concepts, tools, and practices of data engineering. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/PHsC_t0j1dU?si=lcC-c95aqtSyJokd"
                        title="YouTube video player (Data Engineering Course for Beginners)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase4Resources;
