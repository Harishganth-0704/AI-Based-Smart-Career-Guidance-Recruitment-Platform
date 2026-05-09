// src/pages/AIPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Advanced Python & Software Engineering</h1>
                <p>Building strong Python programming skills and essential software engineering practices to create robust and maintainable AI systems.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Core Python:
                            <ul>
                                <li>Data types, Functions, Object-Oriented Programming (OOP)</li>
                                <li>Modules, Packaging</li>
                            </ul>
                        </li>
                        <li>Software Engineering Essentials:
                            <ul>
                                <li>Testing, Type Hinting, Linting</li>
                                <li>Continuous Integration (CI)</li>
                                <li>Virtual environments (virtualenv/venv), Package managers (pip, poetry)</li>
                            </ul>
                        </li>
                        <li>Advanced Programming Concepts:
                            <ul>
                                <li>Asynchronous programming basics (async/await)</li>
                                <li>File & JSON I/O, REST API basics</li>
                            </ul>
                        </li>
                        <li>Data Pipelines & Automation:
                            <ul>
                                <li>Scripting and automation (cron, Apache Airflow basics)</li>
                            </ul>
                        </li>
                        <li>Collaboration & Reproducibility:
                            <ul>
                                <li>Git for version control, Code reviews</li>
                                <li>Reproducible environments (Docker)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Python for Data Analysis — Wes McKinney</h3>
                    <p>An essential resource for mastering data manipulation and analysis with Python, including Pandas and NumPy.</p>
                    <a href="https://www.amazon.in/Python-Data-Analysis-Wrangling-IPython/dp/1491957662" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Python for Everybody — Coursera (Dr. Charles Severance)</h3>
                    <p>A highly recommended specialization for learning Python programming from the ground up, suitable for beginners.</p>
                    <a href="https://www.coursera.org/specializations/python" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp — Python for Data Science (Full Course)</h3>
                    <p>A comprehensive video course covering Python fundamentals and its application in data science.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/LHBE6Q9XlzI?si=STxup3dSeTMC4cyM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                
                {/* --- ADDED PRACTICE SECTION --- */}
                <div className="resource-item">
                    <h3>💻 Practice: LeetCode - Top Interview Questions</h3>
                    <p>The best platform for practicing data structures and algorithms problems to prepare for technical interviews.</p>
                    <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to LeetCode</a>
                </div>
            </div>
        </div>
    </>
);

export default AIPhase3Resources;