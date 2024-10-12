import React from "react";
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Dar for Trading and Construction (Detac)",
            location: "Cairo, Egypt",
            title: "Chief Surveyor",
            date: "08/2019 – Present",
            projects: [
                "Oriana 4 Project – Al-Futtaim Group: Managed surveying work for a complex of 85 villas.",
                "Arc Project – Smart Village: Oversaw survey operations for a high-rise administrative building."
            ]
        },
        {
            company: "Boudel for Hotels & Resorts",
            location: "Riyadh, Saudi Arabia",
            title: "Director of Survey and Maps Department",
            date: "11/2015 – 03/2019",
            projects: [
                "Narcissus Resort – Jeddah: Led survey and mapping for a luxury resort with 60 villas.",
                "Braira Hotel – Dammam: Supervised survey work for a hotel comprising six floors."
            ]
        },
        {
            company: "Survey Consultant and Department Representative",
            location: "Riyadh, Saudi Arabia",
            title: "Various Roles",
            date: "Various Dates",
            projects: [
                "Narcissus Al Khozama Hotel: Managed surveying operations for a 13-floor luxury hotel.",
                "Thumama Palaces and Villas: Directed survey activities for two large palaces."
            ]
        },
        {
            company: "Quantities Surveyor and Architectural Designer",
            location: "Various",
            title: "Various Roles",
            date: "Various Dates",
            projects: [
                "Narcissus Classic Tower Hotel: Surveyed and designed a 30-floor hotel.",
                "Boudel-Nakheel Resort – Unaiza: Managed survey work for 30 villas."
            ]
        }
    ];

    return (
        <section className="experience-section">
            <h3>Experience</h3>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card ">
                        <h4>{exp.title}</h4>
                        <p className="company">{exp.company} - {exp.location}</p>
                        <p className="date">{exp.date}</p>
                        <ul>
                            {exp.projects.map((project, i) => (
                                <li key={i}>{project}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
