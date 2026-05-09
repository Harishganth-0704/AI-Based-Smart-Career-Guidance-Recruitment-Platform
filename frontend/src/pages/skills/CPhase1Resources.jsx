// src/pages/skills/CPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: The C Landscape: History, Relevance, and Mindset</h1>
                <p>Understand C's place in computing history, its enduring relevance, and the core design philosophy of programmer control.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Books</h2>
                <div className="resource-item">
                    <h3>Crash Course in Computer Science</h3>
                    <p>An excellent, high-level visual introduction to fundamental computer science concepts, from hardware to software, providing crucial context for C.</p>
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" target="_blank" rel="noopener noreferrer" className="resource-link">Watch the Series</a>
                </div>
                <div className="resource-item">
                    <h3>"Code: The Hidden Language of Computer Hardware and Software" by Charles Petzold</h3>
                    <p>Essential reading for a bottom-up understanding of how computers work, which is invaluable for mastering C.</p>
                </div>
            </div>
        </div>
    </>
);
export default CPhase1Resources;

