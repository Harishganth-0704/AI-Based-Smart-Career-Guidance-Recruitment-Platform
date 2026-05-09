import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const DockerPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Security, CI/CD & Deployment</h1>
                <p>Learn to secure, share, and automate the building and deployment of your Docker containers using best practices and CI/CD pipelines.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Docker Hub & Private Registry</li>
                        <li>Docker in CI/CD Pipelines (e.g., GitHub Actions)</li>
                        <li>Image Scanning & Vulnerability Analysis</li>
                        <li>Secrets Management (e.g., Docker Secrets, environment files)</li>
                        <li>Docker Security Best Practices</li>
                        <li>Deploying Containers to Cloud Platforms (basics)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Docker in Practice by Ian Miell & Aidan Hobson</h3>
                    <p>A practical guide featuring 101 useful techniques and real-world practices for working effectively with Docker. </p>
                    <a href="https://www.manning.com/books/docker-in-practice-second-edition" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Manning</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Docker Security Guide</h3>
                    <p>The official documentation from Docker covering security best practices and features for securing your containers and host system. </p>
                    <a href="https://docs.docker.com/security/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Docker CI/CD Guidelines</h3>
                    <p>Official documentation on how to build, test, and deploy containerized applications using CI/CD pipelines.</p>
                    <a href="https://docs.docker.com/build/ci/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Implementing CI/CD Pipelines with Docker (GeeksforGeeks)</h3>
                    <p>A tutorial on implementing a CI/CD pipeline using Docker, often integrated with tools like Jenkins.</p>
                    <a href="https://www.geeksforgeeks.org/devops/implementing-cicd-pipelines-with-docker-and-jenkins/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: DevOps for beginners: Docker, K8s, Cloud, CI/CD & 4 Projects (Udemy)</h3>
                    <p>A project-based course covering essential DevOps tools, including Docker, Kubernetes, cloud platforms, and setting up CI/CD pipelines. [Image of DevOps workflow diagram]</p>
                    <a href="https://www.udemy.com/course/devops-for-beginners-docker-k8s-cloud-cicd-4-projects/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Docker security best practices | How to secure your container</h3>
                    <p>A video detailing best practices for enhancing the security of your Docker containers and images. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9xz9sBjZwXs?si=7CbJhfWO3WaJgmCB"
                        title="YouTube video player (Docker security best practices)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker</h3>
                    <p>Learn the basics of GitHub Actions and how to create a CI/CD pipeline to automatically build and push Docker images. [Image of GitHub Actions workflow diagram]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/R8_veQiYBjI?si=OgaR3sD5vkCqs7RN"
                        title="YouTube video player (GitHub Actions Tutorial with Docker)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default DockerPhase4Resources;
