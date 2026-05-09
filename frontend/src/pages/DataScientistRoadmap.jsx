// src/pages/DataScientistRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';

const styles = `
:root {
  --background-dark: #12121e;
  --card-background: #1e1e30;
  --accent-primary: #00e676;
  --accent-secondary: #8258dc;
  --text-light: #e0e0e0;
  --text-medium: #b0b0b0;
  --border-color: #33334d;
  --hover-card-bg: #2b2b40;
}

.ds-roadmap-container {
  background-color: var(--background-dark);
  color: var(--text-light);
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.ds-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.ds-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.ds-roadmap-header p {
  font-size: 1.2rem;
  color: var(--text-medium);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.phase-card {
  background-color: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
}

.phase-card:hover .phase-header {
    background-color: var(--hover-card-bg);
}

.phase-header h2 {
  font-size: 1.8rem;
  color: var(--accent-primary);
  margin: 0;
  font-weight: 600;
}

.phase-toggle {
  font-size: 2rem;
  color: var(--accent-secondary);
  transition: transform 0.3s ease;
}

.phase-card.active .phase-toggle {
  transform: rotate(45deg);
}

.phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid var(--border-color);
}

.phase-content h3 {
  font-size: 1.5rem;
  color: var(--accent-secondary);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.phase-content p, .phase-content li {
  font-size: 1rem;
  color: var(--text-medium);
  line-height: 1.7;
  margin-bottom: 0.8rem;
}

.phase-content ul {
  list-style-type: disc;
  padding-left: 20px;
}

.resources-button {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.8rem;
  background-color: var(--accent-secondary);
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(130, 88, 220, 0.4);
}
`;

const roadmapPhases = [
    { id: 1, title: 'Phase 1: Foundation Setup', objective: 'Establish a strategic understanding of the data science field, its lifecycle, professional roles, and the essential problem-solving mindset.' },
    { id: 2, title: 'Phase 2: Mathematics & Statistics', objective: 'Build the indispensable mathematical and statistical intuition required to understand how and why data science algorithms work.' },
    { id: 3, title: 'Phase 3: Programming (Python + Libraries)', objective: 'Develop fluency in Python and master the core libraries for data manipulation, numerical computation, and analysis (NumPy, Pandas, SciPy).' },
    { id: 4, title: 'Phase 4: Data Handling & Databases (SQL, NoSQL)', objective: 'Gain proficiency in SQL for relational databases and understand the concepts of NoSQL databases for modern data storage systems.' },
    { id: 5, title: 'Phase 5: Exploratory Data Analysis (EDA)', objective: 'Master the investigative process of using statistical and visualization techniques to summarize, understand, and uncover patterns in a dataset.' },
    { id: 6, title: 'Phase 6: Data Visualization', objective: 'Develop the skill of communicating data-driven stories clearly and persuasively using Python libraries and modern Business Intelligence (BI) tools.' },
    { id: 7, title: 'Phase 7: Machine Learning', objective: 'Build a solid, practical understanding of classical supervised and unsupervised learning algorithms and the critical process of model evaluation.' },
    { id: 8, title: 'Phase 8: Deep Learning', objective: 'Learn the fundamentals of neural networks and explore specialized architectures like CNNs, RNNs, and Transformers for image, sequence, and language data.' },
    { id: 9, title: 'Phase 9: MLOps & Deployment', objective: 'Bridge the gap between building a model and making it available for real-world use by learning to create APIs, containerize applications, and deploy to the cloud.' },
    { id: 10, title: 'Phase 10: Big Data', objective: 'Gain a foundational understanding of the big data ecosystem, including distributed storage and processing with Hadoop, Spark, and Kafka.' },
    { id: 11, title: 'Phase 11: Real-World Projects', objective: 'Synthesize all learned skills into cohesive, end-to-end projects that solve specific problems and build a powerful portfolio.' },
    { id: 12, title: 'Phase 12: Domain Specializations', objective: 'Develop specialized expertise in a specific domain like NLP, Computer Vision, or Finance to become a more valuable and competitive professional.' },
    { id: 13, title: 'Phase 13: Portfolio & Resume Building', objective: 'Strategically craft a compelling resume and a powerful portfolio that effectively communicate skills, projects, and impact to employers.' },
    { id: 14, title: 'Phase 14: Interview Preparation', objective: 'Systematically prepare for the data science interview process, covering theory, coding challenges, and case studies.' },
    { id: 15, title: 'Phase 15: Continuous Learning & Research Practice', objective: 'Transition from a structured curriculum to a self-directed, lifelong habit of professional development to stay at the cutting edge of the field.' },
];

const DataScientistRoadmap = () => {
    const [activePhase, setActivePhase] = useState(null);

    const togglePhase = (phaseId) => {
        setActivePhase(activePhase === phaseId ? null : phaseId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="ds-roadmap-container">
                <header className="ds-roadmap-header">
                    <h1>The Definitive Data Science Roadmap</h1>
                    <p>From novice to professional, this comprehensive 15-phase guide deconstructs the vast field of data science into a logical, progressive learning path, preparing you for a successful and impactful career.</p>
                </header>
                <RecommendedChannels roadmapKey="data-scientist" />
                {roadmapPhases.map(phase => (
                    <div key={phase.id} className={`phase-card ${activePhase === phase.id ? 'active' : ''}`}>
                        <div className="phase-header" onClick={() => togglePhase(phase.id)}>
                            <h2>{phase.title}</h2>
                            <span className="phase-toggle">+</span>
                        </div>
                        {activePhase === phase.id && (
                            <div className="phase-content">
                                <h3>Objective</h3>
                                <p>{phase.objective}</p>
                                <Link to={`/data-scientist/resources/${phase.id}`} className="resources-button">
                                    View Details & Learning Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default DataScientistRoadmap;