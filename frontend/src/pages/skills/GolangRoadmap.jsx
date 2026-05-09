// src/pages/skills/GolangRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const goStages = [
    { id: 1, title: 'Stage 1: Go Setup, Core Fundamentals & Programming Constructs', objective: 'Learn Go installation, basic syntax, variables, conditionals, loops, and functions to write simple programs confidently.' },
    { id: 2, title: 'Stage 2: Data Handling + OOP-Style Concepts + Data Structures', objective: 'Understand slices, maps, structs, interfaces, methods, and core data structures to model and organize data effectively.' },
    { id: 3, title: 'Stage 3: Intermediate/Advanced Go + Concurrency + Web + DB + Testing', objective: 'Gain skills in goroutines, channels, building REST APIs, integrating databases, and writing tests for reliable services.' },
    { id: 4, title: 'Stage 4: Professional Tooling, Packaging & Deployment', objective: 'Learn project structuring, modules, logging, Docker, CI/CD, and cloud deployment for production-ready apps.' },
    { id: 5, title: 'Stage 5: Real-World Projects', objective: 'Build complete, practical applications showcasing concurrency, APIs, DB, and deployment experience.' },
    { id: 6, title: 'Stage 6: Portfolio & Resume Strategy', objective: 'Present polished Go projects with clear documentation to strengthen developer brand & job readiness.' },
    { id: 7, title: 'Stage 7: Interview Preparation', objective: 'Prepare for coding challenges, Go-specific concepts, DSA, and system design to clear interviews confidently.' },
];

import RecommendedChannels from '../../components/RecommendedChannels';
const GolangRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Golang Roadmap</h1>
                <p>From beginner to professional, a structured path to mastering Google's fast and concurrent programming language.</p>
            </header>
            <RecommendedChannels roadmapKey="golang" />
            <div className="roadmap-stages">
                {goStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/golang/resources/${stage.id}`} className="stage-resources-button">
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

export default GolangRoadmap;
