import React from 'react';
import Github from '../images/icons/github.svg?react';
import Instagram from "../images/icons/instagram.svg?react";
import LinkedIn from  "../images/icons/linkedin.svg?react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer dark-gradient-background">
      <div className="footer-content">
        {/* Left side - Copyright */}
        <div className="footer-left">
          <p className="copyright">Copyright © Olivia Franken {currentYear}</p>
        </div>

        {/* Center - Social Media Buttons */}
        <div className="footer-center">
         <a href="https://www.instagram.com/okaye______?igsh=dzYwY2oxbGwwM2Z5&utm_source=qr" target="_blank">
                <button className="social-media-btn"><Instagram className="about-icons"/></button>
            </a>
                                
            <a href="https://www.linkedin.com/in/olivia-franken/" target="_blank">
                <button className="social-media-btn"><LinkedIn className="about-icons"/></button>
            </a>
                                
            <a href="https://github.com/ofranken" target="_blank">
                <button className="social-media-btn"><Github className="about-icons"/></button>
            </a>
        </div>

        {/* Right side - Navigation Links */}
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#about" className="footer-link">About</a>
            <a href="#developments" className="footer-link">Developments</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="/resume.pdf" className="footer-link" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



