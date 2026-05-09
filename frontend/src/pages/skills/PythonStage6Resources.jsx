import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: APIs, Networking & Databases</h1>
                <p>Learning how to interact with web APIs, perform basic networking tasks, scrape web data, and work with databases using Python.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>requests library, REST APIs, JSON</li>
                        <li>Web Scraping (BeautifulSoup basics)</li>
                        <li>Sockets (basic networking concepts)</li>
                        <li>Databases: `sqlite3`, SQLAlchemy (ORM), CRUD operations</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Flask Web Development (Miguel Grinberg)</h3>
                    <p>While focused on Flask, this book covers many concepts related to building web APIs and interacting with databases. </p>
                    <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Flask Docs</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Python API Notes – Real Python</h3>
                    <p>Practical guides and tutorials on how to integrate with various APIs using Python.</p>
                    <a href="https://realpython.com/api-integration-in-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Real Python</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: FastAPI - The Complete Course 2025 (Beginner + Advanced) (Udemy)</h3>
                    <p>Learn to build high-performance APIs with Python using the modern FastAPI framework, covering everything from basics to advanced features. </p>
                    <a href="https://www.udemy.com/course/fastapi-the-complete-course/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: REST API Crash Course - Introduction + Full Python API Tutorial</h3>
                    <p>A comprehensive crash course explaining REST API concepts and demonstrating how to build and interact with APIs using Python. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qbLc5a9jdXo?si=YMhIJ9LY1h3GkqgM"
                        title="YouTube video player (REST API Crash Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage6Resources;
