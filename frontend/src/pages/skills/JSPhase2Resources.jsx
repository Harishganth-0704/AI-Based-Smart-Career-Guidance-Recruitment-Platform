import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core JavaScript & Data Structures</h1>
                <p>Deepening your understanding of core JavaScript features, data structures like arrays and objects, and fundamental concepts like scope and closures.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Arrays, Objects</li>
                        <li>String & Array methods</li>
                        <li>Destructuring</li>
                        <li>Functions (deep dive)</li>
                        <li>Scope & Closures</li>
                        <li>Modules (introduction)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: You Don’t Know JS (Yet) series — Kyle Simpson</h3>
                    <p>A highly acclaimed book series that dives deep into the core mechanics of JavaScript, challenging common assumptions. Freely available online. </p>
                    <a href="https://github.com/getify/You-Dont-Know-JS?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online (GitHub)</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: FreeComputerBooks – You Don’t Know JS series</h3>
                    <p>Access free versions or related materials for the influential "You Don't Know JS" book series.</p>
                    <a href="https://freecomputerbooks.com/You-Dont-Know-JS-Up-Going.html" target="_blank" rel="noopener noreferrer" className="resource-link">Go to FreeComputerBooks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                     <h3>🎓 Course: The Complete JavaScript Course (Udemy)</h3>
                    <p>A comprehensive course covering modern JavaScript from fundamentals to advanced topics, including ES6+, OOP, AJAX, and more. </p>
                    <a href="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp – JavaScript Tutorial Full Course</h3>
                    {/* Updated paragraph to include the note */}
                    <p>An extensive, full-length video course covering JavaScript programming concepts for beginners and beyond.  (Note: If the thumbnail doesn't appear, please click on it to watch.)</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/EerdGm-ehJQ?si=hH7jL0SdJOb7cC-A"
                        title="YouTube video player (freeCodeCamp JavaScript Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase2Resources;

