import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';

const styles = `
.ml-roadmap-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.ml-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.ml-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.ml-roadmap-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.ml-phase-card {
  background-color: #1e1e30;
  border: 1px solid #33334d;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.ml-phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ml-phase-header h2 {
  font-size: 1.6rem;
  color: #00e676;
  margin: 0;
}

.ml-phase-toggle {
  font-size: 2rem;
  color: #8258dc;
  transition: transform 0.3s ease;
}

.ml-phase-card.active .ml-phase-toggle {
  transform: rotate(45deg);
}

.ml-phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid #33334d;
}

.ml-phase-content p {
  color: #b0b0b0;
  line-height: 1.7;
}

.ml-resources-button {
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

.ml-resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-2px);
}
`;

const roadmapStages = [
    { id: 1, title: 'Stage 1: Foundation & Mindset', objective: 'Establish a conceptual foundation of machine learning, understand the ML lifecycle, and set up a professional development environment.' },
    { id: 2, title: 'Stage 2: Mathematics for Machine Learning', objective: 'Build an intuitive understanding of Linear Algebra, Calculus, and Probability & Statistics to grasp how ML algorithms work.' },
    { id: 3, title: 'Stage 3: Programming for ML', objective: 'Develop fluency in Python and master the core scientific libraries (NumPy, Pandas, Matplotlib) and your first ML toolkit (Scikit-learn).' },
    { id: 4, title: 'Stage 4: Data Handling & Preprocessing', objective: 'Master the techniques to transform raw, messy data into a clean, structured format suitable for machine learning algorithms.' },
    { id: 5, title: 'Stage 5: Core Machine Learning Algorithms', objective: 'Understand the intuition behind foundational supervised and unsupervised learning algorithms and how to implement them with Scikit-learn.' },
    { id: 6, title: 'Stage 6: Deep Learning Foundations', objective: 'Transition from classical ML to the neural network architectures (CNNs, RNNs, Transformers) that power modern AI, using PyTorch or TensorFlow.' },
    { id: 7, title: 'Stage 7: MLOps & Model Deployment', objective: 'Master the engineering principles of productionizing ML models, including containerization (Docker), APIs (FastAPI), and CI/CD (GitHub Actions).' },
    { id: 8, title: 'Stage 8: Specialized ML Domains', objective: 'Gain introductory knowledge in high-demand specializations like Natural Language Processing (NLP), Computer Vision (CV), and Recommendation Systems.' },
    { id: 9, title: 'Stage 9: Real-World Projects', objective: 'Synthesize all skills into tangible, end-to-end projects that demonstrate your ability to build and deploy complete ML systems.' },
    { id: 10, title: 'Stage 10: Portfolio & Resume Strategy', objective: 'Learn to market your skills by building a professional brand and crafting application materials that highlight your engineering capabilities.' },
    { id: 11, title: 'Stage 11: Interview Preparation', objective: 'Systematically prepare for the rigorous, multi-stage ML Engineer interview process, including coding, theory, and system design.' }
];

const MLEngineerRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="ml-roadmap-container">
                <header className="ml-roadmap-header">
                    <h1>The Machine Learning Engineer Roadmap</h1>
                    <p>A complete 11-stage blueprint to take you from a complete beginner to an industry-ready ML Engineer, focusing on practical skills, systems thinking, and production-readiness.</p>
                </header>
                <RecommendedChannels roadmapKey="ml-engineer" />
                {roadmapStages.map(stage => (
                    <div key={stage.id} className={`ml-phase-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="ml-phase-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="ml-phase-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="ml-phase-content">
                                <p>{stage.objective}</p>
                                <Link to={`/ml-engineer/resources/${stage.id}`} className="ml-resources-button">
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

export default MLEngineerRoadmap;
