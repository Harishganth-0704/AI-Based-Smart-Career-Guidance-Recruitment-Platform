import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import api, { updateStats } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import './Dashboard.css';

/* ── Donut SVG Chart ── */
const DonutChart = ({ pct, color, label, sublabel }) => {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="analytics-card">
      <div className="analytics-card-title">{label}</div>
      <div className="donut-wrap">
        <svg className="donut-svg" width="90" height="90" viewBox="0 0 90 90">
          <circle className="donut-track" cx="45" cy="45" r={r} />
          <circle
            className="donut-fill"
            cx="45" cy="45" r={r}
            stroke={color}
            strokeDasharray={circ}
            strokeDashoffset={offset}
          />
          <text x="45" y="43" textAnchor="middle" className="donut-label">{pct}%</text>
          <text x="45" y="55" textAnchor="middle" className="donut-sub">{sublabel}</text>
        </svg>
        <div className="donut-legend">
          <div className="legend-item"><div className="legend-dot" style={{ background: color }} />{sublabel}</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: 'rgba(255,255,255,0.1)' }} />Remaining</div>
        </div>
      </div>
    </div>
  );
};

/* ── Bar Chart ── */
const BarChart = ({ data, label }) => {
  const max = Math.max(...data.map(d => d.val), 1);
  return (
    <div className="analytics-card">
      <div className="analytics-card-title">{label}</div>
      <div className="bar-chart-wrap">
        {data.map((d, i) => (
          <div key={i} className="bar-col">
            <div className="bar-fill" style={{ height: `${(d.val / max) * 72}px` }} />
            <div className="bar-label">{d.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Heatmap ── */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const Heatmap = ({ history }) => {
  const today = new Date();
  const getLevel = (daysAgo) => {
    const target = new Date(today);
    target.setDate(today.getDate() - daysAgo);
    const dateStr = target.toLocaleDateString();
    const count = history.filter(h => new Date(h.createdAt).toLocaleDateString() === dateStr).length;
    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count === 2) return 2;
    if (count === 3) return 3;
    return 4;
  };

  return (
    <div className="heatmap-section">
      <div className="heatmap-title">📅 Activity Heatmap — Last 4 Weeks</div>
      <div className="heatmap-grid">
        {DAYS.map((day, di) => (
          <div key={di} className="heatmap-col">
            {[3, 2, 1, 0].map(weekAgo => {
              const daysAgo = weekAgo * 7 + (6 - di);
              const level = getLevel(daysAgo);
              return (
                <div
                  key={weekAgo}
                  className={`heatmap-cell ${level > 0 ? `level-${level}` : ''}`}
                  title={`${day}, ${weekAgo === 0 ? 'this week' : `${weekAgo}w ago`}: ${level} activities`}
                />
              );
            })}
            <div className="heatmap-day-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copySuccess, setCopySuccess] = useState('');

    const [gamification, setGamification] = useState({
        points: user?.points || 0,
        streak: user?.streak || 1,
        badges: user?.badges || ['Newcomer 🎯']
    });

    const [dailyTip, setDailyTip] = useState('TIP: Keep learning and building! | PULSE: 📈');
    const [profileStrength, setProfileStrength] = useState(20);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!user) {
                // Guest mode — show empty dashboard without API call
                setIsLoading(false);
                return;
            }
            try {
                const response = await api.get('/career/history');
                if (response.success) {
                    setHistory(response.assessments);
                    
                    // Calculate Profile Strength based on activity
                    let score = 20; 
                    score += response.assessments.length * 10; 
                    score += (gamification.badges.length - 1) * 15; 
                    score += gamification.streak * 5; 
                    
                    setProfileStrength(Math.min(score, 100));
                }
            } catch (err) {
                setError('Failed to load history.');
            } finally {
                setIsLoading(false);
            }
        };

        const syncGamification = async () => {
            if (!user) return;
            
            const lastLogin = new Date(user.lastLogin).toLocaleDateString();
            const today = new Date().toLocaleDateString();
            
            if (lastLogin !== today) {
                const diffTime = Math.abs(new Date(today) - new Date(lastLogin));
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                let newStreak = user.streak;
                let bonusPoints = 50;

                if (diffDays === 1) {
                    newStreak += 1;
                } else if (diffDays > 1) {
                    newStreak = 1;
                }

                try {
                    const res = await updateStats({ points: bonusPoints, streak: newStreak });
                    if (res.success) {
                        setGamification({
                            points: res.data.points,
                            streak: res.data.streak,
                            badges: res.data.badges
                        });
                    }
                } catch (err) {
                    console.error('Failed to sync gamification');
                }
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
        syncGamification();
    }, [user]);

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

            {/* ── Analytics Section ── */}
            <div className="analytics-section">
                <div className="analytics-section-title">📊 Career Analytics</div>

                <div className="analytics-grid">
                    {/* Donut: Profile Strength */}
                    <DonutChart
                        pct={profileStrength}
                        color="#00ff88"
                        label="Profile Strength"
                        sublabel="Complete"
                    />

                    {/* Donut: Assessments */}
                    <DonutChart
                        pct={Math.min(history.filter(h => !h.skills?.includes('Resume')).length * 20, 100)}
                        color="#8258dc"
                        label="Assessment Progress"
                        sublabel="Assessments"
                    />

                    {/* Bar: Weekly Points */}
                    <BarChart
                        label="Weekly XP Breakdown"
                        data={[
                            { name: 'Mon', val: 20 },
                            { name: 'Tue', val: 50 },
                            { name: 'Wed', val: 30 },
                            { name: 'Thu', val: 80 },
                            { name: 'Fri', val: 60 },
                            { name: 'Sat', val: 40 },
                            { name: 'Sun', val: gamification.points > 0 ? Math.min(gamification.points, 100) : 10 },
                        ]}
                    />
                </div>

                {/* Activity Heatmap */}
                <Heatmap history={history} />
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
