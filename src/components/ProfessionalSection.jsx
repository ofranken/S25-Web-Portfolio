import React from "react";
import FAIMPaper from  "../images/profdevmedia/FAIM2025_Final.pdf";
import FAIMCert from "../images/profdevmedia/FAIMBestPaper.jpg";
import SMDCPhoto from "../images/profdevmedia/ASME SMDC.jpeg"
import SpringResearch2025 from "../images/profdevmedia/Spring Research Day 2025.jpg"
import TigerVerse2025 from "../images/profdevmedia/TigerVerse 2025.png";
import TigerHacks2024 from "../images/profdevmedia/TigerHacks 2024.png"
import ProfessionalSpacer from "../images/backgrounds/professional-spacer.png";

function TimelineCard({ date, title, description, image, link }) {
  const handleCardClick = () => {
    if (link) {
      // Check if it's a PDF file or local file
      if (link.toLowerCase().endsWith('.pdf') || link.startsWith('./') || link.startsWith('../') || link.startsWith('/')) {
        // For PDFs and local files, open in same tab
        window.open(link, '_blank');
      } else {
        // For external websites, open in new tab
        window.open(link, '_blank');
      }
    }
  };

  return (
    <div className="dev-timeline-card" onClick={handleCardClick}>
      <div className="dev-timeline-card-content">
        <div className="dev-timeline-image-container">
          <img src={image} alt={title} className="dev-timeline-image" />
        </div>
        <div className="dev-timeline-spacer"></div>
        <div className="dev-timeline-text-container">
          <div className="dev-timeline-date">{date}</div>
          <h3 className="dev-timeline-title">{title}</h3>
          <p className="dev-timeline-description">{description}</p>
        </div>
        <div className="dev-timeline-arrow-container">
          <div className="dev-timeline-arrow">→</div>
        </div>
      </div>
    </div>
  );
}

function ProfessionalSection() {
  const timelineData = [
    {
      id: 1,
      date: "June 2025",
      title: "FAIM 2025 Best Paper Award - Click To Read!",
      description: "Coauthored a paper for the MR machining project that won Best Paper at the 2025 FAIM (Flexible Automation and Intelligent Manufacturing) international conference entitled \"Intelligent Mixed Reality Platform for CNC Machine and 3D Printer Operation and Management\".",
      image: FAIMCert,
      link: FAIMPaper
    },
    {
      id: 2,
      date: "June 2025",
      title: "2nd Place ASME Student Manufacturing Design Competition",
      description: "Won 2nd place out of 32 submissions and 8 finalists in a student manufacturing design competition at the ASME MSEC (American Society of Mechanical Engineers, International Manufacturing Science and Engineering Conference) hosted by Clemson University in Greenville, SC.",
      image: SMDCPhoto,
      link: "https://docs.google.com/presentation/d/11QWlJvK3OccWh8t7Y_5uPQSfPyEu4VdJxTGkt9oHzbQ/edit?usp=sharing"
    },
     {
      id: 3,
      date: "May 2025",
      title: "MU Spring Research Day",
      description: "Presented development progress for the photolithography module of the XR Cleanroom Semiconductor Fabrication project at a student research colloquium.",
      image: SpringResearch2025,
      link: "https://www.linkedin.com/posts/olivia-franken_mu-spring-research-day-im-so-grateful-to-activity-7325663269514280961-F36_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZXF3YByhZoZqo3eWRBPRDXKxyEWyn3dkI"
    },
    {
      id: 4,
      date: "April 2025",
      title: "TigerVerse 2025 - VR Hackathon",
      description: "Attended University of Missouri's premier XR-specialized hackathon, and teamed up with students from a variety of majors to build a small cake baking simulator.",
      image: TigerVerse2025,
      link: "https://tigerverse.org/#home"
    },
    {
      id: 5,
      date: "November 2024",
      title: "TigerHacks 2024",
      description: "Participated in my first-ever hackathon, and built a desktop C#/.NET application to aid in garden planning. This event inspired me to begin my self-taught web development journey.",
      image: TigerHacks2024,
      link: "https://tigerhacks.missouri.edu/"
    },
  ];

  return (
    <section className="professional-section">
      <img src={ProfessionalSpacer} className="spacer"/>
      <h2 className="section-title skills-title">Professional Development...</h2>
      <p id="professional-instruction">Click on the icon for each timeline section to view related media.</p>
      
      <div className="dev-timeline-container">
        {timelineData.map((item) => (
          <TimelineCard
            key={item.id}
            date={item.date}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProfessionalSection;