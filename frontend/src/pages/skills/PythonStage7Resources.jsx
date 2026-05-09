import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Specializations</h1>
                <p>Exploring various specialization paths where Python is widely used, including Web Development, Data Science, Automation, and GUI Development.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics (Specialization Options)</h2>
                <div className="resource-item">
                    <ul>
                        <li>**Web Development:** Flask/Django frameworks</li>
                        <li>**Data Science:** NumPy, pandas, scikit-learn libraries</li>
                        <li>**Automation:** Selenium (web automation), PyAutoGUI (GUI automation)</li>
                        <li>**GUI Development:** Tkinter, PyQt libraries</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Python Crash Course</h3>
                    <p>A project-based introduction covering fundamentals and then diving into specific applications like data science, web apps, and automation. </p>
                    <a href="https://ehmatthes.github.io/pcc_2e/" target="_blank" rel="noopener noreferrer" className="resource-link">View Project Website</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Kaggle Learn Python</h3>
                    <p>Interactive Python tutorials focused on data science applications, covering basics, Pandas, and data visualization.</p>
                    <a href="https://www.kaggle.com/learn/python" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Kaggle Learn</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Harvard CS50’s Introduction to Programming with Python</h3>
                    <p>An acclaimed introductory programming course using Python, covering fundamentals, libraries, and best practices. </p>
                    <a href="https://cs50.harvard.edu/python/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to CS50 Python</a>
                </div>
                 <div className="resource-item">
                    <h3>🎓 Course: Python Web Dev Pro: Flask, Django, HTML, CSS & Bootstrap (Udemy)</h3>
                    <p>Learn full-stack web development with Python using popular frameworks like Flask and Django. </p>
                    <a href="https://www.udemy.com/course/python-web-dev-pro-flask-django-html-css-bootstrap/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                 <div className="resource-item">
                    <h3>🎓 Course: Python for Data Science and Machine Learning Bootcamp (Udemy)</h3>
                    <p>A comprehensive bootcamp covering Python for data analysis, visualization, machine learning, and more. </p>
                    <a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                 <div className="resource-item">
                    <h3>🎓 Course: Selenium Webdriver with PYTHON from Scratch + Frameworks (Udemy)</h3>
                    <p>Master web automation using Selenium WebDriver with Python, including building robust automation frameworks. [Image of Selenium logo]</p>
                    <a href="https://www.udemy.com/course/learn-selenium-automation-in-easy-python-language/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: GUI Development with Python and Tkinter (Udemy)</h3>
                    <p>Learn to build desktop graphical user interfaces (GUIs) using Python's built-in Tkinter library. </p>
                    <a href="https://www.udemy.com/course/desktop-gui-python-tkinter/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>


                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: freeCodeCamp – Data Science with Python</h3>
                    <p>A full video course focused on applying Python skills specifically to the field of data science, covering key libraries and techniques. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/r-uOLxNrNk8?si=mxIFjch6NUf5iORF"
                        title="YouTube video player (freeCodeCamp - Data Science with Python)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                 {/* --- ADDED NEW YOUTUBE VIDEOS --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Selenium Python - Introduction to Python Selenium Training</h3>
                    <p>A playlist introducing Selenium automation with Python, covering setup and basic commands for web browser automation.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLL34mf651faPOf5PE5YjYgTRITzVzzvMz"
                        title="YouTube video player (Selenium Python Introduction)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: GUI: Tkinter, PyQt</h3>
                    <p>A playlist covering GUI development in Python using popular libraries like Tkinter and PyQt.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLqF6vzpT2rGpNb7jx85qvDH9N337Tar0f"
                        title="YouTube video player (Python GUI Development)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage7Resources;

