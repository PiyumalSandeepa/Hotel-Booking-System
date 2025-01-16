/*
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">MyLogo</div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <link="#home">Home</link>
        <link="#about">About</link>
        <link="#services">Services</link>
        <link="#contact">Contact
        <button className="bookbtn">BOOK NOW</button>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './navbar.css';
import logo from "../../assets/logo1.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#services">Services</Link>
        <Link to="#contact">Contact</Link>
        <button className="bookbtn">BOOK NOW</button>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./Navbar.css";
import logo from "../../assets/logo1.png"; // Replace with your logo path

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Change background color on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} alt="The Blue Water" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#accommodation">Accommodation</Link>
        </li>
        <li>
          <Link to="#dining">Dining</Link>
        </li>
        <li>
          <Link to="#offers">Offers</Link>
        </li>
        
        <li>
          <Link to="#wedding">Wedding</Link>
        </li>
        <li>
          <Link to="#location">Location</Link>
        </li>
      </ul>
      <button className="navbar-bookbtn">BOOK NOW</button>
    </nav>
  );
}

export default Navbar;
