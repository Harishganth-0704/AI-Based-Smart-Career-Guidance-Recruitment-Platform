// src/pages/MLPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Interview Preparation</h1>
                <p>Sharpening your technical, problem-solving, and behavioral skills to ace machine learning engineering interviews.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Data Structures & Algorithms</li>
                        <li>System Design (especially for ML systems)</li>
                        <li>Behavioral Interviews (STAR method, teamwork, communication)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Elements of Programming Interviews — Adnan Aziz</h3>
                    <p>A highly recommended book for practicing data structures and algorithms, essential for technical coding interviews.</p>
                    <a href="https://www.amazon.in/dp/1479274836" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: ML Interview Questions And Answers</h3>
                    <p>A video providing common machine learning interview questions and detailed answers to help you prepare.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9jaURNOC6vY?si=Dlcq9ib3v6zIdWsO"
                        title="YouTube video player (ML Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase11Resources;