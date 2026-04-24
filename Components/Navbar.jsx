import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="top-navbar">
      <div className="nav-left">
        {/* Placeholder for hamburger menu and logo */}
        <button className="menu-btn">☰</button>
        <div className="logo">
          <span className="logo-icon">🎮</span> 
          <h2>crazy<br/>games</h2>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="Search games and categories" 
            className="search-input"
          />
          <button className="search-icon">🔍</button>
        </div>
      </div>

      <div className="nav-right">
        {/* TODO: Add proper SVG icons later, using emojis for quick layout */}
        <button className="icon-btn notification">🔔<span className="dot"></span></button>
        <button className="icon-btn">❤️</button>
        <button className="icon-btn profile">👤</button>
      </div>
    </nav>
  );
};

export default Navbar;