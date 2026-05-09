import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase12Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 12: Backend Integration & Fullstack</h1><p>Understand how to connect to backends using REST, GraphQL, BaaS, and frameworks like Next.js.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Frameworks & Platforms</h2>
            <div className="resource-item"><h3>Next.js Learn - Official Interactive Course</h3><p>The best resource for learning Next.js, a production-grade React framework that enables full-stack development.</p><a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="resource-link">Start Learning</a></div>
            <div className="resource-item"><h3>Supabase - Official Docs</h3><p>The documentation for Supabase, a popular open-source alternative to Firebase that provides a full PostgreSQL database.</p><a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
        </div>
    </div></>
);
export default ReactPhase12Resources;