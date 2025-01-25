import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom"; // If you're using React Router
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo1.png"; // Replace with your logo path

const Navbar =() => {
  const [scrolled, setScrolled] = useState(false);
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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}    >
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
      <Link to="/book">
        <button className="navbar-bookbtn">BOOK NOW</button>
      </Link>
    </nav>
  );
}

export default Navbar;

