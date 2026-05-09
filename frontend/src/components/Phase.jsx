import React, { useState } from 'react';
import Resources from './Resources'; // We will create this next
import './Phase.css';

const Phase = ({ phase }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="phase-card">
      <button className="phase-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Phase {phase.id}: {phase.title}</h3>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="phase-content">
          <p className="phase-objective"><strong>Objective:</strong> {phase.objective}</p>
          
          <h4>Subtopics</h4>
          <div className="subtopics-grid">
            {phase.subtopics.map((subtopic, index) => (
              <div key={index} className="subtopic-card">
                <h5>{subtopic.title}</h5>
                <ul>
                  {subtopic.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h4>Learning Resources</h4>
          <Resources resources={phase.resources} />
          
          <h4>Essential Tools</h4>
          <ul>
            {phase.tools.map((tool, index) => <li key={index}>{tool}</li>)}
          </ul>
          
          <h4>Practical Projects</h4>
          {phase.projects.map((project, index) => (
            <div key={index} className="project-card">
              <strong>{project.type}:</strong> {project.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Phase;