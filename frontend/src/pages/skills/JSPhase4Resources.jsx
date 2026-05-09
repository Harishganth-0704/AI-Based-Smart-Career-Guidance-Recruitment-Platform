import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Asynchronous JavaScript</h1>
                <p>Mastering asynchronous programming concepts in JavaScript, including callbacks, Promises, async/await, and understanding the event loop.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Synchronous vs Asynchronous code</li>
                        <li>Callbacks</li>
                        <li>Promises</li>
                        <li>`async`/`await` syntax</li>
                        <li>`fetch` API / AJAX</li>
                        <li>Event Loop</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: You Don’t Know JS – Async & Performance</h3>
                    <p>Refer back to the "You Don't Know JS" series for its deep dive into asynchronous programming patterns and performance considerations in JavaScript. </p>
                    {/* Link provided in Phase 2 */}
                    <a href="https://github.com/getify/You-Dont-Know-JS?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online (GitHub)</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: javascript.info – Async/await & Promises</h3>
                    <p>Detailed and clear explanations of Promises and the async/await syntax from the comprehensive javascript.info tutorial site.</p>
                    <a href="https://javascript.info/async" target="_blank" rel="noopener noreferrer" className="resource-link">Go to javascript.info</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Asynchronous JavaScript: Promises, Callbacks, Async Await (Udemy)</h3>
                    <p>A focused course on mastering asynchronous JavaScript, covering callbacks, Promises, and the modern async/await syntax. </p>
                    <a href="https://www.udemy.com/course/asynchronous-javascript-promises-callbacks-async-await/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Async JavaScript & Callback Functions -- Tutorial for Beginners</h3>
                    <p>A beginner-friendly tutorial explaining asynchronous JavaScript concepts, focusing particularly on callback functions. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QSqc6MMS6Fk?si=yJhETlxXM4gs-nwU"
                        title="YouTube video player (Async JavaScript & Callbacks)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase4Resources;
