// src/pages/AIPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Large Language Models (LLMs) & Transformers</h1>
                <p>Exploring the architecture, applications, and engineering practices behind modern large language models and their powerful capabilities.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Transformer Architecture:
                            <ul>
                                <li>Transformer architecture breakdown</li>
                                <li>Attention mechanisms, Positional encodings</li>
                            </ul>
                        </li>
                        <li>LLM Workflows & Engineering:
                            <ul>
                                <li>Pretraining & Fine-tuning workflows</li>
                                <li>Prompt Engineering, Chain-of-Thought techniques</li>
                                <li>Instruction tuning, RLHF (Reinforcement Learning from Human Feedback) overview</li>
                                <li>Safety, Guardrails & Hallucination mitigation</li>
                            </ul>
                        </li>
                        <li>LLM Deployment & Serving:
                            <ul>
                                <li>LLM serving patterns</li>
                                <li>Context window management, Prompt templates, Prompt chaining</li>
                                <li>Retrieval-Augmented Generation (RAG): retrieval, embeddings, vector DB integration</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Natural Language Processing with Transformers — Lewis, Liu, Goyal, et al. (O’Reilly)</h3>
                    <p>A practical guide to building NLP applications using Hugging Face Transformers, covering theory and hands-on examples.</p>
                    <a href="https://www.amazon.in/Natural-Language-Processing-Transformers-Practical/dp/1098103246" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Hugging Face – Course: Practical Deep Learning for NLP</h3>
                    <p>A free, hands-on course covering how to use the Hugging Face ecosystem for practical LLM engineering and NLP tasks.</p>
                    <a href="https://huggingface.co/course/chapter1" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Hugging Face Course</a>
                </div>

                {/* --- ADDED NEW COURSE --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Attention in Transformers: Concepts and Code in PyTorch – DeepLearning.AI</h3>
                    <p>A short course focused on the core "attention" mechanism in Transformers, with practical code examples in PyTorch.</p>
                    <a href="https://www.deeplearning.ai/short-courses/attention-in-transformers-concepts-and-code-in-pytorch/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DeepLearning.AI</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Hugging Face – “Transformers” mini-courses & demos</h3>
                    <p>Learn about Transformers, their applications, and practical demonstrations from the creators of the Hugging Face library.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/00GKzGyWFEs?si=IxQPIDZF1fYpQjbL"
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

export default AIPhase7Resources;