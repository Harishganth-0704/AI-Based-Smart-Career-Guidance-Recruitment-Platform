import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Design Systems & Collaboration</h1>
                <p>Learning how to build and maintain scalable design frameworks, ensuring consistency and efficient collaboration across design and development teams.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Atomic Design Methodology</li>
                        <li>Components, variants, tokens (for design systems)</li>
                        <li>Collaboration with developers & product managers</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Building Design System in Figma from Scratch - UI UX Mastery (Udemy)</h3>
                    <p>A comprehensive course on building a complete design system using Figma, covering all aspects from tokens to components. </p>
                    <a href="https://www.udemy.com/course/building-design-system-in-figma-from-scratch-ui-ux-class/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Design System | Figma Tutorial for UIUX Designers</h3>
                    <p>A detailed Figma tutorial explaining how to create and manage a design system for UI/UX designers. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/shuIfhrLIP0?si=eg9VB83yh8aH7ZC2"
                        title="YouTube video player (Design System Figma Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase5Resources;
