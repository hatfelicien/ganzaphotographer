import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>📸 PhotoArt</h3>
            <p>Capturing life's beautiful moments with passion and creativity.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#gallery">Wedding Photography</a></li>
              <li><a href="#gallery">Graduation Photography</a></li>
              <li><a href="#gallery">Portrait Photography</a></li>
              <li><a href="#gallery">Event Photography</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 info@photoart.com</li>
              <li>📱 +250 788 123 456</li>
              <li>📍 Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PhotoArt. All rights reserved.</p>
          <p>Designed with ❤️ for photographers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
