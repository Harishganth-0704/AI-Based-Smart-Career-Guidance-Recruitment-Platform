import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Real-World Projects</h1>
                <p>Applying your Python skills to build end-to-end projects, gain practical experience, troubleshoot issues, and showcase your abilities on GitHub.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Choose Projects: Web app, data automation script, CLI tool, API service.</li>
                        <li>Build End-to-End: Define requirements, write code, implement tests, and handle deployment.</li>
                        <li>Best Practices: Utilize version control (Git), write clear documentation, package your code.</li>
                        <li>Showcase: Host your projects on GitHub with comprehensive READMEs.</li>
                        <li>Problem Solving: Learn to troubleshoot issues and debug effectively in real scenarios.</li>
                    </ul>
                </div>
            </div>

             {/* Section for Project Ideas */}
            <div className="resource-section">
                <h2>💡 Project Ideas</h2>
                <div className="resource-item">
                     <ul>
                        <li>Beginner: Calculator, To-Do App, File Organizer, Simple Web Scraper</li>
                        <li>Intermediate: Weather App (using APIs), Blog Website (Flask/Django), Basic Chatbot</li>
                        <li>Advanced: E-commerce site, AI-powered tool, Data dashboard with visualization</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Automate the Boring Stuff with Python</h3>
                    <p>Excellent resource for practical project ideas and step-by-step implementation guides for automating everyday tasks. </p>
                    <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Real Python – Intermediate Python Project Ideas</h3>
                    <p>A curated list of project ideas suitable for intermediate Python developers looking to build their portfolio.</p>
                    <a href="https://realpython.com/intermediate-python-project-ideas/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Real Python</a>
                </div>
                {/* The user didn't provide a link for GeeksforGeeks, so I'll omit it for now or use a generic search link if appropriate, but it's better to omit if the specific link isn't known. */}
                {/*
                <div className="resource-item">
                    <h3>📝 Notes: GeeksforGeeks Python Projects List</h3>
                    <p>A collection of Python project ideas and tutorials available on GeeksforGeeks.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks (Link Needed)</a>
                </div>
                */}


                {/* --- Course --- */}
                 <div className="resource-item">
                    <h3>🎓 Course: freeCodeCamp – Build 12 Beginner Python Projects</h3>
                    <p>A practical article and set of tutorials guiding you through building 12 different projects suitable for beginners.</p>
                    <a href="https://www.freecodecamp.org/news/python-projects-junior-developers/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to freeCodeCamp</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: 5 Mini Python Projects - For Beginners</h3>
                    <p>A video tutorial showcasing five small Python projects perfect for beginners to practice their coding skills. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DLn3jOsNRVE?si=_odnyPV1bpmrtZ4a"
                        title="YouTube video player (5 Mini Python Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: 12 Beginner Python Projects - Coding Course</h3>
                    <p>A full video course walking you through the creation of 12 distinct Python projects designed for beginners. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/8ext9G7xspg?si=WUvEuSwz74DBMVzC"
                        title="YouTube video player (12 Beginner Python Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage9Resources;
