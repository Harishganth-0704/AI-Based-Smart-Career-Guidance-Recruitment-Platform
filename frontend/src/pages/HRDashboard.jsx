import React, { useState } from 'react';
import './HRDashboard.css';

// Mock data for the Hackathon Demo
const mockCandidates = [
    {
        id: 1,
        name: "Arjun Kumar",
        role: "Data Scientist",
        matchScore: 94,
        githubScore: "A+",
        interviewScore: "9/10",
        skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
        status: "Actively Looking",
        hash: "0x7F2B...A1C9"
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "React Developer",
        matchScore: 88,
        githubScore: "A",
        interviewScore: "8.5/10",
        skills: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
        status: "Open to Offers",
        hash: "0x3E1C...D4B2"
    },
    {
        id: 3,
        name: "Rahul Sharma",
        role: "Cloud Architect",
        matchScore: 91,
        githubScore: "B+",
        interviewScore: "9.5/10",
        skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
        status: "Interviewing",
        hash: "0x9A4F...E2D1"
    },
    {
        id: 4,
        name: "Priya Patel",
        role: "AI Engineer",
        matchScore: 96,
        githubScore: "A+",
        interviewScore: "10/10",
        skills: ["PyTorch", "NLP", "OpenAI API", "Python"],
        status: "Actively Looking",
        hash: "0x1C8D...B5E6"
    }
];

const HRDashboard = () => {
    const [candidates, setCandidates] = useState(mockCandidates);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('All');

    const [requestedCandidates, setRequestedCandidates] = useState({});

    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleRoleFilter = (e) => setSelectedRole(e.target.value);

    const handleRequestInterview = (id, name) => {
        setRequestedCandidates(prev => ({...prev, [id]: true}));
        alert(`✅ Interview Request successfully sent to ${name} via secure Blockchain contract!`);
    };

    const filteredCandidates = candidates.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesRole = selectedRole === 'All' || c.role === selectedRole;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="hr-dashboard-page">
            {/* HR Sidebar / Header */}
            <header className="hr-header">
                <div className="hr-header-content">
                    <h1>🏢 CareerCraft B2B Recruiter Portal</h1>
                    <p>Discover top 1% tech talent vetted by AI. Verified via Blockchain.</p>
                </div>
                <div className="hr-stats-row">
                    <div className="hr-stat-box glass">
                        <h3>Total Candidates</h3>
                        <p className="stat-number">1,248</p>
                    </div>
                    <div className="hr-stat-box glass">
                        <h3>AI Vetted</h3>
                        <p className="stat-number" style={{color: '#00ff88'}}>856</p>
                    </div>
                    <div className="hr-stat-box glass">
                        <h3>Hired This Month</h3>
                        <p className="stat-number" style={{color: '#00d4ff'}}>42</p>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="hr-main-content">
                <div className="hr-filters glass">
                    <input 
                        type="text" 
                        placeholder="Search by name or skill (e.g., Python, React)..." 
                        value={searchTerm}
                        onChange={handleSearch}
                        className="hr-search-input"
                    />
                    <select value={selectedRole} onChange={handleRoleFilter} className="hr-role-select">
                        <option value="All">All Roles</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="React Developer">React Developer</option>
                        <option value="Cloud Architect">Cloud Architect</option>
                        <option value="AI Engineer">AI Engineer</option>
                    </select>
                </div>

                <div className="candidates-grid">
                    {filteredCandidates.map(candidate => (
                        <div key={candidate.id} className="candidate-card glass">
                            <div className="candidate-header">
                                <div className="candidate-avatar">
                                    {candidate.name.charAt(0)}
                                </div>
                                <div className="candidate-title">
                                    <h2>{candidate.name}</h2>
                                    <span className="candidate-role">{candidate.role}</span>
                                </div>
                            </div>
                            
                            <div className="candidate-metrics">
                                <div className="metric">
                                    <span className="metric-label">AI Match Score</span>
                                    <span className="metric-value match-score">{candidate.matchScore}%</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-label">Mock Interview</span>
                                    <span className="metric-value">{candidate.interviewScore}</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-label">GitHub Rating</span>
                                    <span className="metric-value">{candidate.githubScore}</span>
                                </div>
                            </div>

                            <div className="candidate-skills">
                                {candidate.skills.map((skill, index) => (
                                    <span key={index} className="skill-pill">{skill}</span>
                                ))}
                            </div>

                            <div className="candidate-footer">
                                <div className="web3-badge" title="Web3 Blockchain Verification Hash">
                                    ⛓️ {candidate.hash}
                                </div>
                                <button 
                                    className="hire-btn" 
                                    onClick={() => handleRequestInterview(candidate.id, candidate.name)}
                                    disabled={requestedCandidates[candidate.id]}
                                    style={{
                                        background: requestedCandidates[candidate.id] ? '#2ea44f' : '#8b5cf6',
                                        cursor: requestedCandidates[candidate.id] ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {requestedCandidates[candidate.id] ? 'Requested ✅' : 'Request Interview'}
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    {filteredCandidates.length === 0 && (
                        <div className="no-candidates">
                            <p>No candidates found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HRDashboard;
