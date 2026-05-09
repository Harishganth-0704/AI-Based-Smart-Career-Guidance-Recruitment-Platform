import React, { useState } from 'react';
import './ATSResumeMaker.css';

const ATSResumeMaker = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        summary: '',
        skills: '',
        projects: '',
        experience: '',
        education: '',
        certifications: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="ats-resume-page">
            <header className="ats-header no-print">
                <h1>📄 ATS-Friendly Resume Generator</h1>
                <p>Fill out the details below to generate a clean, standard, Applicant Tracking System (ATS) friendly resume PDF.</p>
            </header>

            <div className="ats-layout no-print">
                <div className="ats-form-container glass">
                    <h2>Enter Your Details</h2>
                    <div className="form-grid">
                        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
                        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
                        <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
                        <input type="text" name="github" placeholder="GitHub URL" onChange={handleChange} />
                    </div>
                    
                    <textarea name="summary" placeholder="Professional Summary (3-4 lines about your goals and skills)" rows="3" onChange={handleChange}></textarea>
                    
                    <textarea name="skills" placeholder="Skills (Comma separated, e.g. Python, React, SQL)" rows="2" onChange={handleChange}></textarea>
                    
                    <textarea name="projects" placeholder="Projects (Use bullet points: - Built a React app...)" rows="4" onChange={handleChange}></textarea>
                    
                    <textarea name="experience" placeholder="Experience (Use bullet points: - Worked as a Developer at XYZ...)" rows="4" onChange={handleChange}></textarea>
                    
                    <textarea name="education" placeholder="Education (e.g. B.Tech Computer Science, XYZ University, 2024)" rows="2" onChange={handleChange}></textarea>
                    
                    <textarea name="certifications" placeholder="Certifications (e.g. AWS Solutions Architect, Coursera ML)" rows="2" onChange={handleChange}></textarea>
                
                    <button className="download-btn" onClick={handlePrint}>Download as PDF ⬇️</button>
                </div>
            </div>

            {/* Resume Preview - This section will be printed */}
            <div className="resume-preview-wrapper">
                <h2 className="preview-title no-print">Live Preview</h2>
                <div id="resume-preview" className="resume-paper">
                    <div className="res-header">
                        <h1 className="res-name">{formData.name || 'Your Full Name'}</h1>
                        <div className="res-contact">
                            <span>{formData.email || 'email@example.com'}</span>
                            {formData.phone && <span> • {formData.phone}</span>}
                            {formData.linkedin && <span> • {formData.linkedin}</span>}
                            {formData.github && <span> • {formData.github}</span>}
                        </div>
                    </div>

                    <div className="res-section">
                        <div className="res-section-title">PROFESSIONAL SUMMARY</div>
                        <p className="res-text">{formData.summary || 'A highly motivated professional seeking to leverage my skills...'}</p>
                    </div>

                    <div className="res-section">
                        <div className="res-section-title">TECHNICAL SKILLS</div>
                        <p className="res-text"><strong>Skills:</strong> {formData.skills || 'Python, JavaScript, React, SQL, Git'}</p>
                    </div>

                    <div className="res-section">
                        <div className="res-section-title">PROJECTS</div>
                        <div className="res-text" style={{whiteSpace: 'pre-line'}}>
                            {formData.projects || '- E-commerce Platform: Built using React and Node.js.\n- Portfolio Website: Designed using Figma and CSS.'}
                        </div>
                    </div>

                    <div className="res-section">
                        <div className="res-section-title">EXPERIENCE</div>
                        <div className="res-text" style={{whiteSpace: 'pre-line'}}>
                            {formData.experience || '- Software Engineer Intern at ABC Corp (Jan 2023 - May 2023)\n- Improved performance by 20% through code optimization.'}
                        </div>
                    </div>

                    <div className="res-section">
                        <div className="res-section-title">EDUCATION</div>
                        <p className="res-text">{formData.education || 'Bachelor of Science in Computer Science - University Name (2020 - 2024)'}</p>
                    </div>

                    <div className="res-section">
                        <div className="res-section-title">CERTIFICATIONS</div>
                        <div className="res-text" style={{whiteSpace: 'pre-line'}}>
                            {formData.certifications || '- Certified Cloud Practitioner (AWS)\n- Complete Web Development Bootcamp (Udemy)'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ATSResumeMaker;
