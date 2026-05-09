import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Text Processing, Redirection & Filters</h1>
                <p>Learn how to manipulate text, redirect input/output streams, and use powerful filter commands like grep, sed, and awk.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>stdin, stdout, stderr</li>
                        <li>Redirection </li>
                        <li>`grep` (Global Regular Expression Print)</li>
                        <li>`sed` (Stream Editor)</li>
                        <li>`awk` (Text processing language)</li>
                        <li>`wc`, `sort`, `uniq`, `diff`</li>
                        <li>`cut`, `tr`</li>
                        <li>Regular Expressions (Regex) basics</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Unix / Linux - Regular Expressions with SED</h3>
                    <p>A tutorial explaining how to use regular expressions with the `sed` command for text manipulation.</p>
                    <a href="https://www.tutorialspoint.com/unix/unix-regular-expressions.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorialspoint</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Bash For Loop (Linuxize)</h3>
                    <p>While the topic is "For Loop", Linuxize provides excellent, clear tutorials on many Bash concepts, including text processing.</p>
                    <a href="https://linuxize.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Linuxize</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Linux Bash Shell Scripting Incl. AWK, SED and 10+ Projects (Udemy)</h3>
                    <p>A comprehensive course covering shell scripting with a strong focus on powerful text processing tools like AWK and SED. </p>
                    <a href="https://www.udemy.com/course/learn-shell-scripting-incl-awksedand-more-than-10-project/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Learning Awk Is Essential For Linux Users</h3>
                    <p>A video emphasizing the importance of `awk` for text processing in Linux and providing a tutorial on how to use it. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9YOZmI-zWok?si=JxQuKIkHe0Q6h1bo"
                        title="YouTube video player (Learning Awk)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase2Resources;
