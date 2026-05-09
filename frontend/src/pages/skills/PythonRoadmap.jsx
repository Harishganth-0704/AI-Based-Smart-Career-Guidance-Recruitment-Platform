// src/pages/skills/PythonRoadmap.jsx

import React, { useState } from 'react';
import RecommendedChannels from '../../components/RecommendedChannels';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const pythonStages = [
    { id: 1, title: 'Stage 1: Basics & Setup', objective: 'To understand fundamental programming concepts, install Python, and set up a development environment to begin coding confidently.' },
    { id: 2, title: 'Stage 2: Core Python & Data Structures', objectives: 'To build a strong foundation in Python syntax, control flow, functions, and master data structures like lists, tuples, sets, and dictionaries.' },
    { id: 3, title: 'Stage 3: OOPS + Data Strutures + File Handling + OS ', objective: 'To learn object-oriented programming principles, manage files effectively, understanding the concepts of data structures & algorithms and interact with the operating system using Python’s built-in modules.' },
    { id: 4, title: 'Stage 4: Standard Library & Functional Programming', objective: 'To explore Python’s powerful standard libraries and understand functional programming concepts like lambda, map, filter, and decorators.' },
    { id: 5, title: 'Stage 5: Intermediate to Advanced Concepts', objective: 'To advance your Python skills by mastering iterators, generators, exception handling, regular expressions, and performance optimization techniques.' },
    { id: 6, title: 'Stage 6: APIs, Networking & Databases', objective: 'To learn how to connect Python with APIs, handle web requests, work with sockets, and integrate databases for backend data management.' },
    { id: 7, title: 'Stage 7: Specializations', objective: 'To explore specialized areas of Python such as data analysis, web development, machine learning, automation, or cybersecurity based on your career goals.' },
    { id: 8, title: 'Stage 8: Version Control, Testing & Deployment', objective: 'To master Git for collaboration, implement testing frameworks for code reliability, and deploy Python applications effectively.'},
    { id: 9, title: 'Stage 9: Real-World Projects', objective: 'To apply your Python knowledge by developing end-to-end projects that demonstrate real-world problem-solving and technical proficiency.' },
    { id: 10, title: 'Stage 10: Portfolio & Resume Building', objective: 'To create a strong developer portfolio and craft an ATS-friendly resume that highlights your Python skills, projects, and technical achievements.' },
    { id: 11, title: 'Stage 11: Interview Preparation', objective: ' To prepare for coding and technical interviews by practicing problem-solving, algorithmic thinking, and common Python interview questions..' },
];

const PythonRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Python Roadmap</h1>
                <p>From zero to professional, this roadmap provides a structured path to mastering the Python programming language and its vast ecosystem.</p>
            </header>
            <RecommendedChannels roadmapKey="python" />
            <div className="roadmap-stages">
                {pythonStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/python/resources/${stage.id}`} className="stage-resources-button">
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

export default PythonRoadmap;

