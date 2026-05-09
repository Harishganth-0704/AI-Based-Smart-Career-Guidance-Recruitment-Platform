import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const ReactPhase11Resources = () => (
    <><style>{ResourceStyles}</style>
    <div className="resource-container">
        <header className="resource-header"><h1>Stage 11: Testing & Debugging</h1><p>Learn to write automated tests with Jest and React Testing Library to ensure your application is reliable and bug-free.</p><Link to="/skills/react" className="back-link">← Back to React Roadmap</Link></header>
        <div className="resource-section"><h2>Frameworks & Libraries</h2>
            <div className="resource-item"><h3>React Testing Library - Official Docs</h3><p>The official documentation for the most popular React component testing library, focusing on user-interactable behavior.</p><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
            <div className="resource-item"><h3>Jest - Official Docs</h3><p>The primary source for learning how to use the Jest testing framework for running tests, making assertions, and mocking.</p><a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a></div>
        </div>
    </div></>
);
export default ReactPhase11Resources;