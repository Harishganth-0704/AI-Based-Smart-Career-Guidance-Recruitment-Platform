import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const SQLPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Interview Preparation</h1>
                <p>Confidently clear SQL interviews by mastering technical, logical, and scenario-based questions with hands-on query practice.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>

            {/* Section for Key Focus Areas */}
            <div className="resource-section">
                <h2>Key Focus Areas</h2>
                <div className="resource-item">
                    <ul>
                        <li>Strengthening SQL fundamentals (Joins, Aggregations, Subqueries, Window Functions)</li>
                        <li>Practicing real company interview questions</li>
                        <li>Learning to explain query logic step-by-step</li>
                        <li>Understanding performance tuning and database design questions</li>
                        <li>Preparing for behavioral and situational interview rounds</li>
                    </ul>
                </div>
            </div>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>SQL query challenges (LeetCode, HackerRank, StrataScratch)</li>
                        <li>Optimization questions (EXPLAIN plans, indexes, query efficiency)</li>
                        <li>Case-based questions (analyzing sales, users, revenue data)</li>
                        <li>Database design scenarios (normalization, relationships)</li>
                        <li>STAR method for behavioral questions</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: InterviewBit SQL Interview Questions</h3>
                    <p>A collection of SQL interview questions frequently asked in tech companies, covering various difficulty levels.</p>
                    <a href="https://www.interviewbit.com/sql-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to InterviewBit</a>
                </div>

                {/* --- Practice Platform --- */}
                <div className="resource-item">
                    <h3>💻 Practice Platform: CodeChef - SQL Practice Queries</h3>
                    <p>Practice SQL queries and case studies on CodeChef to enhance your problem-solving skills for interviews. </p>
                    <a href="https://www.codechef.com/practice/sql-case-studies-topic-wise" target="_blank" rel="noopener noreferrer" className="resource-link">Go to CodeChef</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: 15 SQL Interview Questions TO GET YOU HIRED in 2025</h3>
                    <p>A video covering common SQL interview questions with detailed answers and explanations to help you prepare effectively. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/oX5Y26O5dBE?si=i1IyPG57S7N9h5LF"
                        title="YouTube video player (15 SQL Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default SQLPhase7Resources;
