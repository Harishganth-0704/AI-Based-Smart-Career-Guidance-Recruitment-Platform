import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Shell Basics & Core Linux Commands</h1>
                <p>Learn the fundamentals of the shell and master the core Linux commands for navigation, file manipulation, process management, and permissions.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Shell vs Terminal</li>
                        <li>File system structure </li>
                        <li>Navigation (`cd`, `ls`, `pwd`)</li>
                        <li>File ops (`cp`, `mv`, `rm`, `mkdir`)</li>
                        <li>Viewing (`cat`, `less`, `head`, `tail`)</li>
                        <li>Permissions (`chmod`, `chown`)</li>
                        <li>Users & groups</li>
                        <li>Processes (`ps`, `kill`, `top`)</li>
                        <li>Environment variables</li>
                        <li>Shell config (`.bashrc`)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: The Linux Command Line, 2nd Edition: A Complete Introduction</h3>
                    <p>A comprehensive introduction to the Linux command line, perfect for beginners to gain a deep understanding. </p>
                    <a href="https://www.amazon.in/Linux-Command-Line-2nd-Introduction-ebook/dp/B07J43H42Z/ref=sr_1_1?dib=eyJ2IjoiMSJ9.EPPIqQoysfeWGuNjq5-78o6gTZjEDQO12F_sLbkyu7bvfLI4cufNOHn-EEiIC2NkGSLtI6axRqShqKtIfA_PBl9GOgeKA3DwPJDtL7lBscJuEQFx8skXbEnb60PjJAb7LDFM8T2qICE6DC__I5ataThknoh5b5Yx15jGUtcdC3RTiF0Y7-rA5ZeMgdT-bjuv.684fH_161FjwQCfyw1lMUmVT4EEAQMRjj3tsapF1a-U&dib_tag=se&keywords=The+Linux+Command+Line%2C+2nd+Edition&qid=1762274134&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Ryans Tutorials - Linux Tutorial</h3>
                    <p>A set of beginner-friendly tutorials covering the Linux command line and other fundamental concepts.</p>
                    <a href="https://ryanstutorials.net/linuxtutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Ryans Tutorials</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: GeeksforGeeks - Linux Commands</h3>
                    <p>A quick reference guide and explanation for a wide variety of essential Linux commands.</p>
                    <a href="https://www.geeksforgeeks.org/linux-unix/linux-commands/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Linux Journey (Labex.io)</h3>
                    <p>An interactive, hands-on journey to learn Linux concepts from the ground up.</p>
                    <a href="https://labex.io/linuxjourney" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Linux Journey</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Linux Command Line for Beginners (Udemy)</h3>
                    <p>A course designed for absolute beginners to get comfortable and proficient with the Linux command line. </p>
                    <a href="https://www.udemy.com/course/linux-command-line-basics/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: The 50 Most Popular Linux & Terminal Commands - Full Course for Beginners</h3>
                    <p>A comprehensive video course covering 50 of the most essential Linux and terminal commands for beginners. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZtqBQ68cfJc?si=cPyfZhEg0PDJ5PCj"
                        title="YouTube video player (50 Most Popular Linux Commands)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase1Resources;
