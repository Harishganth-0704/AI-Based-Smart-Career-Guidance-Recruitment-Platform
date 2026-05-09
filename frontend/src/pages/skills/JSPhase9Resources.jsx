import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: JavaScript Framework(React.js)</h1>
                <p>Diving into popular JavaScript frameworks like React, Vue, or Angular to build modern, component-based web applications.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Choose one major framework (e.g., React, Vue, Angular)</li>
                        <li>Component architecture</li>
                        <li>Routing</li>
                        <li>Lifecycle methods / Hooks</li>
                        <li>Front-end ecosystem (state management, build tools)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: React or Vue official docs + “Fullstack React” (free chapters)</h3>
                    <p>Official documentation is key. Supplement with free chapters of Fullstack React for practical insights. </p>
                    <a href="https://freecomputerbooks.com/Fullstack-React-The-Complete-Guide-To-Reactjs-And-Friends.html" target="_blank" rel="noopener noreferrer" className="resource-link">Fullstack React (Free Chapters)</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Official docs: ReactJS.org</h3>
                    <p>The official React documentation is the best place to learn the core concepts, APIs, and best practices for building React applications.</p>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="resource-link">Go to React Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: React - The Complete Guide 2025 (incl. Next.js, Redux) (Udemy)</h3>
                    <p>A comprehensive course covering React from beginner to advanced levels, including popular ecosystem tools like Next.js and Redux. </p>
                    <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: React Full Course for free</h3>
                    <p>A free, full-length video course designed to teach you the fundamentals and core concepts of React development. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/CgkZ7MvWUAA?si=K5L3pnLgjRiOUPRm"
                        title="YouTube video player (React Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase9Resources;
