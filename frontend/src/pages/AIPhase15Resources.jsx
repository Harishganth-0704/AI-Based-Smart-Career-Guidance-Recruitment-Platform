// src/pages/AIPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: AI Interview Preparation & Career Growth</h1>
                <p>Mastering the technical and behavioral aspects of AI interviews to confidently secure your desired role and foster continuous career growth.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics for AI Interviews */}
            <div className="resource-section">
                <h2>Key Topics for AI Interviews</h2>
                <div className="resource-item">
                    <ul>
                        <li>A. Core AI/ML Concepts:
                            <ul>
                                <li>Supervised, Unsupervised, Reinforcement Learning</li>
                                <li>Regression & Classification, Decision Trees, Random Forest, SVM, KNN, Naive Bayes</li>
                                <li>Neural Networks: CNN, RNN, LSTM, Transformers</li>
                                <li>Overfitting, Underfitting, Bias-Variance tradeoff</li>
                            </ul>
                        </li>
                        <li>B. Data Handling & Analysis:
                            <ul>
                                <li>Data preprocessing & cleaning</li>
                                <li>Feature engineering & selection</li>
                                <li>Dimensionality reduction: PCA, t-SNE</li>
                                <li>Data visualization</li>
                            </ul>
                        </li>
                        <li>C. Programming & Tools:
                            <ul>
                                <li>Python: NumPy, Pandas, Matplotlib, Seaborn</li>
                                <li>ML frameworks: Scikit-learn, TensorFlow, PyTorch</li>
                                <li>SQL basics</li>
                            </ul>
                        </li>
                        <li>D. Cloud & Deployment:
                            <ul>
                                <li>Deploy ML models on AWS, Azure, GCP</li>
                                <li>Docker/Kubernetes basics</li>
                                <li>Cloud AI services overview</li>
                            </ul>
                        </li>
                        <li>E. Algorithms & Coding:
                            <ul>
                                <li>Sorting, Searching, Recursion, Dynamic Programming</li>
                                <li>Time & Space Complexity</li>
                            </ul>
                        </li>
                        <li>F. AI Concepts & Theory:
                            <ul>
                                <li>NLP basics: tokenization, embeddings, transformers</li>
                                <li>Computer Vision basics: CNNs, image processing</li>
                                <li>Model evaluation metrics: accuracy, precision, recall, F1-score</li>
                            </ul>
                        </li>
                        <li>G. Soft Skills & Behavioral:
                            <ul>
                                <li>STAR method for answering behavioral questions</li>
                                <li>Explain projects and problem-solving clearly</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: Artificial Intelligence   Interview Preparation</h3>
                    <p>A comprehensive video guide to preparing for data science and machine learning interviews, covering essential topics and common questions.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/puvAuPJesg8?si=d5s3977SVYJZ9p29"
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

export default AIPhase15Resources;