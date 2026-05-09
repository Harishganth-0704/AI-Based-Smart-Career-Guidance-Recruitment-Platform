// src/pages/Phase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Real-World Projects & Portfolios</h1>
                <p>Applying learned skills to build practical projects, gaining hands-on experience, and creating a strong portfolio for career advancement.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Project Ideas:
                            <ul>
                                <li>EDA + Prediction (e.g., Titanic survival, House Price prediction, Sales Forecasting)</li>
                                <li>Image Classification (e.g., Cats vs Dogs, custom datasets)</li>
                                <li>Sentiment Analysis (e.g., Twitter data, product reviews)</li>
                                <li>Recommendation System (e.g., Netflix-style movie recommendations)</li>
                                <li>Cloud Deployed Model (e.g., deploying a model with FastAPI and AWS EC2)</li>
                            </ul>
                        </li>
                        <li>Platforms for Projects & Learning:
                            <ul>
                                <li>Kaggle (competitions, datasets, notebooks)</li>
                                <li>DrivenData (social impact data science competitions)</li>
                                <li>GitHub (version control, showcasing projects)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📘 Book: Data Science Projects with Python – Stephen Klosterman</h3>
                    <p>A practical guide to building end-to-end data science projects using Python, perfect for hands-on learning.</p>
                    <a href="https://www.amazon.in/Data-Science-Projects-Python-scikit-learn/dp/1838551026" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Applied Data Science Capstone – Coursera (IBM)</h3>
                    <p>This capstone project allows you to apply your data science skills to a real-world problem and build a strong portfolio piece.</p>
                    <a href="https://www.coursera.org/learn/applied-data-science-capstone" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Data Science Project Walkthrough (Ken Jee)</h3>
                    <p>Follow along with a complete data science project from start to finish, covering all stages from data cleaning to model building.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tjIWRqqMDaw?si=-uwjuQrJrLeigxHj"
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

export default Phase11Resources;