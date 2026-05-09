import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const styles = `
.ai-roadmap-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.ai-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.ai-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.ai-roadmap-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.ai-phase-card {
  background-color: #1e1e30;
  border: 1px solid #33334d;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.ai-phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ai-phase-header h2 {
  font-size: 1.6rem;
  color: #00e676;
  margin: 0;
}

.ai-phase-toggle {
  font-size: 2rem;
  color: #8258dc;
  transition: transform 0.3s ease;
}

.ai-phase-card.active .ai-phase-toggle {
  transform: rotate(45deg);
}

.ai-phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid #33334d;
}

.ai-phase-content p {
  color: #b0b0b0;
  line-height: 1.7;
}

.ai-resources-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #8258dc;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.ai-resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-2px);
}
`;

const roadmapsData = {
    'fullstack-developer': [
        { id: 1, title: 'Stage 1: Frontend Foundations', objective: 'Master HTML, CSS, and JavaScript to build responsive and interactive user interfaces.' },
        { id: 2, title: 'Stage 2: Modern Frontend Frameworks', objective: 'Learn React, Vue, or Angular to build scalable single-page applications.' },
        { id: 3, title: 'Stage 3: Backend Development', objective: 'Build robust APIs and server-side logic using Node.js, Python, or Java.' },
        { id: 4, title: 'Stage 4: Databases & Data Modeling', objective: 'Design schemas and interact with SQL (PostgreSQL) and NoSQL (MongoDB) databases.' },
        { id: 5, title: 'Stage 5: DevOps & Deployment', objective: 'Learn Docker, CI/CD pipelines, and cloud hosting to deploy full-stack applications.' }
    ],
    'ethical-hacker': [
        { id: 1, title: 'Stage 1: Networking & OS Fundamentals', objective: 'Understand TCP/IP, OSI model, Linux administration, and Windows internals.' },
        { id: 2, title: 'Stage 2: Vulnerability Assessment', objective: 'Learn to use tools like Nmap and Nessus to discover system vulnerabilities.' },
        { id: 3, title: 'Stage 3: Web Application Penetration Testing', objective: 'Master the OWASP Top 10 and tools like Burp Suite for testing web apps.' },
        { id: 4, title: 'Stage 4: Network & Wireless Security', objective: 'Learn advanced techniques for exploiting and securing enterprise networks.' },
        { id: 5, title: 'Stage 5: Reporting & Compliance', objective: 'Document findings professionally and understand security compliance standards.' }
    ],
    'iaac-engineer': [
        { id: 1, title: 'Stage 1: Cloud Foundations', objective: 'Master the core services of major cloud providers like AWS, Azure, or GCP.' },
        { id: 2, title: 'Stage 2: Infrastructure as Code (IaC)', objective: 'Learn Terraform and CloudFormation to provision infrastructure programmatically.' },
        { id: 3, title: 'Stage 3: Configuration Management', objective: 'Use tools like Ansible, Chef, or Puppet to manage server configurations at scale.' },
        { id: 4, title: 'Stage 4: CI/CD Pipelines', objective: 'Automate infrastructure deployment using GitHub Actions, Jenkins, or GitLab CI.' },
        { id: 5, title: 'Stage 5: Security & Compliance as Code', objective: 'Integrate security checks and policies directly into your IaC templates.' }
    ],
    'blockchain-developer': [
        { id: 1, title: 'Stage 1: Cryptography & Blockchain Basics', objective: 'Understand hashing, public-key cryptography, and distributed ledger concepts.' },
        { id: 2, title: 'Stage 2: Smart Contract Development', objective: 'Learn Solidity or Rust to write secure smart contracts on Ethereum or Solana.' },
        { id: 3, title: 'Stage 3: Decentralized Applications (dApps)', objective: 'Build frontends using Web3.js or Ethers.js to interact with your smart contracts.' },
        { id: 4, title: 'Stage 4: Blockchain Architecture', objective: 'Understand consensus mechanisms, Layer 2 scaling, and tokenomics.' },
        { id: 5, title: 'Stage 5: Smart Contract Security', objective: 'Learn to audit contracts and protect against common attacks like Reentrancy.' }
    ],
    'iot-developer': [
        { id: 1, title: 'Stage 1: Electronics & Microcontrollers', objective: 'Learn the basics of circuits, sensors, and programming Arduino/Raspberry Pi.' },
        { id: 2, title: 'Stage 2: Embedded Programming', objective: 'Master C and C++ for writing efficient, low-level code for embedded devices.' },
        { id: 3, title: 'Stage 3: IoT Connectivity Protocols', objective: 'Understand MQTT, CoAP, BLE, and LoRaWAN for device communication.' },
        { id: 4, title: 'Stage 4: Edge Computing & Analytics', objective: 'Process data locally on the device before sending it to the cloud.' },
        { id: 5, title: 'Stage 5: Cloud Integration & Security', objective: 'Connect devices securely to AWS IoT or Azure IoT and manage telemetry data.' }
    ],
    'ai-prompt-engineer': [
        { id: 1, title: 'Stage 1: LLM Architecture Basics', objective: 'Understand how transformers and Large Language Models work under the hood.' },
        { id: 2, title: 'Stage 2: Prompt Design Patterns', objective: 'Master zero-shot, few-shot, and chain-of-thought prompting techniques.' },
        { id: 3, title: 'Stage 3: Advanced Prompting & RAG', objective: 'Learn Retrieval-Augmented Generation to ground AI responses in external data.' },
        { id: 4, title: 'Stage 4: Fine-Tuning vs Prompting', objective: 'Understand when to write better prompts and when to fine-tune a model.' },
        { id: 5, title: 'Stage 5: Ethical AI & Evaluation', objective: 'Learn to mitigate bias, prevent hallucinations, and evaluate output quality.' }
    ],
    'low-code-developer': [
        { id: 1, title: 'Stage 1: Visual Development Basics', objective: 'Understand the principles of building apps without traditional coding.' },
        { id: 2, title: 'Stage 2: Platform Mastery', objective: 'Master leading low-code platforms like Bubble, Webflow, or OutSystems.' },
        { id: 3, title: 'Stage 3: Database & API Integration', objective: 'Learn to structure visual databases and connect third-party APIs.' },
        { id: 4, title: 'Stage 4: Workflow Automation', objective: 'Use tools like Zapier or Make to automate complex business processes.' },
        { id: 5, title: 'Stage 5: Scaling Low-Code Apps', objective: 'Learn best practices for performance, security, and scaling visual applications.' }
    ]
};

const ComingSoonRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);
    const location = useLocation();

    // Extract title from URL path, e.g., "/ethical-hacker" -> "ethical-hacker"
    const pathName = location.pathname.split('/').pop();
    const title = pathName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Get the base 5 specific stages
    const baseStages = roadmapsData[pathName] || [
        { id: 1, title: 'Stage 1: Foundation & Basics', objective: 'Understand the core principles and terminologies.' },
        { id: 2, title: 'Stage 2: Core Concepts', objective: 'Dive deeper into the primary tools required for this field.' },
        { id: 3, title: 'Stage 3: Advanced Techniques', objective: 'Learn advanced implementation techniques.' },
        { id: 4, title: 'Stage 4: Practical Applications', objective: 'Build practical applications using learned skills.' },
        { id: 5, title: 'Stage 5: Integration', objective: 'Integrate various systems and components.' }
    ];

    // Pad to exactly 15 stages dynamically to make it look extremely comprehensive
    const currentStages = [...baseStages];
    const advancedTitles = [
        'System Architecture & Design', 
        'Advanced Security Practices', 
        'Performance Tuning & Optimization', 
        'Cloud Integration & Services', 
        'Microservices & Containerization', 
        'Advanced Testing & QA', 
        'CI/CD & Build Automation', 
        'Monitoring & Observability', 
        'Real-world Capstone Project', 
        'Interview Preparation & Portfolio'
    ];

    for (let i = currentStages.length + 1; i <= 15; i++) {
        const titleText = advancedTitles[i - 6] || `Advanced Mastery ${i}`;
        currentStages.push({
            id: i,
            title: `Stage ${i}: ${titleText}`,
            objective: `Deepen your expertise in ${titleText.toLowerCase()} and apply industry best practices to become a senior ${title}.`
        });
    }

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="ai-roadmap-container">
                <header className="ai-roadmap-header">
                    <h1>The {title} Roadmap</h1>
                    <p>A comprehensive guide from beginner to industry-ready {title}, focusing on practical skills, system-level thinking, and modern tools.</p>
                </header>
                {currentStages.map(stage => (
                    <div key={stage.id} className={`ai-phase-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="ai-phase-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="ai-phase-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="ai-phase-content">
                                <p>{stage.objective}</p>
                                <Link to={`${location.pathname}/resources/${stage.id}`} className="ai-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ComingSoonRoadmap;
