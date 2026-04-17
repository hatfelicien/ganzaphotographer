import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '💍',
      title: 'Wedding Photography',
      description: 'Capture every magical moment of your special day with our professional wedding photography services.',
      price: 'From $1,500'
    },
    {
      id: 2,
      icon: '🎓',
      title: 'Graduation Photography',
      description: 'Celebrate your academic achievements with stunning graduation photos that you\'ll treasure forever.',
      price: 'From $300'
    },
    {
      id: 3,
      icon: '👤',
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals, families, and corporate headshots with studio or outdoor settings.',
      price: 'From $200'
    },
    {
      id: 4,
      icon: '🎉',
      title: 'Event Photography',
      description: 'Complete coverage of your corporate events, parties, and special celebrations.',
      price: 'From $500'
    },
    {
      id: 5,
      icon: '👶',
      title: 'Family & Newborn',
      description: 'Capture precious family moments and newborn sessions with care and creativity.',
      price: 'From $250'
    },
    {
      id: 6,
      icon: '📸',
      title: 'Commercial Photography',
      description: 'High-quality product and commercial photography for businesses and brands.',
      price: 'From $400'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
              <a href="#contact" className="btn">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
