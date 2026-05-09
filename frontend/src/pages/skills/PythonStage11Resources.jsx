import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Interview Preparation</h1>
                <p>Preparing for Python-focused technical interviews by reviewing core concepts, practicing problem-solving, and honing communication skills.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Core Python: Data types, OOP, file handling, exceptions, standard library</li>
                        <li>Data Structures & Algorithms: Arrays, linked lists, stacks, queues, sorting, searching</li>
                        <li>Problem Solving: LeetCode / HackerRank practice</li>
                        <li>Databases & SQL Basics</li>
                        <li>APIs & Flask Basics</li>
                        <li>Scenario Questions: Debugging, optimization, code review</li>
                        <li>Soft Skills: Communication, teamwork, explaining logic clearly</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Problem Solving with Algorithms and Data Structures Using Python</h3>
                    <p>A free, interactive online book covering fundamental data structures and algorithms using Python, excellent for interview preparation. </p>
                    <a href="https://runestone.academy/ns/books/published/pythonds/index.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Top 100 Python Interview Q&A – InterviewBit</h3>
                    <p>A curated list of frequently asked Python interview questions covering various topics from basics to advanced concepts.</p>
                    <a href="https://www.interviewbit.com/python-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to InterviewBit</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Python Interview Questions – GeeksforGeeks</h3>
                    <p>Another comprehensive collection of Python interview questions categorized by topic, useful for targeted preparation.</p>
                    <a href="https://www.geeksforgeeks.org/python/python-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Practice Platforms --- */}
                <div className="resource-item">
                    <h3>💻 Practice Platform: HackerRank – Python Domain Practice</h3>
                    <p>Practice Python-specific problems to sharpen your coding skills for technical interviews.</p>
                    <a href="https://www.hackerrank.com/domains/python" target="_blank" rel="noopener noreferrer" className="resource-link">Go to HackerRank</a>
                </div>
                 <div className="resource-item">
                    <h3>💻 Practice Platform: HackerRank – Python (Advanced) Skills Directory</h3>
                    <p>Challenge yourself with more advanced Python topics like file/database operations, concurrency, and more.</p>
                    <a href="https://www.hackerrank.com/skills-directory/python_advanced" target="_blank" rel="noopener noreferrer" className="resource-link">Go to HackerRank Advanced</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Top 50 Python Interview Questions | Python Interview Questions And Answers | Edureka</h3>
                    <p>A video covering the top 50 Python interview questions with detailed answers, helpful for understanding common expectations. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lEC7nuPtHp0?si=BjcghYdIL3F2BUMg"
                        title="YouTube video player (Top 50 Python Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage11Resources;

