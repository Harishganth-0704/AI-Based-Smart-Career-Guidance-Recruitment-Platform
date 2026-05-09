// src/pages/GamePhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Real-World Projects</h1>
                <p>Applying all learned skills to build complete, playable games, demonstrating proficiency across different genres and technical challenges.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics (Project Ideas) */}
            <div className="resource-section">
                <h2>Key Topics: Build at least 3 complete playable games</h2>
                <div className="resource-item">
                    <ul>
                        <li>2D Platformer </li>
                        <li>3D Shooter / RPG Prototype </li>
                        <li>Multiplayer Mini-Game </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: How to make a Video Game - Godot Beginner Tutorial</h3>
                    <p>A beginner-friendly tutorial series on making video games using the Godot Engine, a great alternative for independent developers.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/LOhfqjmasi0?si=y1v1FXW2nAdUF8qU"
                        title="YouTube video player (Godot Beginner Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase12Resources;