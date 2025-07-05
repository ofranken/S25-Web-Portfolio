import React from 'react';
import witchCover from "../images/Cover Reading Of A Witch.png";
import ringsCover from "../images/Cover Rings of Power.png"
import starshipCover from "../images/Cover Starship Battle.png";
import machiningCover from "../images/Cover Machining MR.png"
import cleanroomCover from "../images/Cover XR Cleanroom.png"
import cafePOSCover from "../images/Cover Cafe POS.png"
import portfolioCover from "../images/Cover Portfolio Website.png"

function ProjectCards() {
  const projects = [
    {
      id: 1,
      name: "XR Cleanroom Semiconductor Fabrication Simulator",
      description: "Virtual reality application for the Meta Quest headsets designed in collaboration with electrical computer engineering faculty to aid in semiconductor education.",
      image: cleanroomCover
    },
    {
      id: 2,
      name: "MR Machine Control for Modern Manufacturing",
      description: "Mixed reality-based controller for realtime 3D printer and CNC management built for the Microsoft HoloLens 2.",
      image: machiningCover
    },
     {
      id: 3,
      name: "Café Point of Sale",
      description: "Local desktop cash-based POS system built on the C#/.NET framework in Visual Studio.",
      image: cafePOSCover
    },
     {
      id: 4,
      name: "3D Art: LOTR Rings of Power Reconstruction",
      description: "Final project render for Modeling & Animation II, taking inspiration from Rings of Power.",
      image: ringsCover
    },
    {
      id: 5,
      name: "3D Art: Mini Starship Battle",
      description: "Modeling & Animation II animation project with a kitbashing investigation.",
      image: starshipCover
    },
     {
      id: 6,
      name: "3D Art: Reading of a Witch",
      description: "Final project render for Modeling & Animation I, taking inspiration from popular fantasy titles and witchy themes.",
      image: witchCover
    },
    {
      id: 7,
      name: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations built with React and CSS3.",
      image: portfolioCover
    }
  ];

  return (
    <div className="project-cards-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card" onClick={() => console.log(`Clicked on ${project.name}`)}>
          <div className="project-card-inner">
            <img 
              src={project.image} 
              alt={project.name}
              className="project-image"
            />
            <div className="project-overlay">
              <div className="project-text-container project-name-container">
                <h3 className="project-name">{project.name}</h3>
              </div>
              <div className="project-text-container project-description-container">
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;

 