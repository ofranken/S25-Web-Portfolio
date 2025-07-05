import React from "react";
import ProjectCards from './ProjectCards';
import Stars from "../images/backgrounds/project-stars.png";

function ProjectSection() {
    return (
        <section className="project-section">
            <img src={Stars} className="dangling-stars"/>
            <h2 className="section-title project-title">Projects...</h2>
            <p id="project-instruction">Click on a project card to learn more!</p>
            <ProjectCards />
        </section>
    );
}

export default ProjectSection;