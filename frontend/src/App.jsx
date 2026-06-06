// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Import Core & Layout Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';    
import NetworkStatus from './components/NetworkStatus';
import './App.css';

// --- Import Core Page Components ---
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import SkillRoadmap from './pages/SkillRoadmap';
import About from './pages/About';
import Assessment from './pages/Assessment';
import ResumeBuilder from './pages/ResumeBuilder.jsx';
import CoverLetter from './pages/CoverLetter';
import Jobs from './pages/Jobs';
import MockInterview from './pages/MockInterview';
import LearnGlobalLanguages from './pages/LearnGlobalLanguages';
import LanguageRoadmap from './pages/LanguageRoadmap';
import Dashboard from './pages/Dashboard';
import ProjectGenerator from './pages/ProjectGenerator';
import GitHubAnalyzer from './pages/GitHubAnalyzer';
import ATSResumeMaker from './pages/ATSResumeMaker';
import PortfolioGenerator from './pages/PortfolioGenerator';
import HRDashboard from './pages/HRDashboard';
import VideoScript from './pages/VideoScript';
import CheatSheet from './pages/CheatSheet';
import SalaryInsight from './pages/SalaryInsight';
import Outreach from './pages/Outreach';
import Certificates from './pages/Certificates';
import SkillQuiz from './pages/SkillQuiz';
import AIChatbot from './components/AIChatbot';

// --- Import All Job-Based Roadmap Main Pages ---
import DataScientistRoadmap from './pages/DataScientistRoadmap';
import AIEngineerRoadmap from './pages/AIEngineerRoadmap';
import CloudArchitectRoadmap from './pages/CloudArchitectRoadmap';
import CybersecurityRoadmap from './pages/CybersecurityRoadmap';
import GameDeveloperRoadmap from './pages/GameDeveloperRoadmap';
import MLEngineerRoadmap from './pages/MLEngineerRoadmap';
import MobileUIDesignerRoadmap from './pages/MobileUIDesignerRoadmap';
import ComingSoonRoadmap from './pages/ComingSoonRoadmap';
import GenericResourcePage from './pages/GenericResourcePage';

// --- Import All Skill-Based Roadmap Main Pages ---
import PythonRoadmap from './pages/skills/PythonRoadmap';
import JavaScriptRoadmap from './pages/skills/JavaScriptRoadmap';
import ReactRoadmap from './pages/skills/ReactRoadmap';
import SQLRoadmap from './pages/skills/SQLRoadmap';
import DockerRoadmap from './pages/skills/DockerRoadmap';
import CPlusPlusRoadmap from './pages/skills/CPlusPlusRoadmap';
import JavaRoadmap from './pages/skills/JavaRoadmap';
import AWSRoadmap from './pages/skills/AWSRoadmap';
import CRoadmap from './pages/skills/CRoadmap';
import GolangRoadmap from './pages/skills/GolangRoadmap';
import BashRoadmap from './pages/skills/BashRoadmap';
import Leaderboard from './pages/Leaderboard';

// --- Import All Resource Pages ---

