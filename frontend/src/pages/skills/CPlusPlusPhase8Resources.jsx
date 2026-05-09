import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Interview Preparation</h1>
                <p>Preparing for C++ technical interviews by focusing on core language features, data structures, algorithms, and common interview questions.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Focus Areas</h2>
                <div className="resource-item">
                    <ul>
                        <li>Practice C++ basics (pointers, OOP, STL)</li>
                        <li>Solve LeetCode / GeeksforGeeks DSA problems in C++ </li>
                        <li>Revise common patterns (recursion, dynamic programming)</li>
                        <li>Mock interviews and conceptual questions</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: C++ Interview Questions and Answers (GeeksforGeeks)</h3>
                    <p>A comprehensive list of C++ interview questions covering basic, OOP, and advanced topics to help you prepare.</p>
                    <a href="https://www.geeksforgeeks.org/cpp/cpp-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Practice Platform --- */}
                <div className="resource-item">
                    <h3>💻 Practice Platform: CodeChef</h3>
                    <p>Practice competitive programming problems and improve your problem-solving skills using C++ on the CodeChef platform. </p>
                    <a href="https://www.codechef.com/practice/cpp" target="_blank" rel="noopener noreferrer" className="resource-link">Go to CodeChef</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: C++ Interview Questions And Answers | C++ Interview Questions And Answers For Freshers</h3>
                    <p>A video guide covering common C++ interview questions tailored for freshers and those new to the language. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/6HuptuHyJZg?si=X3QRDxvw-opPkPYo"
                        title="YouTube video player (C++ Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CPlusPlusPhase8Resources;
