// src/pages/AIPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: AI Agents & Orchestration</h1>
                <p>Exploring the design and implementation of intelligent AI agents, their tool use, and methods for orchestrating complex multi-step AI workflows.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>AI Agent Design:
                            <ul>
                                <li>Agent patterns (planner, executor)</li>
                                <li>Tool use and safety boundaries for agents</li>
                            </ul>
                        </li>
                        <li>Agent Frameworks:
                            <ul>
                                <li>LangChain / LlamaIndex / other Agent frameworks</li>
                                <li>Concepts: chains, tools, memory, retrievers</li>
                            </ul>
                        </li>
                        <li>Advanced Agent Behavior:
                            <ul>
                                <li>Looping agents, Multi-step reasoning</li>
                                <li>Tool invocation (integrating with APIs, databases, calculators)</li>
                            </ul>
                        </li>
                        <li>Orchestration & Automation:
                            <ul>
                                <li>Automation flows, Workflow orchestration with tools like Airflow, Prefect, Temporal</li>
                            </ul>
                        </li>
                        <li>Security & Human-in-the-Loop:
                            <ul>
                                <li>Security & sandboxing for tools invoked by LLMs</li>
                                <li>Human-in-the-loop design for agent oversight</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book/Guide: LangChain & LlamaIndex Documentation</h3>
                    <p>The canonical resources for understanding and building with leading AI agent frameworks.</p>
                    <ul>
                        <li><a href="https://api.python.langchain.com/en/latest/langchain_api_reference.html" target="_blank" rel="noopener noreferrer" className="resource-link">LangChain API Reference</a></li>
                        <li><a href="https://developers.llamaindex.ai/python/framework/" target="_blank" rel="noopener noreferrer" className="resource-link">LlamaIndex Developer Guides</a></li>
                    </ul>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: LangChain & Agent Building Tutorials</h3>
                    <p>Practical tutorials and courses from official documentation and community resources to get hands-on with agent development.</p>
                    <a href="https://python.langchain.com/docs/introduction/" target="_blank" rel="noopener noreferrer" className="resource-link">LangChain Documentation & Tutorials</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: LangChain Tutorials (e.g., Harrison Chase, LangChain community videos)</h3>
                    <p>Visual walkthroughs and explanations of building agents and chains using the LangChain framework.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nAmC7SoVLd8?si=yO-sANlLD4l7oH6k"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                {/* --- NEWLY ADDED YOUTUBE RESOURCE --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Welcome To The Agents Course! Introduction to the Course and Q&A</h3>
                    <p>An introductory video to a course on AI agents, covering fundamental concepts and a Q&A session to kickstart your learning journey.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/iLVyYDbdSmM?si=Xt8vTTZPabYJ20wb"
                        title="YouTube video player (Agents Course Introduction)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* --- END NEWLY ADDED YOUTUBE RESOURCE --- */}
            </div>
        </div>
    </>
);

export default AIPhase11Resources;