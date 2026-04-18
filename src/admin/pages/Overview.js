import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Image, Briefcase, ExternalLink } from 'lucide-react';
import './TabStyles.css';

function Overview() {
  const [counts, setCounts] = useState({ gallery: 0, services: 0 });

  useEffect(() => {
    const fetch = async () => {
      const [{ count: gallery }, { count: services }] = await Promise.all([
        supabase.from('gallery').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
      ]);
      setCounts({ gallery: gallery || 0, services: services || 0 });
    };
    fetch();
  }, []);

  return (
    <div className="tab-content">
      <h2>Dashboard Overview</h2>
      <div className="overview-grid">
        <div className="overview-card">
          <div className="overview-icon"><Image size={28} /></div>
          <div>
            <h3>{counts.gallery}</h3>
            <p>Gallery Images</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon"><Briefcase size={28} /></div>
          <div>
            <h3>{counts.services}</h3>
            <p>Services</p>
          </div>
        </div>
      </div>
      <div className="admin-card">
        <h3>Quick Links</h3>
        <a href="/" target="_blank" rel="noreferrer" className="admin-btn outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <ExternalLink size={16} /> View Live Website
        </a>
      </div>
    </div>
  );
}

export default Overview;
