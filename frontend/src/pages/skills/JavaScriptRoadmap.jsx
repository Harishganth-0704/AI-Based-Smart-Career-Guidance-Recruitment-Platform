// src/pages/skills/JavaScriptRoadmap.jsx

import React, { useState } from 'react';
import RecommendedChannels from '../../components/RecommendedChannels';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const jsStages = [
    { id: 1, title: 'Stage 1: JavaScript Basics & Programming Foundations', objective: 'Master the fundamental syntax, data types, and the environment where JavaScript runs, including basic HTML/CSS context.' },
    { id: 2, title: 'Stage 2: Core JavaScript Concepts', objective: 'Go beyond basic syntax to understand functions, scope, closures, and how to structure data with arrays and objects.' },
    { id: 3, title: 'Stage 3: DOM Manipulation & Browser APIs', objective: 'Learn to make web pages interactive by manipulating the Document Object Model and responding to user events.' },
    { id: 4, title: 'Stage 4: Asynchronous JavaScript', objective: 'Master the concepts of callbacks, Promises, and async/await to handle long-running tasks like fetching data without freezing the browser.' },
    { id: 5, title: 'Stage 5: Object-Oriented & Functional Programming', objective: 'Understand the two major programming paradigms in JavaScript to write more organized, scalable, and efficient code.' },
    { id: 6, title: 'Stage 6: Advanced JavaScript Concepts', objective: 'Dive deeper into the internal workings of JavaScript, including memory management, the event loop, modules, and generators.' },
    { id: 7, title: 'Stage 7: JavaScript in Node.js', objective: 'Understand the key differences between running JavaScript on the client-side (browsers) and the server-side (Node.js).' },
    { id: 8, title: 'Stage 8: Modern JavaScript (ES6+)', objective: 'Become fluent in the modern syntax and features that make JavaScript a powerful and expressive language.' },
    { id: 9, title: 'Stage 9: JavaScript Framework(React.js)', objective: 'Learn a modern frontend framework (React recommended) to build complex, scalable single-page applications.' },
    { id: 10, title: 'Stage 10: State Management & Architecture', objective: 'Master patterns and libraries for managing complex application state to avoid "prop drilling" and build maintainable apps.' },
    { id: 11, title: 'Stage 11: Testing & Debugging', objective: 'Learn to write automated tests to ensure code quality and master debugging techniques to find and fix errors efficiently.' },
    { id: 12, title: 'Stage 12: JavaScript Build Tools & Performance', objective: 'Understand the modern JavaScript build process and learn to optimize applications for speed and performance.' },
    { id: 13, title: 'Stage 13: Deployment & DevOps Basics', objective: 'Learn how to take a completed application and make it live on the internet using modern deployment platforms and CI/CD practices.' },
    { id: 14, title: 'Stage 14: Real-World Projects', objective: 'Synthesize all learned skills into a portfolio of tangible, real-world projects that demonstrate job-ready capabilities.' },
    { id: 15, title: 'Stage 15: Portfolio & Resume Strategy', objective: 'Learn to market your skills effectively by creating a compelling portfolio, resume, and professional online presence.' },
    { id: 16, title: 'Stage 16: Interview Preparation', objective: 'Prepare for and succeed in technical interviews by practicing coding problems, communication, and system design.' },
];

const JavaScriptRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete JavaScript Roadmap</h1>
                <p>From zero to professional, this roadmap provides a structured path to mastering JavaScript and its vast ecosystem.</p>
            </header>
            <RecommendedChannels roadmapKey="javascript" />
            <div className="roadmap-stages">
                {jsStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/javascript/resources/${stage.id}`} className="stage-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JavaScriptRoadmap;
