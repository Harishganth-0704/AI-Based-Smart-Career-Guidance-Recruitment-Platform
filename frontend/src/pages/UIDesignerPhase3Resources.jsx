import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Visual UI Design & Tools Mastery</h1>
                <p>Learning to create visually stunning, consistent, and user-friendly interfaces while mastering industry-standard design tools.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Color palettes, iconography, spacing, grids</li>
                        <li>Platform Guidelines → Material Design, Apple HIG</li>
                        <li>High-fidelity designs & style systems</li>
                        <li>Responsive and adaptive design</li>
                        <li>Accessibility (A11y) basics</li>
                        <li>Tools to Master:
                            <ul>
                                <li>Figma (Primary)</li>
                                <li>Adobe XD</li>
                                <li>Canva (for visuals)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Designing Interfaces, 3rd Edition</h3>
                    <p>A comprehensive guide to interface design patterns and principles, essential for creating effective and engaging user interfaces. </p>
                    <a href="https://www.oreilly.com/library/view/designing-interfaces-3rd/9781492051954/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Complete UI/UX Design Course 2025: Figma + AI + Real Project (Udemy)</h3>
                    <p>A comprehensive course covering UI/UX design from scratch, with a focus on Figma, AI tools, and a real-world project. </p>
                    <a href="https://www.udemy.com/course/complete-uiux-design-course-figma-ai-real-project/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: User Experience Design Essentials - Adobe XD UI UX Design (Udemy)</h3>
                    <p>Master Adobe XD for UI/UX design, covering wireframing, prototyping, and creating stunning user interfaces. </p>
                    <a href="https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/?couponCode=DIWALI30" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Figma Tutorial for UI Design - Course for Beginners</h3>
                    <p>A complete beginner's course on using Figma for UI design, from basic tools to advanced techniques. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jwCmIBJ8Jtc?si=s7rWdLgdaWYjCW-c"
                        title="YouTube video player (Figma Tutorial for UI Design)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Adobe XD for Beginners</h3>
                    <p>A step-by-step tutorial for new users to get started with Adobe XD for UI/UX design. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/WEljsc2jorI?si=3e01qVc41PYOrgxg"
                        title="YouTube video player (Adobe XD for Beginners)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase3Resources;

