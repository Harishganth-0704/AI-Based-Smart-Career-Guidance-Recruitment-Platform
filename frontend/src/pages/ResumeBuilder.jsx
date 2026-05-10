import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumeBuilder.css';

const careerRoles = [
    'Data Scientist',
    'AI Engineer',
    'Machine Learning Engineer',
    'Cloud Architect',
    'Cybersecurity',
    'Game Developer',
    'Mobile UI Designer',
    'Full-Stack Developer',
    'Write your own...'
];

// Note: roleKeywords is not directly used in the prompt but is good for future reference
const roleKeywords = {
    'Data Scientist': 'Python, SQL, Statistics, Machine Learning, Pandas, Scikit-learn, Data Visualization',
    'AI Engineer': 'Python, TensorFlow/PyTorch, NLP, Computer Vision, Deep Learning, Algorithms',
    'Machine Learning Engineer': 'Python, MLOps, Docker, Kubernetes, AWS/GCP/Azure, CI/CD, Scikit-learn, TensorFlow/PyTorch',
    'Cloud Architect': 'AWS/GCP/Azure, Infrastructure as Code (Terraform/CloudFormation), Networking, Security, Containers (Docker, Kubernetes)',
    'Cybersecurity': 'Networking, Security Principles, Linux, Penetration Testing, SIEM, Incident Response',
    'Game Developer': 'C++, Unreal Engine, C#, Unity, 3D Math, Game Logic, Performance Optimization',
    'Mobile UI Designer': 'Figma, UI/UX Principles, Design Systems, Prototyping, iOS HIG, Material Design',
    'Full-Stack Developer': 'JavaScript, React, Node.js, SQL/NoSQL Databases, REST APIs, HTML/CSS'
};

