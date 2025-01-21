import React from "react";
import VRIcon from '../images/icons/skill icons/virtual-reality.svg?react';


function SkillsSection() {

    return <section className="skills-section">
    <h2 className="section-title skills-title">Skills...</h2>
    <p id="skill-instruction">Click on any skill icon to see the most representative project.</p>

    <div className="container-icons">
        <div className="skill-icon-div"><i className="devicon-java-plain"></i> <p>Java</p></div>
        <div className="skill-icon-div"><i className="devicon-csharp-plain"></i> <p>C#</p></div>
        <div className="skill-icon-div"><i className="devicon-c-plain"></i><p>C</p></div>
        <div className="skill-icon-div"><i className="devicon-javascript-plain"></i> <p>JavaScript</p></div>
        <div className="skill-icon-div"><i className="devicon-html5-plain"></i> <p>HTML</p></div>
        <div className="skill-icon-div"><i className="devicon-css3-plain"></i> <p>CSS</p></div>
        <div className="skill-icon-div"><i className="devicon-jquery-plain"></i> <p>jQuery</p></div>
        <div className="skill-icon-div"><i className="devicon-nodejs-plain"></i> <p>Node.js</p></div>
        <div className="skill-icon-div"><i className="devicon-react-original"></i> <p>React.js</p></div>
        <div className="skill-icon-div"><i className="devicon-blender-original"></i> <p>Blender</p></div>
        <div className="skill-icon-div"><i className="devicon-unity-plain"></i> <p>Unity Game Engine</p></div>
        <div className="skill-icon-div"><VRIcon className="i-vr" height="95px" width="95px"/> <p>Virtual Reality</p></div>


    </div>
    </section>

}

export default SkillsSection;