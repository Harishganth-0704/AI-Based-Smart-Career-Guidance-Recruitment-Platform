// src/pages/GamePhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Portfolio, Resume & Career Strategy</h1>
                <p>Strategically showcasing your projects, code, and skills to build a professional presence and create a compelling resume for the game industry.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>1. Upload Playable Builds (Show Real Games)</h2>
                <div className="resource-item">
                    <ul>
                        <li>Publish at least 2–3 fully playable games or prototypes.</li>
                        <li>Use platforms like Itch.io (ideal for indie), Steam Demo (more professional), or WebGL builds for browser play.</li>
                        <li>    Always include:
                            <ul>
                                <li>Short description of the game</li>
                                <li>Screenshots or gameplay GIFs</li>
                                <li>Mention engine, programming language, and your role</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="resource-section">
                <h2>💻 2. Showcase Code on GitHub (Organized, Not Messy)</h2>
                <div className="resource-item">
                    <ul>
                        <li>Create separate repositories for each major gameplay or system prototype.</li>
                        <li>Every repository must include:
                            <ul>
                                <li>A clean README.md with description, features, images/GIFs, and your specific contributions.</li>
                            </ul>
                        </li>
                        <li>Pin your best 3–5 repos to the top of your GitHub profile.</li>
                        <li>Highlight different areas like
                            <ul>
                                <li>AI Behavior</li>
                                <li>Multiplayer / Networking</li>
                                <li>Physics / Simulation</li>
                                <li>Tools or Utility Scripts</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="resource-section">
                <h2>🎥 3. Post Devlogs and Build Public Presence</h2>
                <div className="resource-item">
                    <ul>
                        <li>Share your development journey—not just finished products.</li>
                        <li>Platforms to use:
                            <ul>
                                <li>YouTube → Short devlogs explaining features you build.</li>
                                <li>LinkedIn → Clean professional summaries or milestones.</li>
                                <li>Reddit (r/gamedev) → Honest progress posts to get feedback.</li>
                            </ul>
                        </li>
                        <li>Devlog topics can include
                            <ul>
                                <li>“How I Built AI Enemy Using Behavior Trees”</li>
                                <li>“Optimizing My Physics System for 60 FPS”</li>
                                <li>“Implementing Multiplayer Replication in Unreal”</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="resource-section">
                <h2>🧾 4. Build a Strong Resume Around Projects</h2>
                <div className="resource-item">
                    <ul>
                        <li>Start with a role-focused headline, e.g., "Gameplay Programmer (C++ / Unreal / AI Systems)".</li>
                        <li>Put Projects at the top not education or certifications.</li>
                        <li>Each project should include:
                            <ul>
                                <li>Name + one-line description</li>
                                <li>Role + Technologies used (C++, Unreal, Blueprints, etc.)</li>
                                <li>Link to Play and View Code</li>
                            </ul>
                        </li>
                        <li>List core skills only relevant to game development (C++, Unreal, AI, Physics, Networking).</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase13Resources;