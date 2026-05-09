// src/pages/AIPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Vector Databases & Embeddings</h1>
                <p>Understanding and implementing vector databases and embeddings to power semantic search, recommendation systems, and Retrieval-Augmented Generation (RAG).</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Embeddings:
                            <ul>
                                <li>Text, Image, Audio embeddings – design considerations and dimensionality choices</li>
                            </ul>
                        </li>
                        <li>Vector Indexes & Algorithms:
                            <ul>
                                <li>Approximate Nearest Neighbor (ANN) algorithms (e.g., HNSW, IVF, PQ)</li>
                                <li>Tradeoffs between latency, recall, and resource usage</li>
                            </ul>
                        </li>
                        <li>Vector Databases (Vector DBs):
                            <ul>
                                <li>Usage patterns for Pinecone, Milvus, Weaviate, FAISS</li>
                            </ul>
                        </li>
                        <li>Search & Retrieval:
                            <ul>
                                <li>Similarity metrics</li>
                                <li>Hybrid search (combining semantic and lexical approaches)</li>
                                <li>Chunking & document segmentation strategies</li>
                            </ul>
                        </li>
                        <li>Operational Aspects:
                            <ul>
                                <li>Data freshness, Reindexing strategies</li>
                                <li>Storage and performance tuning, Cost considerations</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book/Guide: No dedicated single book — use vendor docs</h3>
                    <p>Start with official documentation from leading vector database providers for the most up-to-date information and best practices.</p>
                    <ul>
                        <li><a href="https://docs.pinecone.io/guides/get-started/overview" target="_blank" rel="noopener noreferrer" className="resource-link">Pinecone Documentation</a></li>
                        <li><a href="https://docs.weaviate.io/weaviate" target="_blank" rel="noopener noreferrer" className="resource-link">Weaviate Documentation</a></li>
                    </ul>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Retrieval-Augmented Generation (RAG) and Vector DBs</h3>
                    <p>Learn practical applications of RAG and how to effectively utilize vector databases in AI systems.</p>
                    <ul>
                        <li><a href="https://www.pinecone.io/learn/" target="_blank" rel="noopener noreferrer" className="resource-link">Pinecone Tutorials & Learn</a></li>
                        <li><a href="https://huggingface.co/docs" target="_blank" rel="noopener noreferrer" className="resource-link">Hugging Face RAG Documentation</a></li>
                    </ul>
                </div>
                
                {/* --- ADDED EMBEDDINGS COURSES --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Google Machine Learning Crash Course – Embeddings</h3>
                    <p>A concise and practical introduction to embeddings from Google's machine learning experts.</p>
                    <a href="https://developers.google.com/machine-learning/crash-course/embeddings" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Google Developers</a>
                </div>
                
                <div className="resource-item">
                    <h3>🎓 Course: Introduction to Embeddings with the OpenAI API (DataCamp)</h3>
                    <p>Learn how to create and use embeddings with the OpenAI API for tasks like text classification and semantic search.</p>
                    <a href="https://www.datacamp.com/courses/introduction-to-embeddings-with-the-openai-api" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DataCamp</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Vector Databases: An Introduction with Chroma DB (Coursera)</h3>
                    <p>A hands-on introduction to vector databases using the popular open-source library Chroma DB.</p>
                    <a href="https://www.coursera.org/learn/vector-databases-introduction-with-chromadb" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                
                <div className="resource-item">
                    <h3>🎓 Course: Vector Databases: from Embeddings to Applications (Coursera)</h3>
                    <p>A project-based course covering the end-to-end process of using vector databases, from creating embeddings to building applications.</p>
                    <a href="https://www.coursera.org/projects/vector-databases-from-embeddings-to-applications" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: What is a Vector Database? Powering Semantic Search & AI Applications</h3>
                    <p>An introductory video explaining the core concepts of vector databases and their role in modern AI.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/gl1r1XV0SLw?si=JwcWC3e3-_VtPT11"
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

export default AIPhase8Resources;