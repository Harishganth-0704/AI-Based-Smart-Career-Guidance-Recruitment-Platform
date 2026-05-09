// src/pages/GamePhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Game Design Analysis</h1>
                <p>Learning the fundamental principles of game design and user experience to create engaging, rewarding, and highly retentive game worlds.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Level Design → Flow, Reward Loops, Difficulty Curves</li>
                        <li>Player Psychology & Retention strategies</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Level Up! The Guide to Great Video Game Design</h3>
                    <p>A highly acclaimed book offering practical advice and comprehensive insights into creating exceptional video games.</p>
                    <a href="https://www.amazon.in/Level-Guide-Great-Video-Design/dp/8196413963/ref=sr_1_2?crid=3ACXBP8J3AN0I&dib=eyJ2IjoiMSJ9.pDfLqDqqrzGTT0SsGCcltLhl92GgRY301RrYiuqieFsBHyIvNxgFqotqgWYXbRmDqtNGHYYCBH1a82yfe6OKxPTMgEAnEhOa_KMOfZGzuaI.wbBrChf5mmQ5qQulZR5n9659RgH50sqA5M_KkqM8rUg&dib_tag=se&keywords=Level+Up%21+The+Guide+to+Great+Game+Design&nsdOptOutParam=true&qid=1760639257&sprefix=level+up+the+guide+to+great+game+design%2Caps%2C409&sr=8-2" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: How To Think Like A Game Designer</h3>
                    <p>Gain insights into the thought processes and methodologies of professional game designers to improve your own design skills.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/iIOIT3dCy5w?si=71HK6TXU9VJrftqY"
                        title="YouTube video player (How To Think Like A Game Designer)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase10Resources;