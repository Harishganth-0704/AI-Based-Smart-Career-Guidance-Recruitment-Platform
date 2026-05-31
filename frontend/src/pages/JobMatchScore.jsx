import React, { useState } from 'react';
import { getJobMatchScore } from '../services/api';
import './JobMatchScore.css';

const JobMatchScore = () => {
    const [mySkills, setMySkills] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAnalyze = async (e) => {
        e.preventDefault();
        if (!mySkills.trim() || !jobDescription.trim()) {
            setError('Please fill in both fields.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult(null);
        try {
            const data = await getJobMatchScore(mySkills, jobDescription);
            if (data.success) {
                setResult(data);
            } else {
                setError('AI analysis failed. Please try again.');
            }
        } catch (err) {
            setError('AI service is busy. Please try again in a moment.');
        } finally {
            setIsLoading(false);
        }
    };

    const getScoreColor = (score) => {
        if (score >= 75) return '#00e676';
        if (score >= 50) return '#ffb74d';
        return '#ef5350';
    };

    const getScoreLabel = (score) => {
        if (score >= 75) return '🔥 Strong Match';
        if (score >= 50) return '⚡ Moderate Match';
        return '⚠️ Weak Match';
    };

    return (
        <div className="job-match-page">
            <header className="job-match-header">
                <h1>🎯 AI Job Match Score</h1>
                <p>Paste your skills and a job description. Our AI will instantly analyze how well you match — and what's missing.</p>
            </header>

            <div className="job-match-grid">
                {/* Input Panel */}
                <div className="jm-input-panel glass">
                    <form onSubmit={handleAnalyze}>
                        <div className="form-group">
                            <label>📋 My Skills & Experience</label>
                            <textarea
                                rows={7}
                                placeholder="e.g. React, Node.js, MongoDB, Python, 1 year internship at TCS, built 3 full-stack projects..."
                                value={mySkills}
                                onChange={(e) => setMySkills(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>🏢 Job Description (Paste Here)</label>
                            <textarea
                                rows={7}
                                placeholder="Paste the full job description from LinkedIn, Naukri, Indeed, etc..."
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                            />
                        </div>
                        {error && <p className="jm-error">{error}</p>}
                        <button type="submit" className="jm-btn" disabled={isLoading}>
                            {isLoading ? (
                                <span className="jm-loading">🤖 AI Analyzing...</span>
                            ) : (
                                '⚡ Analyze My Match'
                            )}
                        </button>
                    </form>
                </div>

                {/* Result Panel */}
                <div className="jm-result-panel">
                    {result ? (
                        <div className="jm-results fade-in">
                            {/* Score Circle */}
                            <div className="score-card glass">
                                <div
                                    className="score-circle"
                                    style={{
                                        background: `conic-gradient(${getScoreColor(result.matchScore)} ${result.matchScore * 3.6}deg, #1e2a3a ${result.matchScore * 3.6}deg)`
                                    }}
                                >
                                    <div className="score-inner">
                                        <span className="score-number" style={{ color: getScoreColor(result.matchScore) }}>
                                            {result.matchScore}%
                                        </span>
                                        <span className="score-label">{getScoreLabel(result.matchScore)}</span>
                                    </div>
                                </div>
                                <p className="verdict">{result.verdict}</p>
                            </div>

                            {/* Matched Skills */}
                            <div className="skills-card glass">
                                <h3>✅ Matched Skills</h3>
                                <div className="skill-tags">
                                    {result.matchedSkills?.map((skill, i) => (
                                        <span key={i} className="skill-tag matched">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Missing Skills */}
                            <div className="skills-card glass">
                                <h3>❌ Missing Skills (Gaps)</h3>
                                <div className="skill-tags">
                                    {result.missingSkills?.map((skill, i) => (
                                        <span key={i} className="skill-tag missing">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Tip */}
                            <div className="tip-card glass">
                                <h3>💡 AI Improvement Tip</h3>
                                <p>{result.improvementTip}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="jm-empty glass">
                            <div className="empty-icon">🎯</div>
                            <h3>Your Match Score Will Appear Here</h3>
                            <p>Fill in your skills and paste a job description to see your AI-powered match analysis instantly.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobMatchScore;
