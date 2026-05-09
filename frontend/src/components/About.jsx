// src/components/About.jsx

// 1. Correctly import your images
import aboutBanner from '../assets/images/about-banner.jpg';
import placeholder from '../assets/images/placeholder.png'; // Assuming you use this too

const About = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>Welcome to the about page for Career Compass!</p>
      
      {/* 2. Use the imported variable inside curly braces {} in the src attribute */}
      <img 
        src={aboutBanner} 
        alt="A vibrant banner showing career path illustrations" 
        className="about-banner-image"
      />

      {/* Example for the other image */}
      <img 
        src={placeholder} 
        alt="A placeholder graphic" 
        className="placeholder-image"
      />
    </div>
  );
};

export default About;