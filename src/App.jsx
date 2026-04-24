import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Dummy_data } from '../data/games';
import './App.css';

function App() {
  const [games, setGames] = useState(Dummy_data);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <aside className="sidebar">
          <ul>
            <li>🔥 Popular</li>
            <li>🆕 New</li>
            <li>🔫 Shooting</li>
            <li>🚗 Driving</li>
          </ul>
        </aside>

        {/* Game Grid */}
        <main className="content">
          <h1>Featured Games</h1>
          <div className="game-grid">
            {games.map(game => (
              <div key={game.id} className="game-card">
                <img src={game.thumbnail} alt={game.title} />
                <div className="game-info">
                  <h3>{game.title}</h3>
                  <span>⭐ {game.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;