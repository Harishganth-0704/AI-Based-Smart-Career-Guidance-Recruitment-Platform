// src/pages/skills/JavaPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Interacting with the File System - File I/O</h1>
                <p>Learn how to read data from and write data to files using both traditional and modern Java I/O APIs.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Java IO vs NIO (Baeldung)</h3>
                    <p>A guide that explains the key differences between the original blocking I/O API and the more modern, non-blocking NIO API.</p>
                    <a href="https://www.baeldung.com/java-io-vs-nio" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Comparison</a>
                </div>
                <div className="resource-item">
                    <h3>File Handling in Java (GeeksforGeeks)</h3>
                    <p>A practical article with code examples for common file operations like creating, reading, writing, and deleting files.</p>
                    <a href="https://www.geeksforgeeks.org/file-handling-java-using-filewriter-filereader/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase13Resources;
