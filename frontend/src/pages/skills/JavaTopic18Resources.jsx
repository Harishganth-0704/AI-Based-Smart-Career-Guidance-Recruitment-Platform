// src/pages/skills/JavaPhase18Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JavaPhase18Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 17B: Android App Development with Java</h1>
                <p>Learn the fundamentals of building native mobile applications for the Android platform using Java.</p>
                <Link to="/skills/java" className="back-link">← Back to Java Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Courses</h2>
                <div className="resource-item">
                    <h3>Android Development for Beginners (freeCodeCamp)</h3>
                    <p>A full course on YouTube that teaches you how to build Android apps from scratch using Java and Android Studio.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fis26HvvDII" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Android Basics in Java (Google)</h3>
                    <p>An official, free course from Google designed for people with no previous programming experience to learn the basics of building Android apps.</p>
                    <a href="https://developer.android.com/courses/android-basics-java/course" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Course</a>
                </div>
            </div>
        </div>
    </>
);
export default JavaPhase18Resources;
