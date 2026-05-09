// src/pages/skills/CPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Language Fundamentals: Data, I/O, and Expressions</h1>
                <p>Learn the basic vocabulary of C: data types, variables, and user interaction with `printf` and `scanf`.</p>
                <Link to="/skills/c" className="back-link">← Back to C Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>C Data Types (Programiz)</h3>
                    <p>A simple and clear guide to the fundamental data types in C, including `int`, `float`, `double`, and `char`, along with their modifiers.</p>
                    <a href="https://www.programiz.com/c-programming/c-data-types" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>C Input/Output: printf() and scanf() (Programiz)</h3>
                    <p>A detailed tutorial explaining how to use `printf` for formatted output and `scanf` for user input, including a clear explanation of format specifiers and the crucial address-of `&` operator.</p>
                    <a href="https://www.programiz.com/c-programming/c-input-output" target="_blank" rel="noopener noreferrer" className="resource-link">Read the I/O Guide</a>
                </div>
                <div className="resource-item">
                    <h3>C Input and Output Explained (freeCodeCamp)</h3>
                    <p>A video tutorial that visually demonstrates how to get input from a user and display formatted output in the console.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1bK-OBsE_M4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPhase4Resources;

