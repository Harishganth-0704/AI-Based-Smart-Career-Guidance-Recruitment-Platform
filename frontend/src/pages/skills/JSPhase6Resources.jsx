import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Advanced JavaScript Concepts</h1>
                <p>Exploring advanced features of JavaScript, including generators, iterators, proxies, modules in-depth, and performance optimization techniques.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Generators, Iterators</li>
                        <li>Proxies, Reflect API</li>
                        <li>Modules in depth</li>
                        <li>Performance Optimization</li>
                        <li>Deep Event Loop understanding</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: ExploringJS by Axel Rauschmayer (free online)</h3>
                    <p>A series of free online books covering modern JavaScript features in detail, excellent for deep dives into specific topics. </p>
                    <a href="https://opentechbook.com/book/exploring-javascript-es2024-edition/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Modern JavaScript: Advanced Topics (Udemy)</h3>
                    <p>A course focused on advanced JavaScript topics, helping you master modern features and concepts. </p>
                    <a href="https://www.udemy.com/course/learn-modern-javascript-advanced-topics/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Advanced JavaScript Crash Course</h3>
                    <p>A fast-paced crash course covering several advanced JavaScript concepts for those looking to level up their skills quickly. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/R9I85RhI7Cg?si=hyBg7GsDT0rmqE0H"
                        title="YouTube video player (Advanced JavaScript Crash Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase6Resources;
