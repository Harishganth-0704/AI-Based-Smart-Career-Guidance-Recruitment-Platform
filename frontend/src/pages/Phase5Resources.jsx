// src/pages/Phase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Data Exploration & Preprocessing (EDA)</h1>
                <p>Developing essential skills to explore, clean, and prepare data for modeling, a critical step in any data science project.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Techniques:
                            <ul>
                                <li>Data cleaning (missing values, outliers)</li>
                                <li>Feature engineering</li>
                                <li>Correlation, pair plots, summary statistics</li>
                                <li>Visualization (histograms, boxplots, heatmaps)</li>
                            </ul>
                        </li>
                        <li>Tools:
                            <ul>
                                <li>Pandas, Seaborn, Matplotlib, Plotly</li>
                                <li>Jupyter Notebook, Google Colab</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Data Wrangling with Python – Jacqueline Kazil</h3>
                    <p>A practical guide to cleaning, transforming, and manipulating data using Python for analysis.</p>
                    <a href="https://www.amazon.in/Data-Wrangling-Python-Jacqueline-Kazil/dp/1491948817" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Exploratory Data Analysis for Machine Learning – Udemy (Krish Naik)</h3>
                    <p>Learn how to perform comprehensive EDA, a crucial step before building machine learning models.</p>
                    <a href="https://www.udemy.com/course/eda-for-machine-learning/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Exploratory Data Analysis in Python (Krish Naik)</h3>
                    <p>A detailed video tutorial on performing EDA using Python libraries, with real-world examples.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fHFOANOHwh8?si=pENm39iaO8w-pfDn"
                        title="YouTube video player"
                        frameFrame="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default Phase5Resources;