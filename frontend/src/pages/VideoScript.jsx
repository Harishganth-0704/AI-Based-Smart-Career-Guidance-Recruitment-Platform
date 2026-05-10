import React, { useState } from 'react';
import { generateVideoScript } from '../services/api';
import './VideoScript.css';

const VideoScript = () => {
    const [role, setRole] = useState('');
    const [skills, setSkills] = useState('');
    const [script, setScript] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!role || !skills) {
            setError('Please enter both role and skills.');
            return;
        }

        setIsLoading(true);
        setError('');
        setScript('');

        try {
            const response = await generateVideoScript(role, skills);
            if (response.success) {
                setScript(response.script);
            } else {
                setError('Failed to generate script.');
            }
        } catch (err) {
            setError('Error connecting to AI service.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(script);
        alert('Script copied! You are ready to record.');
    };

    return (
        <div className="video-script-page">
            <header className="page-header">
                <h1>🎬 AI Video Resume Script</h1>
                <p>Nervous about your video intro? Let AI write a winning 60-second script for you.</p>
            </header>

            <div className="script-container">
                <div className="input-panel glass">
                    <form onSubmit={handleGenerate}>
                        <div className="form-group">
                            <label>Target Job Role</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Software Engineer Intern" 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Top Skills / Projects</label>
                            <textarea 
                                rows="5" 
                                placeholder="e.g. Python, React, SQL, AI Chatbot project..."
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="gen-btn" disabled={isLoading}>
                            {isLoading ? 'Writing your script...' : 'Generate 60s Script'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>

                <div className="result-panel glass">
                    {script ? (
                        <div className="script-output fade-in">
                            <div className="output-header">
                                <h3>Your Professional Script</h3>
                                <button className="copy-icon-btn" onClick={copyToClipboard}>📋 Copy</button>
                            </div>
                            <div className="script-content">
                                {script.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                            <div className="teleprompter-tip">
                                💡 <strong>Pro Tip:</strong> Read this script naturally. Keep your camera at eye level and smile!
                            </div>
                        </div>
                    ) : (
                        <div className="empty-script">
                            <div className="camera-icon">🎥</div>
                            <p>Your script will appear here. Be ready to shine!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoScript;
