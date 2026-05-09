import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Data, Networking & Multi-Container Apps</h1>
                <p>Address data persistence, demystify container communication, and learn to run multi-container applications declaratively with Docker Compose.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Volumes & Bind Mounts (for data persistence)</li>
                        <li>Docker Networking & Port Mapping</li>
                        <li>Environment Variables</li>
                        <li>Docker Compose (Multi-Container Setup with YAML)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Using Docker by Adrian Mouat</h3>
                    <p>A practical guide to adopting Docker, covering development, testing, and deployment workflows. </p>
                    <a href="https://www.goodreads.com/book/show/25484101-using-docker" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Goodreads</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Docker Compose Docs</h3>
                    <p>The official documentation for Docker Compose, essential for learning how to define and run multi-container applications. </p>
                    <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Docker & Kubernetes: The Practical Guide (Udemy)</h3>
                    <p>A comprehensive, hands-on course covering both Docker and Kubernetes, from basic concepts to advanced deployments. </p>
                    <a href="https://www.udemy.com/course/docker-kubernetes-the-practical-guide/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Docker networking is CRAZY!! (you NEED to learn it)</h3>
                    <p>A deep dive into Docker's networking capabilities, explaining how containers communicate with each other and the outside world. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/bKFMS5C4CG0?si=kcA64B9nUxjeL1ee"
                        title="YouTube video player (Docker Networking)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase3Resources;
