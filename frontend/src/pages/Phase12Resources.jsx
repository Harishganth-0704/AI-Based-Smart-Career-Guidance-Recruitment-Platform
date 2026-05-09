// src/pages/Phase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Advanced & Domain-Specific Applications</h1>
                <p>Exploring specialized applications of data science and AI across various industries, including healthcare, finance, and retail.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Industry Domains & Applications:
                            <ul>
                                <li>Healthcare: Diagnosis, Medical imaging analysis</li>
                                <li>Finance: Fraud detection, Algorithmic trading, Stock forecasting</li>
                                <li>Retail: Customer segmentation, Recommendation engines</li>
                                <li>Manufacturing: Predictive maintenance, Quality control</li>
                            </ul>
                        </li>
                        <li>Cloud-AI Integration:
                            <ul>
                                <li>Implementing Smart ML solutions on AWS, GCP, Azure platforms</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📘 AI and Analytics for Business – Jay Liebowitz</h3>
                    <p>Understanding how AI and analytics are transforming business strategies and operations across different sectors.</p>
                    <a href="https://www.amazon.in/DATA-ANALYTICS-1ST-Jay-Liebowitz/dp/0367895617" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: AI for Everyone – Coursera (Andrew Ng)</h3>
                    <p>A non-technical course to help you understand AI, its impact, and how to navigate an AI-powered world.</p>
                    <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Domain-Specific AI Applications (Business Focus)</h3>
                    <p>Explore AI applications tailored for business challenges and opportunities.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/zYGDpG-pTho?si=CBD5wst8a6Nw-sWi"
                        title="YouTube video player (Business Applications)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Domain-Specific AI Applications (Healthcare Focus)</h3>
                    <p>Discover how AI is revolutionizing healthcare, from diagnosis to personalized treatment.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/j6EB9HO6acE?si=6c4HqxzwV0HASS-z"
                        title="YouTube video player (Healthcare Applications)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default Phase12Resources;