import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Portfolio, Resume & Career Preparation</h1>
                <p>Strategically crafting your portfolio and resume to highlight your UI/UX design skills, ensuring you stand out to recruiters and land your ideal role.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>💼 Portfolio Strategy (Simple Version)</h2>
                <div className="resource-item">
                    <ul>
                        <li>Goal: Show real skills, not just pretty screens.</li>
                        <li>1. Projects to Include:
                            <ul>
                                <li>3–5 strong projects (mobile apps, websites, SaaS dashboards).</li>
                                <li>Mix of personal, redesign, or freelance projects.</li>
                            </ul>
                        </li>
                        <li>2. Case Study Structure:
                            <ul>
                                <li>Title & One-liner – What’s the project?</li>
                                <li>Problem – What issue were you solving?</li>
                                <li>Process – Research, wireframes, prototypes.</li>
                                <li>Solution – Final UI, interactions, animations.</li>
                                <li>Impact/Results – Any improvements or Key Performance Indicators (KPIs).</li>
                            </ul>
                        </li>
                        <li>3. Show Work Interactively:
                            <ul>
                                <li>Figma prototypes, Maze usability links, InVision, or clickable builds.</li>
                            </ul>
                        </li>
                        <li>4. Tools & Skills:
                            <ul>
                                <li>Mention tools (Figma, Adobe XD, Sketch).</li>
                                <li>Highlight key skills (UX research, wireframing, prototyping, interaction design).</li>
                            </ul>
                        </li>
                        <li>5. Where to Publish:
                            <ul>
                                <li>Personal website, Notion, Behance, Dribbble.</li>
                            </ul>
                        </li>
                        <li>6. Keep it Clean:
                            <ul>
                                <li>Consistent typography, spacing, and layout.</li>
                                <li>Easy to navigate; recruiters should understand your work in 30–60 seconds.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>📝 Resume Strategy (Simple Version)</h2>
                <div className="resource-item">
                    <ul>
                        <li>Goal: Get noticed fast by recruiters.</li>
                        <li>1. Header:
                            <ul>
                                <li>Name, Role (UI/UX Designer), Contact, Portfolio/LinkedIn links.</li>
                            </ul>
                        </li>
                        <li>2. Summary (2–3 lines):
                            <ul>
                                <li>Highlight skills, tools, and what you can do (e.g., “Design intuitive mobile & web experiences using Figma & UX research skills”).</li>
                            </ul>
                        </li>
                        <li>3. Skills Section:
                            <ul>
                                <li>UX research, Wireframing, Prototyping, Visual Design, Interaction Design, Figma, Adobe XD, Usability Testing.</li>
                            </ul>
                        </li>
                        <li>4. Experience / Projects:
                            <ul>
                                <li>List 3–5 portfolio projects.</li>
                                <li>For each: Your role, Tools used, Key result/outcome (e.g., “Redesigned checkout → improved usability by 15%”).</li>
                            </ul>
                        </li>
                        <li>5. Education & Certifications:
                            <ul>
                                <li>Google UX, IDF, Figma, NN/g (Human-Computer Interaction optional).</li>
                            </ul>
                        </li>
                        <li>6. Optional Extras:
                            <ul>
                                <li>Recommendations from mentors/clients.</li>
                                <li>Badges or mini-certifications.</li>
                            </ul>
                        </li>
                        <li>7. Visual Consistency:
                            <ul>
                                <li>Use the same colors/fonts as your portfolio.</li>
                                <li>Add clickable links or QR codes to projects.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Get Hired as a UX Designer - 15 Resume Tips</h3>
                    <p>Learn practical tips and strategies to create a standout UX design resume that captures the attention of hiring managers. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/riqOW9UsHuY?si=CnyziQpvA_i-dD8y"
                        title="YouTube video player (15 Resume Tips for UX Designers)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase7Resources;
