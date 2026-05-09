// src/pages/CloudPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: IaC, Containers & Orchestration</h1>
                <p>Mastering Infrastructure as Code, containerization, and orchestration to automate and manage modern cloud infrastructure.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Declarative vs imperative IaC; versioning and modularization</li>
                        <li>Terraform (provider: AWS), HCL language, modules, state management</li>
                        <li>CloudFormation (AWS native) and CDK (Cloud Development Kit)</li>
                        <li>Containerization with Docker (images, containers, Dockerfiles)</li>
                        <li>Orchestration with Kubernetes (pods, services, deployments)</li>
                        <li>CI integration for IaC, state locking/backups, drift detection</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books --- */}
                <div className="resource-item">
                    <h3>📗 Book: Infrastructure as Code — Kief Morris</h3>
                    <p>Learn core patterns and practices for successfully implementing Infrastructure as Code in your organization.</p>
                    <a href="https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on O'Reilly</a>
                </div>
                <div className="resource-item">
                    <h3>📘 Book: Terraform: Up & Running — Yevgeniy Brikman</h3>
                    <p>A hands-on guide to mastering Terraform for writing, planning, and executing infrastructure as code.</p>
                    <a href="https://www.amazon.com/Terraform-Running-Writing-Infrastructure-Code/dp/1492046906" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>
                <div className="resource-item">
                    <h3>📘 Book: Docker: The Ultimate Beginners Guide</h3>
                    <p>A step-by-step guide for beginners to learn the fundamentals of Docker and containerization.</p>
                    <a href="https://bookscape.com/product-details/docker-the-ultimate-beginners-guide-to-learn-docker-step-by-step-1-9781647710828" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Bookscape</a>
                </div>
                <div className="resource-item">
                    <h3>📘 Book: The Complete Kubernetes Guide</h3>
                    <p>Become an expert in container management with this comprehensive guide to the power of Kubernetes.</p>
                    <a href="https://cabh.in/product/the-complete-kubernetes-guide-become-an-expert-in-container-management-with-the-power-of-kubernetes/" target="_blank" rel="noopener noreferrer" className="resource-link">Find on CABH</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Terraform: The Complete Guide from Beginner to Expert (Udemy)</h3>
                    <p>A comprehensive course to learn Terraform, from foundational concepts to advanced techniques for managing cloud infrastructure.</p>
                    <a href="https://www.udemy.com/course/mastering-terraform-beginner-to-expert/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Docker & Kubernetes: The Practical Guide (Udemy)</h3>
                    <p>A practical, hands-on guide to learning both Docker and Kubernetes for containerization and orchestration.</p>
                    <a href="https://www.udemy.com/course/docker-kubernetes-the-practical-guide/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Complete Terraform Course - From BEGINNER to PRO!</h3>
                    <p>A full video course to guide you through Terraform basics, advanced concepts, and real-world implementation.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/7xngnjfIlK4?si=Nc3V5yc-YKoPt5H6"
                        title="YouTube video player (Complete Terraform Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Docker Containers and Kubernetes Fundamentals – Full Hands-On Course</h3>
                    <p>A full, hands-on course covering the fundamentals of Docker and Kubernetes for beginners.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kTp5xUtcalw?si=wQ-QY-ylS0wqdKmm"
                        title="YouTube video player (Docker & Kubernetes Fundamentals)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase4Resources;