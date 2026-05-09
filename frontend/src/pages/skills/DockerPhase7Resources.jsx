import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Portfolio & Resume Strategy</h1>
                <p>Translate your skills into career opportunities by preparing for technical interviews and validating your expertise.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>🚀 Docker Portfolio Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>1. Showcase Practical Projects:
                            <ul>
                                <li>✅ Personal Portfolio Website — containerized with Nginx and deployed via Docker Compose.</li>
                                <li>✅ Flask + MySQL App — use multi-container setup.</li>
                                <li>✅ CI/CD Pipeline Project — integrate Docker with GitHub Actions or Jenkins.</li>
                                <li>✅ Microservice Demo — create small services (auth, user, data) and run them with Docker Compose.</li>
                                <li>✅ ML/AI Model Deployment — containerize a trained model using Flask + Docker.</li>
                            </ul>
                        </li>
                        <li>🔗 Upload all project code to GitHub with detailed README.md (commands, explanation, and screenshots).</li>
                        <li>2. Portfolio Website / GitHub Profile:
                            <ul>
                                <li>🧭 About section (Who you are + Tech stack: Docker, Linux, CI/CD, Cloud basics)</li>
                                <li>🧩 Project cards (Each with live demo/GitHub link)</li>
                                <li>🖼 Visual Dockerfile or architecture diagrams (draw.io / Mermaid)</li>
                                <li>🌐 Optionally, host the site using Docker on a cloud VM (AWS EC2, Azure, Render)</li>
                            </ul>
                        </li>
                        <li>3. Blog / Documentation (Optional but Strong):
                            <ul>
                                <li>Write short blog posts or Medium articles: “Why Every Developer Should Learn Docker”, “Deploying Flask App with Docker in 5 Steps”, “Understanding Docker Networking in Simple Terms”</li>
                                <li>💡 Adds authority and strengthens personal branding.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>💼 Docker Resume Strategy</h2>
                <div className="resource-item">
                    <ul>
                        <li>1. Technical Skills Section:
                            <ul>
                                <li>Skills: Docker, Docker Compose, Containers, Linux, CI/CD, GitHub Actions, Kubernetes (basic), AWS EC2, Python/Node.js (whichever used).</li>
                            </ul>
                        </li>
                        <li>2. Project Experience (with measurable results):
                            <ul>
                                <li>Containerized Web Application — Deployed a multi-container Flask and MySQL app using Docker Compose, improving deployment time by 60%.</li>
                                <li>Model Deployment with Docker — Built and deployed a sentiment analysis model inside a Docker container accessible via REST API.</li>
                            </ul>
                        </li>
                        <li>3. Certifications:
                            <ul>
                                <li>Docker Essentials (IBM / Coursera)</li>
                                <li>Docker for Beginners (freeCodeCamp / YouTube)</li>
                                <li>Introduction to Containers (by Docker Inc.)</li>
                                <li>Any Cloud Platform certification (helps show deployment readiness)</li>
                            </ul>
                        </li>
                        <li>4. GitHub Section:
                            <ul>
                                <li>Add a Docker Projects pinned section on your profile:</li>
                                <li>Use proper commits</li>
                                <li>Include Dockerfiles, docker-compose.yml, and screenshots</li>
                                <li>Add descriptions for each repo</li>
                            </ul>
                        </li>
                        <li>5. Bonus – LinkedIn Optimization:
                            <ul>
                                <li>Mention “Built & Deployed Projects using Docker” in About section.</li>
                                <li>Add a custom banner with “Docker | Containers | DevOps Enthusiast.”</li>
                                <li>Share short posts about your Docker learning or mini-projects.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase7Resources;

