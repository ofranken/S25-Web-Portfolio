import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ProjectCards from "./components/ProjectCards";
import ProfessionalSection from "./components/ProfessionalSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import ProjectDetailPage from "./components/ProjectDetailPage";

// Main homepage component
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling when navigating to home page with hash
    if (location.hash) {
      setTimeout(() => {
        switch(location.hash) {
          case '#about':
            window.scrollTo({top: 1300, behavior: "smooth"});
            break;
          case '#skills':
            window.scrollTo({top: 2500, behavior: "smooth"});
            break;
          case '#projects':
            window.scrollTo({top: 3750, behavior: "smooth"});
            break;
          case '#developments':
            window.scrollTo({top: 5400, behavior: "smooth"});
            break;
          case '#contact':
            window.scrollTo({top: 8300, behavior: "smooth"});
            break;
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <SplashPage/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ProfessionalSection/>
      <ContactMeSection/>
    </>
  );
}

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="min-h-screen bg-purple-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;