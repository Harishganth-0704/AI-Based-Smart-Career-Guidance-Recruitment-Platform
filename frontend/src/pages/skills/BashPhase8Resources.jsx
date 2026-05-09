import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Interview Preparation</h1>
                <p>Preparing for Bash scripting and Linux technical interviews by reviewing core concepts, text processing, and scenario-based questions.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Key Topics (Focus Areas) */}
            <div className="resource-section">
                <h2>✅ Focus Areas</h2>
                <div className="resource-item">
                    <ul>
                        <li>Basics of shell</li>
                        <li>Text processing (`sed` / `awk` / `grep`)</li>
                        <li>Scripting logic (loops, functions, error handling)</li>
                        <li>Debugging (`set -x`, `set -e`)</li>
                        <li>Scenario questions</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: 30+ Bash Interview Questions And Answers</h3>
                    <p>A collection of common Bash interview questions and answers to help you prepare. </p>
                    <a href="https://www.firehire.ai/interview-questions/bash" target="_blank" rel="noopener noreferrer" className="resource-link">Go to FireHire.ai</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: Top 25 Bash Scripting Interview Questions and Answers</h3>
                    <p>A list of top interview questions focused specifically on Bash scripting logic and commands.</p>
                    <a href="https://interviewprep.org/bash-scripting-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to InterviewPrep.org</a>
                </div>

                {/* --- Practice Platform --- */}
                <div className="resource-item">
                    <h3>💻 Practice Platform: HackerRank (Shell)</h3>
                    <p>Practice your Bash and shell scripting skills with hands-on coding challenges on HackerRank. </p>
                    <a href="https://www.hackerrank.com/domains/shell" target="_blank" rel="noopener noreferrer" className="resource-link">Go to HackerRank</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: BASH Interview Questions (Playlist)</h3>
                    <p>A video playlist dedicated to covering various Bash interview questions and concepts. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLq2CsnAdcr8yZpUSxtNIztJnNzRl8Lvkk"
                        title="YouTube video player (BASH Interview Questions Playlist)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase8Resources;
