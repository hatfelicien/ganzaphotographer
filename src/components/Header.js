import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Camera size={28} />
            <h1>Ganza <span>Images</span></h1>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home"     onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about"    onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#gallery"  onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact"  onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
