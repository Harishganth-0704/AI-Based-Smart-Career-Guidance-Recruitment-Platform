// src/pages/CareerSelection.jsx

import React, { useState } from 'react';
import './CareerSelection.css';

const CareerSelection = () => {
  // State to hold the user's selections
  const [interest, setInterest] = useState('');
  const [skills, setSkills] = useState({
    programming: false,
    data: false,
    networking: false,
    design: false,
  });

  const handleSkillChange = (event) => {
    const { name, checked } = event.target;
    setSkills(prevSkills => ({
      ...prevSkills,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    const selections = {
      interest,
      selectedSkills: Object.keys(skills).filter(skill => skills[skill]),
    };
    console.log('User Selections:', selections);
    // Later, we will send this data to the backend ML model
    alert('Thank you for your submission! Recommendation feature coming soon.');
  };

  return (
    <div className="selection-container">
      <h1>Help Us Understand You</h1>
      <p>Answer a few questions to get your personalized career roadmap.</p>

      <form className="selection-form" onSubmit={handleSubmit}>
        {/* Question 1: Primary Interest */}
        <div className="form-group">
          <label htmlFor="interest-select">What field interests you the most?</label>
          <select 
            id="interest-select" 
            value={interest} 
            onChange={(e) => setInterest(e.target.value)}
            required
          >
            <option value="" disabled>-- Select an option --</option>
            <option value="development">Software Development</option>
            <option value="data">Data & AI</option>
            <option value="security">Cybersecurity</option>
            <option value="cloud">Cloud & Infrastructure</option>
          </select>
        </div>

        {/* Question 2: Existing Skills */}
        <div className="form-group">
          <label>Which of these areas do you have some experience in? (Optional)</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" id="programming" name="programming" checked={skills.programming} onChange={handleSkillChange} />
              <label htmlFor="programming">Programming (e.g., Python, JavaScript)</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="data" name="data" checked={skills.data} onChange={handleSkillChange} />
              <label htmlFor="data">Data Analysis (e.g., SQL, Excel)</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="networking" name="networking" checked={skills.networking} onChange={handleSkillChange} />
              <label htmlFor="networking">Networking Basics</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="design" name="design" checked={skills.design} onChange={handleSkillChange} />
              <label htmlFor="design">UI/UX Design</label>
            </div>
          </div>
        </div>
        
        <button type="submit" className="submit-button">Get My Recommendation</button>
      </form>
    </div>
  );
};

export default CareerSelection;