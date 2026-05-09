import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase16Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 16: Deployment & CI/CD</h1><p>Learn to take your completed applications live and automate the deployment process.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Platforms & Guides</h2>
            <div className="resource-item"><h3>Deploying React with Vercel</h3><p>The official guide from Vercel for zero-configuration deployments of React applications from a Git repository.</p><a href="https://vercel.com/guides/deploying-react-with-vercel" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Vercel</a></div>
            <div className="resource-item"><h3>GitHub Actions Documentation</h3><p>The official documentation for creating CI/CD pipelines directly within your GitHub repository.</p><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
        </div>
    </div></>
);
export default ReactPhase16Resources;