    import React from 'react';
    import { Link } from 'react-router-dom';
    import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

    const CPlusPlusPhase2Resources = () => (
        <>
            <style>{ResourceStyles}</style>
            <div className="resource-container">
                <header className="resource-header">
                    <h1>Stage 2: Arrays, Strings, Pointers & Memory Management</h1>
                    <p>Mastering core C++ concepts like arrays, strings, and pointers, and understanding how to manage memory dynamically and safely.</p>
                    <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
                </header>

                {/* Section for Key Topics */}
                <div className="resource-section">
                    <h2>Key Topics</h2>
                    <div className="resource-item">
                        <ul>
                            <li>Arrays (1D, 2D), strings (C-style & `std::string`)</li>
                            <li>Pointers, references, pointer arithmetic </li>
                            <li>Dynamic memory: `new`, `delete`, smart pointers (`unique_ptr`, `shared_ptr`)</li>
                            <li>Basic debugging and error handling (try/catch, assertions)</li>
                        </ul>
                    </div>
                </div>

                {/* Section for Curated Resources */}
                <div className="resource-section">
                    <h2>Resources</h2>
                    {/* --- Notes --- */}
                    <div className="resource-item">
                        <h3>📝 Free Notes: LearnCpp – Pointers & Memory</h3>
                        <p>A highly-recommended, detailed tutorial covering C++ pointers, references, and dynamic memory management in great depth.</p>
                        <a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to LearnCpp.com</a>
                    </div>

                    {/* --- YouTube Video --- */}
                    <div className="resource-item">
                        <h3>▶️ YouTube: Pointers in C / C++</h3>
                        <p>A video tutorial explaining the fundamental concepts of pointers in C and C++, a crucial topic for the language. </p>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/zuegQmMdy8M?si=TsbShkdz0rXe5MjV"
                            title="YouTube video player (Pointers in C / C++)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* --- ADDED NEW VIDEO (with corrected 'embed' link) --- */}
                    <div className="resource-item">
                        <h3>▶️ YouTube: Dynamic Arrays in C++ 🧠</h3>
                        <p>A beginner-friendly explanation of dynamic memory allocation in C++ using `new` and `delete`. </p>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/PocJ5jXv8No"
                            title="YouTube video player (C++ dynamic memory explained)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );

    export default CPlusPlusPhase2Resources;

