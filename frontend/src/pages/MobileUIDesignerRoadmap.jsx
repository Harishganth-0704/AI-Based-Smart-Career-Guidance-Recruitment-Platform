// src/pages/MobileUIDesignerRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';
import './MobileUIDesignerRoadmap.css'; // We will create this CSS file

const uiDesignerStages = [
    { id: 1, title: 'Stage 1: Design Foundations & Orientation', objective: 'Build a solid theoretical foundation in UI/UX, Design Thinking, User-Centered Design, and Mobile-First Principles.' },
    { id: 2, title: 'Stage 2: Design Foundations & Orientation', objective: 'Become fluent in the visual languages of Apple\'s Human Interface Guidelines and Google\'s Material Design.' },
    { id: 3, title: 'Stage 3: Visual UI Design & Tools Mastery', objective: 'Acquire essential UX methodologies like creating user personas, journey mapping, and understanding information architecture.' },
    { id: 4, title: 'Stage 4: Prototyping, Interaction & Developer Handoff', objective: 'Develop your aesthetic eye and learn the fundamental building blocks of visual communication: typography, color theory, and layout.' },
    { id: 5, title: 'Stage 5: Design Systems & Collaboration', objective: 'Learn to translate abstract concepts into tangible screen layouts and create interactive simulations of your app.' },
    { id: 6, title: 'Stage 6: Real-World Projects', objective: 'Move from basic knowledge to confident, efficient execution in the industry-standard design tool, Figma.' },
    { id: 7, title: 'Stage 7: Portfolio & Resume Strategy', objective: 'Learn to design the "conversation" between the user and the product using animations and micro-interactions.' },
    { id: 8, title: 'Stage 8: Interview Preparation', objective: 'Create flexible layouts that adapt gracefully to different screen sizes, orientations, and form factors like tablets.' },
];

const MobileUIDesignerRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="roadmap-page-container">
            <header className="roadmap-page-header">
                <h1>The UI/UX Designer Professional Roadmap</h1>
                <p>From beginner to job-ready, a structured path to creating beautiful, intuitive, and impactful mobile experiences.</p>
            </header>
            <RecommendedChannels roadmapKey="ui-designer" />
            <div className="roadmap-stages">
                {uiDesignerStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/mobile-ui-designer/resources/${stage.id}`} className="stage-resources-button">
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

export default MobileUIDesignerRoadmap;
