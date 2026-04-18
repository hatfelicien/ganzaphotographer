import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

import babyShower1 from '../assets/images/baby-shower.jpeg';
import babyShower2 from '../assets/images/baby-shower2.jpeg';
import babyShower3 from '../assets/images/baby-shower3.jpeg';
import babyShower4 from '../assets/images/baby-shower4.jpeg';
import babyShower5 from '../assets/images/baby-shower5.jpeg';
import birthday from '../assets/images/birthday.jpeg';
import birthday1 from '../assets/images/birthday1.jpeg';
import family from '../assets/images/family.jpeg';
import family1 from '../assets/images/family1.jpeg';
import family2 from '../assets/images/family2.jpeg';
import family3 from '../assets/images/family3.jpeg';
import family4 from '../assets/images/family4.jpeg';
import family5 from '../assets/images/family5.jpeg';
import family6 from '../assets/images/family6.jpeg';
import indoor1 from '../assets/images/indoor1.jpeg';
import indoor2 from '../assets/images/indoor2.jpeg';
import indoor3 from '../assets/images/indoor3.jpeg';
import indoor4 from '../assets/images/indoor4.jpeg';
import indoor5 from '../assets/images/indoor5.jpeg';
import studio1 from '../assets/images/studio1.jpeg';
import studio2 from '../assets/images/studio2.jpeg';
import studio3 from '../assets/images/studio3.jpeg';
import wedding1 from '../assets/images/wedding1.jpeg';
import wedding2 from '../assets/images/wedding2.jpeg';
import wedding3 from '../assets/images/wedding3.jpeg';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'wedding', image: wedding1, title: 'Wedding Ceremony' },
    { id: 2, category: 'wedding', image: wedding2, title: 'Wedding Moments' },
    { id: 3, category: 'wedding', image: wedding3, title: 'Wedding Reception' },
    { id: 4, category: 'portrait', image: studio1, title: 'Studio Portrait' },
    { id: 5, category: 'portrait', image: studio2, title: 'Studio Session' },
    { id: 6, category: 'portrait', image: studio3, title: 'Studio Shoot' },
    { id: 7, category: 'portrait', image: indoor1, title: 'Indoor Portrait' },
    { id: 8, category: 'portrait', image: indoor2, title: 'Indoor Session' },
    { id: 9, category: 'portrait', image: indoor3, title: 'Indoor Shoot' },
    { id: 10, category: 'portrait', image: indoor4, title: 'Indoor Portrait 2' },
    { id: 11, category: 'portrait', image: indoor5, title: 'Indoor Session 2' },
    { id: 12, category: 'family', image: family, title: 'Family Portrait' },
    { id: 13, category: 'family', image: family1, title: 'Family Moments' },
    { id: 14, category: 'family', image: family2, title: 'Family Session' },
    { id: 15, category: 'family', image: family3, title: 'Family Shoot' },
    { id: 16, category: 'family', image: family4, title: 'Family Together' },
    { id: 17, category: 'family', image: family5, title: 'Family Love' },
    { id: 18, category: 'family', image: family6, title: 'Family Joy' },
    { id: 19, category: 'event', image: birthday, title: 'Birthday Celebration' },
    { id: 20, category: 'event', image: birthday1, title: 'Birthday Party' },
    { id: 21, category: 'event', image: babyShower1, title: 'Baby Shower' },
    { id: 22, category: 'event', image: babyShower2, title: 'Baby Shower Moments' },
    { id: 23, category: 'event', image: babyShower3, title: 'Baby Shower Joy' },
    { id: 24, category: 'event', image: babyShower4, title: 'Baby Shower Celebration' },
    { id: 25, category: 'event', image: babyShower5, title: 'Baby Shower Love' },
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'family', name: 'Family' },
    { id: 'event', name: 'Events' }
  ];

  const [lightbox, setLightbox] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    const idx = filteredItems.findIndex(i => i.id === lightbox.id);
    const next = filteredItems[(idx + dir + filteredItems.length) % filteredItems.length];
    setLightbox(next);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    if (lightbox) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filteredItems]);

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
            <div key={item.id} className="gallery-item" onClick={() => openLightbox(item)}>
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

      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><X size={28} /></button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }}><ChevronLeft size={36} /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} />
            <p className="lightbox-title">{lightbox.title}</p>
          </div>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); navigate(1); }}><ChevronRight size={36} /></button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
