import React, { useState } from 'react';
import { generateCoverLetter } from '../services/api';
import './CoverLetter.css';

const careerRoles = [
  'Data Scientist',
  'AI Engineer',
  'Machine Learning Engineer',
  'Cloud Architect',
  'Cybersecurity',
  'Game Developer',
  'Mobile UI Designer',
  'Full-Stack Developer',
  'Python Developer',
  'JavaScript Developer',
  'React Developer',
  'SQL Developer',
  'Java Developer',
  'C++ Developer',
  'Write your own...'
];

const CoverLetter = () => {
  const [selectedRole, setSelectedRole] = useState(careerRoles[0]);
  const [customRole, setCustomRole] = useState('');
  const [resumeContent, setResumeContent] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getTargetRole = () =>
    selectedRole === 'Write your own...' ? customRole : selectedRole;

  const handleGenerate = async () => {
    const role = getTargetRole();
    if (!role.trim()) {
      setError('Please select or enter a job role.');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedLetter('');

    try {
      const response = await generateCoverLetter(role, resumeContent);
      if (response.success && response.coverLetter) {
        setGeneratedLetter(response.coverLetter);
      } else {
        throw new Error('Failed to generate cover letter');
      }
    } catch (err) {
      setError('Failed to generate cover letter. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    alert('Cover letter copied to clipboard!');
  };

  return (
    <div className="cover-letter-page">
      <header className="page-header">
        <h1>AI Cover Letter Generator</h1>
        <p>Generate a professional, role-specific cover letter in seconds.</p>
      </header>

      <div className="content-container">
        <div className="input-section">
          <div className="form-group">
            <label>Target Job Role:</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {careerRoles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </div>

          {selectedRole === 'Write your own...' && (
            <div className="form-group">
              <label>Enter Custom Role:</label>
              <input
                type="text"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="e.g., Senior DevOps Engineer"
              />
            </div>
          )}

          <div className="form-group">
            <label>Paste your Resume content (Optional but recommended):</label>
            <textarea
              rows="10"
              value={resumeContent}
              onChange={(e) => setResumeContent(e.target.value)}
              placeholder="Paste your skills, experience, and achievements here for a more personalized letter..."
            ></textarea>
          </div>

          <button 
            className="generate-btn" 
            onClick={handleGenerate} 
            disabled={isLoading}
          >
            {isLoading ? 'Generating Professional Letter...' : 'Generate Cover Letter'}
          </button>
          
          {error && <p className="error-message">{error}</p>}
        </div>

        {generatedLetter && (
          <div className="result-section">
            <div className="result-header">
              <h2>Your Generated Cover Letter</h2>
              <button className="copy-btn" onClick={copyToClipboard}>
                📋 Copy Text
              </button>
            </div>
            <div className="letter-paper">
              <pre>{generatedLetter}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetter;
