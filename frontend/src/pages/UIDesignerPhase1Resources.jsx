import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const UIDesignerPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Design Foundations & Orientation</h1>
                <p>Understand what design is, and master the visual basics, from core principles to the design thinking process.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to UI/UX Designer Roadmap</Link>
            </header>

            {/* Section for Key Topics - UPDATED */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Difference between UI, UX, Product Design</li>
                        <li>Design Thinking process (Empathize → Define → Ideate → Prototype → Test)</li>
                        <li>Color theory, typography, grids, visual hierarchy, balance</li>
                        <li>Gestalt principles</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources - UPDATED */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Laws of UX: Using Psychology to Design Better Products & Services</h3>
                    <p>An essential guide that bridges the gap between psychological principles and practical UX design, helping you create more intuitive products.</p>
                    <a href="https://www.amazon.in/Laws-UX-Psychology-Products-Services/dp/9355426275/ref=sr_1_1?crid=J4CGR9487PRO&dib=eyJ2IjoiMSJ9.dmrR6BxETxcQ8RkJGgd9x-5wz848v6Bm1_m8rl0IqHnq_gp4jx2Xbsn2Wu8Ob_2gIbm-7qdBRHH_u6n08K2iWJOEgnSLw_vCJPWQBxnnEJT8v2LrxR26TvBiueJOpOC_dJ_Z0hkzJyeNUuFlMf_bMnh3mJQ-mingSj9mH7bWWeFP6zeeDl1fEz3mSEW0gDeUFnBoX6cwhV64ZujoRKm_oClhI79bnq-0Yv9hBf00hvw.EBnUWFc4sjRX732M7zeQv_JbR1ODQwXZdCuHTB14Yao&dib_tag=se&keywords=Laws+of+UX%E2%80%9D&qid=1761032044&sprefix=%2Caps%2C344&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>
                
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Laws of UX Website</h3>
                    <p>A collection of key heuristics for building user-friendly interfaces, providing concise summaries and visual examples of core design principles.</p>
                    <a href="https://lawsofux.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Visit Laws of UX</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Google UX Design Professional Certificate</h3>
                    <p>A comprehensive program covering foundational UX design skills, from empathizing with users to prototyping and testing designs. </p>
                    <a href="https://www.coursera.org/professional-certificates/google-ux-design" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: UI/UX Explained In 8 Minutes | UI/UX Design For Beginners | UI/UX Design Basics</h3>
                    <p>A quick and clear introduction to UI/UX design concepts, perfect for beginners looking to grasp the basics. [Image of UI/UX design explanation]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ODpB9-MCa5s?si=yJPdlDzIKr-mdy5_"
                        title="YouTube video player (UI/UX Design Basics)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default UIDesignerPhase1Resources;

