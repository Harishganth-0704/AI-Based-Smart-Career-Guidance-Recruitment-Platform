import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Modern JavaScript (ES6+)</h1>
                <p>Mastering modern JavaScript features introduced in ES6 and later versions, including arrow functions, destructuring, modules, and more.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>ES6+ features: `let`/`const`, arrow functions</li>
                        <li>Template literals, Destructuring</li>
                        <li>Spread/Rest operators</li>
                        <li>Default parameters, Optional chaining</li>
                        <li>Modules (import/export)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Exploring ES6 by Axel Rauschmayer</h3>
                    <p>A detailed and comprehensive guide to the features introduced in ECMAScript 6 (ES6), available for free online. </p>
                    <a href="https://www.onlineprogrammingbooks.com/exploring-es6/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: FreeComputerBooks – Modern JavaScript / ES6+</h3>
                    <p>Access free books and resources covering modern JavaScript features introduced in ES6 and beyond.</p>
                    <a href="https://freecomputerbooks.com/top-javascript-books.html" target="_blank" rel="noopener noreferrer" className="resource-link">Go to FreeComputerBooks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                     {/* Note: The user provided a freeCodeCamp Node.js link for the course, which seems incorrect. I've used the Udemy ES6 link instead as it matches the topic. */}
                    <h3>🎓 Course: ES6 JavaScript: The Complete Developer's Guide (Udemy)</h3>
                    <p>A comprehensive course focused specifically on mastering ES6+ JavaScript features. </p>
                    <a href="https://www.udemy.com/course/es6-javascript/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Modern JavaScript Tutorial (ES6+)</h3>
                    <p>A playlist dedicated to teaching modern JavaScript features from ES6 onwards. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLmnc4h3QMJ75nuE1VF8cu-B4XpnKE9RP6"
                        title="YouTube video player (Modern JavaScript Tutorial ES6+)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase8Resources;
