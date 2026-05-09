// src/pages/GamePhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Multiplayer & Networking</h1>
                <p>Understanding and implementing multiplayer functionality, network architectures, and synchronization techniques for online game experiences.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Client-Server Model, Peer-to-Peer</li>
                        <li>Replication, Network Synchronization</li>
                        <li>Lag Compensation, Latency Management</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Unreal Engine - Networking and Multiplayer</h3>
                    <p>Official documentation covering the intricacies of networking and multiplayer game development within Unreal Engine.</p>
                    <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine" target="_blank" rel="noopener noreferrer" className="resource-link">Read Unreal Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Learn to Create a Multiplayer shooter in Unity using Netick (Udemy)</h3>
                    <p>A comprehensive course on building multiplayer shooter games in Unity using the Netick networking solution.</p>
                    <a href="https://www.udemy.com/course/learn-to-create-a-competitive-shooter-in-unity-using-netick/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Making a Multiplayer FPS in Unity (EP. 1) - uNet Tutorial</h3>
                    <p>A step-by-step tutorial series on creating a multiplayer first-person shooter game in Unity using its built-in networking.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UK57qdq_lak?si=5KSrWHSXGMOA29CH"
                        title="YouTube video player (Multiplayer FPS in Unity)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Getting started with networking concepts</h3>
                    <p>An introductory video explaining fundamental networking concepts essential for understanding multiplayer game development.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kVt0I6zZsf0?si=uEJxgf8OwAGbG2Jr"
                        title="YouTube video player (Networking Concepts)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase7Resources;