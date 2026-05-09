// src/pages/skills/JavaPhase17Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase17Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 17A: Backend Development with Spring Boot</h1>
                <p>Learn to build production-grade REST APIs and microservices using Spring Boot, the de facto standard framework for Java backend development.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Courses & Tutorials</h2>
                <div className="resource-item">
                    <h3>Spring Boot Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>An excellent, comprehensive video course that is ideal for beginners to learn the most popular framework for enterprise Java development.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9SGDpanrc8U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Spring Guides</h3>
                    <p>The official website provides a large collection of hands-on, task-oriented guides for building applications with Spring Boot.</p>
                    <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Guides</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase17Resources;
