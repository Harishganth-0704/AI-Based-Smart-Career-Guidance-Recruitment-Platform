import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Testing & Debugging</h1>
                <p>Learning essential techniques for testing JavaScript code (unit, integration, e2e) and effectively debugging applications in both browser and Node.js environments.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Unit testing (Jest, Mocha)</li>
                        <li>Integration/End-to-End (e2e) testing (Cypress, Playwright)</li>
                        <li>Browser & Node.js debugging tools</li>
                        <li>Logging best practices</li>
                        <li>Code coverage</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: “Testing JavaScript Applications” (free sample chapters)</h3>
                    <p>Gain insights into comprehensive strategies and techniques for testing JavaScript applications effectively. </p>
                    <a href="https://www.scribd.com/document/910072205/Testing-JavaScript-Applications-1st-Edition-Lucas-Da-Costa-all-chapters-available" target="_blank" rel="noopener noreferrer" className="resource-link">View Sample Chapters (Scribd)</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Jest Official Docs</h3>
                    <p>The official documentation for Jest, a popular JavaScript testing framework, covering setup, writing tests, and advanced features. </p>
                    <a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Jest Docs</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: JavaScript Unit Testing - The Practical Guide (Udemy)</h3>
                    <p>A practical course focused on learning unit testing techniques for JavaScript applications using popular frameworks. </p>
                    <a href="https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Playwright JS/TS Automation Testing from Scratch & Framework (Udemy)</h3>
                    <p>Learn end-to-end testing using Playwright for JavaScript/TypeScript, covering test automation and framework building. </p>
                    <a href="https://www.udemy.com/course/playwright-tutorials-automation-testing/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: JavaScript Unit Testing Tutorial for Beginners</h3>
                    <p>A beginner-friendly tutorial introducing the concepts and practices of unit testing in JavaScript. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/zuKbR4Q428o?si=BCpc6J9gPbQCyvaw"
                        title="YouTube video player (JavaScript Unit Testing Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase11Resources;
