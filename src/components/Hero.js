import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Capturing Life's Beautiful Moments</h1>
            <p className="hero-subtitle">Professional Photography Services for Every Occasion</p>
            <div className="hero-buttons">
              <a href="#gallery" className="btn">View Gallery</a>
              <a href="#contact" className="btn btn-outline">Book a Session</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
