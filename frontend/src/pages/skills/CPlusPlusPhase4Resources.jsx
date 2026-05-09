import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: STL, Templates & Modern C++</h1>
                <p>Mastering the C++ Standard Template Library (STL), generic programming with templates, and modern C++11 (and beyond) features.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>STL: Containers (vector, map, set), Iterators, Algorithms, Lambda expressions </li>
                        <li>Templates & Generic Programming</li>
                        <li>Modern C++ (C++11 and beyond): `auto`, `nullptr`, range-based loops, move semantics, threads</li>
                        <li>File Handling: `fstream`, `ifstream`, `ofstream`</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Modern C++ Tutorial (PDF)</h3>
                    <p>A free tutorial (as a PDF book) covering modern C++ features from C++11 to C++20. </p>
                    <a href="https://changkun.de/modern-cpp/pdf/modern-cpp-tutorial-en-us.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">Read PDF Book</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: GeeksforGeeks STL Guide</h3>
                    <p>A comprehensive guide to the C++ Standard Template Library (STL), covering containers, iterators, and algorithms with examples.</p>
                    <a href="https://www.geeksforgeeks.org/cpp/the-c-standard-template-library-stl/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: C++ STL (Standard Template Library) Crash Course</h3>
                    <p>A crash course playlist covering the most important parts of the C++ STL, including containers and algorithms. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PL_dsdStdDXbq8BTjGdUEWgWYFWYP6pwYb"
                        title="YouTube video player (C++ STL Crash Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CPlusPlusPhase4Resources;
