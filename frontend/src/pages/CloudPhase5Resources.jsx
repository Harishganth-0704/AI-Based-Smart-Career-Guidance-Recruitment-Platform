// src/pages/CloudPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: DevOps & Automation for Architects</h1>
                <p>Integrating DevOps practices and automation tools to streamline development, deployment, and operational processes in cloud architecture.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>CI/CD pipelines: CodeCommit/CodePipeline, CodeBuild, Jenkins, GitHub Actions</li>
                        <li>Container CI/CD, image registries (ECR), blue/green & canary deployments</li>
                        <li>Automated testing, infra testing (Terratest), policy-as-code (OPA, AWS Config)</li>
                        <li>GitOps concepts and observability integration in pipelines</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📗 Book: AWS Certified DevOps Engineer - Professional Certification and Beyond</h3>
                    <p>A comprehensive guide for preparing for the AWS Certified DevOps Engineer - Professional exam, covering advanced DevOps practices on AWS.</p>
                    <a href="http://amazon.in/AWS-Certified-DevOps-Engineer-Certification/dp/1801074453/ref=sr_1_3?crid=2J7QIKLPNH5D8&dib=eyJ2IjoiMSJ9.tWCcCozYCfMmNAJGCCn5qilaE4g7wWBLo2u3U5eG4qW_HkHMFkbnHcj6NdlO6--6z5BtudazuYXO7sskI63aruPsUSZsCeFv2lOphnI4BVMGPfKWH2NCy1ta0G8BpWLyJDs9hCJ8neAcHb7DBHCisrlp8LAy4WzfzevqyH_w2nyeR4G6sP5ANKOuWiEoCmuQeIpArw6bZThYfsKHihtZXM22BwSbW5rTNX9pc0l6pAQ.okSGrwclN3onlPyZeQRyY2OUmBpNnTknJyoMDRlDlFE&dib_tag=se&keywords=AWS+DevOps+Engineer+Professional&qid=1760124528&sprefix=%2Caps%2C307&sr=8-3" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: AWS training & Skill Builder modules for DevOps / CI-CD</h3>
                    <p>Official AWS training resources and modules from AWS Skill Builder to enhance your DevOps and CI/CD skills on AWS.</p>
                    <a href="https://skillbuilder.aws/category/exam-prep/devops-engineer-professional" target="_blank" rel="noopener noreferrer" className="resource-link">Go to AWS Skill Builder</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: AWS Certified DevOps Engineer Professional (Udemy)</h3>
                    <p>A hands-on course covering the advanced concepts and practical applications needed for the AWS Certified DevOps Engineer Professional certification.</p>
                    <a href="https://www.udemy.com/course/aws-certified-devops-engineer-professional-hands-on/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Devops Full Course</h3>
                    <p>A comprehensive video course introducing various DevOps concepts, tools, and practices for modern software development.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/saWZQr0RMpw?si=xmqp4yABkhrFswyB"
                        title="YouTube video player (Devops Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase5Resources;