import React, { useState } from 'react';
import './CoverLetter.css';

const CoverLetter = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [skills, setSkills] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedLetter, setGeneratedLetter] = useState('');

    const handleGenerate = (e) => {
        e.preventDefault();
        if (!jobTitle || !companyName) return;

        setIsLoading(true);
        // Simulating AI Generation delay
        setTimeout(() => {
            const letter = `Dear Hiring Manager at ${companyName},\n\nI am writing to express my strong interest in the ${jobTitle} position at ${companyName}. With a solid foundation in ${skills || 'software development, problem-solving, and continuous learning'}, I am confident in my ability to make an immediate impact on your team.\n\nThroughout my academic and professional journey, I have developed a passion for building scalable solutions and delivering high-quality user experiences. My background aligns perfectly with the requirements of the ${jobTitle} role, and I am particularly drawn to ${companyName}'s innovative approach and industry leadership.\n\nThank you for considering my application. I have attached my resume for your review and look forward to the opportunity to discuss how my skills and experiences align with your team's needs.\n\nSincerely,\n[Your Name]`;
            setGeneratedLetter(letter);
            setIsLoading(false);
        }, 2000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedLetter);
        alert('Cover Letter copied to clipboard!');
    };

    return (
        <div className="cover-letter-page">
            <header className="cl-header">
                <h1>AI Cover Letter Generator ✉️</h1>
                <p>Generate a professional, tailored cover letter in seconds using AI.</p>
            </header>

            <div className="cl-container">
                <form className="cl-form" onSubmit={handleGenerate}>
                    <div className="form-group">
                        <label>Target Job Title</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Frontend Developer" 
                            value={jobTitle} 
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Target Company</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Google, Startup Inc." 
                            value={companyName} 
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Key Skills (Optional)</label>
                        <input 
                            type="text" 
                            placeholder="e.g. React, Node.js, Teamwork" 
                            value={skills} 
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="generate-btn" disabled={isLoading || !jobTitle || !companyName}>
                        {isLoading ? 'Generating with AI...' : 'Generate Cover Letter 🚀'}
                    </button>
                </form>

                {generatedLetter && (
                    <div className="cl-result">
                        <div className="result-header">
                            <h3>Your Cover Letter</h3>
                            <button className="copy-btn" onClick={handleCopy}>Copy Text</button>
                        </div>
                        <textarea className="letter-textarea" readOnly value={generatedLetter}></textarea>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoverLetter;
