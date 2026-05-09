// src/pages/CloudPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Security & Compliance</h1>
                <p>Establishing robust security practices and ensuring compliance with industry standards in cloud environments, a critical aspect of cloud architecture.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Identity & Access Management (IAM), least privilege, cross-account access, KMS, secrets management (AWS Secrets Manager, Parameter Store)</li>
                        <li>Network security: security groups, NACLs, private endpoints, WAF, Shield</li>
                        <li>Data protection: encryption at rest/in transit, key policies, KMS best practices</li>
                        <li>Governance: AWS Organizations, SCPs, AWS Config, audit trails (CloudTrail)</li>
                        <li>Compliance frameworks: SOC2, ISO, PCI — mapping controls to AWS services</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📗 Book: Practical Cloud Security Handbook: Secure cloud deployments with AWS, Azure, GCP, and IBM Cloud</h3>
                    <p>A comprehensive guide to securing cloud deployments across major cloud providers, offering practical strategies and best practices.</p>
                    <a href="https://www.amazon.in/Practical-Cloud-Security-Handbook-deployments/dp/9365891477/ref=sr_1_1?crid=14ELX7XYSKCPJ&dib=eyJ2IjoiMSJ9.s1Lxm7vTCxWj9UHRX97c4KEgJqKxjNiBglrDi6GWPmcD4mFqP2hhU3C4KNY5iMHM1HB8Hyr6ZydY9vwT3HiHQ1O1LroxELmD487kjRDFr2F-kXfz9MOmiJT9czhKgTwi1eI4AMGJ2IYK1_QH3ISftfpMIzxlRl-nJu8olj79bwOwmRnHwSZI745yfEru3LYpkjpQzvdx14KOBRslySEVaSxTfiD-3hMQUlV-Ax3fyGg.YJIfoph3qceeGqJSowSwQlvNkSkAI3jec_TlWDOHh4k&dib_tag=se&keywords=cloud+AWS+Security+%26+Compliance&qid=1760124870&sprefix=cloud+aws+security+%26+compliance%2Caps%2C308&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Cloud Security Fundamentals: Protect Data, Apps & Infra (Udemy)</h3>
                    <p>Learn the fundamental principles of cloud security to protect your data, applications, and infrastructure across cloud environments.</p>
                    <a href="https://www.udemy.com/course/cloud-security-fundamentals-protect-data-apps-infra/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Cloud Computing / CompTIA Cloud+ (Udemy)</h3>
                    <p>A comprehensive course to prepare for the CompTIA Cloud+ certification, covering a broad range of cloud computing concepts and security.</p>
                    <a href="https://www.udemy.com/course/total-cloud-computing-comptia-cloud-cert-cv0-002/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Master Cloud Security & Compliance in 2 Hours!</h3>
                    <p>A concise video guide to understanding and implementing cloud security and compliance best practices effectively.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Levxhx8zX0w?si=eKx1Zko3wXnA0dcQ"
                        title="YouTube video player (Cloud Security & Compliance)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase6Resources;