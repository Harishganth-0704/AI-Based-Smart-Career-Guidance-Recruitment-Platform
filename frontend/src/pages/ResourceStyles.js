// src/pages/ResourceStyles.js

const ResourceStyles = `
:root {
  --background-dark: #12121e;
  --card-background: #1e1e30;
  --accent-primary: #00e676;
  --accent-secondary: #8258dc;
  --text-light: #e0e0e0;
  --text-medium: #b0b0b0;
  --border-color: #33334d;
}

.resource-container {
  background-color: var(--background-dark);
  color: var(--text-light);
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.resource-header {
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2rem;
}

.resource-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.resource-header p {
  font-size: 1.2rem;
  color: var(--text-medium);
  max-width: 700px;
  margin: 0 auto 2rem auto;
}

.back-link {
  color: var(--accent-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
}

.resource-section {
  margin-bottom: 3rem;
}

.resource-section h2 {
  font-size: 2rem;
  color: var(--text-light);
  border-bottom: 2px solid var(--accent-secondary);
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.resource-item {
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
}

.resource-item h3 {
  font-size: 1.4rem;
  color: var(--accent-primary);
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.resource-item p {
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.resource-item iframe {
    max-width: 100%;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.resource-link {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background-color: var(--accent-secondary);
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    border-radius: 20px;
    transition: background-color 0.3s ease;
}

.resource-link:hover {
    background-color: #9a6ce1;
}
.resource-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.resources-flex {
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
  align-items: center; /* Center vertically for better balance */
}

.resources-flex > div {
  flex: 1;
  width: 100%;
}

.resources-flex > div:first-child {
  flex: 1.4;
}

.video-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.video-wrapper {
  width: 100%;
  max-width: 550px; /* Slightly smaller for better balance */
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  background: #000;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}



.notes-card {
  border-left: 4px solid var(--accent-primary);
  font-style: italic;
  background: linear-gradient(135deg, var(--card-background) 0%, #252535 100%);
}

.topics-list ul {
  list-style-type: none;
  padding: 0;
}

.topics-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  position: relative;
  padding-left: 1.5rem;
}

.topics-list li::before {
  content: '⚡';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
}

@media (max-width: 992px) {
  .resource-grid, .resources-flex {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
}
`;

export default ResourceStyles;

