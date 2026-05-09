// src/pages/skills/CPlusPlusPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Modern C++ (C++11 and beyond)</h1>
                <p>Become fluent in the features that revolutionized the language, like `auto`, lambdas, and move semantics.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Books & Talks</h2>
                <div className="resource-item">
                    <h3>"Effective Modern C++" by Scott Meyers</h3>
                    <p>The definitive book for understanding the new features introduced in C++11 and C++14 and how to use them effectively.</p>
                </div>
                 <div className="resource-item">
                    <h3>CppCon Conference Talks (YouTube)</h3>
                    <p>The CppCon YouTube channel is a treasure trove of talks from experts on every aspect of modern C++.</p>
                    <a href="https://www.youtube.com/c/CppCon" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Channel</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase13Resources;
