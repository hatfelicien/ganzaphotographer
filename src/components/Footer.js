import React from 'react';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Camera size={26} />
              <h3>Ganza Images</h3>
            </div>
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
              <li><a href="#services">Wedding Photography</a></li>
              <li><a href="#services">Graduation Photography</a></li>
              <li><a href="#services">Portrait Photography</a></li>
              <li><a href="#services">Event Photography</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact-item"><Mail size={16} /> info@ganzaimages.com</div>
            <div className="footer-contact-item"><Phone size={16} /> +250 788 123 456</div>
            <div className="footer-contact-item"><MapPin size={16} /> Kigali, Rwanda</div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ganza Images. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
