// src/pages/skills/CPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: File I/O Operations</h1>
                <p>Learn to persist data by reading from and writing to files stored on disk using the {'<stdio.h>'} library.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>File Handling in C (GeeksforGeeks)</h3>
                    <p>A comprehensive text-based tutorial covering all the essential file operations, including `fopen()`, `fclose()`, `fread()`, and `fwrite()`.</p>
                    <a href="https://www.geeksforgeeks.org/file-handling-in-c/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
                <div className="resource-item">
                    <h3>C Programming Tutorial - Working with Files (Caleb Curry)</h3>
                    <p>A clear video tutorial that explains the concepts of file streams, pointers, and the fundamental functions for reading from and writing to files in C.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5b2e1_J4p_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPhase12Resources;

