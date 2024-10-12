import React from "react";
import './Education.css'; // Make sure to create this CSS file

const Education = () => {
    const educationItems = [
        {
            degree: "Postgraduate Studies for a Master's Degree in Astrophysical Geography (Cosmology)",
            institution: "Fayoum University, Egypt",
            duration: "08/2023 – Present"
        },
        {
            degree: "Bachelor of Arts in Geography – Specialization in Surveying and Mapping",
            institution: "Fayoum University, Egypt",
            duration: "08/2008 – 05/2011"
        },
        {
            degree: "Diploma in Islamic Studies",
            institution: "The Higher Institute of Islamic Studies, Cairo, Egypt",
            duration: "08/2019 – 08/2021"
        },
        {
            degree: "Bachelor of Science in Imamate, Rhetoric, Preaching, and Guidance",
            institution: "The Higher Institute for the Preparation of Preachers, Fayoum, Egypt",
            duration: "08/2012 – 05/2015"
        }
    ];

    return (
        <section className="education-section" id="education">
            
            <h3>Education</h3>

            <div className="education-grid">
                {educationItems.map((item, index) => (
                    <div key={index} className="education-card ">
                        <h4>{item.degree}</h4>
                        <p className="institution">{item.institution}</p>
                        <p className="duration">{item.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
