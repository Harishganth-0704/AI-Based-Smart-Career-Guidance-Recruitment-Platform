import React, { useState } from 'react';
import './Resources.css';

const resourceCategories = {
  coursesFree: 'Free Courses',
  coursesPaid: 'Paid Courses',
  books: 'Books',
  youtubeAndBlogs: 'YouTube & Blogs'
};

const Resources = ({ resources }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(resourceCategories)[0]);

  const renderResourceList = (resourceList) => {
    if (!resourceList || resourceList.length === 0) {
      return <p>No resources listed for this category.</p>;
    }
    return (
      <ul>
        {resourceList.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="resources-container">
      <div className="resource-tabs">
        {Object.entries(resourceCategories).map(([key, name]) => (
          <button
            key={key}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="resource-content">
        {renderResourceList(resources[activeTab])}
      </div>
    </div>
  );
};

export default Resources;