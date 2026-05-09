import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase14Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 14: Advanced Topics</h1><p>Explore cutting-edge concepts like React Server Components, Suspense, and Progressive Web Apps (PWAs).</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Documentation & Guides</h2>
            <div className="resource-item"><h3>Next.js Docs - App Router</h3><p>The official documentation explaining the new paradigm of React Server Components and Client Components in Next.js.</p><a href="https://nextjs.org/docs/app" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
            <div className="resource-item"><h3>web.dev - Progressive Web Apps</h3><p>Google's excellent resource on all aspects of PWAs, from the Web App Manifest to Service Workers.</p><a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn PWAs</a></div>
        </div>
    </div></>
);
export default ReactPhase14Resources;