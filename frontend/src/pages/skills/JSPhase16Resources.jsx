import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Interview Preparation</h1>
                <p>Preparing for JavaScript-focused technical interviews, covering core concepts, data structures, algorithms, framework specifics, and behavioral questions.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Core JS Concepts: Closures, `this` keyword, Prototypes, Event Loop</li>
                        <li>Data Structures & Algorithms in JS: Arrays, Objects, Linked Lists, Stacks, Queues, Sorting, Searching</li>
                        <li>Framework-Specific Prep: React/Vue/Angular interview questions</li>
                        <li>System Design Basics: Fundamentals relevant to front-end/Node.js roles</li>
                        <li>Behavioral Questions: Teamwork, problem-solving, project handling</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: You Don’t Know JS series (advanced chapters)</h3>
                    <p>Revisit the advanced chapters of this series to solidify your understanding of core JavaScript mechanics often tested in interviews. </p>
                    {/* Link provided in Phase 2 */}
                    <a href="https://github.com/getify/You-Dont-Know-JS?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online (GitHub)</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: GeeksforGeeks – JavaScript Interview Questions</h3>
                    <p>A large collection of JavaScript interview questions covering various topics, useful for practice and review.</p>
                    <a href="https://www.geeksforgeeks.org/javascript/javascript-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Practice Platform --- */}
                <div className="resource-item">
                    <h3>💻 Practice Platform: CodeChef - JavaScript Practice</h3>
                    <p>Practice competitive programming problems using JavaScript on CodeChef to sharpen your algorithm and data structure skills.</p>
                    <a href="https://www.codechef.com/practice/javascript" target="_blank" rel="noopener noreferrer" className="resource-link">Go to CodeChef</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Top 30 JavaScript Interview Questions 2025 | JavaScript Interview Questions & Answers</h3>
                    <p>A video covering frequently asked JavaScript interview questions with explanations and sample answers. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/MX48mv73jf8?si=FP8pihqDizQz5L-S"
                        title="YouTube video player (Top 30 JavaScript Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: 100+ JavaScript Concepts you Need to Know</h3>
                    <p>A comprehensive video covering a wide range of essential JavaScript concepts often encountered in interviews and development. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lkIFF4maKMU?si=86Ok6p1UkRAcYUnE"
                        title="YouTube video player (100+ JavaScript Concepts)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase16Resources;
