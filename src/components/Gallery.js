import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample gallery data - replace with your actual images
  const galleryItems = [
    { id: 1, category: 'wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', title: 'Wedding Ceremony' },
    { id: 2, category: 'wedding', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600', title: 'Bride Portrait' },
    { id: 3, category: 'wedding', image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600', title: 'Wedding Reception' },
    { id: 4, category: 'graduation', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', title: 'Graduation Day' },
    { id: 5, category: 'graduation', image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600', title: 'Graduate Portrait' },
    { id: 6, category: 'graduation', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600', title: 'Graduation Ceremony' },
    { id: 7, category: 'portrait', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600', title: 'Professional Portrait' },
    { id: 8, category: 'portrait', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', title: 'Studio Portrait' },
    { id: 9, category: 'portrait', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600', title: 'Outdoor Portrait' },
    { id: 10, category: 'event', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600', title: 'Corporate Event' },
    { id: 11, category: 'event', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600', title: 'Birthday Party' },
    { id: 12, category: 'event', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600', title: 'Conference' },
    { id: 13, category: 'wedding', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600', title: 'Wedding Rings' },
    { id: 14, category: 'graduation', image: 'https://images.unsplash.com/photo-1622495894030-3c5cd6c6b1c0?w=600', title: 'Graduation Group' },
    { id: 15, category: 'portrait', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', title: 'Fashion Portrait' },
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'graduation', name: 'Graduations' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'event', name: 'Events' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{categories.find(cat => cat.id === item.category)?.name}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="no-results">No photos found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default Gallery;
