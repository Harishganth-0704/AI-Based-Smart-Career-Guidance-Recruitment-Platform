import React from 'react';
import { Link } from 'react-router-dom';
import './Roadmap.css';

// All career paths active
const careerPaths = [
  { 
    name: 'AI Engineer', 
    path: '/ai-engineer', 
    description: 'Design, build, and deploy complex AI and machine learning systems.' 
  },
  { 
    name: 'ML Engineer', 
    path: '/ml-engineer', 
    description: 'Operationalize ML models and build production-grade AI pipelines.' 
  },
  { 
    name: 'Data Scientist', 
    path: '/data-scientist', 
    description: 'Extract insights from data to drive business decisions.' 
  },
  { 
    name: 'Cybersecurity', 
    path: '/cybersecurity', 
    description: 'Protect digital systems and data from threats and vulnerabilities.' 
  },
  { 
    name: 'Cloud Architect', 
    path: '/cloud-architect', 
    description: 'Design and manage scalable, secure, and resilient cloud infrastructure.' 
  },
  { 
    name: 'Game Developer', 
    path: '/game-developer', 
    description: 'Bring interactive worlds and creative visions to life through code.' 
  },
  { 
    name: 'UI/UX Designer', 
    path: '/mobile-ui-designer', 
    description: 'Design intuitive and visually appealing interfaces for mobile applications.' 
  },
  { 
    name: 'Full-Stack Developer', 
    path: '/fullstack-developer', 
    description: 'Build and maintain both the frontend and backend of web applications.' 
  },
  { 
    name: 'Ethical Hacker', 
    path: '/ethical-hacker', 
    description: 'Identify and exploit vulnerabilities in systems to improve security.' 
  },
  { 
    name: 'IAAC Engineer', 
    path: '/iaac-engineer', 
    description: 'Automate and manage cloud infrastructure through code.' 
  },
  { 
    name: 'Blockchain Developer', 
    path: '/blockchain-developer', 
    description: 'Build decentralized applications and smart contracts on blockchain platforms.' 
  },
  { 
    name: 'IoT Developer', 
    path: '/iot-developer', 
    description: 'Develop software for embedded devices and the Internet of Things ecosystem.' 
  },
  { 
    name: 'AI Prompt Engineer', 
    path: '/ai-prompt-engineer', 
    description: 'Craft and optimize prompts to effectively communicate with large language models.' 
  },
  { 
    name: 'Low-Code / No-Code Developer', 
    path: '/low-code-developer', 
    description: 'Build applications and automations using visual development platforms.' 
  }
];

const Roadmap = () => {
  return (
    <div className="roadmap-hub-page">
      <header className="roadmap-hub-header">
        <h1>Explore Job Based Roadmaps</h1>
        <p>Select a career path to view a detailed, step-by-step guide from beginner to industry professional.</p>
      </header>

      <div className="career-cards-container">
        {careerPaths.map((career) => (
          <Link to={career.path} key={career.name} className="career-card">
            <h3>{career.name}</h3>
            <p>{career.description}</p>
            <span className="view-roadmap-link">View Path &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;