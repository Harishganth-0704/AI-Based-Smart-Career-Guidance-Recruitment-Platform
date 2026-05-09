// src/pages/MLPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Data Handling, Preprocessing & Databases</h1>
                <p>Developing proficiency in cleaning, transforming, and exploring data, as well as managing and querying databases for machine learning.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Data Cleaning & Feature Engineering</li>
                        <li>Exploratory Data Analysis (EDA)</li>
                        <li>SQL for Data Retrieval</li>
                        <li>NoSQL Database Concepts</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources - REORDERED */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📗 Book: Python for Data Analysis — Wes McKinney</h3>
                    <p>An indispensable resource for learning practical data manipulation and analysis with Python and its powerful libraries like Pandas.</p>
                    <a href="https://www.oreilly.com/library/view/python-for-data/9781491957653/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Data pre-processing for Machine Learning in Python — Udemy</h3>
                    <p>A practical course focused on various techniques for preparing raw data for machine learning algorithms using Python.</p>
                    <a href="https://www.udemy.com/course/data-pre-processing-for-machine-learning-in-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: SQL for Data Science – Coursera (IBM)</h3>
                    <p>Learn SQL for data analysis, including querying, manipulating, and analyzing data using SQL.</p>
                    <a href="https://www.coursera.org/learn/sql-data-science" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                
                <div className="resource-item">
                    <h3>🎓 Course: DataCamp – NoSQL Concepts</h3>
                    <p>An introduction to the fundamental concepts of NoSQL databases, exploring their types and use cases.</p>
                    <a href="https://www.datacamp.com/courses/nosql-concepts" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DataCamp</a>
                </div>
                
                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Data Preprocessing in Python — Data School</h3>
                    <p>Learn essential data preprocessing steps in Python, including handling missing values, encoding categorical data, and feature scaling.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/7eh4d6sabA0?si=GrSWDhj7EyEPeaBj"
                        title="YouTube video player (Data Preprocessing in Python)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
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
                
                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp – Relational Databases & SQL (6 Hours)</h3>
                    <p>A comprehensive course on relational databases, SQL queries, and database management for data professionals.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HXV3zeQKqGY?si=gvVCi6Mefe11Zqzr"
                        title="YouTube video player (Relational Databases & SQL)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase4Resources;