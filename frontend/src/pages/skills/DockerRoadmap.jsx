import React, { useState } from 'react';
import RecommendedChannels from '../../components/RecommendedChannels';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const dockerStages = [
    { id: 1, title: 'Stage 1: Foundations of Containers & Docker Setup', objective: 'To understand the core concepts of containerization, differences between containers and virtual machines, and set up a functional Docker environment for hands-on learning.' },
    { id: 2, title: 'Stage 2: Core Docker Concepts & Images', objective: 'To master building, managing, and running Docker images and containers, along with learning how to write efficient Dockerfiles and use core Docker CLI commands.' },
    { id: 3, title: 'Stage 3: Data, Networking & Multi-Container Apps', objective: 'To learn how to manage persistent data, configure Docker networks, and orchestrate multiple containers using Docker Compose for real-world applications.' },
    { id: 4, title: 'Stage 4: Security, CI/CD & Deployment', objective: 'To understand Docker security best practices, integrate Docker into CI/CD pipelines, and deploy containerized applications to various environments securely and efficiently.' },
    { id: 5, title: 'Stage 5: Storage, Optimization & Troubleshooting', objective: 'To develop the ability to optimize Docker performance, manage container storage effectively, and troubleshoot common issues in containerized environments.' },
    { id: 6, title: 'Stage 6: Real-World Projects', objective: 'To apply Docker knowledge to practical scenarios by building, testing, and deploying real-world applications that demonstrate containerization and automation skills.' },
    { id: 7, title: 'Stage 7: Portfolio & Resume Strategy', objective: 'To create a strong professional portfolio showcasing Docker projects, optimize resumes for DevOps roles, and establish an impactful GitHub and LinkedIn presence.' },
    { id: 8, title: 'Stage 8: Interview Preparation', objective: 'To confidently prepare for Docker and DevOps interviews by revising core concepts, practicing scenario-based questions, and effectively communicating project experiences.' },
];

const DockerRoadmap = () => {
// ... existing code ...
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Docker Roadmap</h1>
                <p>From zero to professional, this roadmap provides a structured path to mastering Docker and the world of containerization.</p>
            </header>
            <RecommendedChannels roadmapKey="docker" />
            <div className="roadmap-stages">
                {dockerStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">{activeStage === stage.id ? '−' : '+'}</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/docker/resources/${stage.id}`} className="stage-resources-button">
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

export default DockerRoadmap;
