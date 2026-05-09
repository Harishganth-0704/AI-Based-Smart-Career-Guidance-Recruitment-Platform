// src/pages/GamePhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Monetization & Publishing</h1>
                <p>Understanding strategies for monetizing games and navigating the process of publishing on major platforms to reach a broad audience.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Monetization Models: Free-to-Play vs Premium games</li>
                        <li>Publishing Platforms: Steam, Google Play Store, Epic Games Store, Apple App Store</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: I Made a Mobile Game for the Money</h3>
                    <p>An insightful video detailing the process and challenges of creating and monetizing a mobile game .</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/p0B-8vije5U?si=0N5bhAr5sMdRvnxp"
                        title="YouTube video player (I Made a Mobile Game for the Money)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase11Resources;