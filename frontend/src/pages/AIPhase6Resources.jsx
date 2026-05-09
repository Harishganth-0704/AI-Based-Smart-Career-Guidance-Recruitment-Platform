// src/pages/AIPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Deep Learning Architectures & Training</h1>
                <p>Diving into the intricacies of neural networks, common architectures, and advanced training techniques for building powerful AI models.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Neural Network Fundamentals:
                            <ul>
                                <li>Neural nets, Backpropagation, Activation functions</li>
                            </ul>
                        </li>
                        <li>Advanced Architectures:
                            <ul>
                                <li>Convolutional Neural Networks (CNNs) for computer vision</li>
                                <li>Recurrent Neural Networks (RNNs), LSTM/GRU for sequence modeling</li>
                                <li>Attention mechanisms, Transformers (for advanced sequence tasks)</li>
                            </ul>
                        </li>
                        <li>Modern DL Practices:
                            <ul>
                                <li>Transfer learning, Fine-tuning pretrained models</li>
                                <li>Regularization, Batch normalization, Optimizers (e.g., Adam, SGD)</li>
                                <li>Learning rate schedules and decay</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Deep Learning — Ian Goodfellow, Yoshua Bengio, Aaron Courville</h3>
                    <p>A comprehensive and foundational textbook for understanding the theoretical underpinnings of deep learning.</p>
                    <a href="https://www.amazon.in/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Deep Learning Specialization — Coursera (Andrew Ng)</h3>
                    <p>This popular specialization covers the foundations of deep learning, how to build neural networks, and how to lead successful machine learning projects.</p>
                    <a href="https://www.coursera.org/specializations/deep-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp — PyTorch for Deep Learning (full course)</h3>
                    <p>A comprehensive video course to learn deep learning with PyTorch, covering neural network implementation from scratch.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GIsg-ZUy0MY?si=HCLJRyn7MbmjUYZI"
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

export default AIPhase6Resources;