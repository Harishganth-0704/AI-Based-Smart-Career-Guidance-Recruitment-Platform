import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Object-Oriented & Functional Programming</h1>
                <p>Exploring Object-Oriented Programming (OOP) principles in JavaScript and functional programming styles using higher-order functions.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>OOP in JS: Classes, Constructors, Inheritance, Prototype</li>
                        <li>Functional Programming (FP) Style: Higher-Order Functions, Immutability basics</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: You Don’t Know JS (Yet) series — Kyle Simpson</h3>
                    <p>Refer back to this series for in-depth coverage of JavaScript's object system, prototypes, and scope, which are fundamental to both OOP and FP styles. </p>
                    {/* Link provided in Phase 2 */}
                    <a href="https://github.com/getify/You-Dont-Know-JS?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online (GitHub)</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: FreeComputerBooks – JavaScript Design Patterns & OOP</h3>
                    <p>Access free books and resources covering JavaScript design patterns and Object-Oriented Programming concepts.</p>
                    <a href="https://freecomputerbooks.com/top-javascript-books.html" target="_blank" rel="noopener noreferrer" className="resource-link">Go to FreeComputerBooks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Functional Programming in JavaScript: A Practical Approach (Udemy)</h3>
                    <p>A practical guide to understanding and applying functional programming principles in JavaScript development. </p>
                    <a href="https://www.udemy.com/course/functional-programming-in-javascript-a-practical-guide/?couponCode=IND21PM" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                 {/* Note: Removed the Python OOP course as it's not relevant here */}


                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Object-oriented Programming in JavaScript: Made Super Simple</h3>
                    <p>A beginner-friendly video that simplifies the concepts of Object-Oriented Programming within the context of JavaScript. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/PFmuCDHHpwk?si=uXtv7XKW4fEm7nC_"
                        title="YouTube video player (OOP in JavaScript)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase5Resources;
