// src/pages/GamePhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Interview Preparation</h1>
                <p>Preparing for the technical and practical challenges of game development interviews to secure your dream role.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics (Common Hiring Tests) */}
            <div className="resource-section">
                <h2>Common Hiring Tests: Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>✔ C++ Code Challenges (Memory management, pointers, data structures)</li>
                        <li>✔ Write a basic physics system / AI pathfinder</li>
                        <li>✔ Debug faulty gameplay logic</li>
                        <li>System design for game architecture (scalability, performance)</li>
                        <li>Behavioral questions (teamwork, problem-solving approach)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Practice Code --- */}
                <div className="resource-item">
                    <h3>💻 Practice Code: HackerRank - C++ Domain</h3>
                    <p>The best platform for practicing data structures and algorithms problems in C++ to prepare for technical interviews.</p>
                    <a href="https://www.hackerrank.com/domains/cpp" target="_blank" rel="noopener noreferrer" className="resource-link">Go to HackerRank</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Game Programming Patterns</h3>
                    <p>A comprehensive online book detailing common design patterns used in game programming to write clean, efficient, and maintainable code.</p>
                    <a href="https://gameprogrammingpatterns.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Book Online</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Epic Games Documentation</h3>
                    <p>For more detailed technical notes, tutorials, and best practices directly from the creators of Unreal Engine, a vital resource for game developers.</p>
                    <a href="https://dev.epicgames.com/en-US" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Epic Games</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Video Game Developer Interview Questions with Answer</h3>
                    <p>A video guide covering common interview questions asked in the video game development industry, along with effective answers.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qjzdqQ5IcAc?si=qMl7nb8v2x1KM8Ae"
                        title="YouTube video player (Video Game Developer Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase14Resources;