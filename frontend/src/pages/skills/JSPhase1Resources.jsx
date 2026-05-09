import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase1Resources = () => ( // Renamed component to match filename convention
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Basics & Setup</h1>
                <p>Getting started with JavaScript: understanding the core syntax, variables, data types, control flow, functions, and setting up your development environment.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>JS syntax, variables, data types, operators</li>
                        <li>Control flow (if/else, loops)</li>
                        <li>Functions</li>
                        <li>Development environment setup (VS Code/Browser console)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Eloquent JavaScript — Marijn Haverbeke</h3>
                    <p>A highly-regarded, comprehensive book for learning JavaScript, starting from the basics and moving to advanced topics. Available online for free. </p>
                    <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: javascript.info – The Modern JavaScript Tutorial</h3>
                    <p>An excellent, detailed, and up-to-date online tutorial covering JavaScript from fundamentals to advanced concepts with clear explanations and examples.</p>
                    <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to javascript.info</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Codecademy – Introduction to JavaScript</h3>
                    <p>An interactive course designed for beginners to learn the fundamentals of JavaScript programming through hands-on exercises. </p>
                    <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Codecademy</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: JavaScript Crash Course For Beginners</h3>
                    <p>A fast-paced video crash course covering the essential JavaScript concepts needed for beginners to get started quickly. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/hdI2bqOjy3c?si=9wdZ5tt_6RcPB9bA"
                        title="YouTube video player (JavaScript Crash Course For Beginners)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase1Resources; // Renamed default export
