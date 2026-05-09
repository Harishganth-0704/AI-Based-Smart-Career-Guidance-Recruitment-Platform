import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Querying, Filtering & Relationships</h1>
                <p>Learning how to retrieve specific data using filtering, ordering, joins, aggregations, and subqueries to work with relational data.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Filtering & Ordering: `WHERE`, `ORDER BY`, `LIMIT`, `LIKE`</li>
                        <li>Joining Tables: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`</li>
                        <li>Grouping & Aggregation: `GROUP BY`, `HAVING`, Aggregate Functions (`SUM`, `AVG`, `COUN`)</li>
                        <li>Subqueries & Nested Queries</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: SQL for Data Analysis by Cathy Tanimura</h3>
                    <p>A practical guide focused on using SQL specifically for data analysis tasks, covering querying, aggregation, and more complex techniques. </p>
                    <a href="https://books.google.co.in/books/about/SQL_for_Data_Analysis.html?id=pjhCEAAAQBAJ&redir_esc=y" target="_blank" rel="noopener noreferrer" className="resource-link">View on Google Books</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Mode SQL Tutorial</h3>
                    <p>An interactive SQL tutorial designed for data analysis, covering joins, aggregations, and window functions with practical examples.</p>
                    <a href="https://mode.com/sql-tutorial" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Mode Tutorial</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: SQL for Data Analysis: Beginner MySQL Business Intelligence (Udemy)</h3>
                    <p>Learn SQL for data analysis using MySQL, covering essential queries and business intelligence applications. </p>
                    <a href="https://www.udemy.com/course/mysql-for-data-analysis/?couponCode=MT251028G15" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: SQL for Data Analytics - Learn SQL in 4 Hours</h3>
                    <p>A comprehensive video course designed to teach SQL fundamentals specifically for data analytics applications. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/7mz73uXD9DA?si=JjzH0BRZ_p9cQSX-"
                        title="YouTube video player (SQL for Data Analytics)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase2Resources;
