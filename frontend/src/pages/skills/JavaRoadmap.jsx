// src/pages/skills/JavaRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const javaParts = [
    {
        part: "Part I: The Bedrock - Java Foundations",
        stages: [
            { id: 1, title: 'Stage 1: Introduction to the Java Ecosystem', objective: 'Understand the roles of the JDK, JRE, and JVM, and set up a professional development environment.' },
            { id: 2, title: 'Stage 2: Java Programming Basics', objective: 'Learn the fundamental syntax for storing data, performing operations, and interacting with the user.' },
            { id: 3, title: 'Stage 3: Controlling Program Flow', objective: 'Direct the execution path of a program by making decisions with conditionals and repeating actions with loops.' },
            { id: 4, title: 'Stage 4: Building Blocks of Code - Methods', objective: 'Understand how to encapsulate logic into reusable, modular blocks of code called methods.' },
        ]
    },
    {
        part: "Part II: Thinking in Objects - Mastering OOP",
        stages: [
            { id: 5, title: 'Stage 5: The Four Pillars of OOP', objective: 'Conceptually understand Encapsulation, Inheritance, Polymorphism, and Abstraction.' },
            { id: 6, title: 'Stage 6: Classes, Objects, and Constructors', objective: 'Translate OOP concepts into practical Java code by creating and manipulating classes and objects.' },
            { id: 7, title: 'Stage 7: Advanced OOP Concepts', objective: 'Explore more sophisticated tools for abstraction and code organization, like abstract classes and interfaces.' },
        ]
    },
    {
        part: "Part III: Building Robust Applications - Intermediate Java",
        stages: [
            { id: 8, title: 'Stage 8: Organizing Your Code', objective: 'Learn to structure larger projects using packages and control visibility with access modifiers.' },
            { id: 9, title: 'Stage 9: Handling the Unexpected - Exception Handling', objective: 'Write resilient code that can gracefully handle runtime errors and exceptional conditions.' },
            { id: 10, title: 'Stage 10: Working with Text - String Handling', objective: 'Effectively use Java\'s classes for creating, manipulating, and comparing text data.' },
            { id: 11, title: 'Stage 11: Managing Data - The Collections Framework', objective: 'Learn to use Java\'s powerful built-in data structures for storing groups of objects.' },
            { id: 12, title: 'Stage 12: Type-Safe Code - Generics & Enums', objective: 'Write more robust and reusable code by enforcing type constraints at compile time.' },
        ]
    },
    {
        part: "Part IV: High-Performance Java - Advanced Concepts",
        stages: [
            { id: 13, title: 'Stage 13: Interacting with the File System - File I/O', objective: 'Learn how to read data from and write data to files using both traditional and modern Java I/O APIs.' },
            { id: 14, title: 'Stage 14: Concurrent Programming - Multithreading', objective: 'Understand how to execute multiple tasks concurrently to improve application performance and responsiveness.' },
            { id: 15, title: 'Stage 15: Under the Hood - JVM & Memory Management', objective: 'Gain a foundational understanding of how the Java Virtual Machine manages memory.' },
            { id: 16, title: 'Stage 16: Writing Modern Java (Java 8+)', objective: 'Master the functional programming features that have become the modern standard for writing concise Java code.' },
        ]
    },
    {
        part: "Part V: Specialization Tracks (Choose One)",
        stages: [
            { id: 17, title: 'Stage 17A: Backend Development with Spring Boot', objective: 'Learn to build production-grade REST APIs and microservices using the de facto standard Java framework.' },
            { id: 18, title: 'Stage 17B: Android App Development with Java', objective: 'Learn the fundamentals of building native mobile applications for the Android platform.' },
        ]
    },
    {
        part: "Part VI: The Professional Toolkit",
        stages: [
            { id: 19, title: 'Stage 18: Project & Dependency Management - Build Tools', objective: 'Learn how to automate the process of compiling, testing, and packaging a project with Maven or Gradle.' },
            { id: 20, title: 'Stage 19: Ensuring Quality - Testing', objective: 'Learn the principles and practices of automated testing with JUnit and Mockito to ensure code quality.' },
            { id: 21, title: 'Stage 20: Writing Professional Code - Best Practices', objective: 'Learn the principles like SOLID and Clean Code that lead to maintainable, professional-quality software.' },
        ]
    },
    {
        part: "Part VII: From Learner to Employed Developer",
        stages: [
            { id: 22, title: 'Stage 21: Building Your Portfolio - Real-World Projects', objective: 'Solidify all learned concepts by building tangible, portfolio-worthy projects.' },
            { id: 23, title: 'Stage 22: Acing the Interview', objective: 'Systematically prepare for the technical and behavioral aspects of a Java developer job interview.' },
        ]
    }
];

import RecommendedChannels from '../../components/RecommendedChannels';
const JavaRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Zero-to-Employable Java Developer Roadmap</h1>
                <p>A senior architect's guide to mastering Java, from core principles to professional, enterprise-grade application development.</p>
            </header>
            <RecommendedChannels roadmapKey="java" />
            <div className="java-roadmap-parts">
                {javaParts.map((part, index) => (
                    <div key={index} className="part-section">
                        <h2 className="part-title">{part.part}</h2>
                        {part.stages.map(stage => (
                            <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                                <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                                    <h3>{stage.title}</h3>
                                    <span className="stage-toggle">+</span>
                                </div>
                                {activeStage === stage.id && (
                                    <div className="stage-content">
                                        <p>{stage.objective}</p>
                                        <Link to={`/skills/java/resources/${stage.id}`} className="stage-resources-button">
                                            View Details & Resources
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JavaRoadmap;

