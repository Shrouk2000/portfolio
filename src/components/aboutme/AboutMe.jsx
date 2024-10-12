import React from 'react';
import './AboutMe.css';
import profileImage from '../../images/image.jpg';

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
          <h3>About Me</h3>
           <div className='about-content'>
           <div className="about-text">
                <p>
                    I am a Chief Surveyor with over 15 years of experience in land surveying, cartography, and GIS, working with leading construction firms in Egypt and Saudi Arabia. I specialize in conducting land surveys, analyzing data, and performing precise mathematical calculations.
                </p>
                <p>
                    My expertise includes overseeing projects involving hotels, villas, and administrative buildings. I have strong analytical skills and a keen attention to detail, which allows me to collaborate effectively with teams and ensure project success.
                </p>
                <p>
                    In addition to my technical skills, I am passionate about training and mentoring students in surveying techniques and practices. I believe in the importance of continuous learning and professional development in the field of surveying.
                </p>
            </div>
            <div className="about-image">
            <img src={profileImage} alt="Adel Omar Mahmoud" className="profile-image" />
                
            </div>
        
           </div>
          
        </section>
    );
};

export default AboutMe;
