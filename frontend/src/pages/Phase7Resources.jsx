// src/pages/Phase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Machine Learning Fundamentals</h1>
                <p>Delving into the core concepts and algorithms of machine learning, from supervised to unsupervised techniques.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Types:
                            <ul>
                                <li>Supervised (Regression, Classification)</li>
                                <li>Unsupervised (Clustering, PCA)</li>
                                <li>Reinforcement (basic understanding)</li>
                            </ul>
                        </li>
                        <li>Algorithms:
                            <ul>
                                <li>Linear Regression, Decision Trees, SVM, Random Forest</li>
                                <li>K-Means, DBSCAN, PCA</li>
                            </ul>
                        </li>
                        <li>Model Evaluation & Improvement:
                            <ul>
                                <li>Model tuning, Cross-validation, Regularization</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Machine Learning with PyTorch and Scikit-Learn – Sebastian Raschka & Vahid Mirjalili</h3>
                    <p>A comprehensive guide to machine learning and deep learning with PyTorch, Scikit-Learn, and TensorFlow.</p>
                    <a href="https://www.amazon.in/Machine-Learning-PyTorch-Scikit-Learn-learning/dp/1801819319/ref=sr_1_3?crid=2KH9X3BKL2TBG&dib=eyJ2IjoiMSJ9.RqyVNh_65xfLy0xIQBbk_Qdm6XIDB8wN6WciopPp8CvsyJdkD62Efq0vUYPnEmATyjTed6LjCYvCLX2sYfQNBeoNHGzmr8trgDupbvw9Yc8R9a1izs4tYcTUZ9IbJ6ZPit8NBxWbBfo8DvfUu8xZWx0I1ourCGJoOIMEkD-T6n4IwEV5BseCUtpDoyU2VR7P-tt9InmEvnFt61ay90HNKzNfHBXLenmgKvkFYEAeXDc.8e3aGNZ_ZtxcAA47QkJLKZfFt_qcEkqI9HdLjH5DpIg&dib_tag=se&keywords=Machine+Learning+with+PyTorch+and+Scikit-Learn&qid=1760087172&sprefix=%2Caps%2C241&sr=8-3" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Machine Learning – Coursera (Andrew Ng, Stanford)</h3>
                    <p>A foundational and highly recommended course that introduces machine learning, data mining, and statistical pattern recognition.</p>
                    <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Machine Learning Full Course (Krish Naik)</h3>
                    <p>A comprehensive series covering various machine learning algorithms and practical implementations.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/JxgmHe2NyeY?si=83VxlC4YQ2JMlsFU"
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

export default Phase7Resources;