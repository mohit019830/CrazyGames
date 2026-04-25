import React from 'react';
import './Navbar.css'; 

const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="top-navbar">
      <div className="nav-left">
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
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-icon">🔍</button>
        </div>
      </div>

      <div className="nav-right">
        <button className="icon-btn notification" onClick={() => alert("You have 0 new notifications.")}>
          🔔<span className="dot"></span>
        </button>
        
        <button className="icon-btn" onClick={() => {
          setSearchQuery('');
          window.scrollTo(0,0); 
        }}>
          ❤️
        </button>
        
        <button className="icon-btn profile" onClick={() => alert("Profile settings are currently unavailable in guest mode.")}>
          👤
        </button>
      </div>
    </nav>
  );
};

export default Navbar;