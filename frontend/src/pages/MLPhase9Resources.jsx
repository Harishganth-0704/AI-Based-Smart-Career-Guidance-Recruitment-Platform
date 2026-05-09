// src/pages/MLPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Real-World Projects</h1>
                <p>Applying theoretical knowledge to practical, end-to-end machine learning projects to build a strong portfolio and gain hands-on experience.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Capstone Projects (integrating multiple ML skills)</li>
                        <li>Kaggle Competitions (honing skills and comparing against others)</li>
                        <li>Open Source Contributions (collaborating on real-world codebases)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Machine Learning Yearning — Andrew Ng</h3>
                    <p>A practical guide on how to make machine learning algorithms work, focusing on structuring ML projects and making good decisions.</p>
                    <a href="https://info.deeplearning.ai/machine-learning-yearning-book" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Applied Machine Learning in Python — Coursera</h3>
                    <p>A course focused on applying machine learning techniques using Python, often involving practical assignments and projects.</p>
                    <a href="https://www.coursera.org/learn/python-machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: SONAR Rock vs Mine Prediction with Python | End To End Python Machine Learning Project</h3>
                    <p>A detailed walkthrough of an end-to-end machine learning project, from data collection to model deployment.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fiz1ORTBGpY?si=Y2fQ3xnnLwkllEV3"
                        title="YouTube video player (SONAR Project)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                
                <div className="resource-item">
                    <h3>▶️ YouTube: End To End Machine Learning Project Implementation With Dockers,Github Actions And Deployment</h3>
                    <p>Learn how to implement a complete ML project pipeline, including Dockerization, GitHub Actions for CI/CD, and deployment strategies.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/MJ1vWb1rGwM?si=zxNVEQtpz3v2LNgv"
                        title="YouTube video player (ML Project with Docker & GitHub Actions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase9Resources;