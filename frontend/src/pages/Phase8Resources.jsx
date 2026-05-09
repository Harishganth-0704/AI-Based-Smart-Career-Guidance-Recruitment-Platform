// src/pages/Phase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Deep Learning & Neural Networks</h1>
                <p>Exploring the advanced world of deep learning, neural networks, and their applications in various domains.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Core Concepts:
                            <ul>
                                <li>Perceptrons, Backpropagation</li>
                            </ul>
                        </li>
                        <li>Neural Network Architectures:
                            <ul>
                                <li>CNNs (Convolutional Neural Networks) for Image processing</li>
                                <li>RNNs/LSTMs (Recurrent Neural Networks/Long Short-Term Memory) for Sequence data</li>
                                <li>Transformers for advanced sequence tasks</li>
                                <li>Autoencoders for dimensionality reduction and generation</li>
                                <li>GANs (Generative Adversarial Networks) for generating new data</li>
                            </ul>
                        </li>
                        <li>Libraries & Frameworks:
                            <ul>
                                <li>TensorFlow</li>
                                <li>PyTorch</li>
                                <li>Keras (high-level API for TensorFlow)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Deep Learning with Python – François Chollet</h3>
                    <p>A practical, hands-on introduction to deep learning using Keras and Python, written by Keras's creator.</p>
                    <a href="https://www.amazon.in/Deep-Learning-Python-Francois-Chollet/dp/1617296864" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Deep Learning Specialization – Coursera (Andrew Ng)</h3>
                    <p>A highly acclaimed series of courses that will teach you the foundations of deep learning, how to build neural networks, and how to lead successful machine learning projects.</p>
                    <a href="https://www.coursera.org/specializations/deep-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: PyTorch Deep Learning Full Course (freeCodeCamp)</h3>
                    <p>Learn deep learning with PyTorch, covering neural networks, CNNs, RNNs, and building practical applications.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GIsg-ZUy0MY?si=efHpqipJrha4g6R5"
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

export default Phase8Resources;