// src/pages/CloudArchitectRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';

const styles = `
.ca-roadmap-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.ca-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.ca-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.ca-roadmap-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.ca-phase-card {
  background-color: #1e1e30;
  border: 1px solid #33334d;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.ca-phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ca-phase-header h2 {
  font-size: 1.6rem;
  color: #00e676;
  margin: 0;
}

.ca-phase-toggle {
  font-size: 2rem;
  color: #8258dc;
  transition: transform 0.3s ease;
}

.ca-phase-card.active .ca-phase-toggle {
  transform: rotate(45deg);
}

.ca-phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid #33334d;
}

.ca-phase-content p {
  color: #b0b0b0;
  line-height: 1.7;
}

.ca-resources-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #8258dc;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.ca-resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-2px);
}
`;

const roadmapStages = [
    { id: 1, title: 'Stage 1: Foundations of IT & Networking', objective: 'Master the on-premises concepts of operating systems, virtualization, and networking that form the blueprint for all cloud services.' },
    { id: 2, title: 'Stage 2: Core Cloud Concepts & Certified Solutions Architect Associate', objective: 'Translate foundational IT knowledge into the language of the cloud, understanding its defining characteristics, service models, and business advantages.' },
    { id: 3, title: 'Stage 3: Certified Solutions Architect Professional ', objective: 'Make an informed, data-driven decision on which major cloud platform (AWS, Azure, or GCP) to master first.' },
    { id: 4, title: 'Stage 4: Infrastructure as Code (IaC) with Containers & Orchestration', objective: 'Learn to manage and provision infrastructure through code using Terraform, turning architectural designs into automated and repeatable reality.' },
    { id: 5, title: 'Stage 5: DevOps & Automation for Architects', objective: 'Understand DevOps principles and the tools for CI/CD (GitHub Actions), containerization (Docker), and configuration management (Ansible).' },
    { id: 6, title: 'Stage 6: Security & Compliance', objective: 'Master the essential security services, best practices (IAM, network security), and compliance frameworks to build trusted cloud environments.' },
    { id: 7, title: 'Stage 7:  Architectures & Design Patterns', objective: 'Move beyond classic models to embrace modern, cloud-native designs like microservices, serverless, and event-driven architectures.' },
    { id: 8, title: 'Stage 8: Cloud Networking Mastery', objective: 'Develop a deep understanding of advanced cloud networking, including hybrid connectivity, global load balancing, and multi-VPC design.' },
    { id: 9, title: 'Stage 9: Observability, Monitoring & Logging', objective: 'Learn to design systems that are observable from day one, using logs, metrics, and traces to maintain reliability and performance.' },
    { id: 10, title: 'Stage 10: Real-World Projects & Architecture Diagrams', objective: 'Synthesize all knowledge into tangible portfolio projects and learn to communicate designs effectively through professional architecture diagrams.' },
    { id: 11, title: 'Stage 11: Certifications Roadmap', objective: 'Follow a structured, role-based path to validate your knowledge with industry-recognized certifications for your chosen platform.' },
    { id: 12, title: 'Stage 12: Portfolio & Resume Strategy', objective: 'Craft a compelling portfolio and resume that prove your ability to design, build, and document complex cloud solutions.' },
    { id: 13, title: 'Stage 13: Interview Preparation', objective: 'Systematically prepare for the multi-faceted Cloud Architect interview, covering behavioral, technical, and system design questions.' }
];

const CloudArchitectRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="ca-roadmap-container">
                <header className="ca-roadmap-header">
                    <h1>The Complete Cloud Architect Roadmap</h1>
                    <p>Your comprehensive guide from zero to professional. This roadmap covers the essential skills in IT foundations, cloud concepts, IaC, security, and advanced architectures needed to excel in a cloud architect career.</p>
                </header>
                <RecommendedChannels roadmapKey="cloud-architect" />
                {roadmapStages.map(stage => (
                    <div key={stage.id} className={`ca-phase-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="ca-phase-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="ca-phase-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="ca-phase-content">
                                <p>{stage.objective}</p>
                                <Link to={`/cloud-architect/resources/${stage.id}`} className="ca-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CloudArchitectRoadmap;
