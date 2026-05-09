// src/pages/CloudPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Portfolio & Resume Strategy (for Cloud Architects)</h1>
                <p>Developing a strategic approach to showcase your cloud architecture expertise through impactful projects and an optimized resume.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>Portfolio Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>Purpose: Show your practical AI skills.</li>
                        <li>Key Points:
                            <ul>
                                <li>Projects to Showcase:
                                    <ul>
                                        <li>3–5 production-grade architecture projects.</li>
                                        <li>Cover different domains: e.g., microservices, data platforms, security solutions.</li>
                                        <li>Emphasize real-world relevance and business value.</li>
                                        <li>Include architectural diagrams, short case studies (problem, architecture, outcome/metrics).</li>
                                        <li>Showcase IaC repositories (Terraform, CloudFormation) and CI/CD pipelines.</li>
                                    </ul>
                                </li>
                                <li>Code & Hosting:
                                    <ul>
                                        <li>Maintain clean, modular, and well-documented code in GitHub/GitLab.</li>
                                        <li>Provide live demos or screenshots for deployed solutions.</li>
                                        <li>Consider a dedicated portfolio website (e.g., hosted on S3/CloudFront, GitHub Pages).</li>
                                    </ul>
                                </li>
                                <li>Impact Metrics: Quantify your achievements (e.g., "reduced operational costs by 20%", "improved system uptime to 99.99%").</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>Resume Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>Purpose: Impress recruiters quickly and clearly convey your value.</li>
                        <li>Structure:
                            <ul>
                                <li>Header: Name, email, phone, LinkedIn, GitHub, portfolio link.</li>
                                <li>Summary: 2–3 concise lines highlighting your primary cloud platform (e.g., AWS), core skills, and certifications (e.g., "Senior Cloud Architect (AWS Certified Solutions Architect Professional)").</li>
                                <li>Skills: Categorize by Cloud Services (AWS, Azure, GCP), IaC (Terraform, CloudFormation), DevOps (CI/CD, Docker, Kubernetes), Networking, Security, Monitoring.</li>
                                <li>Projects: List 3–5 high-impact projects. For each, describe the problem, your architectural solution, the technologies used, and the quantifiable outcomes.</li>
                                <li>Experience: Focus on accomplishments, using action verbs and metrics. Highlight cloud-native responsibilities.</li>
                                <li>Education & Certifications: List relevant degrees and cloud certifications clearly.</li>
                            </ul>
                        </li>
                        <li>Tips:
                            <ul>
                                <li>Keep it concise, ideally one page for less experienced roles, two for senior.</li>
                                <li>Tailor your resume for each job application by matching keywords.</li>
                                <li>Leverage action verbs and quantify everything: "Implemented a serverless architecture, reducing compute costs by 30%."</li>
                                <li>Highlight leadership in architectural decisions and best practices.</li>
                                <li>Emphasize security, cost optimization, and operational excellence achievements.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>▶️ YouTube: How to Document Your AWS Cloud Projects (To Get Hired)</h3>
                    <p>Learn effective strategies for documenting your cloud projects to make a strong impression on potential employers.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/bBo8iF7SjpY?si=Ra1tmvYB6vYm_xIR"
                        title="YouTube video player (Documenting AWS Cloud Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase12Resources;