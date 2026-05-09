import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Storage, Optimization & Troubleshooting</h1>
                <p>Learn to manage Docker logs, optimize resource usage, troubleshoot common errors, and get a brief introduction to container orchestration.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Docker Logs & Monitoring (`docker logs`)</li>
                        <li>Resource Optimization (slimming images, multi-stage builds)</li>
                        <li>Common Docker Errors & Troubleshooting</li>
                        <li>Integrating with Kubernetes (Introduction)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: The Docker Book by James Turnbull</h3>
                    <p>A comprehensive guide that covers everything from the basics to advanced topics, including storage, optimization, and real-world deployment. </p>
                    <a href="https://dockerbook.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to DockerBook.com</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: How To Optimize Docker Image ? (GeeksforGeeks)</h3>
                    <p>A practical guide with tips and techniques for reducing the size and improving the efficiency of your Docker images. </p>
                    <a href="https://www.geeksforgeeks.org/devops/how-to-optimize-docker-image/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Storage in Docker</h3>
                    <p>The official Docker documentation explaining the different ways Docker manages storage, including volumes and bind mounts. </p>
                    <a href="https://docs.docker.com/engine/storage/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>
                </div>
                
                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Debugging Docker Containers with docker exec and docker logs</h3>
                    <p>A practical tutorial on how to troubleshoot running containers using the essential `docker exec` and `docker logs` commands. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tLK9nNFHWH8?si=DpEZOJpW10xxCTLf"
                        title="YouTube video player (Debugging Docker Containers)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase5Resources;
