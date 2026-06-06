// src/pages/Profile.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import './Profile.css';

const SKILL_LEVELS = [
  { name: 'Problem Solving', pct: 82 },
  { name: 'System Design',   pct: 65 },
  { name: 'Communication',   pct: 75 },
  { name: 'AI / ML',         pct: 70 },
];

const CAREER_PATHS = [
  { icon: '🤖', label: 'AI Engineer' },
  { icon: '📊', label: 'Data Scientist' },
  { icon: '☁️', label: 'Cloud Architect' },
];

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [history, setHistory]           = useState([]);
  const [isLoading, setIsLoading]       = useState(true);
  const [copyMsg, setCopyMsg]           = useState('');
  const [profileStrength, setStrength]  = useState(0);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    api.get('/career/history')
      .then((res) => {
        if (res.success) {
          setHistory(res.assessments || []);
          const score = Math.min(20 + (res.assessments?.length || 0) * 12 + (user.badges?.length || 1) * 10 + (user.streak || 1) * 4, 100);
          setStrength(score);
        }
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [user]);

  // ── Guest View ──
  if (!user && !isLoading) {
    return (
      <div className="profile-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <div style={{
          textAlign: 'center',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(130,88,220,0.3)',
          borderRadius: '20px',
          padding: '3rem 2.5rem',
          maxWidth: '420px'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
          <h2 style={{ color: '#f0f0f8', marginBottom: '0.5rem' }}>Your Profile</h2>
          <p style={{ color: '#9090b0', marginBottom: '2rem', lineHeight: 1.6 }}>
            Login or Sign Up to see your personalized profile, badges, skill progress, and activity.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/login" style={{
              background: 'linear-gradient(135deg, #8258dc, #3a7bd5)',
              color: '#fff', padding: '0.7rem 1.8rem',
              borderRadius: '10px', textDecoration: 'none', fontWeight: 700
            }}>Login</Link>
            <Link to="/signup" style={{
              background: 'rgba(130,88,220,0.15)',
              border: '1px solid rgba(130,88,220,0.4)',
              color: '#c4a7ff', padding: '0.7rem 1.8rem',
              borderRadius: '10px', textDecoration: 'none', fontWeight: 700
            }}>Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }

  const shareProfile = () => {
    const url = `${window.location.origin}/profile`;
    navigator.clipboard.writeText(url).then(() => {
      setCopyMsg('🔗 Link copied!');
      setTimeout(() => setCopyMsg(''), 2500);
    });
  };

  if (!user) return null;
  if (isLoading) return (
    <div className="profile-loading">
      <div className="profile-loader" />
    </div>
  );

  const initials = user.name
    ? user.name.split(' ').map(w => w[0]).slice(0, 2).join('')
    : '?';

  const assessments   = history.filter(h => !h.skills?.includes('Resume'));
  const resumeScans   = history.filter(h =>  h.skills?.includes('Resume'));
  const badges        = user.badges || ['Newcomer 🎯'];
  const points        = user.points || 0;
  const streak        = user.streak || 1;

  // Build skill tags from latest assessment
  const latestSkills = assessments.length > 0
    ? (assessments[0].skills || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 10)
    : ['React', 'Python', 'Node.js', 'SQL', 'AWS'];

  // Recent activity feed
  const recentActivity = history.slice(0, 5).map((item) => ({
    icon: item.skills?.includes('Resume') ? '📄' : '🎯',
    text: item.skills?.includes('Resume')
      ? <><strong>Resume Analyzed</strong> — AI feedback received</>
      : <><strong>Assessment</strong> for {item.interests || 'Career Path'}</>,
    time: new Date(item.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="profile-page">
      {/* Banner */}
      <div className="profile-banner">
        <div className="banner-pattern" />
      </div>

      {/* Card */}
      <div className="profile-card-wrapper">

        {/* Avatar Row */}
        <div className="profile-avatar-row">
          <div className="profile-avatar">{initials}</div>
          <div className="profile-name-block">
            <h1>{user.name}</h1>
            <p className="profile-headline">
              🚀 Career Explorer · {points} XP · {streak} Day Streak
            </p>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <button className="profile-share-btn" onClick={shareProfile}>
              🔗 Share Profile
            </button>
            {copyMsg && <span className="copy-toast">{copyMsg}</span>}
          </div>
        </div>

        {/* Stats Row */}
        <div className="profile-stats-row">
          <div className="pstat">
            <div className="pstat-val">{assessments.length}</div>
            <div className="pstat-label">Assessments</div>
          </div>
          <div className="pstat">
            <div className="pstat-val">{resumeScans.length}</div>
            <div className="pstat-label">Resume Scans</div>
          </div>
          <div className="pstat">
            <div className="pstat-val">{badges.length}</div>
            <div className="pstat-label">Badges</div>
          </div>
          <div className="pstat">
            <div className="pstat-val">{profileStrength}%</div>
            <div className="pstat-label">Profile Score</div>
          </div>
        </div>

        {/* Grid */}
        <div className="profile-grid">

          {/* Skills */}
          <div className="profile-section">
            <div className="section-title">⚡ Skills</div>
            <div className="skills-cloud">
              {latestSkills.map((s, i) => (
                <span key={i} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="profile-section">
            <div className="section-title">🏆 Badges Earned</div>
            <div className="badges-grid">
              {badges.map((b, i) => (
                <span key={i} className="badge-chip">{b}</span>
              ))}
            </div>
          </div>

          {/* Career Paths */}
          <div className="profile-section">
            <div className="section-title">🎯 Career Paths Explored</div>
            <ul className="career-path-list">
              {CAREER_PATHS.map((c, i) => (
                <li key={i} className="career-path-item">
                  <span>{c.icon}</span>{c.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Skill Progress */}
          <div className="profile-section">
            <div className="section-title">📊 Skill Progress</div>
            <div className="skill-progress-list">
              {SKILL_LEVELS.map((sp, i) => (
                <div key={i} className="sp-row">
                  <div className="sp-label">
                    <span>{sp.name}</span>
                    <span>{sp.pct}%</span>
                  </div>
                  <div className="sp-bar-bg">
                    <div className="sp-bar-fill" style={{ width: `${sp.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="profile-section" style={{ gridColumn: '1 / -1' }}>
            <div className="section-title">🕐 Recent Activity</div>
            {recentActivity.length === 0 ? (
              <p style={{ color: '#7070a0', fontSize: '0.85rem' }}>
                No activity yet. Start an assessment or upload a resume!
              </p>
            ) : (
              <div className="activity-list">
                {recentActivity.map((a, i) => (
                  <div key={i} className="activity-item">
                    <div className="activity-icon">{a.icon}</div>
                    <div className="activity-body">
                      <div className="activity-text">{a.text}</div>
                      <div className="activity-time">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
