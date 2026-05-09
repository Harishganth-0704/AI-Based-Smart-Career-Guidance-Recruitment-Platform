import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const AIPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 16: Continuous Learning</h1><p>Develop a sustainable system for staying current with the rapidly evolving field of AI.</p><Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link></header>
            <div className="resource-section"><h2>Newsletters & Aggregators</h2>
                <div className="resource-item"><h3>The Batch by DeepLearning.AI</h3><p>Andrew Ng's weekly newsletter on the most important news and research in AI.</p><a href="https://www.deeplearning.ai/the-batch/" target="_blank" rel="noopener noreferrer" className="resource-link">Subscribe</a></div>
                <div className="resource-item"><h3>Papers with Code</h3><p>An essential resource that links new research papers to their code implementations, making it easy to stay on the cutting edge.</p><a href="https://paperswithcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Papers</a></div>
            </div>
        </div>
    </>
);
export default AIPhase16Resources;