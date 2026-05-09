// src/pages/skills/JavaPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Managing Data - The Collections Framework</h1>
                <p>Learn to use Java's powerful and efficient built-in data structures for storing and manipulating groups of objects.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Documentation</h2>
                <div className="resource-item">
                    <h3>Java Collections Framework (Telusko)</h3>
                    <p>A comprehensive video playlist that covers all the major interfaces and classes in the Collections Framework, from `ArrayList` to `HashMap`.</p>
                    <a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7p_p_5b1s2_C2Vz_4Tsa2J8" target="_blank" rel="noopener noreferrer" className="resource-link">Watch the Playlist</a>
                </div>
                 <div className="resource-item">
                    <h3>The Collections Trail (Official Oracle Docs)</h3>
                    <p>The official and most comprehensive guide to the framework, covering interfaces (List, Set, Map), implementations, and algorithms in depth.</p>
                    <a href="https://docs.oracle.com/javase/tutorial/collections/index.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase11Resources;
