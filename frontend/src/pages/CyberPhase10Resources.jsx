// src/pages/CyberPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Certifications Roadmap</h1>
                <p>A structured guide to industry-recognized certifications to validate your skills and advance your career in cybersecurity.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Recommended Path */}
            <div className="resource-section">
                <h2>Recommended Path (Progressive)</h2>
                <div className="resource-item">
                    <ul>
                        <li>Entry / Foundational: CompTIA Network+, CompTIA Security+</li>
                        <li>Intermediate: CEH (Certified Ethical Hacker), GIAC GSEC, OSCP (for offensive)</li>
                        <li>Defensive / Specialized: GIAC GCIA, GCFA, GCIH, SANS certifications, CISSP</li>
                        <li>Advanced / Niche: OSCE, CRTO, OSWP, GREM, IR/Forensics certs (e.g. GCFA, GCFE)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Beginner Level */}
            <div className="resource-section">
                <h2>Beginner Level (For Entry into Cybersecurity)</h2>
                <div className="resource-item">
                    <h3>🎓 Course: CompTIA Security+</h3>
                    <p>The foundational certification for any cybersecurity role, covering core concepts, risk management, and practical security skills.</p>
                    <a href="https://www.coursera.org/specializations/packt-comptia-security-plus-certification-sy0-701-the-total-course" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: AI for Cybersecurity Specialization</h3>
                    <p>Learn how artificial intelligence is applied in cybersecurity for threat detection, analysis, and response.</p>
                    <a href="https://www.coursera.org/specializations/ai-for-cybersecurity" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Cisco CyberOps Associate CBROPS 200-201: The Complete Course</h3>
                    <p>Prepare for the Cisco CyberOps Associate certification, focusing on security operations and incident response.</p>
                    <a href="https://www.udemy.com/course/cisco-ccna-cyber-ops-the-complete-course/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: SC-900 Microsoft Security Fundamentals Exam Prep</h3>
                    <p>A course designed to prepare you for the Microsoft SC-900 exam, covering fundamental security, compliance, and identity concepts on Azure.</p>
                    <a href="https://www.udemy.com/course/sc900-azure/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
            </div>

            {/* Section for Intermediate Level */}
            <div className="resource-section">
                <h2>Intermediate Level (To Become a Professional / Specialize)</h2>
                <div className="resource-item">
                    <h3>🎓 Course: Certified Ethical Hacker (CEH) v13</h3>
                    <p>A globally recognized certification for ethical hackers, covering penetration testing methodologies and tools.</p>
                    <a href="https://www.udemy.com/course/certified-ethical-hacker-ceh-v13/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: CompTIA CySA+ (CS0-003) Complete Course & Practice Exam</h3>
                    <p>Focuses on cybersecurity analytics and threat detection, a key certification for blue team and SOC analyst roles.</p>
                    <a href="http://udemy.com/course/comptia-cysa-003/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: CompTIA PenTest+ (PT0-003) Full Course & Practice Exam</h3>
                    <p>A hands-on certification for penetration testers, covering vulnerability assessment and offensive security skills.</p>
                    <a href="https://www.udemy.com/course/pentestplus/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: GIAC Security Essentials (GSEC)</h3>
                    <p>A respected certification covering a broad range of security topics, from network security to cryptography and incident handling.</p>
                    <a href="https://www.udemy.com/course/giac-security-essentials-gsec-o/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
            </div>

            {/* Section for Advanced Level */}
            <div className="resource-section">
                <h2>Advanced / Expert Level (For Senior & Leadership Roles)</h2>
                <div className="resource-item">
                    <h3>🎓 Course: CISSP Certification Course - Complete 8 Domains & Handouts</h3>
                    <p>The gold standard certification for cybersecurity management and leadership, covering all 8 domains of information security.</p>
                    <a href="https://www.udemy.com/course/cissp-english/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: CISM Certification Training, Full Course & 2 Practice Exams</h3>
                    <p>A management-focused certification for professionals who design, build, and manage enterprise information security programs.</p>
                    <a href="https://www.udemy.com/course/cism-english/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Offensive Security Experienced Pentest (OSEP/OSCP) | Red Team</h3>
                    <p>An advanced course for experienced penetration testers focusing on red team operations and advanced exploitation techniques.</p>
                    <a href="https://www.udemy.com/course/offensive-security-experienced-pentest-osep-oscp-red-team/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy</a>
                </div>
            </div>

            {/* Section for Cloud Security Certifications */}
            <div className="resource-section">
                <h2>Cloud Security Certifications (Must-Have If You’re Going Cloud + Cyber)</h2>
                <div className="resource-item">
                    <h3>🎓 Course: Google Professional Cloud Security Engineer</h3>
                    <p>Validate your expertise in designing and implementing secure workloads on Google Cloud Platform.</p>
                    <a href="https://www.coursera.org/professional-certificates/google-cloud-cybersecurity-certificate" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase10Resources;