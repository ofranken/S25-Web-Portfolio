import React from 'react';
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <>
      <Navbar/>
      <SplashPage/>
      <AboutSection/>
      <SkillsSection/>
    </>
  )
}

export default App
