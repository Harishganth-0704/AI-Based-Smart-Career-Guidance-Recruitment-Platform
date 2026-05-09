import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: State Management & Architecture</h1>
                <p>Learning how to manage application state effectively using libraries like Redux and understanding common architectural patterns for scalable JavaScript applications.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>State management libraries (Redux, Vuex)</li>
                        <li>Application architecture patterns (MVC/MVVM/Flux)</li>
                        <li>Clean folder structure</li>
                        <li>Side-effects handling (e.g., Redux Thunk, Saga)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                {/* No link provided for Fullstack Redux, omitting for now */}
                {/*
                <div className="resource-item">
                    <h3>📘 Book: “Fullstack Redux” free chapters</h3>
                    <p>Practical insights into using Redux for state management in full-stack applications. [Link Needed]</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="resource-link">Link Needed</a>
                </div>
                 */}

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Redux.js.org – Getting Started</h3>
                    <p>The official Redux documentation is the best starting point for understanding its core concepts, principles, and API. </p>
                    <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Redux Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    {/* Note: Used a more relevant Redux course link than the one provided which was for React */}
                    <h3>🎓 Course: Redux Toolkit Complete Guide: Mastering Redux Made Easy (Udemy)</h3>
                    <p>A comprehensive course focused on the modern way to use Redux with Redux Toolkit, simplifying state management. </p>
                    <a href="https://www.udemy.com/course/redux-toolkit/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Redux | The Ultimate Redux Course</h3>
                    <p>A playlist offering a deep dive into Redux concepts, from basics to advanced patterns, often used with React. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLOghUv2IDLKFkYf8cH2D0zz0SBC-tHC9w"
                        title="YouTube video player (The Ultimate Redux Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase10Resources;
