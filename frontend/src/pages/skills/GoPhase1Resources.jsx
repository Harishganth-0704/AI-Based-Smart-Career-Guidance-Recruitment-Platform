import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Go Setup, Core Fundamentals & Programming Constructs</h1>
                <p>Setting up your Go environment (GOPATH, GOROOT) and learning the fundamental syntax, data types, control structures, and functions of the language.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Install Go, GOPATH, GOROOT</li>
                        <li>`go` commands → `run`, `build`, `test` </li>
                        <li>Variables, types, constants</li>
                        <li>Operators</li>
                        <li>Conditions (if/switch)</li>
                        <li>Loops (for) - Go's only loop</li>
                        <li>Basic functions</li>
                        <li>Packages + imports</li>
                        <li>Basic error handling</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: The Little Go Book (Free)</h3>
                    <p>A free, concise, and highly-regarded introduction to the Go programming language, perfect for beginners. </p>
                    <a href="https://www.openmymind.net/The-Little-Go-Book/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Go Official Docs</h3>
                    <p>The official documentation from the Go team. The best place for accurate information and tutorials. </p>
                    <a href="https://go.dev/doc/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Go.dev Docs</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Go - The Complete Guide (Udemy)</h3>
                    <p>A comprehensive, hands-on guide to mastering the Go programming language, from basics to advanced features. </p>
                    <a href="https://www.udemy.com/course/go-the-complete-guide/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Learn Go Programming - Golang Tutorial for Beginners</h3>
                    <p>A full-length video tutorial for beginners covering all the fundamental concepts of Go programming. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/YS4e4q9oBaU?si=9iBDnMEsYIYzWShN"
                        title="YouTube video player (Learn Go Programming - Golang Tutorial)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase1Resources;