import React, { useState } from 'react';
import { getSalaryInsight } from '../services/api';
import './SalaryInsight.css';

const SalaryInsight = () => {
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('India');
    const [insight, setInsight] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFetch = async (e) => {
        e.preventDefault();
        if (!role) {
            setError('Please enter a job role.');
            return;
        }

        setIsLoading(true);
        setError('');
        setInsight('');

        try {
            const response = await getSalaryInsight(role, location);
            if (response.success) {
                setInsight(response.salaryInsight);
            } else {
                setError('Could not fetch salary data.');
            }
        } catch (err) {
            setError('Service unavailable. Try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="salary-insight-page">
            <header className="page-header">
                <h1>💰 AI Salary & Negotiation Coach</h1>
                <p>Know your worth. Get market insights and professional negotiation scripts.</p>
            </header>

            <div className="salary-grid">
                <div className="input-panel glass">
                    <form onSubmit={handleFetch}>
                        <div className="form-group">
                            <label>Job Role</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Data Scientist" 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input 
                                type="text" 
                                placeholder="e.g. India or USA" 
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="fetch-btn" disabled={isLoading}>
                            {isLoading ? 'Consulting Market Data...' : 'Get Salary Insights'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>

                <div className="result-panel glass">
                    {insight ? (
                        <div className="insight-output fade-in">
                            <div className="insight-header">
                                <h3>{role} - {location}</h3>
                                <span className="expert-badge">AI Expert Review</span>
                            </div>
                            <div className="insight-content">
                                {insight.split('\n').map((line, i) => (
                                    <p key={i} className={line.match(/^\d\./) || line.includes('**') ? 'bold-text' : ''}>
                                        {line.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                            <div className="negotiation-tip">
                                💡 <strong>Negotiation Rule:</strong> Never be the first to say a number. Let them offer first!
                            </div>
                        </div>
                    ) : (
                        <div className="empty-salary">
                            <div className="money-icon">💸</div>
                            <p>Discover the market value for your dream role.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalaryInsight;
