// src/pages/skills/CRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const cStages = [
    { id: 1, title: 'Stage 1: The C Landscape: History, Relevance, and Mindset', objective: 'Understand C\'s place in computing history, its enduring relevance, and the core design philosophy of programmer control.' },
    { id: 2, title: 'Stage 2: Environment Setup and First Program', objective: 'Establish a professional development environment using VS Code and GCC/GDB and successfully compile and run your first program.' },
    { id: 3, title: 'Stage 3: Anatomy of a C Program and the Compilation Process', objective: 'Deconstruct a C program into its core sections and understand the four-stage compilation model (preprocessing, compilation, assembly, linking).' },
    { id: 4, title: 'Stage 4: Language Fundamentals: Data, I/O, and Expressions', objective: 'Learn the basic vocabulary of C: data types, variables, and user interaction with `printf` and `scanf`.' },
    { id: 5, title: 'Stage 5: Operators and Bit Manipulation', objective: 'Master the full spectrum of C operators, with a special emphasis on bitwise operations for low-level programming.' },
    { id: 6, title: 'Stage 6: Logic and Control Flow', objective: 'Learn to direct the execution of your programs with conditional statements (if, switch) and loops (for, while).' },
    { id: 7, title: 'Stage 7: Modular Programming with Functions', objective: 'Encapsulate logic into reusable blocks, and master parameter passing, including emulating "call by reference" with pointers.' },
    { id: 8, title: 'Stage 8: Aggregate Data: Arrays and Strings', objective: 'Handle collections of data using arrays and understand C\'s specific implementation of strings as null-terminated character arrays.' },
    { id: 9, title: 'Stage 9: The Soul of C: Pointers and Memory Addressing', objective: 'Gain a deep, intuitive understanding of pointers, memory addresses, and pointer arithmetic.' },
    { id: 10, title: 'Stage 10: Dynamic Memory Allocation', objective: 'Learn to manually manage memory on the heap using `malloc`, `calloc`, `realloc`, and `free`.' },
    { id: 11, title: 'Stage 11: Creating Custom Data Types', objective: 'Model complex information by creating your own data types with `struct`, `union`, and `enum`.' },
    { id: 12, title: 'Stage 12: File I/O Operations', objective: 'Learn to persist data by reading from and writing to files stored on disk using the `<stdio.h>` library.' },
    { id: 13, title: 'Stage 13: The Build Process and Advanced Language Features', objective: 'Manage multi-file projects, use the preprocessor effectively, and handle command-line arguments.' },
    { id: 14, title: 'Stage 14: Implementing Fundamental Data Structures', objective: 'Synthesize your knowledge of pointers and structs to build essential data structures like linked lists from scratch.' },
    { id: 15, title: 'Stage 15: Debugging, Profiling, and Quality Assurance', objective: 'Learn the professional toolchain for finding bugs (GDB), detecting memory errors (Valgrind), and identifying performance bottlenecks (gprof).' },
    { id: 16, title: 'Stage 16: Project-Based Application', objective: 'Synthesize all your skills by building complete, non-trivial projects that are suitable for a professional portfolio.' },
    { id: 17, title: 'Stage 17: Preparing for Employment', objective: 'Focus on the non-technical and meta-skills required to secure a job, including secure coding, interview preparation, and portfolio presentation.' },
];

import RecommendedChannels from '../../components/RecommendedChannels';
const CRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The C Programmer's Odyssey</h1>
                <p>A complete roadmap from zero to systems-level employability, built on a deep understanding of how computers work.</p>
            </header>
            <RecommendedChannels roadmapKey="c" />
            <div className="roadmap-stages">
                {cStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/c/resources/${stage.id}`} className="stage-resources-button">
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

export default CRoadmap;

