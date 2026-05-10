import React, { useState } from 'react';
import { getCompanyCheatSheet } from '../services/api';
import './CheatSheet.css';

const CheatSheet = () => {
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!company || !role) {
            setError('Please enter both company and role.');
            return;
        }

        setIsLoading(true);
        setError('');
        setData('');

        try {
            const response = await getCompanyCheatSheet(company, role);
            if (response.success) {
                setData(response.cheatSheet);
            } else {
                setError('Failed to fetch insight.');
            }
        } catch (err) {
            setError('AI service busy. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="cheat-sheet-page">
            <header className="page-header">
                <h1>📑 Interview Cheat Sheet</h1>
                <p>Crack any company interview with AI-powered specific insights.</p>
            </header>

            <div className="cheat-grid">
                <div className="input-panel glass">
                    <form onSubmit={handleGenerate}>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Google, Amazon, Zoho" 
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Job Role</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Full Stack Developer" 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="crack-btn" disabled={isLoading}>
                            {isLoading ? 'Scanning Company DNA...' : 'Generate Cheat Sheet'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>

                <div className="result-panel glass">
                    {data ? (
                        <div className="cheat-output fade-in">
                            <div className="cheat-header">
                                <h3>{company} | {role}</h3>
                                <span className="verified-badge">Vetted by AI</span>
                            </div>
                            <div className="cheat-content">
                                {data.split('\n').map((line, i) => (
                                    <p key={i} className={line.startsWith('**') ? 'highlight-text' : ''}>
                                        {line.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="empty-cheat">
                            <div className="target-icon">🎯</div>
                            <p>Enter details to get your competitive edge.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheatSheet;
