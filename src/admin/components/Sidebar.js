import React from 'react';
import { Camera, Image, Info, Briefcase, LogOut, LayoutDashboard } from 'lucide-react';
import { supabase } from '../../supabaseClient';
import './Sidebar.css';

const navItems = [
  { id: 'overview',  label: 'Overview',  icon: <LayoutDashboard size={18} /> },
  { id: 'gallery',   label: 'Gallery',   icon: <Image size={18} /> },
  { id: 'hero',      label: 'Hero',      icon: <Camera size={18} /> },
  { id: 'about',     label: 'About',     icon: <Info size={18} /> },
  { id: 'services',  label: 'Services',  icon: <Briefcase size={18} /> },
];

function Sidebar({ active, setActive }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Camera size={22} />
        <span>Ganza <b>Admin</b></span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
      <button className="sidebar-logout" onClick={handleLogout}>
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}

export default Sidebar;
