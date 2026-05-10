import React, { useState, useEffect } from 'react';
import { getLeaderboard } from '../services/api';
import './Leaderboard.css';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const res = await getLeaderboard();
                if (res.success) {
                    setLeaderboard(res.leaderboard);
                }
            } catch (err) {
                console.error('Failed to fetch leaderboard');
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    if (loading) return <div className="leaderboard-loading">Loading Rankings...</div>;

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-header">
                <h1>Global AI Talent Leaderboard</h1>
                <p>The top 10 future-ready tech minds in the CareerCraft ecosystem.</p>
            </div>

            <div className="leaderboard-card glass">
                <div className="leaderboard-table-header">
                    <span className="rank">Rank</span>
                    <span className="user">Candidate</span>
                    <span className="streak">Streak</span>
                    <span className="points">AI Points</span>
                </div>
                <div className="leaderboard-list">
                    {leaderboard.map((user, index) => (
                        <div className={`leaderboard-item ${index < 3 ? `top-${index + 1}` : ''}`} key={user._id}>
                            <span className="rank">{index + 1}</span>
                            <div className="user-info">
                                <span className="user-name">{user.name}</span>
                                <div className="user-badges">
                                    {user.badges.slice(0, 2).map((badge, bIdx) => (
                                        <span key={bIdx} className="mini-badge">{badge}</span>
                                    ))}
                                </div>
                            </div>
                            <span className="streak">🔥 {user.streak}</span>
                            <span className="points">💎 {user.points}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
