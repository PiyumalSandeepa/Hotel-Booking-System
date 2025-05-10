import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo1.png"; 

const Navbar = () => {
  const location = useLocation(); 
  const [scrolled, setScrolled] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

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

  useEffect(() => {
    
    if (location.pathname === "/" || location.pathname === "/accommodation" ||location.pathname === "/dining") {
      setBgColor("transparent"); // Transparent for Home & Accommodation
    } else {
      setBgColor("#1a3e6a"); // Default color for other pages
    }
  }, [location]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: scrolled ? "#1a3e6a" : bgColor,
      }}
    >
      
      <div className="navbar-logo">
        <img src={logo} alt="The Blue Water" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accommodation">Accommodation</Link>
        </li>
        <li>
          <Link to="/dining">Dining</Link>
        </li>
       
      
      </ul>
      <Link to="/book">
        <button className="navbar-bookbtn">BOOK NOW</button>
      </Link>
    </nav>
  );
};

export default Navbar;
