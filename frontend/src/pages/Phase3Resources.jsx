// src/pages/Phase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Programming with Python & Libraries</h1>
                <p>Mastering Python fundamentals and essential data science libraries for practical application and project development.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Core Python:
                            <ul>
                                <li>Variables, Loops, Functions, OOP</li>
                                <li>File Handling, Modules, Exception Handling</li>
                            </ul>
                        </li>
                        <li>Data Science Libraries:
                            <ul>
                                <li>NumPy: Numerical computing, matrices</li>
                                <li>Pandas: Dataframes, cleaning, manipulation</li>
                                <li>Matplotlib / Seaborn / Plotly: Visualization</li>
                                <li>Scikit-learn: ML algorithms</li>
                                <li>Statsmodels: Statistical models</li>
                                <li>TensorFlow / PyTorch: Deep Learning</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Python for Data Analysis – Wes McKinney</h3>
                    <p>The definitive guide to Pandas and NumPy, written by the creator of Pandas, essential for data manipulation.</p>
                    <a href="https://www.amazon.in/Python-Data-Analysis-Wrangling-IPython/dp/1491957662" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Python for Everybody – Coursera (Dr. Chuck)</h3>
                    <p>A highly-rated specialization for learning Python from scratch, focusing on data applications.</p>
                    <a href="https://www.coursera.org/specializations/python" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Python for Data Science (freeCodeCamp)</h3>
                    <p>A comprehensive video course covering Python programming basics and its application in data science.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/LHBE6Q9XlzI?si=TYat0Ahodgx5t_Sd"
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

export default Phase3Resources;