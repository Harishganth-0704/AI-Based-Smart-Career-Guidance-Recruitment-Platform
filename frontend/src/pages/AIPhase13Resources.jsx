// src/pages/AIPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Real-World End-to-End AI System Projects</h1>
                <p>Applying advanced AI concepts to build complex, real-world projects, focusing on LLM-driven applications, multimodal systems, and autonomous agents.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics (Project Ideas) */}
            <div className="resource-section">
                <h2>Project Ideas</h2>
                <div className="resource-item">
                    <ul>
                        <li>AI Career Coach & Resume Mentor:
                            <ul>
                                <li>Type: LLM + RAG + Agentic AI System</li>
                                <li>Core Stack: GPT/LLaMA · Sentence-Transformer Embeddings · LangChain Agents · Resume Parser (spaCy / PyPDF2) · Vector DB (FAISS / Pinecone)</li>
                            </ul>
                        </li>
                        <li>AI Chatbot with Real Tool Execution (Calendar / Email / Database / Code Runner):
                            <ul>
                                <li>Type: Autonomous Agent with Function Calling</li>
                                <li>Core Stack: OpenAI / Gemini Function Calling · LangGraph · Tool Connectors (Gmail API, Google Calendar API, SQL Runner)</li>
                            </ul>
                        </li>
                        <li>Multimodal AI Search Engine (Text + Image + PDFs):
                            <ul>
                                <li>Type: Retrieval-Augmented Multimodal System</li>
                                <li>Core Stack: CLIP / BLIP · Sentence Transformers · Pinecone / Weaviate · FastAPI</li>
                            </ul>
                        </li>
                        <li>AI Research Assistant for Specialized Domains (Medical / Legal / 
                            <ul>
                                <li>Type: Fine-Tuned Private RAG System</li>
                                <li>Core Stack: LLaMA / Mistral Long Context · Recursive Chunking · Retrieval Index · Guardrails for Hallucination</li>
                            </ul>
                        </li>
                        <li>Voice-Based AI Support Agent:
                            <ul>
                                <li>Type: Speech-to-AI Conversational System</li>
                                <li>Core Stack: Whisper · GPT / Gemini · ElevenLabs / Azure TTS · Twilio Voice Integration</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Designing Data-Intensive Applications</h3>
                    <p>Essential for understanding the underlying infrastructure and system design principles for robust AI applications.</p>
                    <a href="https://www.databass.dev/p/designing-data-intensive-applications" target="_blank" rel="noopener noreferrer" className="resource-link">Find on DataBass.dev</a>
                </div>

                <div className="resource-item">
                    <h3>📘 Book: Hands-On Large Language Models — Jay Alammar</h3>
                    <p>A practical guide to building with LLMs, covering architectures, techniques, and real-world applications.</p>
                    <a href="https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: 30 Projects in 30 days of AI Development Bootcamp</h3>
                    <p>A project-based course to build a real-world generative AI application.</p>
                    <a href="https://www.udemy.com/course/25-projects-in-25-days-of-ai-development-bootcamp/?srsltid=AfmBOoptPJ1x0nm937UmRbVD1HbRqrnuFCWDYAqO8Vt7ChPpQnvWso5y&couponCode=ACCAGE0923" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: RAG Architecture Explained</h3>
                    <p>Understand the core concepts and design patterns behind Retrieval-Augmented Generation (RAG) systems.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/TRjq7t2Ms5I?si=fN__YqK4VrFfk6YZ"
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

export default AIPhase13Resources;