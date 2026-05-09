import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Interview Preparation</h1>
                <p>Sharpening your skills and strategies to ace UI/UX interviews and secure high-paying roles in the design industry.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics for Interview Preparation</h2>
                <div className="resource-item">
                    <ul>
                        <li>Common UI/UX Interview Questions:
                            <ul>
                                <li>UX process, wireframes, research methods.</li>
                            </ul>
                        </li>
                        <li>Whiteboard or Design Challenge Exercises:
                            <ul>
                                <li>Practice solving design problems on the spot.</li>
                            </ul>
                        </li>
                        <li>Behavioral Questions:
                            <ul>
                                <li>Teamwork, problem-solving, project handling.</li>
                            </ul>
                        </li>
                        <li>Case Study Presentation Skills:
                            <ul>
                                <li>Master the art of storytelling your design process.</li>
                            </ul>
                        </li>
                        <li>Mock Interviews and Feedback:
                            <ul>
                                <li>Gain confidence and refine your responses.</li>
                            </ul>
                        </li>
                        <li>Practice explaining your projects clearly in 2–3 minutes each.</li>
                        <li>Prepare to discuss design trade-offs and reasoning behind decisions.</li>
                        <li>Be ready for tools & technical questions (Figma, prototyping, usability testing).</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: UI UX Designer Interview Questions And Answers 2025</h3>
                    <p>A comprehensive video covering common UI/UX design interview questions and effective strategies for answering them. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AmdcTuEJ5o4?si=-KQIoxkGMbvk5KuW"
                        title="YouTube video player (UI UX Designer Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase8Resources;
