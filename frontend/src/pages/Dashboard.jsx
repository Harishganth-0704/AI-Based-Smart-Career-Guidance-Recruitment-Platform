import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copySuccess, setCopySuccess] = useState('');

    const [gamification, setGamification] = useState({
        points: 0,
        streak: 1,
        lastLogin: new Date().toLocaleDateString(),
        badges: ['Newcomer']
    });

    const [dailyTip, setDailyTip] = useState('TIP: Keep learning and building! | PULSE: 📈');
    const [profileStrength, setProfileStrength] = useState(0);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await api.get('/career/history');
                if (response.success) {
                    setHistory(response.assessments);
                    
                    // Calculate Profile Strength based on activity
                    let score = 20; // Base score
                    score += response.assessments.length * 10; // 10 pts per activity
                    
                    const stored = localStorage.getItem('careerCraftGamification');
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        score += (parsed.badges.length - 1) * 15; // 15 pts per badge
                        score += parsed.streak * 5; // 5 pts per streak day
                    }
                    
                    setProfileStrength(Math.min(score, 100)); // Max 100%
                }
            } catch (err) {
                setError('Failed to load history.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchTip = async () => {
            try {
                const response = await api.get('/career/daily-tip');
                if (response.success) setDailyTip(response.tip);
            } catch (err) {
                console.error('Failed to fetch tip');
            }
        };

        fetchHistory();
        fetchTip();

        // Gamification Logic
        const storedData = localStorage.getItem('careerCraftGamification');
        const today = new Date().toLocaleDateString();

        if (storedData) {
            let parsed = JSON.parse(storedData);
            const lastDate = new Date(parsed.lastLogin);
            const currentDate = new Date(today);
            const diffTime = Math.abs(currentDate - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            if (diffDays === 1) {
                parsed.streak += 1;
                parsed.points += 50; // Daily login bonus
            } else if (diffDays > 1) {
                parsed.streak = 1;
            }
            
            parsed.lastLogin = today;
            
            if (parsed.points >= 500 && !parsed.badges.includes('Scholar 📚')) parsed.badges.push('Scholar 📚');
            if (parsed.points >= 1000 && !parsed.badges.includes('Master 👑')) parsed.badges.push('Master 👑');
            if (parsed.points >= 2000 && !parsed.badges.includes('Legend 🌟')) parsed.badges.push('Legend 🌟');

            setGamification(parsed);
            localStorage.setItem('careerCraftGamification', JSON.stringify(parsed));
        } else {
            const initialData = { points: 100, streak: 1, lastLogin: today, badges: ['Newcomer 🎯'] };
            setGamification(initialData);
            localStorage.setItem('careerCraftGamification', JSON.stringify(initialData));
        }
    }, []);

    const copyToClipboard = () => {
        const profileUrl = `${window.location.origin}/u/portfolio-generator`; // Example public link
        navigator.clipboard.writeText(profileUrl)
            .then(() => {
                setCopySuccess('Link Copied! Share it with recruiters.');
                setTimeout(() => setCopySuccess(''), 3000);
            })
            .catch(err => console.error('Failed to copy text: ', err));
    };

    if (isLoading) return <div className="dashboard-loading"><div className="loader"></div></div>;

    const tipContent = dailyTip.split('|');
    const tipText = tipContent[0].replace('TIP:', '').trim();
    const pulseText = tipContent[1] ? tipContent[1].replace('PULSE:', '').trim() : '🚀';

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="header-content">
                    <div>
                        <h1>AI Intelligence Dashboard</h1>
                        <p>Track your career growth and AI-driven insights.</p>
                    </div>
                    <div className="share-profile-container">
                        <button className="share-profile-btn" onClick={copyToClipboard}>
                            <span>🔗 Share Public Profile</span>
                        </button>
                        {copySuccess && <span className="copy-tooltip">{copySuccess}</span>}
                    </div>
                </div>
            </header>

            {/* AI Insight Bar */}
            <div className="ai-insight-bar fade-in">
                <span className="insight-label">🤖 AI DAILY INSIGHT:</span>
                <span className="insight-text">{tipText}</span>
                <span className="insight-pulse">Market Pulse: {pulseText}</span>
            </div>

            {/* Profile Strength & Gamification Row */}
            <div className="dashboard-top-row">
                <div className="strength-card glass fade-in">
                    <div className="strength-header">
                        <h3>AI Profile Strength</h3>
                        <span className="strength-percentage">{profileStrength}%</span>
                    </div>
                    <div className="strength-bar-container">
                        <div className="strength-bar-fill" style={{width: `${profileStrength}%`}}></div>
                    </div>
                    <p className="strength-tip">
                        {profileStrength < 50 ? '💡 Tip: Take a Skill Quiz to boost your score!' : 
                         profileStrength < 80 ? '🔥 Great! Analyze your resume to reach Elite level.' : 
                         '🌟 Elite Status: Your profile is recruiter-ready!'}
                    </p>
                </div>

                {/* Gamification Banner */}
                <div className="gamification-banner glass">
                <div className="gamification-stats">
                    <div className="gamify-item">
                        <span className="gamify-icon">🔥</span>
                        <div className="gamify-info">
                            <h4>{gamification.streak} Day Streak</h4>
                            <p>Keep learning every day!</p>
                        </div>
                    </div>
                    <div className="gamify-item">
                        <span className="gamify-icon">💎</span>
                        <div className="gamify-info">
                            <h4>{gamification.points} Points</h4>
                            <p>Earned through activity</p>
                        </div>
                    </div>
                </div>
                <div className="gamification-badges">
                    <h4>Your Badges</h4>
                    <div className="badge-list">
                        {gamification.badges.map((badge, index) => (
                            <span key={index} className="badge">{badge}</span>
                        ))}
                    </div>
                </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Stats Section */}
                <div className="stats-card glass">
                    <h3>Summary</h3>
                    <div className="stat-item">
                        <span>Assessments Completed:</span>
                        <strong>{history.filter(h => !h.skills.includes('Resume')).length}</strong>
                    </div>
                    <div className="stat-item">
                        <span>Resumes Analyzed:</span>
                        <strong>{history.filter(h => h.skills.includes('Resume')).length}</strong>
                    </div>
                </div>

                {/* Main History Feed */}
                <div className="history-section">
                    <h2>Recent Activity</h2>
                    {history.length === 0 ? (
                        <p className="no-data">No history found. Start an assessment or upload a resume!</p>
                    ) : (
                        history.map((item) => (
                            <div key={item._id} className="history-card glass">
                                <div className="history-type">
                                    {item.skills.includes('Resume') ? '📄 Resume Analysis' : '🎯 Career Assessment'}
                                </div>
                                <div className="history-date">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </div>
                                <h4>Target/Interests: {item.interests}</h4>
                                <p className="analysis-snippet">{item.analysis.substring(0, 150)}...</p>
                                
                                <div className="recommendation-chips">
                                    {item.recommendations && item.recommendations.map((rec, i) => (
                                        <Link to={rec.roadmap} key={i} className="rec-chip">
                                            {rec.role} {rec.match !== 'N/A' && `(${rec.match})`}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Quick Actions */}
                <div className="actions-section glass">
                    <h3>Quick Actions</h3>
                    <Link to="/assessment" className="action-btn">New Assessment</Link>
                    <Link to="/resume-builder" className="action-btn">Review Resume</Link>
                    <Link to="/mock-interview" className="action-btn">Practice Interview</Link>
                    <Link to="/languages" className="action-btn">Learn Language</Link>
                    <Link to="/project-generator" className="action-btn" style={{background: 'linear-gradient(45deg, #ffcc00, #ff8800)', color: '#000', fontWeight: 'bold', border: 'none'}}>Generate Projects</Link>
                    <Link to="/github-analyzer" className="action-btn" style={{background: 'linear-gradient(45deg, #2ea44f, #238636)', color: '#fff', fontWeight: 'bold', border: 'none'}}>GitHub Analyzer</Link>
                    <Link to="/ats-resume" className="action-btn" style={{background: 'linear-gradient(45deg, #00d4ff, #0077ff)', color: '#fff', fontWeight: 'bold', border: 'none'}}>Generate ATS Resume (PDF)</Link>
                    <Link to="/portfolio-generator" className="action-btn" style={{background: 'linear-gradient(45deg, #ff007a, #7a00ff)', color: '#fff', fontWeight: 'bold', border: 'none'}}>Generate 1-Click Portfolio</Link>
                    <Link to="/hr-portal" className="action-btn" style={{background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)', color: '#fff', fontWeight: 'bold', border: 'none'}}>B2B Recruiter Portal</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
