import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Prototyping, Interaction & Developer Handoff</h1>
                <p>Learning to bring your designs to life through interactive prototypes, master microinteractions, and effectively communicate your vision to developers.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Prototyping interactive flows (using tools like Figma/ProtoPie)</li>
                        <li>Microinteractions & motion design principles</li>
                        <li>Auto layout, constraints, and component systems</li>
                        <li>Developer handoff — utilizing Figma’s Dev Mode, exporting assets, and clear documentation</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Figma Prototyping: A deep dive for UX/UI Designer (Udemy)</h3>
                    <p>A comprehensive course dedicated to mastering the prototyping features within Figma to create highly interactive user experiences.</p>
                    <a href="https://www.udemy.com/course/figma-prototyping-a-deep-dive-for-ux-ui-designer/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: How to Hand off your UX designs to developers like a PRO</h3>
                    <p>Learn best practices and effective techniques for a seamless design-to-development handoff, ensuring clarity and precision.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Kmp85DeC3K4?si=4KDBPqQN0Aqvw8Yw"
                        title="YouTube video player (Handoff designs to developers)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase4Resources;
