import React from 'react';
import { Link } from 'react-router-dom';
// Correct the relative path assuming ResourceStyles is one directory up
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Basics & Setup</h1>
                <p>Getting started with Python installation, setting up your development environment, and learning the fundamental syntax and programming constructs.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Install Python, IDEs (VS Code/Thonny)</li>
                        <li>Syntax, Variables, Data Types</li>
                        <li>Loops (for, while), Conditional Statements (if/elif/else)</li>
                        <li>Functions</li>
                        <li>Input/Output operations</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: A Byte of Python</h3>
                    <p>A free, well-regarded book for beginners to learn Python programming concepts clearly and concisely.</p>
                    <a href="https://python.swaroopch.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: W3Schools Python Basics</h3>
                    <p>An excellent online reference for learning Python syntax and basic concepts with interactive examples.</p>
                    <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to W3Schools</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Learn Python Programming - Beginner to Master (Udemy)</h3>
                    <p>A comprehensive course that takes you from the absolute basics of Python to more advanced topics. </p>
                    <a href="https://www.udemy.com/course/learn-python-with-abdul-bari/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Corey Schafer – Python Beginner Series</h3>
                    <p>A highly recommended playlist for beginners, covering Python fundamentals with clear explanations and practical examples. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU"
                        title="YouTube video player (Corey Schafer Python Beginner Series)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage1Resources;

