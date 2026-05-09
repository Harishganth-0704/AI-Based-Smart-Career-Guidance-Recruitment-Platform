import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Interview Preparation & Certification</h1>
                <p>Translate your skills into career opportunities by preparing for technical interviews and validating your expertise.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>📘 Core Topics to Revise</h2>
                <div className="resource-item">
                    <ul>
                        <li>Docker Fundamentals: Difference between containers & VMs, Docker architecture (client–daemon–registry), Lifecycle of a container. [Image of Docker Architecture Diagram]</li>
                        <li>Docker Images & Containers: Building/optimizing Dockerfiles, Image layers/caching, Core commands (run, ps, exec, logs).</li>
                        <li>Networking & Volumes: Types of Docker networks, Persistent storage using volumes, Linking containers.</li>
                        <li>Docker Compose & CI/CD: Writing `docker-compose.yml`, Integrating with Jenkins/GitHub Actions, Automated builds.</li>
                        <li>Security & Optimization: Image scanning, secrets management, minimizing image size.</li>
                    </ul>
                </div>
            </div>

            {/* Section for Scenario-Based Questions */}
            <div className="resource-section">
                <h2>Scenario-Based Questions</h2>
                <div className="resource-item">
                    <ul>
                        <li>How would you deploy a 3-tier web app using Docker?</li>
                        <li>What happens internally when you run a container?</li>
                        <li>How do you fix a failed container startup?</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>🧑‍💻 Practice Resources</h2>
                
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Docker Interview Q&A – GeeksforGeeks</h3>
                    <p>A comprehensive list of frequently asked Docker interview questions and answers to help you prepare.</p>
                    <a href="https://www.geeksforgeeks.org/devops/docker-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Mock Interviews --- */}
                <div className="resource-item">
                    <h3>💬 Mock Interview Practice: Pramp</h3>
                    <p>Practice live technical interviews for free with peers in the industry.</p>
                    <a href="https://www.pramp.com/#/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Pramp</a>
                </div>
                <div className="resource-item">
                    <h3>💬 Mock Interview Practice: Interviewing.io</h3>
                    <p>Practice technical interviews anonymously with senior engineers from top companies.</p>
                    <a href="https://interviewing.io/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Interviewing.io</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Top 50 Docker Interview Questions & Answers</h3>
                    <p>A video covering the most frequently asked Docker interview questions to help you refresh your knowledge. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ViYjHfbmBYA?si=kIeuEJ7GcjgwcTjJ"
                        title="YouTube video player (Top 50 Docker Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: 100+ Docker Concepts you Need to Know</h3>
                    <p>A comprehensive review of over 100 Docker concepts, perfect for a final review before an interview. [Image of Docker concepts mind map]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/rIrNIzy6U_g?si=UWf9ZDMdIU1kh7-o"
                        title="YouTube video player (100+ Docker Concepts)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase8Resources;
