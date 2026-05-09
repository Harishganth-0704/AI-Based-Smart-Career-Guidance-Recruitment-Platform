import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Bash Scripting Foundations</h1>
                <p>Learn the foundational syntax and logic for writing your own Bash scripts, including variables, control structures, and debugging techniques.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Shebang (`#!/bin/bash`)</li>
                        <li>Variables (declaration, assignment, reading)</li>
                        <li>User input (`read`)</li>
                        <li>Arithmetic (`$((...))`)</li>
                        <li>If-else statements and conditions</li>
                        <li>Loops (for, while) </li>
                        <li>Return codes (`$?`)</li>
                        <li>Debugging (`set -x`)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: 30 Bash Script Examples</h3>
                    <p>A collection of practical Bash script examples to help you understand syntax and real-world application.</p>
                    <a href="https://linuxhint.com/30_bash_script_examples/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to LinuxHint</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Bash Scripting and Shell Programming (Linux Command Line) (Udemy)</h3>
                    <p>A comprehensive course that covers Bash scripting and shell programming from the ground up, suitable for beginners. </p>
                    <a href="https://www.udemy.com/course/bash-scripting/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Bash Scripting Full Course 3 Hours</h3>
                    <p>A complete video course designed to teach you Bash scripting, from basic commands to writing complex scripts. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/e7BufAVwDiM?si=5aFDQjXgop23GSsS"
                        title="YouTube video player (Bash Scripting Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase3Resources;
