import React from 'react';

import { Link } from 'react-router-dom';

import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/



const DockerPhase2Resources = () => (

    <>

        <style>{ResourceStyles}</style>

        <div className="resource-container">

            <header className="resource-header">

                <h1>Stage 2: Core Docker Concepts & Images</h1>

                <p>Master the fundamental CLI commands for managing the lifecycle of containers and images, forming the bedrock of daily interaction with Docker.</p>

                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>

            </header>



            {/* Section for Key Topics */}

            <div className="resource-section">

                <h2>Key Topics</h2>

                <div className="resource-item">

                    <ul>

                        <li>Docker Images, Containers, and Volumes</li>

                        <li>Dockerfiles (Building Custom Images)</li>

                        <li>Tagging, Committing, and Pushing Images</li>

                        <li>Core Docker CLI Commands</li>

                    </ul>

                </div>

            </div>



            {/* Section for Curated Resources */}

            <div className="resource-section">

                <h2>Resources</h2>

                {/* --- Book --- */}

                <div className="resource-item">

                    <h3>📘 Book: Docker Deep Dive by Nigel Poulton</h3>

                    <p>A comprehensive and highly-rated book that provides a deep understanding of Docker's core components and functionalities. </p>

                    <a href="https://www.amazon.in/Docker-Deep-Dive-Nigel-Poulton-ebook/dp/B01LXWQUFF" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>

                </div>



                {/* --- Notes --- */}

                <div className="resource-item">

                    <h3>📝 Free Notes: Dockerfile Reference</h3>

                    <p>The official Docker documentation for the Dockerfile, serving as an essential reference for all instructions and best practices. </p>

                    <a href="https://docs.docker.com/reference/dockerfile/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>

                </div>



                {/* --- ADDED COURSE --- */}

                <div className="resource-item">

                    <h3>🎓 Course: Docker for the Absolute Beginner - Hands On - DevOps (Udemy)</h3>

                    <p>A highly-rated, hands-on course designed for absolute beginners to learn Docker from scratch. </p>

                    <a href="https://www.udemy.com/course/learn-docker/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>

                </div>

            </div>

        </div>

    </>

);



export default DockerPhase2Resources;



