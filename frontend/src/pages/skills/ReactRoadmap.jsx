// src/pages/skills/ReactRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const reactStages = [
    { id: 1, title: 'Stage 1: Web & JavaScript Prerequisites', objective: 'Build an unshakable understanding of the foundational technologies of the web: HTML, CSS, and modern JavaScript (ES6+).' },
    { id: 2, title: 'Stage 2: React Basics & Core Concepts', objective: 'Understand the core philosophy of React, its essential building blocks like JSX and components, and set up a modern development environment with Vite.' },
    { id: 3, title: 'Stage 3: React Hooks (Foundational & Advanced)', objective: 'Master the functions that let you "hook into" React\'s state and lifecycle features, the foundation of modern React development.' },
    { id: 4, title: 'Stage 4: State Management Approaches', objective: 'Explore scalable solutions for managing application state, from React\'s built-in Context API to powerful libraries like Zustand and Redux.' },
    { id: 5, title: 'Stage 5: Routing & Navigation', objective: 'Learn to build fluid Single-Page Applications (SPAs) with client-side routing using the industry-standard React Router.' },
    { id: 6, title: 'Stage 6: Forms & User Input', objective: 'Master the patterns for managing form state in React, from controlled components to powerful libraries like React Hook Form.' },
    { id: 7, title: 'Stage 7: Working with APIs & Data Fetching', objective: 'Learn to communicate with servers to fetch and manage data, using both traditional methods and modern server state libraries like TanStack Query.' },
    { id: 8, title: 'Stage 8: Component Architecture & Best Practices', objective: 'Learn the principles and patterns for structuring React applications to be clean, maintainable, and scalable.' },
    { id: 9, title: 'Stage 9: Styling in React', objective: 'Explore the most popular approaches to styling React components, including CSS Modules, CSS-in-JS, and the dominant Tailwind CSS.' },
    { id: 10, title: 'Stage 10: Performance Optimization', objective: 'Learn to use profiling tools to identify what makes a React app slow and master the techniques to optimize it for a great user experience.' },
    { id: 11, title: 'Stage 11: Testing & Debugging', objective: 'Learn the professional discipline of writing automated tests with Jest and RTL to ensure your application is reliable and bug-free.' },
    { id: 12, title: 'Stage 12: Backend Integration & Fullstack with React', objective: 'Understand how to connect to and build backends for your React applications using REST, GraphQL, BaaS, and frameworks like Next.js.' },
    { id: 13, title: 'Stage 13: React with TypeScript', objective: 'Learn to use TypeScript with React to add static types, catch errors early, and build more robust, scalable applications.' },
    { id: 14, title: 'Stage 14: Advanced Topics', objective: 'Explore cutting-edge concepts like React Server Components, Suspense for data fetching, and Progressive Web Apps (PWAs).' },
    { id: 15, title: 'Stage 15: Real-World Project Ideas', objective: 'Synthesize your knowledge by building a portfolio of complex, real-world projects that demonstrate your job-ready skills.' },
    { id: 16, title: 'Stage 16: Deployment & CI/CD', objective: 'Learn to take your completed applications live on the internet and automate the deployment process using modern CI/CD practices.' },
    { id: 17, title: 'Stage 17: Portfolio & Resume Strategy', objective: 'Learn to effectively market your skills by creating a compelling portfolio, a professional resume, and an optimized GitHub profile.' },
    { id: 18, title: 'Stage 18: Interview Preparation', objective: 'Prepare for and succeed in technical interviews by practicing coding challenges, communication, and system design questions.' },
];

import RecommendedChannels from '../../components/RecommendedChannels';
const ReactRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete React Roadmap</h1>
                <p>From zero to employable, this roadmap provides a strategic path to mastering React and the modern frontend ecosystem.</p>
            </header>
            <RecommendedChannels roadmapKey="react" />
            <div className="roadmap-stages">
                {reactStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/react/resources/${stage.id}`} className="stage-resources-button">
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

export default ReactRoadmap;
