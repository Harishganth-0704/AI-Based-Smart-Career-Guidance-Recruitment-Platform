// src/pages/MLPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const MLPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Foundation & Mindset</h1>
                <p>Cultivating the right mindset and fundamental approaches crucial for success and continuous growth in Machine Learning Engineering.</p>
                <Link to="/ml-engineer" className="back-link">← Back to ML Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Growth mindset</li>
                        <li>Problem-solving approach</li>
                        <li>Continuous learning</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Mindset: The New Psychology of Success — Carol S. Dweck</h3>
                    <p>Explore how different mindsets shape our approach to challenges and learning, and how to foster a growth mindset.</p>
                    <a href="https://www.amazon.in/Mindset-Updated-Changing-Fulfil-Potential/dp/B07NQP73VK/ref=sr_1_2?dib=eyJ2IjoiMSJ9.KlhodTLfsLodL5j6VtzhYqtXpoSfdCB2OVCHn3vFrtKbYJUbPw2g2vKgESVDPQOeA9inkIMVQmWkhndnDNrfPojG7F2Oxl606DfEMeo8wCVKSXy4O_66NcXtpROrwg5X0iXyFVwtjuwOPFil0RTL7Aiew424FBHymY60SQlDBGlMBAzkFIdHGDwqAo9X6ftpkCALPk5FY0PGVQfpTST6Ic1ZeYutF0F7E35bNYv3Kmw.HlQQJF4DcA1-VcEAc-dtl0T6XbT91ci_OABbMGoIHXk&dib_tag=se&keywords=Mindset%3A+The+New+Psychology+of+Success+by+Carol+S.+Dweck&nsdOptOutParam=true&qid=1760100606&sr=8-2" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: The Growth Mindset — Coursera</h3>
                    <p>Learn practical strategies to develop and apply a growth mindset in your personal and professional life.</p>
                    <a href="https://www.coursera.org/learn/growth-mindset" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: The power of believing that you can improve | Carol Dweck | TED</h3>
                    <p>A concise and inspiring talk by Carol Dweck on the profound impact of mindset on achievement.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/_X0mgOOSpLU?si=yeEdovpDS9W_G8Cm"
                        title="YouTube video player (Carol Dweck TED Talk)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default MLPhase1Resources;