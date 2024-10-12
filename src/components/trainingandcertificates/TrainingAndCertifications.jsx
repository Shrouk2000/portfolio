import React from "react";
import './TrainingAndCertifications.css'; 

const TrainingAndCertifications = () => {
    const trainings = [
        {
            title: "Surveying Equipment Proficiency",
            details: [
                "Level, Total Station (Nikon DTM-820, Leica TC 1205, Topcon GTS 753, Sokkia SET 310K), African Centre for Surveying Services & Cairo University - 02/2012",
                "Total Station (Geo Max ZT20), Egyptian Association of Surveying and Mapping - 07/2010",
                "Total Station (Sokkia DT 610), Level, Theodolite, Egyptian Association of Surveying - 07/2010",
                "Total Station (Topcon GTS 7500), Cairo Company for Engineering Work - 08/2009",
                "Total Station (Nikon DTM 522), GPS, Egyptian Survey Authority - 01/2009"
            ]
        },
        {
            title: "Software Proficiency",
            details: [
                "AutoCAD Civil 3D Land Desktop Companion 2009, African Centre for Surveying Services & Cairo University - 02/2012",
                "AutoCAD 2007, Surfer 9, Land Desktop, Prolink, Egyptian Association of Surveying and Mapping - 07/2010"
            ]
        },
        {
            title: "Professional Development",
            details: [
                "Training of Trainers (TOT), German Technical Office for Human Development - 03/2009",
                "International Computer Driving License (ICDL), Fayoum University - 02/2008"
            ]
        }
    ];

    return (
        <section className="training-section">
            <h3>Training and Certifications</h3>
            <div className="training-grid">
                {trainings.map((training, index) => (
                    <div key={index} className="training-card ">
                        <h4>{training.title}</h4>
                        <ul>
                            {training.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrainingAndCertifications;
