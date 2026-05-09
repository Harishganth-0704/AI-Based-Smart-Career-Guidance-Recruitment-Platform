// src/pages/skills/AWSRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const awsStages = [
    { id: 1, title: 'Phase 1: Laying the Foundation', objective: 'Establish the conceptual bedrock of cloud computing, including service models (IaaS, PaaS, SaaS) and the AWS Global Infrastructure.' },
    { id: 2, title: 'Phase 2: Mastering the Core Services', objective: 'Build hands-on skills with the most frequently used services: EC2 for compute, S3/EBS for storage, VPC for networking, and RDS/DynamoDB for databases.' },
    { id: 3, title: 'Phase 3: Building Scalable and Resilient Architectures', objective: 'Learn to combine services to build systems that are scalable, highly available, and performant using ELB and Auto Scaling.' },
    { id: 4, title: 'Phase 4: Embracing Cloud-Native & Serverless', objective: 'Shift to modern, event-driven, serverless patterns using AWS Lambda, API Gateway, Step Functions, and EventBridge.' },
    { id: 5, title: 'Phase 5: Containers and Modern Application Deployment', objective: 'Master AWS\'s suite of services for running and managing containerized applications with ECS, EKS, and Fargate.' },
    { id: 6, title: 'Phase 6: Infrastructure as Code (IaC) and DevOps', objective: 'Learn to manage infrastructure through code and automate application delivery with CloudFormation, Terraform, and AWS CI/CD tools.' },
    { id: 7, title: 'Phase 7: Governance, Security, and Optimization', objective: 'Focus on managing cloud environments at scale with services for governance, advanced security, monitoring, and cost optimization.' },
    { id: 8, title: 'Phase 8: Professional Readiness and Certification', objective: 'Consolidate knowledge by learning the AWS Well-Architected Framework and preparing for industry-recognized certifications.' },
];

import RecommendedChannels from '../../components/RecommendedChannels';
const AWSRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The AWS Professional's Roadmap</h1>
                <p>A comprehensive guide from zero to employable, covering core concepts, hands-on labs, and professional best practices.</p>
            </header>
            <RecommendedChannels roadmapKey="aws" />
            <div className="roadmap-stages">
                {awsStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/aws/resources/${stage.id}`} className="stage-resources-button">
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

export default AWSRoadmap;
