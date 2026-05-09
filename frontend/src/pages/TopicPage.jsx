// src/pages/TopicPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
// --- THIS IS THE CORRECTED LINE ---
import { aiEngineerTopics, mlEngineerTopics, cybersecurityTopics, dataScientistTopics } from '../assets/data/roadmapData';

// --- STYLES (same as before) ---
const styles = `
.topic-page-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: calc(100vh - 4rem);
  padding: 4rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.topic-page-content {
  max-width: 900px;
  width: 100%;
  background-color: #1e1e30;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #33334d;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}
.topic-header h1 {
  font-size: 3rem;
  color: #00e676;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 15px rgba(0, 230, 118, 0.4);
}
.resource-section {
  margin-bottom: 2.5rem;
}
.resource-section h2 {
  font-size: 1.8rem;
  color: #8258dc;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3b3b55;
  padding-bottom: 0.5rem;
}
.video-player-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.video-player-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.article-link a, .course-link a, .platform-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  color: #e0e0e0;
  background-color: #2b2b40;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #33334d;
}
.article-link a:hover, .course-link a:hover, .platform-link a:hover {
  background-color: #8258dc;
  color: #12121e;
  border-color: #8258dc;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(130, 88, 220, 0.4);
}
.link-icon {
  width: 24px;
  height: 24px;
}
.platform-description {
    font-size: 1rem;
    color: #b0b0b0;
    margin-top: 1rem;
    font-style: italic;
}
.back-link { margin-top: 3rem; color: #8258dc; text-decoration: none; font-size: 1.1rem; padding: 0.8rem 1.5rem; border: 1px solid #8258dc; border-radius: 25px; transition: all 0.3s ease; }
.back-link:hover { background-color: #8258dc; color: #12121e; }
@media (max-width: 768px) {
  .topic-header h1 { font-size: 2.2rem; }
  .resource-section h2 { font-size: 1.5rem; }
  .article-link a, .course-link a, .platform-link a { font-size: 1rem; }
}
`;

const allTopics = {
  'ai-engineer': aiEngineerTopics,
  'ml-engineer': mlEngineerTopics,
  'cybersecurity': cybersecurityTopics,
  'data-scientist': dataScientistTopics,
};

const TopicPage = () => {
  const { roadmap, topicId } = useParams();
  
  const topicData = allTopics[roadmap] || {};
  const topic = topicData[topicId];

  const backLinkUrl = `/${roadmap}`;

  if (!topic) {
    return (
      <>
        <style>{styles}</style>
        <div className="topic-page-container">
          <h1>Topic Not Found</h1>
          <Link to="/roadmaps" className="back-link">← Back to Roadmaps</Link>
        </div>
      </>
    );
  }

  const roadmapTitle = roadmap.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      <style>{styles}</style>
      <div className="topic-page-container">
        <div className="topic-page-content">
          <div className="topic-header">
            <h1>{topic.title}</h1>
          </div>

          {topic.resourceType === 'course' && (
            <div className="resource-section">
              <h2>Recommended Course</h2>
              <div className="course-link">
                <a href={topic.resourceUrl} target="_blank" rel="noopener noreferrer">
                  View Course on {topic.courseProvider}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="link-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {topic.resourceType === 'platform' && (
            <div className="resource-section">
              <h2>Recommended Platform</h2>
              <div className="platform-link">
                <a href={topic.resourceUrl} target="_blank" rel="noopener noreferrer">
                  Visit {topic.title}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="link-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
              <p className="platform-description">{topic.description}</p>
            </div>
          )}

          {topic.youtubeVideoId && (
            <div className="resource-section">
              <h2>Video Resource</h2>
              <div className="video-player-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${topic.youtubeVideoId}`}
                  title={topic.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {topic.articleUrl && (
            <div className="resource-section">
              <h2>Article / Notes</h2>
              <div className="article-link">
                <a href={topic.articleUrl} target="_blank" rel="noopener noreferrer">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="link-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          )}

        </div>
        <Link to={backLinkUrl} className="back-link">← Back to {roadmapTitle} Roadmap</Link>
      </div>
    </>
  );
};

export default TopicPage;