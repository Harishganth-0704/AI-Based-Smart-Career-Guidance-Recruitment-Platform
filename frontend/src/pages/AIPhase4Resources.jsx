// src/pages/AIPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Data Systems & Databases</h1>
                <p>Understanding how to design, manage, and interact with various data storage and processing systems, both relational and NoSQL.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Data Processing Concepts:
                            <ul>
                                <li>ETL/ELT patterns, Data validation, Schema evolution</li>
                            </ul>
                        </li>
                        <li>Relational Databases:
                            <ul>
                                <li>Schema design, Normalization, Joins, Indexing, Transactions</li>
                            </ul>
                        </li>
                        <li>NoSQL Databases:
                            <ul>
                                <li>Document stores (MongoDB), Vector-friendly stores</li>
                                <li>Key-value stores, Columnar stores, Eventual consistency tradeoffs</li>
                            </ul>
                        </li>
                        <li>Data Storage Architectures:
                            <ul>
                                <li>Data lakes vs Data warehouses, Partitioning, Compression</li>
                                <li>Columnstore vs Rowstore</li>
                            </ul>
                        </li>
                        <li>Database Interaction & Optimization:
                            <ul>
                                <li>Query optimization, Connection pooling, ORMs</li>
                                <li>SQL in an analytics context</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Designing Data-Intensive Applications — Martin Kleppmann</h3>
                    <p>A must-read for anyone involved in building data systems, covering principles for reliable, scalable, and maintainable applications.</p>
                    <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Databases and SQL for Data Science — Coursera (IBM)</h3>
                    <p>Learn SQL basics and advanced concepts for data manipulation and analysis, along with an introduction to databases.</p>
                    <a href="https://www.coursera.org/learn/sql-data-science" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- NEWLY ADDED NO-SQL COURSES --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Introduction to NoSQL Databases — Coursera</h3>
                    <p>An introductory course to understand the different types of NoSQL databases and their applications.</p>
                    <a href="https://www.coursera.org/learn/introduction-to-nosql-databases" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: NoSQL Database Tutorial – Full Course for Beginners</h3>
                    <p>A comprehensive tutorial providing a strong foundation in NoSQL databases for beginners.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xh4gy1lbL2k?si=lYpGcNShX8kMs3Zc"
                        title="YouTube video player (NoSQL Database Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* --- END NEWLY ADDED NO-SQL COURSES --- */}

                <div className="resource-item">
                    <h3>▶️ YouTube: Alex The Analyst — SQL Full Course for Beginners</h3>
                    <p>A practical, hands-on course designed to teach you SQL for data analysis and common database operations.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HXV3zeQKqGY?si=sCeWMUNdGuWx7KFA"
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

export default AIPhase4Resources;