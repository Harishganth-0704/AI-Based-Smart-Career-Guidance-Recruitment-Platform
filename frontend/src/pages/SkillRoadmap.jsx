import React from 'react';
import { Link } from 'react-router-dom';
import './SkillRoadmap.css';

// Re-ordered skills array
const skills = [
  { 
    name: 'Python', 
    path: '/skills/python', 
    description: 'Master the versatile language powering AI, web development, and automation.' 
  },
  { 
    name: 'SQL', 
    path: '/skills/sql', 
    description: 'Become proficient in querying and managing relational databases, a critical data skill.' 
  },
  { 
    name: 'C++', 
    path: '/skills/cplusplus', 
    description: 'Master the high-performance language used for game engines and system-level software.' 
  },
  { 
    name: 'JavaScript', 
    path: '/skills/javascript', 
    description: 'Learn the core language of the web for building interactive frontend experiences.' 
  },
  { 
    name: 'Docker', 
    path: '/skills/docker', 
    description: 'Learn to containerize applications for consistent, portable deployments.' 
  },
  { 
    name: 'Bash', 
    path: '/skills/bash', 
    description: 'Master the command-line shell for powerful automation and scripting on Linux systems.' 
  },
  { 
    name: 'Golang', 
    path: '/skills/golang', 
    description: 'Learn Google\'s fast, concurrent language, perfect for backend services and cybersecurity tools.' 
  },
  // --- Others set to Coming Soon ---
  { 
    name: 'React', 
    path: '/skills/react', 
    description: 'Build modern, fast, and scalable user interfaces with this popular library.' 
  },
  { 
    name: 'C', 
    path: '/skills/c', 
    description: 'Learn the foundational language of modern computing, essential for operating systems.' 
  },
  { 
    name: 'Java', 
    path: '/skills/java', 
    description: 'Explore the robust, object-oriented language for large-scale enterprise applications.' 
  },
  { 
    name: 'AWS', 
    path: '/skills/aws', 
    description: 'Understand and master the foundational services of the leading cloud platform, Amazon Web Services.' 
  },
];

const SkillRoadmap = () => {
// ... existing code ...
  return (
    <div className="skill-roadmap-page">
      <header className="skill-roadmap-header">
        <h1>Explore Skill Based Roadmaps</h1>
        <p>Focus your learning on a specific technology. Select a skill to view a curated, step-by-step learning path.</p>
      </header>

      <div className="skill-cards-container">
        {skills.map((skill) => (
          <Link to={skill.path} key={skill.name} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <span className="view-skill-link">View Roadmap →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillRoadmap;