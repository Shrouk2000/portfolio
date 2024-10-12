import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Don't forget to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://linkedin.com/in/adel-omar1" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://wa.me/201097550665" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>
        <a href="mailto:adelomar1001@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
      </div>
      <p className="footer-text">© 2024 Adel Omar Mahmoud</p>
    </footer>
  );
};

export default Footer;
