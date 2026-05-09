import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Version Control, Testing & Deployment</h1>
                <p>Learning essential practices for managing code with Git, writing tests with pytest/unittest, managing environments, and deploying Python applications.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Version Control: Git/GitHub</li>
                        <li>Testing: unittest, pytest, Debugging</li>
                        <li>Environment Management: virtualenv, pip</li>
                        <li>Deployment: Docker basics, Heroku deployment</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Test-Driven Development with Python (Harry Percival)</h3>
                    <p>A practical, hands-on guide to learning Test-Driven Development (TDD) using Python, covering testing web applications and more. </p>
                    <a href="https://www.obeythetestinggoat.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Git Handbook</h3>
                    <p>The official GitHub documentation providing a comprehensive handbook on using Git for version control.</p>
                    <a href="https://docs.github.com/en/get-started/using-git/about-git" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub Docs</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Git & GitHub (freeCodeCamp)</h3>
                    <p>A beginner-friendly guide covering the essentials of Git version control and collaboration using GitHub. </p>
                    <a href="https://www.freecodecamp.org/news/git-and-github-for-beginners/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to freeCodeCamp</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: The Git & Github Bootcamp (Udemy)</h3>
                    <p>A comprehensive bootcamp covering Git and GitHub from the ground up, including branching, merging, and collaboration workflows. </p>
                    <a href="https://www.udemy.com/course/git-and-github-bootcamp/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: pytest Tutorial – freeCodeCamp</h3>
                    <p>A detailed tutorial on using pytest, a popular Python testing framework, to write effective and maintainable tests. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/etosV2IWBF0?si=erTCLIO1POvIaq4g"
                        title="YouTube video player (pytest Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage8Resources;
