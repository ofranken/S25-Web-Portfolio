import React from 'react';
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ProjectCards from "./components/ProjectCards";

function App() {
  return (
    <>
      <Navbar/>
      <SplashPage/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection>
      </ProjectSection>
    </>
  )
}

export default App
