// src/pages/skills/CPlusPlusRoadmap.jsx

import React, { useState } from 'react';
import RecommendedChannels from '../../components/RecommendedChannels';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const cppStages = [
    { id: 1, title: 'Stage 1: Introduction, Setup & Core Basics', objective: 'Build a strong foundation in C++ syntax, understand how programs compile and execute, and get familiar with the development environment (IDE, compiler, and debugging tools).' },
    { id: 2, title: 'Stage 2: Arrays, Strings, Pointers & Memory Management', objective: 'Master data storage and manipulation using arrays and strings, learn how memory works, and develop an in-depth understanding of pointers, references, and dynamic memory allocation.' },
    { id: 3, title: 'Stage 3: Object-Oriented Programming & Design Principles', objective: 'Learn to design efficient and modular programs using classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Apply design principles to write scalable and reusable code.' },
    { id: 4, title: 'Stage 4: STL, Templates & Modern C++', objective: 'Utilize the Standard Template Library (STL) for quick, optimized development; implement generic programming with templates; and explore modern C++ features (C++11–C++20) for clean, powerful code.' },
    { id: 5, title: 'Stage 5: Data Structures, Algorithms & Optimization', objective: 'Apply C++ to implement core data structures (like linked lists, stacks, queues, trees, and graphs), understand algorithmic logic, and focus on writing time- and memory-efficient programs.' },
    { id: 6, title: 'Stage 6: Real-World Projects', objective: 'Gain practical experience by building real-world C++ projects that integrate multiple concepts such as OOP, STL, and algorithms, showcasing your ability to solve real-life problems.' },
    { id: 7, title: 'Stage 7: Portfolio & Resume strategy', objective: 'Develop a professional portfolio by showcasing your best C++ projects on GitHub, write impactful resume points focusing on C++ and problem-solving skills, and align your work with job expectations.' },
    { id: 8, title: 'Stage 8: Interview Preparation', objective: 'Prepare for technical interviews by practicing C++-specific coding challenges, system design questions, and theory-based concepts; strengthen your problem-solving and communication skills.' },
];

const CPlusPlusRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete C++ Roadmap</h1>
                <p>The C++ Journey: From Zero to Employable Professional in High-Performance Applications.</p>
            </header>
            <RecommendedChannels roadmapKey="cplusplus" />
            <div className="skill-page-stages">
                {cppStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/cplusplus/resources/${stage.id}`} className="stage-resources-button">
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

export default CPlusPlusRoadmap;
