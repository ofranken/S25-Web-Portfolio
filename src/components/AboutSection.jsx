import olivia2 from "../images/Olivia-2-Square.png";
import React from "react";
import Github from '../images/icons/github.svg?react';
import Instagram from "../images/icons/instagram.svg?react";
import LinkedIn from  "../images/icons/linkedin.svg?react";


function AboutSection() {

    return <section className="about-section">

        <div className="about-outer-container">
            <h2 id="about-small-screen" className="section-title">About...</h2>

            <div className="about-inner-container-imgs">
                <img id="olivia-img-2" src={olivia2}></img>

                <div id="about-icon-container">
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
                
            </div>

            <div className="about-inner-container-text">
                <h2 id="about-large-screen" className="section-title">About...</h2>
                <h3 className="section-subtitle">Olivia K. Franken</h3>
                <p className="section-description">I am a computer science student at the University of Missouri. As a purpose-driven learner, my curiosity blurs industry lines in the pursuit of my work's "big why." Despite having a vast range of skills, I am most passionate about machine learning, 3D modeling and animation, as well as finding new ways to educate using technology.</p>
                <p className="section-description">Currently, I am working under a fellowship in cognitive game development with virtual reality. I look forward to using and iterating on the world's latest innovations and continually expanding my areas of expertise.</p>

            </div>
           
            

        </div>
    </section>
    
    
    



}

export default AboutSection;