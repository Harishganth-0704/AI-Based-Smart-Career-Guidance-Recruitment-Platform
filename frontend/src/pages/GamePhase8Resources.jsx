// src/pages/GamePhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Visuals & Technical Art</h1>
                <p>Exploring the art and science of game visuals, including rendering pipelines, shaders, lighting, and visual effects to create stunning game worlds.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Rendering Pipeline (how graphics are drawn to screen)</li>
                        <li>Shaders (programming graphics for unique visual effects)</li>
                        <li>Lighting (techniques for realistic and stylized illumination)</li>
                        <li>VFX (Visual Effects for explosions, magic, environmental effects)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Guidelines for Optimizing Rendering for Real-Time (Unreal Engine)</h3>
                    <p>Official guidelines from Epic Games on optimizing rendering performance for real-time applications within Unreal Engine.</p>
                    <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine?application_version=5.5" target="_blank" rel="noopener noreferrer" className="resource-link">Read Unreal Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: How to become Technical Artist in Game Development (Udemy)</h3>
                    <p>Learn the diverse skills and knowledge required to become a technical artist, bridging the gap between art and programming in games.</p>
                    <a href="https://www.udemy.com/course/technical-artist/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Leading TECHNICAL Artist Shares Insider Tips</h3>
                    <p>Gain valuable insights and practical advice from a leading technical artist in the game development industry.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/gVqEzI2DYMQ?si=IyCkTqhzEfJSH1GI"
                        title="YouTube video player (Leading Technical Artist Tips)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase8Resources;