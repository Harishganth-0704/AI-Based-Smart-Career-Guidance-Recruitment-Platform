// src/pages/skills/CPlusPlusPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Standard Template Library (STL)</h1>
                <p>Master the cornerstone of modern C++, including containers (vector, map), iterators, and algorithms (sort, find).</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Documentation & Videos</h2>
                <div className="resource-item">
                    <h3>cppreference.com - Standard library headers</h3>
                    <p>The definitive reference for all STL components. Essential for professional development.</p>
                    <a href="https://en.cppreference.com/w/cpp/header" target="_blank" rel="noopener noreferrer" className="resource-link">Go to cppreference</a>
                </div>
                <div className="resource-item">
                    <h3>Standard Template Library (STL) in C++ (The Cherno)</h3>
                    <p>A video series covering the most important parts of the STL, including `std::vector` and dynamic arrays.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ryaeu5f-JI8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase10Resources;
