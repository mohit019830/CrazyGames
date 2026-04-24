import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CrazyGames Clone</div>
      <input type="text" placeholder="Search for games..." className="search-bar" />
      <div className="nav-links">
        <button className="login-btn">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;