import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Standard Library & Functional Programming</h1>
                <p>Exploring Python's powerful standard library modules and diving into functional programming concepts like lambdas and map/filter/reduce.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Standard Library Modules: datetime, collections, itertools, functools, json, re (regular expressions), logging</li>
                        <li>Functional Programming: Lambdas, map(), filter(), reduce()</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: The Python Standard Library by Example (Doug Hellmann)</h3>
                    <p>While the official documentation serves as the primary reference, this book provides practical examples and explanations for many standard library modules. </p>
                    <a href="https://docs.python.org/3/library/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Official Python Docs</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Real Python – Standard Library Overview</h3>
                    <p>A well-organized overview and reference for Python's standard library, offering quick insights into various modules.</p>
                    <a href="https://realpython.com/ref/stdlib/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Real Python</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Python 3 Standard Library Essentials (Udemy)</h3>
                    <p>A course dedicated to exploring the essential modules within Python 3's standard library to enhance your programming efficiency. </p>
                    <a href="https://www.udemy.com/course/python-3-standard-library/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Programming with Mosh – Functional Python</h3>
                    <p>Learn the basics of functional programming concepts in Python, including lambdas, map, filter, and reduce, from a popular instructor. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kr0mpwqttM0?si=bwLxurh3tGAdJPAr"
                        title="YouTube video player (Programming with Mosh - Functional Python)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage4Resources;
