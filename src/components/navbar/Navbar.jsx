import React from 'react';
import './Navbar.css';

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <ul>
        {['about', 'experience', 'skills', 'education', 'contact'].map((section) => (
          <li key={section} onClick={() => scrollToSection(section)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
