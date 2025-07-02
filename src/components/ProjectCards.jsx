import React from 'react';

function ProjectCards() {
  const projects = [
    {
      id: 1,
      name: "XR Semiconductor Fabrication Simulator",
      description: "Virtual reality application for the Meta Quest headsets designed in collaboration with electrical computer engineering faculty to aid in semiconductor education.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "MR Machine Control for Modern Manufacturing",
      description: "Mixed reality-based controller for realtime 3D printer and CNC management built for the Microsoft HoloLens 2.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "3D Art: Reading of a Witch",
      description: "Final project render for Modeling & Animation I, taking inspiration from popular fantasy titles and witchy themes.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "3D Art: LOTR Rings of Power Reconstruction",
      description: "Final project render for Modeling & Animation II, taking inspiration from Rings of Power.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Café Point of Sale",
      description: "Local desktop cash-based POS system built on the C#/.NET framework in Visual Studio Code.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations built with React and CSS3.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
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