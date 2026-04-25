import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    { icon: '🏠', label: 'Home' },
    { icon: '⏱️', label: 'Recently Played' },
    { icon: '🔥', label: 'Trending' },
    { icon: '⚔️', label: 'Action' },
    { icon: '🏎️', label: 'Driving' },
    { icon: '🧩', label: 'Puzzle' },
    { icon: '⚽', label: 'Sports' }
  ];

  return (
    <aside className="left-sidebar">
      <div className="sidebar-icons">
        {categories.map((cat, index) => (
          <div key={index} className="sidebar-item" title={cat.label}>
            <span className="sidebar-emoji">{cat.icon}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;