// src/pages/CyberPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Scripting & Automation</h1>
                <p>Developing proficiency in scripting with Python, Bash, and PowerShell to automate security tasks, analyze data, and streamline operations.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Python for security (network scanning, automation, API calls)</li>
                        <li>Bash / PowerShell scripting</li>
                        <li>Automation of scanning, log parsing, alerting, remediation tasks</li>
                        <li>Use APIs of security tools (SIEM, EDR) for automation</li>
                        <li>Mass operations: bulk analysis, fuzzing, automation frameworks</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books --- */}
                <div className="resource-item">
                    <h3>📗 Book: Black Hat Python, 2nd Edition: Python Programming for Hackers and Pentesters</h3>
                    <p>A hands-on guide to leveraging Python for offensive security, covering network sniffing, web hacking, and more.</p>
                    <a href="https://www.amazon.in/Black-Hat-Python-2nd-Programming/dp/1718501129/ref=sr_1_1?dib=eyJ2IjoiMSJ9.TcQz9bbEnaP916TgDPXdGkrS7RsCdtwG78RuuoL_Wp54c0bjzkSs8Tzu3hwNI5XS4cmIX-bziZLmekErm-TtdyvRuoi_uE6YS-lOE-LnPKJw0iGk44fYyj6BvclM7QbuzuAMVfrLS4ksaRO8kEZMMWoHi-9RnccKiO8PEk9WBJCgwWHsfjXjeWqvdmwMBgVzOAjlRUa9mn4BQ3lM6dTckP_0fVo99jjeac7xa_dMa2o.93xqGBOwI-_vzKLFJPIY7lU1fNkA3WqoMNUyaUyDzIk&dib_tag=se&keywords=Black+Hat+Python+by+Justin&qid=1760255024&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Python for Cybersecurity Specialization — Coursera</h3>
                    <p>A specialization focused on applying Python programming to solve various cybersecurity challenges and automate tasks.</p>
                    <a href="https://www.coursera.org/specializations/pythonforcybersecurity" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: PowerShell for Automating Administration — Coursera</h3>
                    <p>Learn how to use PowerShell to automate administrative tasks, a crucial skill for security professionals in Windows environments.</p>
                    <a href="https://www.coursera.org/learn/packt-powershell-for-automating-administration-zi82v" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Python for Cyber Security FULL Course in 3 Hours with Practical</h3>
                    <p>A comprehensive, hands-on course covering Python's application in cybersecurity, including practical examples and tools.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/VNvNuIDrZo0?si=H312EOwqNwtArIZH"
                        title="YouTube video player (Python for Cyber Security)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: PowerShell for Hackers</h3>
                    <p>Learn how PowerShell can be used for offensive security operations and penetration testing.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/s2kquCwKNs8?si=15vQUuiFNCKPuQM4"
                        title="YouTube video player (PowerShell for Hackers)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: How To Write Bash Scripts In Linux - Complete Guide</h3>
                    <p>A complete guide to writing Bash scripts in Linux, essential for automating tasks and managing systems in a security context.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/boqC9QenshY?si=3U-Om2y0nDFmzx8S"
                        title="YouTube video player (Bash Scripting Guide)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase6Resources;