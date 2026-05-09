// src/pages/CloudPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Real-World Projects & Architecture Diagrams</h1>
                <p>Applying advanced cloud architecture concepts to build and document end-to-end cloud solutions, complete with professional architecture diagrams.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Build End-to-End Projects:
                            <ul>
                                <li>Microservices application (EKS/ECS + RDS + caching + CDN) with CI/CD and IaC</li>
                                <li>Multi-region failover demo</li>
                                <li>Data pipeline (Kinesis/Glue/Redshift)</li>
                                <li>Event-driven thumbnailing pipeline (S3, Lambda, SQS)</li>
                            </ul>
                        </li>
                        <li>Documentation & Review:
                            <ul>
                                <li>Produce professional architecture diagrams (draw.io, Lucidchart, AWS Architecture Icons)</li>
                                <li>Conduct Well-Architected reviews for your projects</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: AWS Cloud Projects for Engineers: 5 Real-World Projects (Udemy)</h3>
                    <p>Hands-on experience building practical cloud projects on AWS to solidify your architectural skills and build a portfolio.</p>
                    <a href="https://www.udemy.com/course/aws-mastery-hands-on-cloud-projects-for-engineers/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Best Practical AWS Projects To Get You Hired Easily</h3>
                    <p>Explore high-impact AWS projects that can significantly boost your resume and interview prospects.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Fh8mJJP65lY?si=KRtSVPlU3OJHGKws"
                        title="YouTube video player (Best AWS Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Top 5 Real World AWS Cloud Projects to Get a Job</h3>
                    <p>Discover a curated list of top real-world AWS projects designed to help you secure a cloud architect or engineering role.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tf-Qwns48R0?si=vbJuwSQ1EEOOraj3"
                        title="YouTube video player (Top 5 AWS Projects)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: AWS Project - Deploy Docker Container to AWS ECS Automatically with CI CD Pipeline</h3>
                    <p>A practical walkthrough demonstrating how to automate the deployment of Docker containers to AWS ECS using a CI/CD pipeline.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/knFabwOn1JE?si=1MDxB2skxn6NW77x"
                        title="YouTube video player (AWS ECS CI/CD Project)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase10Resources;