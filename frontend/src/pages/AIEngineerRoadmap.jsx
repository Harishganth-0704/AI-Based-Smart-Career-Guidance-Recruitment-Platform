// src/pages/AIEngineerRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';

const styles = `
.ai-roadmap-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.ai-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.ai-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.ai-roadmap-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.ai-phase-card {
  background-color: #1e1e30;
  border: 1px solid #33334d;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.ai-phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ai-phase-header h2 {
  font-size: 1.6rem;
  color: #00e676;
  margin: 0;
}

.ai-phase-toggle {
  font-size: 2rem;
  color: #8258dc;
  transition: transform 0.3s ease;
}

.ai-phase-card.active .ai-phase-toggle {
  transform: rotate(45deg);
}

.ai-phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid #33334d;
}

.ai-phase-content p {
  color: #b0b0b0;
  line-height: 1.7;
}

.ai-resources-button {
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

.ai-resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-2px);
}
`;

const roadmapStages = [
    { id: 1, title: 'Stage 1: Foundation & Mindset', objective: 'Understand the AI Engineer role, its responsibilities as a specialized software engineer, and cultivate a systems-thinking mindset.' },
    { id: 2, title: 'Stage 2: Core Mathematics for AI', objective: 'Develop an intuitive understanding of Linear Algebra, Calculus, and Probability & Statistics to grasp how AI algorithms work.' },
    { id: 3, title: 'Stage 3: Programming Core', objective: 'Master Python, Object-Oriented Programming (OOP), and Data Structures & Algorithms (DSA) as a prerequisite for building robust AI systems.' },
    { id: 4, title: 'Stage 4: Data Systems & Databases', objective: 'Gain fluency in data sourcing, cleaning, transformation, and storage using tools like Pandas, NumPy, and SQL.' },
    { id: 5, title: 'Stage 5: Machine Learning Engineering', objective: 'Master the end-to-end workflow of building, evaluating, and optimizing traditional machine learning models using Scikit-learn.' },
    { id: 6, title: 'Stage 6: Deep Learning Foundations', objective: 'Move from traditional ML to the neural network architectures (CNNs, RNNs, LSTMs, Transformers) that power modern AI.' },
    { id: 7, title: 'Stage 7: Large Language Models (LLMs) & Transformers', objective: 'Learn the practical skills to build applications with LLMs, including fine-tuning, RAG, and prompt engineering.' },
    { id: 8, title: 'Stage 8: MLOps & Deployment', objective: 'Master the discipline of productionizing AI by automating the ML lifecycle with APIs (FastAPI), containers (Docker), and CI/CD.' },
    { id: 9, title: 'Stage 9: Cloud Platforms for AI', objective: 'Gain proficiency in at least one major cloud AI platform (AWS SageMaker, Google Vertex AI, or Azure ML) to streamline development and deployment.' },
    { id: 10, title: 'Stage 10: Vector Databases & Retrieval', objective: 'Understand the technology behind semantic search and RAG for building advanced LLM applications that reason over external data.' },
    { id: 11, title: 'Stage 11: AI Agents & Orchestration', objective: 'Learn to build autonomous agents that use LLMs as a reasoning engine to plan and execute multi-step tasks.' },
    { id: 12, title: 'Stage 12: Tools & Frameworks to Master', objective: 'Achieve fluency in the modern AI stack, including PyTorch/TensorFlow, Hugging Face, LangChain, and W&B.' },
    { id: 13, title: 'Stage 13: Real-World End-to-End AI System Projects', objective: 'Synthesize all knowledge into building complete, deployed AI systems to create a compelling, production-focused portfolio.' },
    { id: 14, title: 'Stage 14: Portfolio & Resume Strategy', objective: 'Craft a powerful portfolio and resume that effectively communicate your skills and project impact to employers.' },
    { id: 15, title: 'Stage 15: Interview Preparation', objective: 'Systematically prepare for the multi-stage AI Engineer interview, covering theory, coding, system design, and behavioral questions.' },
    { id: 16, title: 'Stage 16: Continuous Learning & Research Paper Habits', objective: 'Develop a sustainable, self-directed system for staying current with the rapidly evolving field of AI.' }
];

const AIEngineerRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="ai-roadmap-container">
                <header className="ai-roadmap-header">
                    <h1>The AI Engineer Roadmap</h1>
                    <p>A complete 16-stage guide from beginner to industry-ready AI Engineer, focusing on practical skills, system-level thinking, and operational excellence.</p>
                </header>
                <RecommendedChannels roadmapKey="ai-engineer" />
                {roadmapStages.map(stage => (
                    <div key={stage.id} className={`ai-phase-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="ai-phase-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="ai-phase-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="ai-phase-content">
                                <p>{stage.objective}</p>
                                <Link to={`/ai-engineer/resources/${stage.id}`} className="ai-resources-button">
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

export default AIEngineerRoadmap;