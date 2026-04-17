import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500" alt="Photographer" />
          </div>
          <div className="about-text">
            <h3>Hi, I'm Alex Johnson</h3>
            <p className="lead">Professional Photographer with 10+ Years of Experience</p>
            <p>
              I specialize in capturing life's most precious moments through my lens. 
              From intimate weddings to grand celebrations, graduation ceremonies to 
              professional portraits, I bring creativity, passion, and technical expertise 
              to every shoot.
            </p>
            <p>
              My approach is simple: tell your story authentically. I believe that the 
              best photographs are those that capture genuine emotions and real moments. 
              Whether it's the joy of a wedding day, the pride of graduation, or the 
              confidence in a professional portrait, I'm here to preserve those memories forever.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>500+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h4>1000+</h4>
                <p>Events Covered</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
