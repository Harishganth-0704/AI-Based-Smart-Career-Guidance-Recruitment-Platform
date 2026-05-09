import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Object-Oriented Programming & Design Principles</h1>
                <p>Mastering the core principles of OOP in C++, including classes, inheritance, and polymorphism, as well as foundational design principles.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Classes, Objects, Constructors/Destructors</li>
                        <li>Encapsulation, Inheritance, Polymorphism [Image of OOP principles diagram]</li>
                        <li>Virtual functions, Abstraction, Composition vs Inheritance</li>
                        <li>Design Patterns & SOLID principles (Introduction)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: OOP Notes (PDF)</h3>
                    <p>Comprehensive lecture notes covering the fundamentals of Object-Oriented Programming using C++. </p>
                    <a href="https://www.cet.edu.in/noticefiles/285_OOPS%20lecture%20notes%20Complete.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">Read PDF Notes</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Object Oriented Programming using C++ from Basic to Advanced (Udemy)</h3>
                    <p>A course designed to take you from the basics of C++ OOP to more advanced concepts and applications. </p>
                    <a href="https://www.udemy.com/course/oops-and-c-from-basic-to-advanced/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Object Oriented Programming (OOP) in C++ Course</h3>
                    <p>A full video course from freeCodeCamp covering all essential Object-Oriented Programming concepts in C++. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wN0x9eZLix4?si=tp5A9wwesGMY3hVZ"
                        title="YouTube video player (OOP in C++ Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CPlusPlusPhase3Resources;
