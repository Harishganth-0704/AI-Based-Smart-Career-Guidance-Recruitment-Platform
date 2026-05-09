// src/pages/Phase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Data Visualization & Reporting</h1>
                <p>Learning to effectively communicate insights through compelling visual representations and interactive dashboards.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Tools & Libraries (Python):
                            <ul>
                                <li>Matplotlib, Seaborn, Plotly, Dash</li>
                            </ul>
                        </li>
                        <li>BI Tools:
                            <ul>
                                <li>Power BI, Tableau, Looker Studio</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Storytelling with Data – Cole Nussbaumer Knaflic</h3>
                    <p>Learn to design powerful data visualizations and effectively communicate insights to any audience.</p>
                    <a href="https://www.amazon.in/Storytelling-Data-Visualization-Business-Professionals/dp/1119002257" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Power BI Essential Training – LinkedIn Learning</h3>
                    <p>Master the essentials of Power BI, from connecting data to creating interactive dashboards and reports.</p>
                    <a href="https://www.linkedin.com/learning/power-bi-essential-training" target="_blank" rel="noopener noreferrer" className="resource-link">Go to LinkedIn Learning</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Data Visualization in Python (Simplilearn)</h3>
                    <p>A practical guide to data visualization techniques using Python libraries like Matplotlib and Seaborn.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Nt84_TzRkbo?si=2IV0lnJ6wo_xxWOo"
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

export default Phase6Resources;