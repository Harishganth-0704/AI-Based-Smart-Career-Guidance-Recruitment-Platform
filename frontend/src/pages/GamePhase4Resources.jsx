// src/pages/GamePhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Gameplay Systems & Mechanics</h1>
                <p>Learning to design and implement core gameplay systems such as character movement, combat, inventory, and quest management.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics: Learn to Build</h2>
                <div className="resource-item">
                    <ul>
                        <li>Character Movement</li>
                        <li>Combat Systems</li>
                        <li>Inventory Systems</li>
                        <li>Dialogue Systems</li>
                        <li>Quests Systems</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Unreal Gameplay Ability System (GAS)</h3>
                    <p>Dive into the comprehensive Unreal Gameplay Ability System (GAS) for building powerful and flexible gameplay mechanics.</p>
                    <a href="https://www.yuewu.dev/en/wiki/YWXau3MIqyoK2cmF_6rQi" target="_blank" rel="noopener noreferrer" className="resource-link">Read Notes</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Multiplayer in Unreal with GAS and AWS Dedicated Servers (Udemy)</h3>
                    <p>Learn to implement multiplayer functionality using Unreal's GAS and deploy to AWS dedicated servers for robust online experiences.</p>
                    <a href="https://www.udemy.com/course/multiplayer-in-unreal-with-gas-and-aws-dedicated-servers/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Create a Dash Ability using Gameplay Ability System (GAS)</h3>
                    <p>A practical tutorial on implementing a dash ability using Unreal Engine's Gameplay Ability System (GAS).</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Peq8QKtAju8?si=zI-hmBSjdsru4l9E"
                        title="YouTube video player (Create a Dash Ability using GAS)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase4Resources;