// src/pages/Phase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Interview Preparation & Job Search</h1>
                <p>Preparing for technical and behavioral interviews, refining your resume, and strategizing your job search in the data science field.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Technical Interview Focus Areas:
                            <ul>
                                <li>Python & SQL Questions (coding, problem-solving)</li>
                                <li>Machine Learning theory (bias-variance tradeoff, overfitting, evaluation metrics)</li>
                                <li>Case studies (applying data science to real-world business problems)</li>
                            </ul>
                        </li>
                        <li>Behavioral & HR Interview Focus:
                            <ul>
                                <li>"Tell me about yourself" (crafting your narrative)</li>
                                <li>"Your favorite project?" (articulating impact and learnings)</li>
                                <li>STAR method for answering behavioral questions</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📘 Ace the Data Science Interview – Nick Singh & Kevin Huo</h3>
                    <p>A comprehensive guide with common interview questions, solutions, and strategies to land your data science dream job.</p>
                    <a href="https://www.amazon.in/-/hi/dp/0578973839" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Data Science Interview Preparation – Udemy</h3>
                    <p>Prepare for all aspects of a data science interview, including coding, statistics, machine learning, and behavioral questions.</p>
                    <a href="https://www.udemy.com/course/data-science-interview-prep/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: StrataScratch – Data Science Interview Questions</h3>
                    <p>Practice common data science interview questions with detailed explanations and solutions from industry experts.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/A3ZSv6IqXY8?si=w2MVq2T70UB0ogX_"
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

export default Phase14Resources;