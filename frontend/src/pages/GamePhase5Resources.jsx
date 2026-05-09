// src/pages/GamePhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Game Physics & Simulation</h1>
                <p>Understanding and implementing realistic or arcade-style physics, collision detection, and raycasting for interactive game worlds.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Rigid Body Physics, Collision Detection, Raycasting</li>
                        <li>Realistic vs Arcade Physics implementation</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Game Physics Engine Development: How to Build a Robust Commercial-Grade Physics Engine for Your Game</h3>
                    <p>A deep dive into the theory and practical implementation of creating a full-featured physics engine for games.</p>
                    <a href="https://www.amazon.in/Game-Physics-Engine-Development-Commercial-Grade/dp/0123819768/ref=sr_1_1?crid=1AP29KXGU7IS7&dib=eyJ2IjoiMSJ9.A_XLv1uDhwwj8nR8fH4DmpJWLA6PRIjcGKxfeJHMo.Iwgn2KFd157eF3Ig1GE-LiSIoTwNBj8GnA8xRhktYq4&dib_tag=se&keywords=Game+Physics+Engine+Development%E2%80%9D+%E2%80%93+Ian+Millington&qid=1760637856&sprefix=game+physics+engine+development+ian+millington%2Caps%2C293&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Unreal Engine 5: Physics (Udemy)</h3>
                    <p>Learn how to implement and manipulate physics within Unreal Engine 5 to create dynamic and interactive game environments.</p>
                    <a href="https://www.udemy.com/course/unreal-engine-5-for-games-physics/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Game Physics - Introducing Gravitation & Rotation in Unity (Udemy)</h3>
                    <p>A practical course covering the implementation of gravitation and rotation physics in Unity for realistic game mechanics.</p>
                    <a href="https://www.udemy.com/course/gamephysics/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: AABB Performance Optimization - Let's Make a Physics Engine</h3>
                    <p>A video tutorial focusing on performance optimization for Axis-Aligned Bounding Box (AABB) collision detection in physics engines.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-8rQne7-Qd0?si=oxkvgT_EeAku62CZ"
                        title="YouTube video player (AABB Performance Optimization)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase5Resources;