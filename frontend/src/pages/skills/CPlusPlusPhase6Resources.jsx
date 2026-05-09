import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Real-World Projects</h1>
                <p>Applying your C++ knowledge to build complete, end-to-end projects that demonstrate your skills in OOP, data structures, and memory management.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Key Topics (Project Ideas) */}
            <div className="resource-section">
                <h2>Project Ideas</h2>
                <div className="resource-item">
                    <ul>
                        <li>Student Management System (OOP + File Handling)</li>
                        <li>Library Management System (STL + Templates)</li>
                        <li>Basic Banking System (Memory Management)</li>
                        <li>Mini Game (Tic Tac Toe / Snake) </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: C++ Project Ideas for Beginners (GeeksforGeeks)</h3>
                    <p>A curated list of project ideas for beginners and advanced learners to build their portfolio in C++.</p>
                    <a href="https://www.geeksforgeeks.org/cpp/top-50-cpp-project-ideas-for-beginners-advanced/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: C++ Projects (Playlist)</h3>
                    <p>A playlist containing various C++ projects to help you gain practical experience and build your portfolio. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLlZBMkVFeev4BgfMCzpwWIRn0STZvGYgy"
                        title="YouTube video player (C++ Projects Playlist)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CPlusPlusPhase6Resources;
