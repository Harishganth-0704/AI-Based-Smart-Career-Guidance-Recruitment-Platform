import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase10Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 10: Performance Optimization</h1><p>Learn to use profiling tools to identify what makes a React app slow and master the techniques to optimize it.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Tools & Guides</h2>
            <div className="resource-item"><h3>React Official Docs - Performance</h3><p>The official documentation covering key optimization APIs like memo, useMemo, and useCallback.</p><a href="https://react.dev/learn/performance" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a></div>
            <div className="resource-item"><h3>Profiling a React App with React DevTools (YouTube)</h3><p>A video tutorial demonstrating how to use the Profiler to identify and fix performance bottlenecks.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/ngVj3Xh671A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    </div></>
);
export default ReactPhase10Resources;