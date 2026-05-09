import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedChannels from '../components/RecommendedChannels';

const styles = `
.gd-roadmap-container {
  background-color: #12121e;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.gd-roadmap-header {
  text-align: center;
  margin-bottom: 4rem;
}

.gd-roadmap-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.gd-roadmap-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.gd-phase-card {
  background-color: #1e1e30;
  border: 1px solid #33334d;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.gd-phase-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gd-phase-header h2 {
  font-size: 1.6rem;
  color: #00e676;
  margin: 0;
}

.gd-phase-toggle {
  font-size: 2rem;
  color: #8258dc;
  transition: transform 0.3s ease;
}

.gd-phase-card.active .gd-phase-toggle {
  transform: rotate(45deg);
}

.gd-phase-content {
  padding: 0 2rem 2rem 2rem;
  border-top: 1px solid #33334d;
}

.gd-phase-content p {
  color: #b0b0b0;
  line-height: 1.7;
}

.gd-resources-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #8258dc;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.gd-resources-button:hover {
  background-color: #9a6ce1;
  transform: translateY(-2px);
}
`;

const roadmapStages = [
    { id: 1, title: 'Stage 1: Foundations & Orientation', objective: 'Understand the landscape of the game development industry, including key roles, the development lifecycle, and studio structures.' },
    { id: 2, title: 'Stage 2: Programming and Math Foundations', objective: 'Build engine-agnostic skills in C# programming and the essential mathematics (Vector Math, Trigonometry) that govern game worlds.' },
    { id: 3, title: 'Stage 3: Game Engine Mastery', objective: 'Choose a primary game engine (Unity recommended for beginners) and master its core concepts, interface, and scripting API.' },
    { id: 4, title: 'Stage 4: Gameplay Systems and Mechanics', objective: 'Design and implement the core interactive systems that define a game, such as player controls, combat, inventory, and progression.' },
    { id: 5, title: 'Stage 5: Game Physics and Simulation', objective: 'Understand and effectively utilize the game engine\'s built-in physics simulation to create dynamic and believable interactions.' },
    { id: 6, title: 'Stage 6: Game AI ', objective: 'Breathe life into non-player characters by implementing artificial intelligence for decision-making and navigation using FSMs and Pathfinding.' },
    { id: 7, title: 'Stage 7: Multiplayer and Networking', objective: 'Understand the fundamental principles of network programming and implement basic multiplayer functionality using a client-server architecture.' },
    { id: 8, title: 'Stage 8: Visuals and Technical Art', objective: 'Learn the artistic pipeline and the technical skills required to implement visual elements like materials, shaders, lighting, and VFX.' },
    { id: 9, title: 'Stage 9: Performance Optimization', objective: 'Learn how to use profiling tools to identify, analyze, and fix performance bottlenecks to ensure games run smoothly.' },
    { id: 10, title: 'Stage 10: Game Design Analysis', objective: 'Develop a foundational understanding of game design theory, level design, and User Experience (UX) to create engaging and intuitive games.' },
    { id: 11, title: 'Stage 11: Monetization and Publishing', objective: 'Understand the business side of game development, including monetization models and the process of publishing on platforms like Steam.' },
    { id: 12, title: 'Stage 12: Real-World Projects', objective: 'Transition from small exercises to building complete, polished games to form the core of your professional portfolio.' },
    { id: 13, title: 'Stage 13: Portfolio and Resume Strategy', objective: 'Effectively showcase your skills and projects to potential employers through a professional portfolio website and a well-crafted resume.' },
    { id: 14, title: 'Stage 14: Interview Preparation', objective: 'Prepare for technical and behavioral interviews by practicing coding problems, reviewing core concepts, and refining your communication skills.' }
];

const GameDeveloperRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="gd-roadmap-container">
                <header className="gd-roadmap-header">
                    <h1>The Game Developer Roadmap</h1>
                    <p>A complete 14-stage guide from beginner to employable Game Developer, focusing on foundational principles, hands-on projects, and professional readiness.</p>
                </header>
                <RecommendedChannels roadmapKey="game-developer" />
                {roadmapStages.map(stage => (
                    <div key={stage.id} className={`gd-phase-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="gd-phase-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="gd-phase-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="gd-phase-content">
                                <p>{stage.objective}</p>
                                <Link to={`/game-developer/resources/${stage.id}`} className="gd-resources-button">
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

export default GameDeveloperRoadmap;