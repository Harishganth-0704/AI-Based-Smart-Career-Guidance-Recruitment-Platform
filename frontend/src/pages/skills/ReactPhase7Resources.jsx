import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase7Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 7: Working with APIs & Data Fetching</h1><p>Learn to communicate with servers to fetch and manage data, using both traditional methods and modern server state libraries.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Server State Management</h2>
            <div className="resource-item"><h3>TanStack Query (React Query) - Official Docs</h3><p>The definitive library for managing server state. It handles caching, background updates, and stale data invalidation automatically.</p><a href="https://tanstack.com/query/latest/docs/react/overview" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a></div>
            <div className="resource-item"><h3>React Query Tutorial (PedroTech)</h3><p>A practical YouTube video that clearly explains the benefits of React Query and how to implement it.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/r8Dg0c-AYaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    </div></>
);
export default ReactPhase7Resources;