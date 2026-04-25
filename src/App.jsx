import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // 1. IMPORT THE NEW COMPONENT
import GameRow from '../components/GameRow';
import { Dummy_data } from '../data/games';
import './App.css';

function App() {
  const [games, setGames] = useState(Dummy_data);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        
        {/* 2. USE THE COMPONENT (The old <ul> list is gone!) */}
        <Sidebar />

        <main className="content">
          <GameRow title="Featured Games" games={games} isTopPick={false} />
          <GameRow title="Top Picks for you" games={games} isTopPick={true} />
        </main>
      </div>
    </div>
  );
}

export default App;