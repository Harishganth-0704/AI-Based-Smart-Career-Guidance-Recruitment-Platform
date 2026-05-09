// src/pages/GamePhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Foundations & Orientation</h1>
                <p>An introduction to the diverse world of game development, understanding roles, the development lifecycle, and fundamental game mechanics.</p>
                <Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Roles in Game Development (Programmer vs Designer vs Technical Artist vs Engine Developer)</li>
                        <li>Game Dev Lifecycle: Pre-production → Prototyping → Production → Testing → Deployment</li>
                        <li>Understanding Genres & Game Mechanics (FPS, RPG, Open World, Casual, Simulation etc.)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: GameDeveloper.com</h3>
                    <p>A leading resource for game industry news, articles, and insights, offering valuable free notes and knowledge.</p>
                    <a href="https://www.gamedeveloper.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GameDeveloper.com</a>
                </div>

                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: “A Theory of Fun for Game Design, Second Edition” – Raph Koster</h3>
                    <p>An insightful book exploring the underlying reasons why games are fun and how to apply those principles in game design.</p>
                    <a href="https://www.amazon.in/Theory-Game-Design-Second-Colour/dp/9355426968/ref=sr_1_1?crid=3DLRQA8HPQQ53&dib=eyJ2IjoiMSJ9.-hGler87mqJ9uuXduC_tqOKBHE2mjoFvUngUr4Bs1dN6Cj1GdNdLPZmtcZqidzgBCnve6Xy8UiXFtaVtqk9SbnXq3HruY9G7bs3tBC2d1jNhV7FTK4cG_-XpO0200bQnULMI3b2cH-LwzRQOPRf94E_qzd8eR-9tendq453Ep5CU_bFBGlilQVXZWixLcp28HG5L-HOjZgxKWL_O_OD8ZbW8yc5Y5KOqhRria9w7n9c.6braYqrg9q_FYa0MVLzlsHLTXKrymO8QczPFt8ngHs&dib_tag=se&keywords=Theory+of+Fun+for+Game+Design&qid=1760383117&sprefix=theory+of+fun+for+game+design%2Caps%2C226&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Game Design Essentials: Tools, Theories and Techniques (Udemy)</h3>
                    <p>Learn fundamental game design principles, tools, and techniques to create engaging and fun games.</p>
                    <a href="https://www.udemy.com/course/fun-meaningful-game-design/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Studio Design: Building a Foundation for Success and Avoiding Business Disaster</h3>
                    <p>Insights into building a successful game development studio and avoiding common pitfalls, covering business and design aspects.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5ZGE_awGGik?si=lOcpkMnVUw0gMLHY"
                        title="YouTube video player (Studio Design)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase1Resources;