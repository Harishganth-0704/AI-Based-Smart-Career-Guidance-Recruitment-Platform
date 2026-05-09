// src/pages/AIPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Tools & Frameworks to Master</h1>
                <p>A deep dive into the essential tools and frameworks that form the backbone of modern AI engineering, from core ML to LLM-specific technologies and deployment.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Core ML Frameworks:
                            <ul>
                                <li>PyTorch (preferred for research & flexibility)</li>
                                <li>TensorFlow (large ecosystem, industry adoption)</li>
                                <li>JAX (research & high-performance computing)</li>
                            </ul>
                        </li>
                        <li>LLM & Transformer Tooling:
                            <ul>
                                <li>Hugging Face Transformers (building & using transformer models)</li>
                                <li>🤗 datasets (efficient dataset loading & processing)</li>
                                <li>Tokenizers (managing text tokenization)</li>
                            </ul>
                        </li>
                        <li>Orchestration & MLOps:
                            <ul>
                                <li>MLflow (experiment tracking, model management)</li>
                                <li>DVC (Data Version Control)</li>
                                <li>Kubeflow (ML on Kubernetes), Airflow, Prefect (workflow orchestration)</li>
                            </ul>
                        </li>
                        <li>Serving & APIs:
                            <ul>
                                <li>FastAPI (building fast API endpoints)</li>
                                <li>Docker (containerization)</li>
                                <li>Kubernetes (container orchestration for scalable inference)</li>
                                <li>TorchServe, BentoML (model serving frameworks)</li>
                            </ul>
                        </li>
                        <li>Vector & Retrieval Technologies:
                            <ul>
                                <li>Vector Databases: Pinecone, Milvus, Weaviate, FAISS</li>
                                <li>Orchestration frameworks: LangChain / LlamaIndex (for RAG and agents)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book/Guide: Deep Learning with PyTorch & Official Documentation</h3>
                    <p>Dive deep into PyTorch with comprehensive tutorials and the authoritative official documentation.</p>
                    <a href="https://docs.pytorch.org/docs/stable/index.html" target="_blank" rel="noopener noreferrer" className="resource-link">PyTorch Official Docs</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Hugging Face Course (Transformers & Deployment)</h3>
                    <p>A practical course covering how to use Hugging Face Transformers and deploy models effectively.</p>
                    <a href="https://huggingface.co/learn/llm-course/chapter1" target="_blank" rel="noopener noreferrer" className="resource-link">Hugging Face LLM Course</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: PyTorch Official Tutorials</h3>
                    <p>Learn core PyTorch concepts and advanced techniques directly from the official PyTorch team.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Idg5uFnpV1M?si=XkoXo__c7Pw-tbPf"
                        title="YouTube video player (PyTorch)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Hugging Face Tutorials</h3>
                    <p>Practical guides and demos on using Hugging Face libraries for various AI tasks.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/00GKzGyWFEs?si=dSa0B0fo3EK9MjdD"
                        title="YouTube video player (Hugging Face)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default AIPhase12Resources;