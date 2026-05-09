import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: DOM Manipulation & Browser APIs</h1>
                <p>Learning how to interact with web pages using the Document Object Model (DOM), handle events, and utilize common Browser APIs like fetch and localStorage.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Document Object Model (DOM)</li>
                        <li>Selecting elements (getElementById, querySelector, etc.)</li>
                        <li>Event handling (addEventListener, event types)</li>
                        <li>Modifying HTML/CSS via JS</li>
                        <li>Browser APIs (localStorage, sessionStorage, fetch)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Eloquent JavaScript (Chapters on Browser Scripting)</h3>
                    <p>Refer back to Eloquent JavaScript for its excellent sections covering how JavaScript interacts with the browser and manipulates the DOM. </p>
                    {/* Link provided in Phase 1 */}
                     <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: javascript.info – Browser: Document & Events sections</h3>
                    <p>Detailed tutorials on the DOM, manipulating elements, and handling browser events from the comprehensive javascript.info site.</p>
                    <a href="https://javascript.info/document" target="_blank" rel="noopener noreferrer" className="resource-link">Go to javascript.info</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: JavaScript DOM Manipulation – Full Course for Beginners</h3>
                    <p>A complete video course focused on teaching beginners how to manipulate the Document Object Model using JavaScript. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5fb2aPlgoys?si=MLnGL5CpLvxavv3q"
                        title="YouTube video player (JavaScript DOM Manipulation)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase3Resources;
