import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import './Login.css'; // Reuse auth styles

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setStatus({ type: 'error', message: 'Passwords do not match!' });
            return;
        }
        if (password.length < 6) {
            setStatus({ type: 'error', message: 'Password must be at least 6 characters.' });
            return;
        }
        setLoading(true);
        setStatus({ type: '', message: '' });
        try {
            const res = await api.put(`/auth/reset-password/${token}`, { password });
            setStatus({ type: 'success', message: res.data.message });
            setTimeout(() => navigate('/login'), 3000);
        } catch (err) {
            setStatus({ type: 'error', message: err.response?.data?.message || 'Reset failed. The link may have expired.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>🔒 Reset Password</h2>
                    <p>Enter your new password below</p>
                </div>

                {status.message && (
                    <div style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        background: status.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                        border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`,
                        color: status.type === 'success' ? '#4ade80' : '#f87171'
                    }}>
                        {status.message}
                        {status.type === 'success' && <span style={{ display: 'block', fontSize: '0.85rem', marginTop: '4px' }}>Redirecting to login...</span>}
                    </div>
                )}

                {status.type !== 'success' && (
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>New Password</label>
                            <input
                                type="password"
                                placeholder="Minimum 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input
                                type="password"
                                placeholder="Repeat your new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading ? 'Resetting...' : 'Reset Password ✅'}
                        </button>
                    </form>
                )}

                <div className="auth-footer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <p><Link to="/login">← Back to Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
