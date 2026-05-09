import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: UX Research & Core UX Principles</h1>
                <p>Learning how to conduct user research and apply fundamental UX principles to design experiences that users truly love and find intuitive.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics - UPDATED */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>User research, surveys, personas, journey maps</li>
                        <li>Information architecture, user flows</li>
                        <li>Wireframing, low-fidelity prototypes</li>
                        <li>Usability testing, A/B testing, heuristic evaluation</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources - UPDATED */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability</h3>
                    <p>This timeless classic provides practical, actionable advice on designing intuitive and user-friendly interfaces, making it an essential read for any UX professional. </p>
                    <a href="https://www.amazon.in/Dont-Make-Think-Revisited-Usability-ebook/dp/B00HJUBRPG/ref=sr_1_2?dib=eyJ2IjoiMSJ9.3PtlDjCjwk7HBqBdTp-gOeRe5OkP38Lo33W1ykV-d_Uh9MTPXg_giv57574bFEuFEc6vG3gNP6zLLCSN3r3DTKjw33EsI45mjiX4G4yzgHjITfccUtY7e4FRzElIw1QQvCZamYICWyqzIoPW2nVdmAasDHjKqgw2X1lSi_YULZRx42nZ8mpANW7GxIed1WIPMf2j3_a2hn7aftjckGD2PMCCTgZVV8mFCMiMxjfjVB0.Pqsqa9XdlCu7KsLTlxBRmHWVhSMuvNPSZm-zxWI0Mfw&dib_tag=se&keywords=Don%E2%80%99t+Make+Me+Think&qid=1761044692&sr=8-2" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Learn UX Design and Grow Your Career (Interaction Design Foundation)</h3>
                    <p>A comprehensive collection of courses and materials to help you master UX design principles and advance your career in the field. </p>
                    <a href="https://www.interaction-design.org/courses" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Interaction-Design.org</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: 12 Laws Of UI/UX Design 2025 | Laws Of UI UX</h3>
                    <p>An insightful video discussing the fundamental laws and principles that govern effective UI/UX design, keeping you updated with current best practices. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/n5UsQb6OnPU?si=hdxcHrCh5XHTUtOl"
                        title="YouTube video player (12 Laws Of UI/UX Design)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase2Resources;

