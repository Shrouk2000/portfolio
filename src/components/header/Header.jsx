import React from 'react';
import './Header.css'; 
import profileImage from '../../images/image.jpg';
import cvFile from '../../staticfiles/cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
    return (
        <header className="cv-header">
            <div className='header-data'>
                
            </div>
            <div className="header-info">
                <h1 className="name">Adel Omar Mahmoud</h1>
                <h2 className="title">Chief Surveyor</h2>
                <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Six of October, Giza, Egypt
                </p>
                <div className="contact-info">
                    <span>
                        <a href="https://wa.me/201097550665" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> 
                        </a>
                    </span>
                    <span>
                        <a href="mailto:adelomar1001@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} /> 
                        </a>
                    </span>
                    <span>
                        <a href="https://linkedin.com/in/adel-omar1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> 
                        </a>
                    </span>
                </div>
                <a href={cvFile} download className="download-button">Download CV</a> 
            </div>
            <img src={profileImage} alt="Adel Omar Mahmoud" className="profile-image" />
        </header>
    );
};

export default Header;
