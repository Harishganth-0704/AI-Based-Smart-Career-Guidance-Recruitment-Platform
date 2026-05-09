// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 Cloud-Ops. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
