// src/pages/skills/CPlusPlusPhase17Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase17Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 17: Best Practices & Performance Optimization</h1>
                <p>Learn to write code that is not just correct, but also clean, maintainable, and fast.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Talks</h2>
                <div className="resource-item">
                    <h3>C++ Core Guidelines</h3>
                    <p>A collaborative effort led by Bjarne Stroustrup and Herb Sutter to summarize best practices for modern C++.</p>
                    <a href="https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guidelines</a>
                </div>
                 <div className="resource-item">
                    <h3>Performance in C++ (The Cherno)</h3>
                    <p>A video series discussing various aspects of writing high-performance code in C++, including the importance of data locality.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0I0t_nBxl4g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase17Resources;
