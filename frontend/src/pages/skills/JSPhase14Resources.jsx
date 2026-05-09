import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Real-World Projects</h1>
                <p>Applying your JavaScript skills to build complete projects, demonstrating your understanding of full-stack workflows, API integration, and deployment.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Full-stack JavaScript project workflow</li>
                        <li>Version control (Git)</li>
                        <li>API integration</li>
                        <li>Database usage (basic concepts)</li>
                        <li>Performance considerations</li>
                        <li>Deployment strategies</li>
                        <li>Security basics</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Eloquent JavaScript project chapters</h3>
                    <p>Refer back to the project chapters in Eloquent JavaScript for practical examples and exercises to apply your learning. </p>
                    {/* Link provided in Phase 1 */}
                    <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: freeCodeCamp.org – JavaScript Project Ideas</h3>
                    <p>A collection of project ideas for beginners, often accompanied by tutorials or guidance to help you get started.</p>
                    <a href="https://www.freecodecamp.org/news/javascript-projects-for-beginners/#heading-how-to-create-tabs-that-display-different-content" target="_blank" rel="noopener noreferrer" className="resource-link">Go to freeCodeCamp</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Ultimate React JS Course: Build 15 Web Projects with React (Udemy)</h3>
                    <p>While React-focused, this course provides excellent practice in building various web projects, applying JavaScript fundamentals within a popular framework. </p>
                    <a href="https://www.udemy.com/course/ultimate-react-js-course-build-15-web-projects-with-react/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                    <p>A video course guiding you through building 15 projects using only vanilla (plain) JavaScript, great for solidifying core skills. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3PHXvlpOkf4?si=ABkaJpepR_XSaAgV"
                        title="YouTube video player (Build 15 JavaScript Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: MERN Stack Full Tutorial & Project | Complete All-in-One Course | 8 Hours</h3>
                    <p>An extensive tutorial covering the full MERN stack (MongoDB, Express, React, Node.js), guiding you through building a complete full-stack application. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/CvCiNeLnZ00?si=PsVD0vCk5k-24e6p"
                        title="YouTube video player (MERN Stack Full Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase14Resources;
