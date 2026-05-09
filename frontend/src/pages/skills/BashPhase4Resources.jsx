import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Structuring & Advanced Scripting</h1>
                <p>Learn to write structured, robust, and advanced Bash scripts using functions, arrays, error handling, and more.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Functions </li>
                        <li>Arrays & associative arrays </li>
                        <li>Local/global variables</li>
                        <li>Logging</li>
                        <li>Error handling (`set -e`, `set -o pipefail`)</li>
                        <li>`trap` for cleanup</li>
                        <li>Modular scripts</li>
                        <li>String manipulation</li>
                        <li>`xargs`</li>
                        <li>Parallel execution</li>
                        <li>File processing</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Advanced Bash-Scripting Guide</h3>
                    <p>A comprehensive, in-depth guide to Bash scripting, covering a wide range of advanced topics and examples. </p>
                    <a href="https://tldp.org/LDP/abs/html/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TLDP</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Linux Bash Shell Scripting: A Practical way of Learning (Udemy)</h3>
                    <p>A practical, hands-on course designed to teach you Bash scripting through real-world examples and projects. </p>
                    <a href="https://www.udemy.com/course/bash-shell-scripting-linux/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Advance Shell Scripting (Playlist)</h3>
                    <p>A video playlist covering advanced shell scripting topics to level up your Bash skills. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLbowq_8EW6CzKLGIsz7qlrAsPAlOMWJY2"
                        title="YouTube video player (Advance Shell Scripting Playlist)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase4Resources;
