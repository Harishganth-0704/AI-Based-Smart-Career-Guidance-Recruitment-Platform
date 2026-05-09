import React, { useState } from 'react';
import { sendChatMessage } from '../services/api';
import './GitHubAnalyzer.css';

const GitHubAnalyzer = () => {
    const [username, setUsername] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [aiFeedback, setAiFeedback] = useState(null);
    const [error, setError] = useState(null);

    const analyzeProfile = async (e) => {
        e.preventDefault();
        let processedUsername = username.trim();
        if (processedUsername.includes('github.com/')) {
            processedUsername = processedUsername.split('github.com/')[1].split('/')[0];
        }

        if (!processedUsername) {
            setError('Please enter a valid GitHub username or URL.');
            return;
        }

        setIsAnalyzing(true);
        setError(null);
        setProfileData(null);
        setAiFeedback(null);

        try {
            // 1. Fetch user data
            const userRes = await fetch(`https://api.github.com/users/${processedUsername}`);
            if (!userRes.ok) {
                if (userRes.status === 404) throw new Error('GitHub user not found.');
                throw new Error('Failed to fetch GitHub profile.');
            }
            const user = await userRes.json();

            // 2. Fetch repos
            const reposRes = await fetch(`https://api.github.com/users/${processedUsername}/repos?per_page=100&sort=updated`);
            const repos = await reposRes.json();

            // 3. Analyze Languages
            const languages = {};
            let totalStars = 0;
            repos.forEach(repo => {
                totalStars += repo.stargazers_count;
                if (repo.language) {
                    languages[repo.language] = (languages[repo.language] || 0) + 1;
                }
            });

            // Sort languages
            const topLanguages = Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5); // Top 5

            const analysisData = {
                name: user.name || user.login,
                avatar: user.avatar_url,
                public_repos: user.public_repos,
                followers: user.followers,
                totalStars,
                topLanguages
            };

            setProfileData(analysisData);

            // 4. Send to Gemini for AI Review
            const prompt = `
            Act as an expert technical recruiter. Analyze this GitHub profile summary:
            - Repositories: ${analysisData.public_repos}
            - Followers: ${analysisData.followers}
            - Total Stars: ${totalStars}
            - Top Languages used: ${topLanguages.map(l => `${l[0]} (${l[1]} repos)`).join(', ')}

            Provide a short, encouraging feedback report containing:
            1. What their strongest skill/stack seems to be.
            2. What job roles they are best suited for right now.
            3. One quick advice on what to learn next to improve their portfolio.
            Keep it strictly professional, concise, and format it nicely.
            `;

            const aiResponse = await sendChatMessage(prompt, []);
            if (aiResponse && aiResponse.text) {
                setAiFeedback(aiResponse.text);
            }

        } catch (err) {
            console.error(err);
            setError(err.message || 'An error occurred during analysis.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="github-analyzer-container">
            <header className="github-header">
                <h1>🐙 GitHub Profile Analyzer</h1>
                <p>Enter your GitHub username to get an AI-powered evaluation of your skills and job readiness.</p>
            </header>

            <div className="analyzer-layout">
                <div className="search-card glass">
                    <form onSubmit={analyzeProfile}>
                        <div className="form-group">
                            <label>GitHub Username</label>
                            <input 
                                type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g., torvalds"
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="analyze-btn" disabled={isAnalyzing}>
                            {isAnalyzing ? 'Scanning Repositories...' : 'Analyze Profile'}
                        </button>
                    </form>
                </div>

                <div className="result-card glass">
                    {isAnalyzing ? (
                        <div className="loading-state">
                            <div className="loader"></div>
                            <p>Analyzing code structure and AI evaluation...</p>
                        </div>
                    ) : profileData ? (
                        <div className="profile-result fade-in">
                            <div className="profile-header">
                                <img src={profileData.avatar} alt="Profile" className="avatar" />
                                <div>
                                    <h2>{profileData.name}</h2>
                                    <div className="profile-stats">
                                        <span>📦 {profileData.public_repos} Repos</span>
                                        <span>⭐ {profileData.totalStars} Stars</span>
                                        <span>👥 {profileData.followers} Followers</span>
                                    </div>
                                </div>
                            </div>

                            <div className="languages-section">
                                <h3>Top Languages</h3>
                                <div className="language-bars">
                                    {profileData.topLanguages.map((lang, index) => {
                                        const percentage = Math.min((lang[1] / profileData.public_repos) * 100, 100);
                                        return (
                                            <div key={index} className="lang-bar-container">
                                                <div className="lang-info">
                                                    <span>{lang[0]}</span>
                                                    <span>{lang[1]} repos</span>
                                                </div>
                                                <div className="progress-bg">
                                                    <div className="progress-fill" style={{width: `${percentage}%`}}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {aiFeedback && (
                                <div className="ai-feedback-section highlight-box">
                                    <h3>🤖 AI Recruiter Feedback</h3>
                                    <div className="feedback-text" style={{whiteSpace: 'pre-line'}}>
                                        {aiFeedback.replace(/\*\*/g, '')}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">🔍</div>
                            <p>Enter a username to discover your hidden strengths.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GitHubAnalyzer;
