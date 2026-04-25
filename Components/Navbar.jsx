import React from 'react';
import './Navbar.css'; 
const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="top-navbar">

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

    </nav>
  );
};

export default Navbar;