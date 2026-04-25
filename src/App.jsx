import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import GameRow from '../components/GameRow'; 
import { Dummy_data } from '../data/games';
import './App.css';

function App() {
  const [games, setGames] = useState(Dummy_data);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        {/* We will swap this out for Sidebar.jsx soon */}
        <aside className="sidebar">
          <ul>
            <li>🔥 Popular</li>
            <li>🆕 New</li>
            <li>🔫 Shooting</li>
            <li>🚗 Driving</li>
          </ul>
        </aside>

        <main className="content">
          {/* Using the GameRow component instead of the raw grid */}
          <GameRow title="Featured Games" games={games} isTopPick={false} />
          <GameRow title="Top Picks for you" games={games} isTopPick={true} />
        </main>
      </div>
    </div>
  );
}

export default App;