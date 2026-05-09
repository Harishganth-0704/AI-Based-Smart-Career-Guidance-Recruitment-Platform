import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Intermediate to Advanced Concepts</h1>
                <p>Exploring more advanced Python features like decorators, generators, context managers, asynchronous programming, and common design patterns.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Decorators</li>
                        <li>Generators, Iterators</li>
                        <li>Context Managers (`with` statement)</li>
                        <li>Asynchronous Programming (`async`/`await`)</li>
                        <li>Threading & Multiprocessing basics</li>
                        <li>Design Patterns in Python</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Intermediate Python by Muhammad Yasoob</h3>
                    <p>A free book covering various intermediate Python topics like generators, decorators, collections, and more. </p>
                    <a href="https://book.pythontips.com/en/latest/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Python Advanced Notes (GitHub - dabeaz)</h3>
                    <p>Advanced Python mastery course materials from David Beazley, covering topics like generators, coroutines, and metaprogramming.</p>
                    <a href="https://github.com/dabeaz-course/python-mastery" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub Repo</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Udacity – Intermediate Python Nanodegree</h3>
                    <p>A Nanodegree program focused on intermediate Python skills, including advanced OOP, functional programming, and working with libraries. </p>
                    <a href="https://www.udacity.com/course/intermediate-python-nanodegree--nd303" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udacity</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Telusko – Advanced Python Playlist</h3>
                    <p>A playlist covering various advanced Python concepts, including decorators, generators, multithreading, and more. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3"
                        title="YouTube video player (Telusko - Advanced Python Playlist)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage5Resources;
