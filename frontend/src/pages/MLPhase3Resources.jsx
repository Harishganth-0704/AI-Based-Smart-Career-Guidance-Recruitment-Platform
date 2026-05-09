// src/pages/MLPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Programming for ML</h1>
                <p>Mastering Python, its essential data science libraries, and version control with Git to build a strong programming foundation for machine learning.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Python Programming</li>
                        <li>Libraries: NumPy, Pandas, Matplotlib</li>
                        <li>Version Control with Git</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Python Data Science Handbook — Jake VanderPlas</h3>
                    <p>An essential guide and practical reference for scientific computing in Python, covering NumPy, Pandas, Matplotlib, and more.</p>
                    <a href="https://www.amazon.in/Python-Data-Science-Handbook-Essential/dp/9352134915/ref=sr_1_1?crid=3I0JK22C0WLZB&dib=eyJ2IjoiMSJ9.rGCc_Ptj2znh_KGHE_3o0pxF7Pnd825zp_g9t_khfium-1ahIB_BDru12Sj66Hez4NC4P59-LO_yp90dB4ANIsGgQKpRUX7lSyycnlhimOyhmwb2DSAzVEZW1Z4-RSG1blLTulFpVCYWwGwlGy5BIUoQbs1qr0rIgaegL8miJSTLi8UPPeijZtr1UA8Pyau7dpFWBdy00YryVZCaDfiiinxODFpcK-oeBD5CtVbrpOw.lD-IIWS_P_07djVzhRdz7JELhioZUrV0HnDmiTSTVd8&dib_tag=se&keywords=jakevdp+python+data+science+handbook&qid=1760101378&sprefix=jakevdp+pythondatasciencehandbook%2Caps%2C600&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Python for Data Science and Machine Learning Bootcamp — Udemy</h3>
                    <p>A comprehensive bootcamp that covers Python for data analysis and machine learning, from the basics to advanced topics.</p>
                    <a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Python Programming Tutorials — Corey Schafer</h3>
                    <p>A highly-regarded playlist for learning Python programming, from beginner to advanced concepts, with clear explanations.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU"
                        title="YouTube video player (Corey Schafer Python Tutorials)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase3Resources;