// src/pages/UpdatedPhase1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UpdatedPhase1 = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Foundations of Data Science</h1>
                <p>Kickstart your journey with these foundational resources, covering core concepts, the data science lifecycle, and essential tools.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>What is Data Science, AI, ML, DL</li>
                        <li>Data Science lifecycle & workflow</li>
                        <li>Types of data: structured, unstructured</li>
                        <li>Problem definition & analytical thinking</li>
                        <li>Overview of tools & career paths</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Data Science for Business – Foster Provost & Tom Fawcett</h3>
                    <p>A must-read for understanding the fundamental principles of data science and how to apply them in a business context.</p>
                    <a href="https://www.amazon.in/Data-Science-Business-Foster-Provost/dp/1449361323" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Google Data Analytics Professional Certificate – Coursera</h3>
                    <p>A comprehensive program that covers the entire data analysis process from start to finish, perfect for beginners.</p>
                    <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp – Data Science Full Course for Beginners</h3>
                    <p>An extensive, hands-on video course that walks you through the essentials of data science with practical examples.</p>
                    {/* The YouTube link is for the freeCodeCamp course */}
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ua-CiDNNj30?si=GH-Uwxr4fODhLBQr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UpdatedPhase1;