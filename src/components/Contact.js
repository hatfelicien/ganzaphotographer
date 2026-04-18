import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>Ready to capture your special moments? Get in touch with us today!</p>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={22} /></div>
              <div><h4>Email</h4><p>info@ganzaimages.com</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={22} /></div>
              <div><h4>Phone</h4><p>+250 788 123 456</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={22} /></div>
              <div><h4>Location</h4><p>Kigali, Rwanda</p></div>
            </div>

            <div className="social-links">
              <a href="https://facebook.com"  className="social-link" target="_blank" rel="noreferrer"><Facebook size={16} /> Facebook</a>
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
              <a href="https://twitter.com"   className="social-link" target="_blank" rel="noreferrer"><Twitter size={16} /> Twitter</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text"  name="name"    placeholder="Your Name"    value={formData.name}    onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email"   placeholder="Your Email"   value={formData.email}   onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel"   name="phone"   placeholder="Your Phone"   value={formData.phone}   onChange={handleChange} required />
            </div>
            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select Service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="graduation">Graduation Photography</option>
                <option value="portrait">Portrait Photography</option>
                <option value="event">Event Photography</option>
                <option value="family">Family & Newborn</option>
                <option value="commercial">Commercial Photography</option>
              </select>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
