// src/pages/Phase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Lifelong Learning & Specialization</h1>
                <p>Committing to continuous learning, staying updated with the latest research, and building a sustainable habit of growth in the data science field.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Continuous Practice:
                            <ul>
                                <li>Read research papers from arXiv, Google Research, etc.</li>
                                <li>Follow AI newsletters like KDnuggets and Towards Data Science</li>
                                <li>Participate in Hackathons and contribute to open-source projects</li>
                            </ul>
                        </li>
                        <li>Building Habits for Growth:
                            <ul>
                                <li>Aim for at least one personal project per month</li>
                                <li>Create a weekly summary of a new research paper or concept</li>
                                <li>Engage in community networking on platforms like LinkedIn and Kaggle forums</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Deep Learning for Coders with fastai and PyTorch – Jeremy Howard</h3>
                    <p>A top-down, hands-on approach to deep learning that gets you building models quickly and effectively.</p>
                    <a href="https://www.amazon.in/Deep-Learning-Coders-fastai-PyTorch/dp/1492045527" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Practical Deep Learning for Coders – fast.ai</h3>
                    <p>The free and highly acclaimed course that accompanies the book, focusing on practical application over theory.</p>
                    <a href="https://course.fast.ai/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to fast.ai</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Two Minute Papers – AI Research Explained</h3>
                    <p>Stay updated with the latest breakthroughs in AI and data science through short, digestible video summaries of research papers.</p>
                    {/* A direct link is best for a YouTube channel page */}
                    <a href="https://www.youtube.com/@TwoMinutePapers" target="_blank" rel="noopener noreferrer" className="resource-link">Go to YouTube Channel</a>
                </div>
            </div>
        </div>
    </>
);

export default Phase15Resources;