import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Data Structures, Algorithms & Optimization</h1>
                <p>Developing a strong foundation in core data structures and algorithms, and understanding performance optimization and complexity analysis in C++.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Data Structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs </li>
                        <li>Algorithms: Sorting & Searching algorithms, Recursion</li>
                        <li>Analysis: Time/Space Complexity (Big O notation)</li>
                        <li>Best Practice: Code readability, Optimization (O2 flags), Profiling</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: GeeksforGeeks DSA in C++</h3>
                    <p>A comprehensive collection of tutorials and articles covering data structures and algorithms, with implementations in C++.</p>
                    <a href="https://www.geeksforgeeks.org/cpp/c-plus-plus/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: C++ Data Structures & Algorithms + LEETCODE Exercises (Udemy)</h3>
                    <p>A course focused on mastering data structures and algorithms in C++, combined with practical LeetCode exercises. </p>
                    <a href="https://www.udemy.com/course/data-structures-algorithms-cpp/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Algorithms and Data Structures Tutorial - Full Course for Beginners</h3>
                    <p>A full video course designed for beginners to understand the fundamentals of data structures and algorithms. [Image of algorithm flowchart]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/8hly31xKli0?si=8StMq2o6IcExht5y"
                        title="YouTube video player (Algorithms and Data Structures Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CPlusPlusPhase5Resources;
