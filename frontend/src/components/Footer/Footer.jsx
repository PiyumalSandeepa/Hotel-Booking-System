
import React from "react";
import { Link } from "react-router-dom"; 
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">       
        <div className="footer-section">
          <h4>Hotel Blue Sapphire</h4>
          <p>No 10, Liberty Plaza,<br />Colombo 05, Sri Lanka.</p>
          <p>Email: <Link to="/contact">info@bluedapphire.com</Link></p>
          <p>Phone: +9411 528 4526</p>
        </div>

        <div className="footer-section">
          <ul>
            <li><Link to="/">HOME</Link></li>
            
            <li><Link to="/weddings">WEDDINGS</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            
            
            <li><Link to="/dining">DINING</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            
          </ul>
        </div>

        
        <div className="footer-section">
          <ul>
            
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

       
        <div className="footer-section social-media">
          <p>Let’s get social with</p>
          <p>#Blue Sapphire Hotel</p>
          <div className="social-icons">
            <Link to="/facebook" target="_blank" rel="noopener noreferrer">🌐</Link>
            <Link to="/instagram" target="_blank" rel="noopener noreferrer">📸</Link>
          </div>
        </div>
      </div>

      
      <div className="footer-newsletter">       
        <div className="newsletter-input">
          <input type="text" placeholder="Your email address" />
          <button>SUBMIT ➤</button>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2025 Blue Sapphire. All Rights Reserved</p>   
      </div>
    </footer>
  );
}

export default Footer;
