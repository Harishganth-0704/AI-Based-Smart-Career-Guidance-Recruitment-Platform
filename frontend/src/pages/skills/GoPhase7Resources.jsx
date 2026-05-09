import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Interview Preparation</h1>
                <p>Preparing for Go technical interviews by focusing on core language features, concurrency, data structures, algorithms, and common interview questions.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Key Topics (Focus Areas) */}
            <div className="resource-section">
                <h2>✅ Focus Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Interfaces + Structs (OOP concepts in Go)</li>
                        <li>Concurrency (Goroutines, Channels, Mutex, WaitGroups) [Image of Go channel communication diagram]</li>
                        <li>Web + DB basics (`net/http`, `database/sql`)</li>
                        <li>Data Structures & Algorithms in Go</li>
                        <li>API patterns (REST, gRPC)</li>
                        <li>SQL (basic query knowledge)</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Crack the top 50 Golang interview questions (Educative)</h3>
                    <p>A collection of 50 common Golang interview questions and answers to help you prepare. </p>
                    <a href="https://www.educative.io/blog/50-golang-interview-questions" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Educative.io</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Go Interview questions</h3>
                    <p>A dedicated site with a variety of Go interview questions covering different aspects of the language.</p>
                    <a href="https://golanginterview.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GolangInterview.com</a>
                </div>

                {/* --- Practice Platform --- */}
                <div className="resource-item">
                    <h3>💻 Practice Platform: HackerRank (Go Skills)</h3>
                    <p>Validate your Go programming skills with intermediate-level challenges on HackerRank. </p>
                    <a href="https://www.hackerrank.com/skills-verification/golang_intermediate" target="_blank" rel="noopener noreferrer" className="resource-link">Go to HackerRank</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Go interview questions | top go language interview questions and answers</h3>
                    <p>A video covering top Go interview questions and answers, focusing on what freshers and experienced developers might be asked.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/iF_TnfFztX4?si=PP2KsMnhfb75_H5H"
                        title="YouTube video player (Go Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: top go interview questions and answers | Best Golang Interview Questions</h3>
                    <p>Another resource video covering the best Golang interview questions to help you prepare for technical interviews.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/H7c6SWCdhq4?si=BZ7EjLvoLUzRcLma"
                        title="YouTube video player (Best Golang Interview Questions)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase7Resources;