// src/pages/MLPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Specialized ML Domains</h1>
                <p>Exploring advanced and specialized areas within machine learning, including Natural Language Processing, Computer Vision, and Reinforcement Learning.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Natural Language Processing (NLP)</li>
                        <li>Computer Vision</li>
                        <li>Reinforcement Learning</li>
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
                    <h3>🎓 Course: Natural Language Processing Specialization — Coursera</h3>
                    <p>Dive deep into NLP with this specialization, covering everything from fundamental algorithms to advanced Transformer models.</p>
                    <a href="https://www.coursera.org/specializations/natural-language-processing" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                
                <div className="resource-item">
                    <h3>🎓 Course: The Hugging Face Course</h3>
                    <p>The essential, free course for mastering the entire Hugging Face ecosystem for NLP, including Transformers, Datasets, and Tokenizers.</p>
                    <a href="https://huggingface.co/learn/llm-course/chapter1/1" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Hugging Face</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Google - Recommendation Systems Course</h3>
                    <p>A dedicated course from Google's Machine Learning Crash Course that covers the fundamentals of building recommenders.</p>
                    <a href="https://developers.google.com/machine-learning/recommendation" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Google Developers</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Stanford CS231n - Convolutional Neural Networks for Visual Recognition</h3>
                    <p>The gold standard for a deep, theoretical understanding of computer vision, with lectures available on YouTube.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vT1JzLTH4G4?si=kYJAHvLNjAXQqrI_"
                        title="YouTube video player (Stanford CS231n)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Reinforcement Learning Course - Full Machine Learning Tutorial</h3>
                    <p>A comprehensive tutorial covering the core concepts and algorithms of reinforcement learning.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ELE2_Mftqoc?si=KytX-o09v8BnKGex"
                        title="YouTube video player (Reinforcement Learning Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Supervised Learning | Unsupervised Learning | Machine Learning Tutorial | Simplilearn</h3>
                    <p>An overview of supervised and unsupervised learning concepts, crucial for foundational machine learning knowledge.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kE5QZ8G_78c?si=O_KlwlgA7DmTRBSs"
                        title="YouTube video player (Supervised & Unsupervised Learning)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase8Resources;