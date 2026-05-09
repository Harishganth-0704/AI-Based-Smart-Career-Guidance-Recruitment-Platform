// src/pages/skills/BashRoadmap.jsx

import React, { useState } from 'react';
import RecommendedChannels from '../../components/RecommendedChannels';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const bashStages = [
    { id: 1, title: 'Stage 1: Shell Basics & Core Linux Commands', objective: 'Gain foundational understanding of Linux shell environments and develop confidence using essential command-line tools to navigate, manage files, and interact with the operating system efficiently.' },
    { id: 2, title: 'Stage 2: Text Processing, Redirection & Filters', objective: 'Learn to manipulate text streams using redirection, pipes, and filters to extract, transform, and process data efficiently — preparing for automation and scripting tasks.' },
    { id: 3, title: 'Stage 3: Bash Scripting Foundations', objective: 'Understand the basics of writing and executing Bash scripts including variables, user input, and exit statuses — enabling simple task automation.' },
    { id: 4, title: 'Stage 4: Structuring & Advanced Scripting', objective: 'Build structured, reusable, and maintainable shell scripts using control flow, loops, functions, debugging, and error handling to solve real operational problems.' },
    { id: 5, title: 'Stage 5: Automation & Real-World Integrations', objective: 'Automate recurring system tasks and integrate Bash with other tools, services, files, and system utilities to support DevOps and system administration workflows.' },
    { id: 6, title: 'Stage 6: Real-World Projects', objective: 'Apply accumulated Bash knowledge to build real-world, production-ready tools that demonstrate practical capability in automation, security, logging, text processing, and system monitoring.' },
    { id: 7, title: 'Stage 7: Portfolio & Resume Strategy', objective: 'Showcase Bash skills through well-documented GitHub projects and highlight scripting-based achievements professionally in a resume/portfolio for Bash/sysadmin/DevOps roles.' },
    { id: 8, title: 'Stage 8: Interview Preparation', objective: 'Prepare for job interviews by strengthening Bash problem-solving skills, understanding system concepts, practicing scenario-based challenges, and learning frequently asked questions.' },
];

const BashRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Bash Roadmap</h1>
                <p>From beginner to professional, a structured path to mastering the command-line for automation, DevOps, and cybersecurity.</p>
            </header>
            <RecommendedChannels roadmapKey="bash" />
            <div className="skill-page-stages">
                {bashStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/bash/resources/${stage.id}`} className="stage-resources-button">
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

export default BashRoadmap;
