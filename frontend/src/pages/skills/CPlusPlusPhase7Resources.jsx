import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Portfolio & Resume strategy</h1>
                <p>Applying your C++ knowledge to build a strong portfolio and resume that effectively showcases your skills to employers.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Portfolio Structure */}
            <div className="resource-section">
                <h2> 1. Portfolio Structure</h2>
                <div className="resource-item">
                    <ul>
                        <li>✅ Must-Have Sections
                            <ul>
                                <li>About Me: Short intro (education, specialization, passion for system programming/game dev/AI, etc.).
                                    <ul>
                                        <li>Example: I’m a C++ developer passionate about building high-performance systems and optimizing algorithms for real-time applications.</li>
                                    </ul>
                                </li>
                                <li>Skills:
                                    <ul>
                                        <li>Core: C++, OOP, STL, Pointers, Memory Mgmt</li>
                                        <li>Advanced: Multithreading, Design Patterns, File Handling, Data Structures, Algorithms</li>
                                        <li>Tools: Git, CMake, Visual Studio Code, GCC/Clang, Valgrind</li>
                                    </ul>
                                </li>
                                <li>Projects (3–5 best):
                                    <ul>
                                        <li>Title + Description</li>
                                        <li>Tech Stack</li>
                                        <li>Problem Solved</li>
                                        <li>GitHub Link / Demo</li>
                                    </ul>
                                </li>
                                <li>Certifications & Achievements: Include C++/DSA or system-design-related certificates (e.g., Coursera, Udemy, HackerRank C++ Badge).</li>
                                <li>Contact & GitHub: Add GitHub + LinkedIn + Email.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>2. Resume Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>📌 Resume Format:
                            <ul>
                                <li>Keep it one page, ATS-friendly, clean layout.</li>
                                <li>Use keywords: “C++ developer, OOP, STL, algorithms, low-level design, memory optimization, multithreading.”</li>
                            </ul>
                        </li>
                        <li>🔍 Sections:
                            <ul>
                                <li>Header: Name | Email | GitHub | LinkedIn</li>
                                <li>Objective: *“Aspiring C++ developer seeking to apply algorithmic problem-solving and object-oriented design skills to build efficient, real-time applications.”*</li>
                                <li>Skills: C++, STL, OOP, DSA, Git, Linux, Debugging</li>
                                <li>Projects: List 2–3 with measurable outcomes.
                                    <ul>
                                        <li>Optimized sorting algorithm reducing runtime by 40%.</li>
                                        <li>Built console-based banking app with file persistence using STL maps.</li>
                                    </ul>
                                </li>
                                <li>Experience (if any): Internships / Hackathons</li>
                                <li>Education: Degree + Year</li>
                                <li>Achievements: Coding contests, Hackathons, Certificates</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Online Presence */}
            <div className="resource-section">
                <h2>3. Online Presence</h2>
                <div className="resource-item">
                    <ul>
                        <li>GitHub: Organize repos, add documentation, keep contribution graph active.</li>
                        <li>LinkedIn: Post about projects, code snippets, learning journey.</li>
                        <li>LeetCode/HackerRank: Show problem-solving stats in resume.</li>
                    </ul>
                </div>
            </div>
            
            {/* No specific resources provided for this phase */}

        </div>
    </>
);

export default CPlusPlusPhase7Resources;
