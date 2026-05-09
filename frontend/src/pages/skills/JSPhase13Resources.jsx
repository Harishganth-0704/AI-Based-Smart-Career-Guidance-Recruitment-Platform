import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const JSPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Deployment & DevOps Basics</h1>
                <p>Learning how to deploy JavaScript applications to various platforms and understanding fundamental DevOps concepts like CI/CD and containerization.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Deploying applications (Netlify, Vercel, Heroku, AWS basics)</li>
                        <li>CI/CD (Continuous Integration/Continuous Deployment) with GitHub Actions</li>
                        <li>Environment variables</li>
                        <li>Docker basics (Containerization)</li>
                        <li>Monitoring & Logging basics</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: “The DevOps Handbook”</h3>
                    <p>While not JavaScript-specific, this book provides foundational knowledge on DevOps principles and practices applicable to any tech stack. </p>
                    <a href="https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1950508404" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Netlify Docs – Deploying Front-End Apps</h3>
                    <p>Official documentation from Netlify, a popular platform for deploying front-end applications, covering their deployment process. </p>
                    <a href="https://docs.netlify.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Netlify Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                     {/* Note: The user provided a YouTube link for the course. Assuming it's a Udemy course based on previous patterns. */}
                    <h3>🎓 Course: Decoding DevOps – From Basics to Advanced Projects with AI (Udemy)</h3>
                    <p>A course covering DevOps principles, tools, and practices, potentially including AI applications in DevOps workflows. [Image of DevOps infinity loop symbol]</p>
                    <a href="https://www.udemy.com/course/decodingdevops/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Deploy Node.js App to Heroku</h3>
                    <p>A tutorial demonstrating the steps involved in deploying a Node.js application to the Heroku platform. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/71wSzpLyW9k?si=7o2TStwE6n0fnOqG"
                        title="YouTube video player (Deploy Node.js App to Heroku)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Deploy React Application using Netlify | Deploy manually using build folder</h3>
                    <p>Learn how to deploy a React application to Netlify, both manually using the build folder and potentially through automated CI/CD. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tVzpC5_AC8M?si=Pi8YGW6eomlUW7gC"
                        title="YouTube video player (Deploy React App using Netlify)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default JSPhase13Resources;
