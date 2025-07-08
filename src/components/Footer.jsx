import React from 'react';
import {Link} from 'react-router-dom';
import Github from '../images/icons/github.svg?react';
import Instagram from "../images/icons/instagram.svg?react";
import LinkedIn from  "../images/icons/linkedin.svg?react";
import Resume from  "../images/profdevmedia/Franken Resume.pdf";

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
                <Link to="/#about" className="footer-link" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 1300, behavior: "smooth"});
                    }
                }}>About</Link>            
                <Link to="/#skills" className="footer-link" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 2500, behavior: "smooth"});
                    }
                }}>Skills</Link>
                <Link to="/#projects" className="footer-link" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 3750, behavior: "smooth"});
                    }
                }}>Projects</Link>
                <Link to="/#developments" className="footer-link" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 5400, behavior: "smooth"});
                    }
                }}>Developments</Link>
                <Link to="/#contact" className="footer-link" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 8300, behavior: "smooth"});
                    }
                }}>Contact</Link>
            <a href={Resume} className="footer-link" target="_blank" rel="noopener noreferrer">Resumé</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



