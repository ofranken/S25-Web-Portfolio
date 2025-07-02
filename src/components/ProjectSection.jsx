import React from "react";
import ProjectCards from './ProjectCards';
import VRIcon from '../images/icons/skill icons/virtual-reality.svg?react';

function ProjectSection() {
    return (
        <section className="project-section">
            <h2 className="section-title skills-title">Projects...</h2>
            <p id="project-instruction">Click on a project card to learn more!</p>
            <ProjectCards />
        </section>
    );
}

export default ProjectSection;