import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import JobMatchScore from './pages/JobMatchScore';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* --- Core Pages --- */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/assessment" element={<Assessment />} />

              <Route path="/roadmaps" element={<Roadmap />} />
              <Route path="/skill-roadmap" element={<SkillRoadmap />} />
              <Route path="/about" element={<About />} />
              
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/cover-letter" element={<CoverLetter />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/mock-interview" element={<MockInterview />} />
              <Route path="/languages" element={<LearnGlobalLanguages />} />
              <Route path="/languages/:languageId" element={<LanguageRoadmap />} />
              <Route path="/project-generator" element={<ProjectGenerator />} />
              <Route path="/github-analyzer" element={<GitHubAnalyzer />} />
              <Route path="/ats-resume" element={<ATSResumeMaker />} />
              <Route path="/portfolio-generator" element={<PortfolioGenerator />} />
              <Route path="/u/:username" element={<PortfolioGenerator />} />
              <Route path="/hr-portal" element={<HRDashboard />} />
              <Route path="/video-script" element={<VideoScript />} />
              <Route path="/cheat-sheet" element={<CheatSheet />} />
              <Route path="/salary-insight" element={<SalaryInsight />} />
              <Route path="/outreach" element={<Outreach />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/skill-quiz" element={<SkillQuiz />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />

            {/* --- Main Job-Based Roadmap Routes --- */}
            <Route path="/data-scientist" element={<DataScientistRoadmap />} />
            <Route path="/ai-engineer" element={<AIEngineerRoadmap />} />
            <Route path="/cloud-architect" element={<CloudArchitectRoadmap />} />
            <Route path="/cybersecurity" element={<CybersecurityRoadmap />} />
            <Route path="/game-developer" element={<GameDeveloperRoadmap />} />
            <Route path="/ml-engineer" element={<MLEngineerRoadmap />} />
            <Route path="/mobile-ui-designer" element={<MobileUIDesignerRoadmap />} />
            
            {/* --- Coming Soon Roadmaps --- */}
            <Route path="/fullstack-developer" element={<ComingSoonRoadmap />} />
            <Route path="/ethical-hacker" element={<ComingSoonRoadmap />} />
            <Route path="/iaac-engineer" element={<ComingSoonRoadmap />} />
            <Route path="/blockchain-developer" element={<ComingSoonRoadmap />} />
            <Route path="/iot-developer" element={<ComingSoonRoadmap />} />
            <Route path="/ai-prompt-engineer" element={<ComingSoonRoadmap />} />
            <Route path="/low-code-developer" element={<ComingSoonRoadmap />} />
            
            {/* --- Main Skill-Based Roadmap Routes --- */}
            <Route path="/skills/python" element={<PythonRoadmap />} />
            <Route path="/skills/javascript" element={<JavaScriptRoadmap />} />
            <Route path="/skills/react" element={<ReactRoadmap />} />
            <Route path="/skills/sql" element={<SQLRoadmap />} />
            <Route path="/skills/docker" element={<DockerRoadmap />} />
            <Route path="/skills/cplusplus" element={<CPlusPlusRoadmap />} />
            <Route path="/skills/java" element={<JavaRoadmap />} />
            <Route path="/skills/aws" element={<AWSRoadmap />} />
            <Route path="/skills/c" element={<CRoadmap />} />
            <Route path="/skills/golang" element={<GolangRoadmap />} />
            <Route path="/skills/bash" element={<BashRoadmap />} />
            <Route path="/job-match" element={<JobMatchScore />} />



            {/* --- All Resource Page Routes --- */}
            
            <Route path="/data-scientist/resources/:stageId" element={<GenericResourcePage />} />

            <Route path="/ai-engineer/resources/:stageId" element={<GenericResourcePage />} />
            
            <Route path="/cloud-architect/resources/:stageId" element={<GenericResourcePage />} />

            <Route path="/cybersecurity/resources/:stageId" element={<GenericResourcePage />} />

            <Route path="/game-developer/resources/:stageId" element={<GenericResourcePage />} />
            
            <Route path="/ml-engineer/resources/:stageId" element={<GenericResourcePage />} />
            
            <Route path="/mobile-ui-designer/resources/:stageId" element={<GenericResourcePage />} />


            {/* --- Generic Fallback Resource Pages for Unimplemented Stages --- */}
            <Route path="/:roadmapId/resources/:stageId" element={<GenericResourcePage />} />
            <Route path="/skills/:skillId/resources/:stageId" element={<GenericResourcePage />} />

            {/* --- Fallback Route --- */}
            <Route path="*" element={
              <div style={{ padding: '5rem', textAlign: 'center', color: '#fff' }}>
                <h1>404 - Page Not Found</h1>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;


