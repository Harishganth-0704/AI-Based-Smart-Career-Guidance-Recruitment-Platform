// src/pages/CyberPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Cryptography & Identity and Access Management</h1>
                <p>Mastering cryptographic principles and robust Identity and Access Management (IAM) strategies to secure data and control access in various systems.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Symmetric Cryptography:
                            <ul>
                                <li>AES, DES, block vs stream ciphers</li>
                            </ul>
                        </li>
                        <li>Asymmetric Cryptography:
                            <ul>
                                <li>RSA, ECC, Key exchange (Diffie-Hellman)</li>
                            </ul>
                        </li>
                        <li>Hashing & Digital Signatures:
                            <ul>
                                <li>Hashing (SHA, bcrypt, PBKDF2), Digital signatures</li>
                            </ul>
                        </li>
                        <li>PKI & TLS/SSL:
                            <ul>
                                <li>Public Key Infrastructure (PKI), Certificates, TLS / SSL, Certificate Authorities</li>
                            </ul>
                        </li>
                        <li>Identity Systems:
                            <ul>
                                <li>OAuth, OpenID, SAML, JWT</li>
                                <li>Federated identity, Multi-factor authentication (MFA)</li>
                            </ul>
                        </li>
                        <li>Access Control Models:
                            <ul>
                                <li>RBAC (Role-Based Access Control), ABAC (Attribute-Based Access Control)</li>
                                <li>Bell-LaPadula, DAC (Discretionary Access Control), MAC (Mandatory Access Control)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books --- */}
                <div className="resource-item">
                    <h3>📗 Book: FreeComputerBooks (cryptography sections)</h3>
                    <p>Access various free resources and books on cryptography, covering fundamental concepts to advanced techniques.</p>
                    <a href="https://freecomputerbooks.com/compscspecialSecurityBooks.html" target="_blank" rel="noopener noreferrer" className="resource-link">Browse Free Books</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Applied Cryptography Specialization — Coursera</h3>
                    <p>A specialization covering the practical application of cryptographic primitives and protocols to secure real-world systems.</p>
                    <a href="https://www.coursera.org/specializations/applied-crypto" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Identity and Access Management (IAM) — Coursera</h3>
                    <p>Learn the principles and practices of IAM to manage and control access to resources effectively.</p>
                    <a href="https://www.coursera.org/learn/packt-identify-andaccess-management-iam-oy5r6" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Identity and Access Management</h3>
                    <p>An in-depth video explaining the core concepts and importance of Identity and Access Management in cybersecurity.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/o-CJ8ozJ3Jk?si=4Jgk9hiOpDVQKtrc"
                        title="YouTube video player (Identity and Access Management)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Cryptography Full Course | Cryptography And Network Security</h3>
                    <p>A comprehensive course covering cryptography fundamentals and their application in network security.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/C7vmouDOJYM?si=v_-EUzbFllpPbUFb"
                        title="YouTube video player (Cryptography Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase9Resources;