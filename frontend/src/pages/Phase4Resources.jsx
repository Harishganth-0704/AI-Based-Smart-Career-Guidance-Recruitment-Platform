// src/pages/Phase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Data Management & Databases</h1>
                <p>Understanding how to store, manage, and retrieve data using various database technologies, both structured and unstructured.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>SQL (Structured Databases):
                            <ul>
                                <li>Queries (SELECT, JOIN, GROUP BY, HAVING)</li>
                                <li>Normalization, Indexing, Views, Stored Procedures</li>
                            </ul>
                        </li>
                        <li>NoSQL (Unstructured Databases):
                            <ul>
                                <li>MongoDB (Document-based)</li>
                                <li>Cassandra / Redis (Key-value)</li>
                                <li>Firebase / DynamoDB</li>
                            </ul>
                        </li>
                        <li>Tools:
                            <ul>
                                <li>MySQL / PostgreSQL</li>
                                <li>MongoDB Atlas</li>
                                <li>SQLite (for quick projects)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: SQL in 10 Minutes – Sams Teach Yourself</h3>
                    <p>A quick and effective guide to learning SQL fundamentals, perfect for beginners.</p>
                    <a href="https://www.amazon.in/SQL-Minutes-Sams-Teach-Yourself/dp/0672336073" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: SQL for Data Science – Coursera (IBM)</h3>
                    <p>Learn SQL for data analysis, including querying, manipulating, and analyzing data using SQL.</p>
                    <a href="https://www.coursera.org/learn/sql-data-science" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- NEWLY ADDED NO-SQL COURSES --- */}
                <div className="resource-item">
                    <h3>🎓 Course: DataCamp – NoSQL Concepts</h3>
                    <p>An introduction to the fundamental concepts of NoSQL databases, exploring their types and use cases.</p>
                    <a href="https://www.datacamp.com/courses/nosql-concepts" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DataCamp</a>
                </div>
                
                <div className="resource-item">
                    <h3>▶️ YouTube: NoSQL Database Tutorial – Full Course for Beginners</h3>
                    <p>A comprehensive video tutorial covering the basics of NoSQL databases and their practical applications.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xh4gy1lbL2k?si=ypSUhV-_NkIy64cs"
                        title="YouTube video player (NoSQL Database Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* --- END NEWLY ADDED NO-SQL COURSES --- */}

                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp – Relational Databases & SQL (6 Hours)</h3>
                    <p>A comprehensive course on relational databases, SQL queries, and database management for data professionals.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HXV3zeQKqGY?si=gvVCi6Mefe11Zqzr"
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

export default Phase4Resources;