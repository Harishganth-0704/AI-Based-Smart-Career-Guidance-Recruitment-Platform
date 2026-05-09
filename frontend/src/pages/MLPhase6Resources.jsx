// src/pages/MLPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Deep Learning Foundations</h1>
                <p>Establishing a strong understanding of neural networks, backpropagation, and the key deep learning frameworks.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Neural Networks (perceptrons, multi-layer perceptrons)</li>
                        <li>Backpropagation (the core algorithm for training neural networks)</li>
                        <li>Deep Learning Frameworks: TensorFlow, PyTorch</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Deep Learning — Ian Goodfellow, Yoshua Bengio, and Aaron Courville</h3>
                    <p>The authoritative textbook covering a wide range of topics in deep learning, from linear algebra to advanced architectures.</p>
                    <a href="https://www.deeplearningbook.org/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Deep Learning Specialization — Andrew Ng on Coursera</h3>
                    <p>A highly recommended series of courses that will teach you the foundations of deep learning, how to build neural networks, and how to lead successful machine learning projects.</p>
                    <a href="https://www.coursera.org/specializations/deep-learning" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                
                <div className="resource-item">
                    <h3>🎓 Course: fast.ai - Practical Deep Learning for Coders</h3>
                    <p>A top-down approach to deep learning, focusing on practical application and building models quickly with PyTorch.</p>
                    <a href="https://course.fast.ai/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to fast.ai Course</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Deep Learning Crash Course</h3>
                    <p>A concise overview to get started with the fundamental concepts of deep learning.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/VyWAvY2CF9c?si=BinsJ4wMsx_FvQm_"
                        title="YouTube video player (Deep Learning Crash Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase6Resources;