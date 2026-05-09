import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Advanced SQL Concepts & Optimization</h1>
                <p>Diving into advanced SQL features like window functions, CTEs, and understanding database optimization, indexing, and normalization.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Window Functions (`RANK`, `ROW_NUMBER`, `PARTITION BY`)</li>
                        <li>CTEs (Common Table Expressions)</li>
                        <li>Views, Indexing, Query Optimization</li>
                        <li>Stored Procedures & Triggers</li>
                        <li>Transactions, ACID Properties</li>
                        <li>Database Normalization (1NF → 3NF)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: SQL Performance Explained by Markus Winand</h3>
                    <p>An essential guide focused on understanding SQL performance and how indexing works across different database systems. </p>
                    <a href="https://www.amazon.com/gp/product/3950307826/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=3950307826&linkCode=as2&tag=sqlperexp-20&linkId=XTDRWIA3YYYIRNO&m=A1PG4MQR22GK8T" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: GeeksforGeeks Advanced SQL</h3>
                    <p>A collection of tutorials covering various advanced SQL concepts, including window functions, CTEs, and more.</p>
                    <a href="https://www.geeksforgeeks.org/sql/sql-tutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                     {/* Note: The course link seems more general data analyst focused, but likely covers advanced SQL */}
                    <h3>🎓 Course: Complete Data Analyst Bootcamp From Basics To Advanced (Udemy)</h3>
                    <p>While a broader data analyst course, it likely includes modules on advanced SQL techniques necessary for analysis. </p>
                    <a href="http://udemy.com/course/complete-data-analyst-bootcamp-from-basics-to-advanced/?couponCode=MT251028G15" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: SQL Advanced Tutorial | Advanced SQL Tutorial With Examples</h3>
                    <p>A video tutorial focusing on advanced SQL concepts with practical examples, including window functions and CTEs. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/M-55BmjOuXY?si=om9YwiLJUngkyTbs"
                        title="YouTube video player (SQL Advanced Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase3Resources;
