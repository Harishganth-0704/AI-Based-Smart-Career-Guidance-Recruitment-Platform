// src/pages/GamePhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Game Engine Mastery</h1>
                <p>Gaining hands-on expertise with industry-leading game engines, focusing on their strengths and the programming languages they utilize.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics (Game Engines) */}
            <div className="resource-section">
                <h2>Unreal Engine (AAA Standard)</h2>
                <div className="resource-item">
                    <h3>Best Suited For:</h3>
                    <ul>
                        <li>First-Person Shooters, Open World Games, High-Fidelity Graphics</li>
                    </ul>
                    <h3>Programming Language:</h3>
                    <ul>
                        <li>C++</li>
                    </ul>
                    <h3>Recommended Learning Resources:</h3>
                    <ul>
                        <li>
                            <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-6-documentation" target="_blank" rel="noopener noreferrer" className="resource-link">Official Unreal Engine Documentation</a>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/unrealcourse/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Udemy – “Unreal Engine C++ Developer”</a>
                        </li>
                    </ul>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nVm-DYdAsts?si=OrU82X1T0IdzLkuj"
                        title="YouTube video player (Learn Unreal Engine C++ In One Hour)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="resource-section">
                <h2>Unity (Indie & Mobile Friendly)</h2>
                <div className="resource-item">
                    <h3>Best Suited For:</h3>
                    <ul>
                        <li>2D Games, Casual Games, VR/AR Experiences</li>
                    </ul>
                    <h3>Programming Language:</h3>
                    <ul>
                        <li>C#</li>
                    </ul>
                    <h3>Recommended Learning Resources:</h3>
                    <ul>
                        <li>
                            <a href="https://www.udemy.com/course/unitycourse2/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Udemy – Complete C# Unity 3D Game Development in Unity 6</a>
                        </li>
                    </ul>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/j48LtUkZRjU?si=sIXG7zaM_G3rCXRZ"
                        title="YouTube video player (How to make a Video Game - Getting Started (Unity))"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase3Resources;