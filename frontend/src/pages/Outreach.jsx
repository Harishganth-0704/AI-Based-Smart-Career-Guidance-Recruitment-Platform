import React, { useState } from 'react';
import { generateOutreach } from '../services/api';
import './Outreach.css';

const Outreach = () => {
    const [role, setRole] = useState('');
    const [purpose, setPurpose] = useState('Requesting a Referral');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const purposes = [
        'Requesting a Referral',
        'Cold Email for Internship',
        'LinkedIn Connection Request',
        'Following Up after Interview',
        'Networking with Alumnus',
        'Inquiring about Job Opening'
    ];

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!role) {
            setError('Please enter the target role.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResult('');

        try {
            const response = await generateOutreach(role, purpose);
            if (response.success) {
                setResult(response.outreach);
            } else {
                setError('Failed to generate messages.');
            }
        } catch (err) {
            setError('Communication service error.');
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    return (
        <div className="outreach-page">
            <header className="page-header">
                <h1>✉️ AI Networking Suite</h1>
                <p>Don't just apply. Network. Get professional messages for LinkedIn and Email.</p>
            </header>

            <div className="outreach-grid">
                <div className="input-panel glass">
                    <form onSubmit={handleGenerate}>
                        <div className="form-group">
                            <label>Target Role</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Frontend Developer" 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Outreach Purpose</label>
                            <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                                {purposes.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                        <button type="submit" className="outreach-btn" disabled={isLoading}>
                            {isLoading ? 'Drafting Professional Messages...' : 'Generate Messages'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>

                <div className="result-panel glass">
                    {result ? (
                        <div className="outreach-output fade-in">
                            <div className="output-section">
                                <div className="output-header">
                                    <h3>Networking Template</h3>
                                    <button className="copy-btn" onClick={() => copyToClipboard(result)}>📋 Copy Full Draft</button>
                                </div>
                                <div className="output-text">
                                    {result.split('\n').map((line, i) => (
                                        <p key={i} className={line.includes('**') ? 'highlight-header' : ''}>
                                            {line.replace(/\*\*/g, '')}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="empty-outreach">
                            <div className="envelope-icon">📨</div>
                            <p>Generate professional messages to connect with recruiters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Outreach;
