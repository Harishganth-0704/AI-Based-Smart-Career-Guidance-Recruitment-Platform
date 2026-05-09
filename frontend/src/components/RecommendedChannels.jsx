// src/components/RecommendedChannels.jsx
// Shared component for showing recommended YouTube channels on job roadmap pages

import React from 'react';

const channelData = {
  'ai-engineer': {
    label: 'AI Engineer',
    channels: [
      { name: 'Krish Naik', url: 'https://youtube.com/@krishnaik06', tag: 'ML + DL + LLM' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
      { name: 'StatQuest', url: 'https://youtube.com/@statquest', tag: 'Math + ML Intuition' },
      { name: 'Andrej Karpathy', url: 'https://youtube.com/@AndrejKarpathy', tag: 'LLM Deep Dives' },
    ],
    searches: ['machine learning full course', 'transformers explained', 'mlops project'],
  },
  'ml-engineer': {
    label: 'Machine Learning Engineer',
    channels: [
      { name: 'Krish Naik', url: 'https://youtube.com/@krishnaik06', tag: 'ML + DL + LLM' },
      { name: 'Codebasics', url: 'https://youtube.com/@codebasics', tag: 'ML Projects' },
      { name: 'Sentdex', url: 'https://youtube.com/@sentdex', tag: 'Practical Python ML' },
    ],
    searches: ['scikit-learn full tutorial', 'machine learning project', 'deep learning beginner'],
  },
  'data-scientist': {
    label: 'Data Science',
    channels: [
      { name: 'Alex The Analyst', url: 'https://youtube.com/@AlexTheAnalyst', tag: 'Data Analysis' },
      { name: 'Codebasics', url: 'https://youtube.com/@codebasics', tag: 'Data Science Projects' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
    ],
    searches: ['data science full course', 'pandas tutorial', 'data visualization python'],
  },
  'cybersecurity': {
    label: 'Cybersecurity / Ethical Hacker',
    channels: [
      { name: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', tag: 'Networking + Hacking' },
      { name: 'LiveOverflow', url: 'https://youtube.com/@LiveOverflow', tag: 'Exploit Research' },
      { name: 'John Hammond', url: 'https://youtube.com/@JohnHammond010', tag: 'CTF Walkthroughs' },
      { name: 'IppSec', url: 'https://youtube.com/@ippsec', tag: 'HackTheBox Labs' },
    ],
    searches: ['penetration testing basics', 'burp suite tutorial', 'ctf walkthrough'],
  },
  'cloud-architect': {
    label: 'Cloud Architect / IaC Engineer',
    channels: [
      { name: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana', tag: 'DevOps + Cloud' },
      { name: 'AWS Official', url: 'https://youtube.com/@amazonwebservices', tag: 'AWS Tutorials' },
      { name: 'KodeKloud', url: 'https://youtube.com/@KodeKloud', tag: 'Hands-on Labs' },
      { name: 'DevOps Directive', url: 'https://youtube.com/@DevOpsDirective', tag: 'DevOps Projects' },
    ],
    searches: ['terraform full course', 'aws architect tutorial', 'kubernetes for beginners'],
  },
  'game-developer': {
    label: 'Game Developer',
    channels: [
      { name: 'Brackeys', url: 'https://youtube.com/@Brackeys', tag: 'Unity Basics' },
      { name: 'CodeMonkey', url: 'https://youtube.com/@CodeMonkeyUnity', tag: 'Unity C# Projects' },
      { name: 'GameDev.tv', url: 'https://youtube.com/@GameDevTV', tag: 'Complete Courses' },
      { name: 'Sebastian Lague', url: 'https://youtube.com/@SebastianLague', tag: 'Creative Coding' },
    ],
    searches: ['unity beginner tutorial', 'game design fundamentals', 'godot game tutorial'],
  },
  'ui-designer': {
    label: 'UI/UX Designer',
    channels: [
      { name: 'Flux Academy', url: 'https://youtube.com/@FluxAcademy', tag: 'Web Design' },
      { name: 'DesignCourse', url: 'https://youtube.com/@DesignCourse', tag: 'UI/UX Design' },
      { name: 'Figma', url: 'https://youtube.com/@Figma', tag: 'Figma Official' },
    ],
    searches: ['figma tutorial for beginners', 'ui design principles', 'ux design process'],
  },
  'fullstack': {
    label: 'Fullstack Developer',
    channels: [
      { name: 'Harkirat Singh', url: 'https://youtube.com/@HarkiratSingh', tag: 'Fullstack Projects' },
      { name: 'Traversy Media', url: 'https://youtube.com/@TraversyMedia', tag: 'Web Dev Tutorials' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
      { name: 'JavaScript Mastery', url: 'https://youtube.com/@javascriptmastery', tag: 'Modern Fullstack' },
    ],
    searches: ['MERN stack full course', 'fullstack project tutorial', 'next.js full stack app'],
  },
  'blockchain': {
    label: 'Blockchain Developer',
    channels: [
      { name: 'Dapp University', url: 'https://youtube.com/@DappUniversity', tag: 'Web3 + Solidity' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
      { name: 'Moralis Web3', url: 'https://youtube.com/@MoralisWeb3', tag: 'Web3 Projects' },
    ],
    searches: ['solidity full course', 'ethereum smart contract', 'web3 dapp tutorial'],
  },
  'iot-developer': {
    label: 'IoT Developer',
    channels: [
      { name: 'Andreas Spiess', url: 'https://youtube.com/@AndreasSpiess', tag: 'IoT Projects' },
      { name: 'GreatScott!', url: 'https://youtube.com/@greatscottlab', tag: 'Electronics' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
    ],
    searches: ['arduino tutorial beginner', 'raspberry pi project', 'mqtt iot tutorial'],
  },
  'ai-prompt-engineer': {
    label: 'AI Prompt Engineer',
    channels: [
      { name: 'Matt Wolfe', url: 'https://youtube.com/@mreflow', tag: 'AI Tools + LLMs' },
      { name: 'AI Explained', url: 'https://youtube.com/@ai-explained-', tag: 'LLM Research' },
      { name: 'Fireship', url: 'https://youtube.com/@Fireship', tag: 'Quick AI Tutorials' },
    ],
    searches: ['prompt engineering tutorial', 'langchain full course', 'rag pipeline tutorial'],
  },
  'low-code-developer': {
    label: 'Low Code Developer',
    channels: [
      { name: 'OutSystems', url: 'https://youtube.com/@OutSystems', tag: 'OutSystems Platform' },
      { name: 'Microsoft Power Platform', url: 'https://youtube.com/@MicrosoftPowerPlatform', tag: 'Power Apps' },
      { name: 'Bubble', url: 'https://youtube.com/@bubble', tag: 'No-Code Apps' },
    ],
    searches: ['power apps tutorial beginner', 'bubble no code app', 'outsystems tutorial'],
  },
  'python': {
    label: 'Python Developer',
    channels: [
      { name: 'Corey Schafer', url: 'https://youtube.com/@coreyms', tag: 'Deep Python Concepts' },
      { name: 'Programming with Mosh', url: 'https://youtube.com/@programmingwithmosh', tag: 'Beginner Tutorials' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
      { name: 'Tech With Tim', url: 'https://youtube.com/@TechWithTim', tag: 'Projects & DSA' },
    ],
    searches: ['python full course', 'python oop tutorial', 'python projects for beginners'],
  },
  'sql': {
    label: 'SQL & Databases',
    channels: [
      { name: 'Kudvenkat', url: 'https://youtube.com/@Kudvenkat', tag: 'SQL Server Basics' },
      { name: 'Hussein Nasser', url: 'https://youtube.com/@HusseinNasser-software-engineering', tag: 'Database Engineering' },
      { name: 'DataTalksClub', url: 'https://youtube.com/@DataTalksClub', tag: 'Data Engineering' },
    ],
    searches: ['sql full course beginner', 'advanced sql queries tutorial', 'database design principles'],
  },
  'cplusplus': {
    label: 'C++ Developer',
    channels: [
      { name: 'CodeBeauty', url: 'https://youtube.com/@CodeBeauty', tag: 'C++ Basics' },
      { name: 'Apna College', url: 'https://youtube.com/@ApnaCollegeOfficial', tag: 'C++ & DSA' },
      { name: 'Abdul Bari', url: 'https://youtube.com/@abdul_bari', tag: 'Algorithms' },
      { name: 'NeetCode', url: 'https://youtube.com/@NeetCode', tag: 'LeetCode & DSA' },
    ],
    searches: ['c++ full course', 'c++ stl tutorial', 'pointers in c++ explained'],
  },
  'javascript': {
    label: 'JavaScript Developer',
    channels: [
      { name: 'Traversy Media', url: 'https://youtube.com/@TraversyMedia', tag: 'JS Fundamentals' },
      { name: 'Akshay Saini', url: 'https://youtube.com/@akshaymarch7', tag: 'Namaste JavaScript' },
      { name: 'JavaScript Mastery', url: 'https://youtube.com/@javascriptmastery', tag: 'Projects' },
    ],
    searches: ['javascript full course', 'javascript closures explained', 'es6 crash course'],
  },
  'docker': {
    label: 'Docker & Containers',
    channels: [
      { name: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana', tag: 'Docker & Kubernetes' },
      { name: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', tag: 'Container Basics' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
    ],
    searches: ['docker crash course', 'docker compose tutorial', 'dockerize nodejs app'],
  },
  'bash': {
    label: 'Bash & Shell Scripting',
    channels: [
      { name: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', tag: 'Linux Basics' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
      { name: 'Corey Schafer', url: 'https://youtube.com/@coreyms', tag: 'Mac/Linux Terminal' },
    ],
    searches: ['bash scripting tutorial', 'linux command line for beginners', 'shell scripting full course'],
  },
  'golang': {
    label: 'Golang Developer',
    channels: [
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Go Full Courses' },
      { name: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana', tag: 'Go for DevOps' },
      { name: 'Traversy Media', url: 'https://youtube.com/@TraversyMedia', tag: 'Go Crash Course' },
    ],
    searches: ['golang full course', 'build api in golang', 'go routines explained'],
  },
  'react': {
    label: 'React Developer',
    channels: [
      { name: 'Codevolution', url: 'https://youtube.com/@Codevolution', tag: 'React Concepts' },
      { name: 'Web Dev Simplified', url: 'https://youtube.com/@WebDevSimplified', tag: 'React Hooks' },
      { name: 'JavaScript Mastery', url: 'https://youtube.com/@javascriptmastery', tag: 'React Projects' },
    ],
    searches: ['react full course', 'react hooks explained', 'react router v6 tutorial'],
  },
  'c': {
    label: 'C Programming',
    channels: [
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
      { name: 'Neso Academy', url: 'https://youtube.com/@NesoAcademy', tag: 'C Programming Playlist' },
      { name: 'Portfolio Courses', url: 'https://youtube.com/@PortfolioCourses', tag: 'C Practice' },
    ],
    searches: ['c programming full course', 'pointers in c', 'c memory management'],
  },
  'java': {
    label: 'Java Developer',
    channels: [
      { name: 'Telusko', url: 'https://youtube.com/@Telusko', tag: 'Java Basics' },
      { name: 'Amigoscode', url: 'https://youtube.com/@amigoscode', tag: 'Spring Boot' },
      { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp', tag: 'Full Courses' },
    ],
    searches: ['java full course', 'spring boot tutorial', 'java oop concepts'],
  },
  'aws': {
    label: 'AWS Cloud',
    channels: [
      { name: 'Stephane Maarek', url: 'https://youtube.com/@StephaneMaarek', tag: 'AWS Certifications' },
      { name: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana', tag: 'AWS Basics' },
      { name: 'AWS Official', url: 'https://youtube.com/@amazonwebservices', tag: 'AWS Deep Dives' },
    ],
    searches: ['aws crash course', 'aws practitioner full course', 'deploy app on aws'],
  },
};

const styles = `
.rc-section {
  background: linear-gradient(135deg, rgba(130, 88, 220, 0.08), rgba(0, 230, 118, 0.05));
  border: 1px solid rgba(130, 88, 220, 0.25);
  border-radius: 16px;
  padding: 2rem;
  margin: 2.5rem 0;
}
.rc-section h3 {
  font-size: 1.4rem;
  color: #00e676;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.rc-channels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.rc-channel-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(130, 88, 220, 0.3);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  text-decoration: none;
  display: block;
  transition: all 0.25s ease;
}
.rc-channel-card:hover {
  transform: translateY(-4px);
  border-color: #8258dc;
  background: rgba(130, 88, 220, 0.15);
}
.rc-channel-name {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.3rem;
}
.rc-channel-tag {
  font-size: 0.78rem;
  color: #8258dc;
}
.rc-searches h4 {
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 0.8rem;
}
.rc-search-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.rc-search-pill {
  background: rgba(0,230,118,0.08);
  border: 1px solid rgba(0,230,118,0.25);
  border-radius: 20px;
  padding: 0.35rem 1rem;
  font-size: 0.82rem;
  color: #00e676;
  text-decoration: none;
  transition: all 0.2s ease;
}
.rc-search-pill:hover {
  background: rgba(0,230,118,0.2);
  border-color: #00e676;
}
`;

const RecommendedChannels = ({ roadmapKey }) => {
  const data = channelData[roadmapKey];
  if (!data) return null;

  return (
    <>
      <style>{styles}</style>
      <div className="rc-section">
        <h3>🏅 Best YouTube Channels for {data.label}</h3>
        <div className="rc-channels-grid">
          {data.channels.map((ch, i) => (
            <a
              key={i}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rc-channel-card"
            >
              <div className="rc-channel-name">{ch.name}</div>
              <div className="rc-channel-tag">{ch.tag}</div>
            </a>
          ))}
        </div>
        <div className="rc-searches">
          <h4>🔍 Search These on YouTube:</h4>
          <div className="rc-search-pills">
            {data.searches.map((s, i) => (
              <a
                key={i}
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(s)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rc-search-pill"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedChannels;
