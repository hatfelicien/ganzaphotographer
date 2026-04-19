import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './Gallery.css';

const categories = [
  { id: 'all',      name: 'All Photos' },
  { id: 'wedding',  name: 'Weddings'   },
  { id: 'portrait', name: 'Portraits'  },
  { id: 'family',   name: 'Family'     },
  { id: 'event',    name: 'Events'     },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });
      setGalleryItems(data || []);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const navigate = (dir) => {
    const idx = filteredItems.findIndex(i => i.id === lightbox.id);
    setLightbox(filteredItems[(idx + dir + filteredItems.length) % filteredItems.length]);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const idx = filteredItems.findIndex(i => i.id === lightbox.id);
        setLightbox(filteredItems[(idx + dir + filteredItems.length) % filteredItems.length]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filteredItems]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>

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

        {loading ? (
          <p className="no-results">Loading gallery...</p>
        ) : (
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item" onClick={() => setLightbox(item)}>
                <img src={item.image_url} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{categories.find(cat => cat.id === item.category)?.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <p className="no-results">No photos found in this category.</p>
        )}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={28} /></button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }}><ChevronLeft size={36} /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image_url} alt={lightbox.title} />
            <p className="lightbox-title">{lightbox.title}</p>
          </div>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); navigate(1); }}><ChevronRight size={36} /></button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
