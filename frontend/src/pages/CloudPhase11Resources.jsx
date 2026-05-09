// src/pages/CloudPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Certifications Roadmap (AWS)</h1>
                <p>A structured path for obtaining key AWS certifications to validate your cloud architecture knowledge and advance your career.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Certification Path</h2>
                {/* --- Course 1 --- */}
                <div className="resource-item">
                    <h3>🎓 Course: AWS Certified Cloud Practitioner CLF-C02</h3>
                    <p>Start with the foundational certification to build a solid understanding of AWS cloud concepts, services, and terminology.</p>
                    <a href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- Course 2 --- */}
                <div className="resource-item">
                    <h3>🎓 Course: AWS Certified Solutions Architect Associate</h3>
                    <p>The essential certification for cloud architects, focusing on designing and deploying scalable, highly available, and fault-tolerant systems on AWS.</p>
                    <a href="https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- Course 3 --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Ultimate AWS Certified Solutions Architect Professional</h3>
                    <p>Advance your skills with the professional-level certification, covering complex solutions and advanced architectural best practices.</p>
                    <a href="https://www.udemy.com/course/aws-solutions-architect-professional/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- Course 4 --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Ultimate AWS Certified AI Practitioner AIF-C01</h3>
                    <p>A specialty certification focusing on the fundamentals of artificial intelligence and machine learning on the AWS platform.</p>
                    <a href="https://www.udemy.com/course/aws-ai-practitioner-certified/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase11Resources;