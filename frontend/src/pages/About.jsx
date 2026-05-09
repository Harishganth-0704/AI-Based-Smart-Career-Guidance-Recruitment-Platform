import React from 'react';
import profilePhoto from '../assets/images/harish.jpg';
import './About.css'; 

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About CareerCraft</h1>
                <p>Your guide to navigating the future of tech careers.</p>
            </header>

            <section className="about-section application-info">
                <h2>About the Application</h2>
                <p>
                    CareerCraft is an AI-powered career guidance platform designed to help students and career switchers explore and build successful careers in the tech industry. The platform provides AI-driven career recommendations, structured learning roadmaps, skill development resources, resume support, mock interviews, and job preparation tools in a single platform.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    CareerCraft helps users choose the right technology career path through personalized guidance and step-by-step learning plans. The main objective of the platform is to reduce confusion in career selection and help users become job-ready with the required technical skills and industry knowledge.
                </p>
            </section>

            <section className="about-section meet-developers">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Developer Profile</h2>
                <div className="developer-cards-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <div className="developer-card" style={{ maxWidth: '800px', width: '100%', padding: '2.5rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <img 
                            src={profilePhoto}
                            alt="Harish Ganth" 
                            className="developer-photo" 
                            style={{ width: '160px', height: '160px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', border: '4px solid #00e676', boxShadow: '0 4px 15px rgba(0, 230, 118, 0.3)' }}
                        />
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.2rem', letterSpacing: '1px' }}>HarishGanth.L</h3>
                        <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: '500' }}>B.E. Computer Science and Engineering (Honors)</p>
                        <p style={{ color: '#b0b0b0', fontSize: '1rem', marginBottom: '1rem', fontStyle: 'italic' }}>Hindusthan Institute of Technology</p>
                        <p style={{ color: '#00e676', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Stack Developer</p>
                        
                        <div style={{ textAlign: 'left', width: '100%', marginBottom: '2rem', padding: '0 1rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Responsibilities:</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#b0b8c4', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                <li>Developed the frontend application using React.js and Vite.</li>
                                <li>Designed AI-powered career recommendation and guidance features.</li>
                                <li>Built skill-based and job-based learning roadmap modules.</li>
                                <li>Integrated AI chatbot and interactive career assistance system.</li>
                                <li>Created responsive and user-friendly UI/UX with modern design principles.</li>
                                <li>Planned and structured backend architecture using Node.js and Express.js.</li>
                                <li>Developed assessment, resume analysis, and mock interview modules.</li>
                                <li>Implemented structured routing and roadmap resource pages using React Router.</li>
                                <li>Enhanced user experience with organized learning flows and interactive navigation.</li>
                                <li>Designed scalable project structure for future API and database integration.</li>
                            </ul>
                        </div>

                        <div className="social-links" style={{ justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', display: 'flex', width: '100%' }}>
                            <a href="https://linkedin.com/in/harishganth07" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.5rem', background: '#0077b5', color: 'white', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', transition: '0.3s' }}>LinkedIn</a>
                            <a href="https://github.com/Harishganth-0704" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.5rem', background: '#24292e', color: 'white', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #444', transition: '0.3s' }}>GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;