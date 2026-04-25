import React from 'react';
import { Link } from 'react-router';
import './Sidebar.css';

const Sidebar = ({ setSearchQuery }) => {
  const categories = [
    { icon: '🏠', label: 'Home', query: '' }, 
    { icon: '🔥', label: 'Action', query: 'Action' },
    { icon: '🏎️', label: 'Driving', query: 'Driving' },
    { icon: '🧩', label: 'Puzzle', query: 'Puzzle' },
    { icon: '⚽', label: 'Sports', query: 'Sports' },
    { icon: '🔫', label: 'Shooting', query: 'Shooting' },
    { icon: '🌐', label: 'IO', query: 'IO' }
  ];

  return (
    <aside className="left-sidebar">
      <div className="sidebar-icons">
        {categories.map((cat, index) => (
          <Link 
            to="/" 
            key={index} 
            className="sidebar-item" 
            title={cat.label}
            onClick={() => setSearchQuery(cat.query)}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span className="sidebar-emoji">{cat.icon}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;