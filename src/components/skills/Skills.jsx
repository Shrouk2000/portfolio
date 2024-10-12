import React from "react";
import './Skills.css'; 

function Skills() {
    const skills = [
        "GIS and Geomatics",
        "Land Surveying",
        "Data Analysis",
        "AutoCAD and Civil 3D",
        "Project Management"
    ];

    return (
        <div className="skills-container" id="skills">
            
            <h3>Skills</h3>
            <div className="skills-cards">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card ">
                        <h4>{skill}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
