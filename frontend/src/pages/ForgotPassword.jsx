import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Login.css'; // Reuse auth styles

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });
        try {
            const res = await api.post('/auth/forgot-password', { email });
            setStatus({ type: 'success', message: res.data.message });
        } catch (err) {
            setStatus({ type: 'error', message: err.response?.data?.message || 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>🔑 Forgot Password</h2>
                    <p>Enter your email and we'll send you a reset link</p>
                </div>

                {status.message && (
                    <div className={status.type === 'success' ? 'auth-success' : 'auth-error'}
                        style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            background: status.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                            border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`,
                            color: status.type === 'success' ? '#4ade80' : '#f87171'
                        }}>
                        {status.message}
                    </div>
                )}

                {status.type !== 'success' && (
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Reset Link 📧'}
                        </button>
                    </form>
                )}

                <div className="auth-footer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <p>Remembered it? <Link to="/login">Back to Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
