import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: JavaScript Build Tools & Performance</h1>
                <p>Learning about modern JavaScript build tools like Webpack, Babel, and Rollup, along with techniques for optimizing application performance.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Build tools (Webpack, Babel, Rollup)</li>
                        <li>Bundling, Code Splitting, Tree-shaking</li>
                        <li>Performance Optimization (Lazy Loading, minimizing DOM operations)</li>
                        <li>Monitoring application performance</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: “SurviveJS – Webpack & React” (free online)</h3>
                    <p>A practical guide focused on setting up Webpack for modern JavaScript applications, including integration with React. Available online for free. </p>
                    <a href="https://survivejs.com/books/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: SurviveJS.com</h3>
                    <p>The companion website for the SurviveJS books, offering articles, tutorials, and insights into Webpack and related front-end technologies.</p>
                    <a href="https://survivejs.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to SurviveJS.com</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Webpack 5: The Complete Guide For Beginners (Udemy)</h3>
                    <p>A comprehensive course designed to teach Webpack 5 from the ground up, covering configuration, loaders, plugins, and optimization techniques. </p>
                    <a href="https://www.udemy.com/course/webpack-from-beginner-to-advanced/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Webpack 5 Tutorial</h3>
                    <p>A video tutorial introducing the core concepts and basic setup of Webpack 5 for bundling JavaScript applications. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IZGNcSuwBZs?si=CUJgxVU8WdKiBmbc"
                        title="YouTube video player (Webpack 5 Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase12Resources;
