import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Real-World Projects</h1>
                <p>Gaining hands-on experience by building comprehensive projects and assembling a portfolio that effectively showcases your UI/UX design skills to recruiters.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Build 3–5 complete projects: mobile apps, dashboards, or web apps.</li>
                        <li>Include problem → process → solution → results in each case study.</li>
                        <li>Apply UX research, wireframing, prototyping, visual design, and handoff principles.</li>
                        <li>Test your designs with real users and iterate based on feedback.</li>
                        <li>Tools: Figma, Adobe XD, Maze (for usability testing), Notion (for case study documentation).</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Capstone Project: Applying UI/UX Design in the Real World (Coursera)</h3>
                    <p>Work through a capstone project that allows you to apply all your learned UI/UX design skills to a real-world scenario, building a substantial portfolio piece. </p>
                    <a href="https://www.coursera.org/learn/ux-ui-captsone-project" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Top 10 UI/UX Projects For Beginners 2025 | UI/UX Design Project Ideas</h3>
                    <p>Discover a range of engaging UI/UX design project ideas that are perfect for beginners looking to build their portfolio. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/zTElKDsC9Fw?si=Ozo99bL1RtJT9pO2"
                        title="YouTube video player (Top 10 UI/UX Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase6Resources;
