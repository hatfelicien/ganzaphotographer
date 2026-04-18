import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Overview from './Overview';
import GalleryManager from './GalleryManager';
import HeroEditor from './HeroEditor';
import AboutEditor from './AboutEditor';
import ServicesEditor from './ServicesEditor';
import './Dashboard.css';

function Dashboard() {
  const [active, setActive] = useState('overview');

  const renderPage = () => {
    switch (active) {
      case 'gallery':  return <GalleryManager />;
      case 'hero':     return <HeroEditor />;
      case 'about':    return <AboutEditor />;
      case 'services': return <ServicesEditor />;
      default:         return <Overview />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar active={active} setActive={setActive} />
      <main className="dashboard-main">
        {renderPage()}
      </main>
    </div>
  );
}

export default Dashboard;
