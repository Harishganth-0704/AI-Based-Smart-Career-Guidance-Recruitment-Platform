import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Real-World Projects</h1>
                <p>Synthesize all acquired knowledge to build and deploy complete, non-trivial containerized projects for a professional portfolio.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Build end-to-end containerized applications (frontend + backend + DB)</li>
                        <li>Use Docker Compose for multi-container system</li>
                        <li>Deploy to cloud or production-like environment</li>
                        <li>Use CI/CD pipelines to build, test, push, deploy containers</li>
                        <li>Documenting the project, version control, reproducibility</li>
                    </ul>
                </div>
            </div>

            {/* Section for Practical Project Ideas */}
            <div className="resource-section">
                <h2>Practical Docker Project Ideas</h2>
                <div className="resource-item">
                    <ul>
                        <li>1. Dockerized Portfolio Website:
                            <ul>
                                <li>Host your personal or college portfolio using Nginx inside a Docker container.</li>
                                <li>Learn: Dockerfile basics, container setup, Nginx configuration.</li>
                            </ul>
                        </li>
                        <li>2. Python Flask App in Docker:
                            <ul>
                                <li>Create a simple web app using Flask and run it in a container.</li>
                                <li>Learn: Exposing ports, environment variables, app-container linking.</li>
                            </ul>
                        </li>
                        <li>3. Dockerized Machine Learning App:
                            <ul>
                                <li>Build an ML model (e.g., predicting house prices) and serve via Flask in Docker.</li>
                                <li>Learn: Managing dependencies (NumPy, scikit-learn), image optimization.</li>
                            </ul>
                        </li>
                        <li>4. Kubernetes + Docker Project:
                            <ul>
                                <li>Deploy Dockerized microservices onto Kubernetes clusters (e.g., on Minikube).</li>
                                <li>Learn: Docker + Kubernetes integration, scaling, and rolling updates.</li>
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
                    <h3>▶️ YouTube: 10 Docker Projects You’ll Actually Want to Keep Running</h3>
                    <p>A video showcasing practical and useful Docker projects that you can build for your portfolio or personal use. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/r7qmFX6O-UM?si=hC7lUJBaTrytdJFP"
                        title="YouTube video player (10 Docker Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase6Resources;
