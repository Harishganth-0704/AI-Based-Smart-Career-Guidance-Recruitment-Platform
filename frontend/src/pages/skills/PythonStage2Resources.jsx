import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core Python & Data Structures</h1>
                <p>Deepening your understanding of Python's core data structures, functions, modules, error handling, and fundamental algorithms.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Data Structures: Lists, Tuples, Sets, Dictionaries, Strings</li>
                        <li>Functions & Modules</li>
                        <li>Error Handling (Try/Except)</li>
                        <li>Algorithms: Basics of Sorting & Searching</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Automate the Boring Stuff with Python</h3>
                    <p>A practical, project-based book that teaches Python by automating common tasks. Excellent for applying core concepts. </p>
                    <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: GeeksforGeeks Python Notes</h3>
                    <p>A comprehensive collection of tutorials and articles covering various Python topics, from basics to data structures and algorithms.</p>
                    <a href="https://www.geeksforgeeks.org/python/python-programming-language-tutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Google Python Class (Free)</h3>
                    <p>A free class offered by Google, covering Python fundamentals, including data structures, file I/O, and regular expressions. </p>
                    <a href="https://developers.google.com/edu/python/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Google Class</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Bro Code – Python Full Course</h3>
                    <p>A fast-paced, comprehensive full course video covering a wide range of Python topics suitable for beginners and intermediates. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/XKHEtdqhLK8?si=skkmbdbta6EpDOgT"
                        title="YouTube video player (Bro Code Python Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage2Resources;
