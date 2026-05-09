import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: JavaScript in Node.js</h1>
                <p>Understanding the key differences between running JavaScript on the client-side (browser) and the server-side (Node.js), and exploring backend possibilities.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Difference between client-side JS (browser) and server‐side JS (Node.js)</li>
                        <li>Setting up Node.js</li>
                        <li>npm (Node Package Manager) basics</li>
                        <li>Working with core Node modules (`fs`, `http`)</li>
                        <li>Overview of backend possibilities with Node.js</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Node.js section in Eloquent JavaScript</h3>
                    <p>Refer back to the relevant chapter in Eloquent JavaScript for an introduction to server-side JavaScript using Node.js. </p>
                    {/* Link provided in Phase 1 */}
                    <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Nodejs.dev – Introduction to Node.js</h3>
                    <p>The official Node.js website's introduction, providing a solid overview of what Node.js is and how to get started.</p>
                    <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Nodejs.dev</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) (Udemy)</h3>
                    <p>A comprehensive course covering Node.js development from the ground up, including building REST APIs, working with databases, and more. </p>
                    <a href="https://www.udemy.com/course/nodejs-the-complete-guide/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Node.js Crash Course</h3>
                    <p>A concise crash course introducing the fundamentals of Node.js for backend development. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Oe421EPjeBE?si=RsnVL03d8xYFeWqI"
                        title="YouTube video player (Node.js Crash Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase7Resources;
