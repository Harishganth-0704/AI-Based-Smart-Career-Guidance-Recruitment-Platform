import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Portfolio & Resume Building</h1>
                <p>Strategically showcasing your Python projects and skills on GitHub and your resume to impress potential employers and advance your career.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Project Selection: Choose 3–5 projects showcasing diverse skills (API, OOP, DB, ML, Web).</li>
                        <li>GitHub Showcase: Host code with clear READMEs and demo links.</li>
                        <li>Deployment: Use GitHub Pages or Streamlit Cloud to deploy applications.</li>
                        <li>Documentation: Clearly document Problem, Solution, Tech Stack, and Results for each project.</li>
                        <li>Portfolio Website: Create a personal developer portfolio website.</li>
                        <li>Highlighting Achievements: Showcase skills, certificates, and achievements.</li>
                        <li>Resume Optimization: Use measurable outcomes (e.g., “Built Flask API handling 5k requests/day”).</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: The Hitchhiker’s Guide to Python</h3>
                    <p>Includes valuable best practices for Python project structure, documentation, and code style, helpful for creating professional repositories. </p>
                    <a href="https://docs.python-guide.org/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: GitHub Portfolio Guide</h3>
                    <p>Official GitHub documentation providing a quickstart guide for creating and managing repositories, essential for building your portfolio.</p>
                    <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: How to Build a Dev Portfolio – FreeCodeCamp</h3>
                    <p>An article offering practical advice and steps on how to build an effective developer portfolio website to showcase your skills.</p>
                    <a href="https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to freeCodeCamp</a>
                </div>
                 {/* No specific course or YouTube video was provided for this phase */}
            </div>
        </div>
    </>
);

export default PythonStage10Resources;
