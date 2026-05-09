// src/pages/skills/SQLRoadmap.jsx

import React, { useState } from 'react';
import RecommendedChannels from '../../components/RecommendedChannels';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const sqlStages = [
    { id: 1, title: 'Stage 1: Database Foundations & Setup', objective: 'To build a solid understanding of database concepts, SQL syntax, and how to set up and interact with relational databases like MySQL or PostgreSQL.' },
    { id: 2, title: 'Stage 2: Querying, Filtering & Relationships', objective: 'To develop the ability to write efficient SQL queries for data retrieval, filtering, and relationship handling using joins and aggregation techniques.' },
    { id: 3, title: 'Stage 3: Advanced SQL Concepts & Optimization', objective: 'To master complex SQL features such as window functions, indexing, normalization, and query optimization for handling real-world data efficiently.' },
    { id: 4, title: 'Stage 4: Data Engineering', objective: 'To gain hands-on experience with large datasets, ETL processes, and data warehousing concepts, bridging the gap between SQL development and data engineering tasks.' },
    { id: 5, title: 'Stage 5: Real-World Projects', objective: 'To apply SQL skills to practical business problems through end-to-end projects involving querying, analysis, and performance tuning for real-world datasets.' },
    { id: 6, title: 'Stage 6: Portfolio & Resume Strategy', objective: 'To build a professional portfolio showcasing SQL projects, design an achievement-based resume, and strengthen your LinkedIn and GitHub presence for job visibility.' },
    { id: 7, title: 'Stage 7: Interview Preparation', objective: 'To prepare for SQL developer interviews by practicing technical, logical, and scenario-based questions while improving problem-solving confidence and communication clarity.' },
]
const SQLRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete SQL Roadmap</h1>
                <p>From beginner to professional, this roadmap provides a structured path to mastering the universal language of data.</p>
            </header>
            <RecommendedChannels roadmapKey="sql" />
            <div className="roadmap-stages">
                {sqlStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/sql/resources/${stage.id}`} className="stage-resources-button">
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

export default SQLRoadmap;