const ResumeBuilder = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState(careerRoles[0]);
    const [customRole, setCustomRole] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const getTargetRole = () => {
        return selectedRole === 'Write your own...' ? customRole : selectedRole;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalTargetRole = getTargetRole();
        if (!resumeFile || !finalTargetRole.trim()) {
            setError('Please select a target role and attach your resume file.');
            return;
        }
        
        try {
            setIsLoading(true);
            setLoadingMessage('AI is analyzing your resume...');

            const { analyzeResume } = await import('../services/api');
            const response = await analyzeResume(resumeFile, finalTargetRole);

            if (response) {
                setAnalysisResult(response);
            } else {
                throw new Error('Backend returned an empty or invalid analysis.');
            }

        } catch (err) {
            setError(`Failed to get analysis: ${err.message}. Please try again.`);
            console.error(err);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };
    
    const handleFileButtonClick = () => fileInputRef.current.click();
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Client-side validation for immediate feedback
            const allowedTypes = [
                "text/plain",
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "image/jpeg",
                "image/png"
            ];
            if (allowedTypes.includes(file.type)) {
                setResumeFile(file);
                setError(''); // Clear error on new file select
            } else {
                setResumeFile(null);
                setError('Invalid file type. Only .pdf, .docx, .txt, .jpg, or .png files are supported.');
            }
        }
    };

    const handleDragEvents = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragOver = (e) => {
        handleDragEvents(e);
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        handleDragEvents(e);
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        handleDragEvents(e);
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            // Check for allowed file types
            const allowedTypes = [
                "text/plain",
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "image/jpeg", // --- ADDED ---
                "image/png"   // --- ADDED ---
            ];
            if (allowedTypes.includes(file.type)) {
                setResumeFile(file);
                setError('');
            } else {
                setError('Invalid file type. Only .pdf, .docx, .txt, .jpg, or .png files are supported.');
                setResumeFile(null);
            }
        }
    };

    const handleExploreClick = () => {
        navigate('/roadmaps');
    };

    const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
    const [studyPlan, setStudyPlan] = useState(null);

    const handleGenerateStudyPlan = async () => {
        if (!analysisResult || !analysisResult.gapAnalysis) return;
        
        setIsGeneratingPlan(true);
        try {
            const { generateStudyPlan: apiGenerateStudyPlan } = await import('../services/api');
            const response = await apiGenerateStudyPlan(getTargetRole(), analysisResult.gapAnalysis);
            if (response.success) {
                setStudyPlan(response.studyPlan);
            }
        } catch (err) {
            console.error('Study Plan Error:', err);
            alert('Failed to generate study plan.');
        } finally {
            setIsGeneratingPlan(false);
        }
    };

    return (
        <div className="resume-builder-page">
            <header className="resume-builder-header">
                <h1>AI-Powered Resume Review</h1>
                <p>Get instant feedback on your resume to better tailor it for your dream job.</p>
            </header>

            <form className="resume-form" onSubmit={handleSubmit}>
                 <div className="form-group">
                    <label htmlFor="target-role">1. Select your target career path:</label>
                    <select id="target-role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        {careerRoles.map(role => <option key={role} value={role}>{role}</option>)}
                    </select>
                </div>
                
                {selectedRole === 'Write your own...' && (
                    <div className="form-group custom-role-input">
                        <label htmlFor="custom-role">Enter your custom career path:</label>
                        <input
                            type="text"
                            id="custom-role"
                            placeholder="e.g., Quantum Computing Engineer"
                            value={customRole}
                            onChange={(e) => setCustomRole(e.target.value)}
                        />
                    </div>
                )}
                
                <div className="form-group">
                     <label htmlFor="resume-file">2. Attach your resume file:</label>
                    <div 
                        className={`resume-drop-zone ${isDragging ? 'dragging' : ''}`}
                        onClick={handleFileButtonClick}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                         <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            style={{ display: 'none' }}
                            accept=".txt,.pdf,.doc,.docx,.jpg,.jpeg,.png,text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                        />
                        <div className="file-prompt-content">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="upload-icon"><path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 00-2.25 2.25v10.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V6a2.25 2.25 0 00-2.25-2.25z" clipRule="evenodd" /><path d="M16.5 3.75a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V3.75z" /></svg>
                            {resumeFile ? <span>File Selected: <strong>{resumeFile.name}</strong></span> : <span>Click to upload or drop your resume here</span>}
                            <p className="file-types">Supports .pdf, .docx, .txt, .jpg, .png</p>
                        </div>
                    </div>
                </div>

                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="analyze-button" disabled={isLoading}>
                    {isLoading ? loadingMessage : 'Analyze My Resume'}
                </button>
            </form>
            
            {isLoading && !analysisResult && (
                 <div className="loading-container">
                    <div className="spinner"></div>
                    <p>{loadingMessage}</p>
                </div>
            )}

            {analysisResult && (
                <div className="results-container">
                    <div className="results-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>Analysis Results</h2>
                        <button 
                            className="btn btn-secondary plan-btn"
                            type="button" 
                            onClick={handleGenerateStudyPlan}
                            disabled={isGeneratingPlan}
                        >
                            {isGeneratingPlan ? 'Creating Plan...' : '📅 Generate 7-Day Study Plan'}
                        </button>
                    </div>
                    
                    <p className="feedback-summary">{analysisResult.matchAnalysis}</p>
                    
                    {analysisResult.bestFitRole !== getTargetRole() && (
                         <div className="feedback-columns">
                             <div className="feedback-column">
                                  <h3>Gap Analysis for {getTargetRole()}</h3>
                                <ul className="gap-list">
                                     {analysisResult.gapAnalysis.map((point, index) => <li key={index}>{point}</li>)}
                                 </ul>
                            </div>
                            <div className="feedback-column">
                                  <h3>🚀 Learning Suggestions</h3>
                                <ul className="suggestion-list">
                                     {analysisResult.learningSuggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
                                 </ul>
                            </div>
                         </div>
                    )}

                    {studyPlan && (
                        <div className="study-plan-section fade-in">
                            <h3 className="section-title">📅 Your Personalized 7-Day Study Plan</h3>
                            <div className="study-grid">
                                {studyPlan.map((item) => (
                                    <div key={item.day} className="study-card">
                                        <div className="day-badge">Day {item.day}</div>
                                        <h4>{item.topic}</h4>
                                        <ul>
                                            {item.concepts.map((c, i) => <li key={i}>{c}</li>)}
                                        </ul>
                                        <a 
                                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.youtubeSearch)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="youtube-link"
                                        >
                                            📺 Watch Tutorials
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                     <div className="explore-button-container">
                        <button className="btn btn-primary" onClick={handleExploreClick}>
                            Explore Job Based Roadmaps
                        </button>
                     </div>
                </div>
            )}
        </div>
    );
};

export default ResumeBuilder;