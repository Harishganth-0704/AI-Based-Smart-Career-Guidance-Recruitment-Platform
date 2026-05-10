// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Career Path AI
        </NavLink>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            Dashboard
          </NavLink>

          <div className="dropdown">
            <span className="nav-link dropdown-toggle">Roadmaps</span>
            <div className="dropdown-content">
              <NavLink to="/roadmaps" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Job Based
              </NavLink>
              <NavLink to="/skill-roadmap" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Skill Based
              </NavLink>
            </div>
          </div>

          <div className="dropdown">
            <span className="nav-link dropdown-toggle">Tools</span>
            <div className="dropdown-content">
              <NavLink to="/resume-Builder" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Resume Builder
              </NavLink>
              <NavLink to="/cover-letter" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Cover Letter
              </NavLink>
              <NavLink to="/ats-resume" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                PDF Resume Maker
              </NavLink>
              <NavLink to="/portfolio-generator" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Portfolio Generator
              </NavLink>
              <NavLink to="/project-generator" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Project Generator
              </NavLink>
              <NavLink to="/github-analyzer" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                GitHub Analyzer
              </NavLink>
              <NavLink to="/video-script" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Video Resume Script
              </NavLink>
              <NavLink to="/cheat-sheet" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Interview Cheat Sheet
              </NavLink>
              <NavLink to="/salary-insight" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Salary & Negotiation
              </NavLink>
              <NavLink to="/outreach" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Networking Suite
              </NavLink>
              <NavLink to="/certificates" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                My Achievements
              </NavLink>
              <NavLink to="/skill-quiz" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Skill Assessment (Quiz)
              </NavLink>
            </div>
          </div>

          <div className="dropdown">
            <span className="nav-link dropdown-toggle">Career</span>
            <div className="dropdown-content">
              <NavLink to="/jobs" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Find Jobs
              </NavLink>
              <NavLink to="/mock-interview" className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')} onClick={() => setIsMenuOpen(false)}>
                Mock Interview
              </NavLink>
            </div>
          </div>

          <NavLink to="/languages" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            Languages
          </NavLink>
          
          <NavLink to="/hr-portal" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            HR Portal
          </NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
