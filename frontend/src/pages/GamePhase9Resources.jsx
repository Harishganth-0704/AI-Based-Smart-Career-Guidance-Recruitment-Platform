// src/pages/GamePhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Performance Optimization</h1>
                <p>Mastering techniques to profile and optimize game performance, ensuring smooth gameplay and efficient resource utilization across various platforms.</p>
                <Link to="/game-developer-roadmap" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>CPU vs GPU Profiling and Bottleneck Identification</li>
                        <li>Draw Calls Optimization</li>
                        <li>Memory Management and Garbage Collection</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: How to Optimize for Consoles (Unreal Engine)</h3>
                    <p>Official Unreal Engine documentation providing guidelines and best practices for optimizing game performance specifically for console platforms.</p>
                    <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/consoles-development-in-unreal-engine?application_version=5.5" target="_blank" rel="noopener noreferrer" className="resource-link">Read Unreal Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Mastering GPU Parallel Programming with CUDA: (HW & SW) (Udemy)</h3>
                    <p>A comprehensive course to master GPU programming with CUDA, crucial for optimizing graphics and computational performance in games.</p>
                    <a href="https://www.udemy.com/course/mastering-gpu-parallel-programming-with-cuda/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: How to Actually optimize your game in Unity - Complete Game Optimization Guide</h3>
                    <p>A complete video guide offering practical tips and strategies for optimizing game performance in Unity, covering various aspects from rendering to code.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ysk7ATmIeOs?si=aHqO-Tfl3E0Eo68U"
                        title="YouTube video player (Unity Game Optimization Guide)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase9Resources;