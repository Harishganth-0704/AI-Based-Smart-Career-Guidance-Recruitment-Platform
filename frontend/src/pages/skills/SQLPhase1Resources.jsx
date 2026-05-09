import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Database Foundations & Setup</h1>
                <p>Understanding the fundamentals of databases, relational models, SQL vs NoSQL, and setting up your first database environment.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>What is a Database, DBMS vs RDBMS</li>
                        <li>SQL vs NoSQL differences</li>
                        <li>Installation: MySQL / PostgreSQL / SQLite</li>
                        <li>Basic SQL Syntax & Commands (CREATE, SELECT, INSERT, UPDATE, DELETE)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Learning SQL by Alan Beaulieu</h3>
                    <p>A highly recommended book for beginners to understand SQL concepts thoroughly, from basic queries to more advanced topics. </p>
                    <a href="https://books.google.co.in/books/about/Learning_SQL.html?id=YqubAgAAQBAJ&redir_esc=y" target="_blank" rel="noopener noreferrer" className="resource-link">View on Google Books</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: W3Schools SQL Notes</h3>
                    <p>An excellent online reference with clear explanations and interactive examples for learning SQL syntax and commands.</p>
                    <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to W3Schools</a>
                </div>

                {/* --- Course (UPDATED) --- */}
                <div className="resource-item">
                    <h3>🎓 Course: SQL and PostgreSQL: The Complete Developer's Guide (Udemy)</h3>
                    <p>A comprehensive guide to SQL and PostgreSQL, covering basic syntax, advanced features, and database design. </p>
                    <a href="https://www.udemy.com/course/sql-and-postgresql/?couponCode=MT251028G15" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: FreeCodeCamp – SQL Full Course (4 Hours)</h3>
                    <p>A comprehensive video course covering relational databases and SQL from the ground up, suitable for beginners. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HXV3zeQKqGY?si=n1GSp7tRfWv7LNKi"
                        title="YouTube video player (FreeCodeCamp SQL Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase1Resources;

