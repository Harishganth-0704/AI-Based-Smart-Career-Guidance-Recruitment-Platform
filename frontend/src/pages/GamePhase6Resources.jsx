// src/pages/GamePhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Game AI </h1>
                <p>Developing intelligent non-player character (NPC) behavior using techniques like behavior trees and pathfinding to create dynamic and engaging game experiences.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Behavior Trees, Finite State Machines (FSM), Pathfinding (A* algorithm)</li>
                        <li>Enemy Logic design, Companion AI implementation</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: AI FOR GAMES, 3RD EDITION — Ian Millington</h3>
                    <p>A comprehensive guide to artificial intelligence techniques used in game development, from basic concepts to advanced implementations.</p>
                    <a href="https://www.amazon.in/AI-Games-Third-Ian-Millington/dp/1138483974/ref=sr_1_2?crid=2B08TTKSWYM8T&dib=eyJ2IjoiMSJ9.zxC2mT6E7Lf4ceDJvsNwGnmY1nMxwCUaDHJgMESv17JXBNroUD73O_OHlvucQwF7B66Pk8vFNbBL1bXGiVNhveAP6F8yfJGh-XGjBQPyg7g.9VCciNiha6vorBNkHYpyVj9djW1ozVZaaxuDV99-0Sk&dib_tag=se&keywords=Artificial+Intelligence+for+Games%E2%80%9D+%E2%80%93+Ian+Millington&qid=1760638098&sprefix=artificial+intelligence+for+games+ian+millington%2Caps%2C209&sr=8-2" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Advanced AI for Games; Behaviour Trees (Unity 6 Compatible) (Udemy)</h3>
                    <p>Learn to implement advanced AI behaviors using Behavior Trees, compatible with Unity 6, for sophisticated NPC logic.</p>
                    <a href="https://www.udemy.com/course/behaviour-trees/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: How AI is Actually Used in the Video Games Industry</h3>
                    <p>An insightful video explaining the practical applications of AI in modern video games and how developers implement it.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/j3LW5no-5Ao?si=A0MXyKHTxvsTaKQX"
                        title="YouTube video player (How AI is Actually Used in Games)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase6Resources;