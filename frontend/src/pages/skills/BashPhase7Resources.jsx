import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const BashPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Portfolio & Resume Strategy</h1>
                <p>Showcasing your Bash skills via projects, a strong GitHub, and a resume that highlights measurable achievements.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>1) Portfolio Strategy</h2>
                <div className="resource-item">
                    <h3>✅ A. What to Include</h3>
                    <ul>
                        <li>Real Bash Projects (at least 5–8):
                            <ul>
                                <li>File Organizer, System Monitor, Log Analyzer, Backup Automation, CI/CD Helper Scripts, Docker/Kubernetes helper tools, Server Health Dashboard, Deployment Script.</li>
                            </ul>
                        </li>
                        <li>Project Readme Structure:
                            <ul>
                                <li>Problem Statement, Features, How it works (workflow), Tech Used, Folder Structure, How to run, Sample output, Future improvements.</li>
                            </ul>
                        </li>
                        <li>Focus Areas Demonstrated:
                            <ul>
                                <li>Automation, Error handling, Functions + modular scripting, Cron jobs, Parsing (awk, sed, grep), Config file handling, Logging, Secure scripts, Integration (Git, Docker, SSH, AWS CLI).</li>
                            </ul>
                        </li>
                        <li>Host on GitHub:
                            <ul>
                                <li>Use public repos, clean folder structure, tags + releases, mix of short and long modular scripts.</li>
                            </ul>
                        </li>
                        <li>Add Wiki/Documentation:
                            <ul>
                                <li>Usage examples, Tutorials, Performance notes.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>Project Types to Showcase</h3>
                    <ul>
                        <li>✅ System automation</li>
                        <li>✅ DevOps utility tools</li>
                        <li>✅ Networking/monitoring</li>
                        <li>✅ Data processing with awk/sed</li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>Bonus Portfolio Enhancements</h3>
                    <ul>
                        <li>Add shell linters (e.g., ShellCheck)</li>
                        <li>Convert scripts into installable Linux commands</li>
                        <li>Add unit tests (e.g., bats-core)</li>
                        <li>Integrate CI (GitHub Actions) for testing your scripts</li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>2) Resume Strategy</h2>
                <div className="resource-item">
                    <h3>✅ A. How to Position Yourself</h3>
                    <ul>
                        <li>Title examples: Shell Scripting Engineer | Bash Developer | DevOps Automation Engineer | Linux Automation Engineer</li>
                        <li>Focus on: Automation, Infrastructure scripting, Logs/Monitoring, System Admin tasks</li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>✅ B. Skills Section</h3>
                    <ul>
                        <li>Core Skills: Bash / Shell Scripting (core), awk, sed, grep, Linux administration, File/Process management, Text parsing, Cron job automation, Git, Regex</li>
                        <li>Tools/Plus Skills: Docker, SSH, CI/CD, Python basics, AWS CLI (optional)</li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>✅ C. Work/Project Bullet Points</h3>
                    <ul>
                        <li>Use Impact-based bullet points: ✅ Action + Task + Outcome</li>
                        <li>Example: "Automated log cleanup using Bash → reduced disk usage by 40%"</li>
                        <li>Example: "Built Bash automation to back up & compress directories nightly, improving recovery reliability."</li>
                        <li>Example: "Created system health monitor to track CPU, RAM & processes via cron + notify via email."</li>
                        <li>Example: "Wrote robust sed/awk scripts to parse logs & detect failures automatically."</li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>✅ D. Keywords to Match Job Descriptions</h3>
                    <ul>
                        <li>Linux, Shell scripting, Bash, Automation, Cron, Parsing (sed/awk/grep), Log monitoring, CI/CD, Containerization, SSH scripting, DevOps tools</li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>✅ E. Optional Certificates</h3>
                    <ul>
                        <li>Linux Foundation Certified System Admin (LFCS)</li>
                        <li>Red Hat Certified System Administrator (RHCSA)</li>
                        <li>AWS Cloud Practitioner</li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>✅ F. Add GitHub & Blog</h3>
                    <ul>
                        <li>Link to your portfolio.</li>
                        <li>Write tutorials → "How I automated X with Bash"</li>
                    </ul>
                </div>
            </div>

            {/* Section for Online Presence */}
            <div className="resource-section">
                <h2>3) Online Presence</h2>
                <div className="resource-item">
                    <ul>
                        <li>GitHub: Organize repos, add documentation, keep contribution graph active.</li>
                        <li>LinkedIn: Post about projects, code snippets, learning journey.</li>
                        <li>LeetCode/HackerRank: Show problem-solving stats in resume.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default BashPhase7Resources;
