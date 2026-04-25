import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import GameRow from '../components/GameRow';
import { Dummy_data } from '../data/games'; 
import './App.css';

function App() {
  const [continuePlaying, setContinuePlaying] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [newGames, setNewGames] = useState([]);

  useEffect(() => {
    const standardGames = [
      { id: 10, title: "Moto X3M", thumbnail: "https://via.placeholder.com/150/1a1924/ffffff?text=Moto+X3M", badge: "Top" },
      { id: 11, title: "Venge.io", thumbnail: "https://via.placeholder.com/150/2a2936/ffffff?text=Venge.io", badge: "Hot" },
      { id: 12, title: "Subway Surfers", thumbnail: "https://via.placeholder.com/150/7a5cff/ffffff?text=Subway" },
      { id: 13, title: "Smash Karts", thumbnail: "https://via.placeholder.com/150/ff3333/ffffff?text=Karts" }
    ];

    const largeGames = [
      { id: 101, title: "PolyTrack", thumbnail: "https://via.placeholder.com/280x160/1a1924/ffffff?text=PolyTrack", badge: "Originals" },
      { id: 102, title: "Deadly Descent", thumbnail: "https://via.placeholder.com/280x160/333333/ffffff?text=Descent" },
      { id: 103, title: "Count Masters", thumbnail: "https://via.placeholder.com/280x160/7a5cff/ffffff?text=Count+Masters", badge: "Originals" }
    ];

    setContinuePlaying(standardGames);
    setTopPicks(largeGames);
    
    setNewGames(Dummy_data); 
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        
        <main className="content">
          <GameRow title="Continue playing" games={continuePlaying} isTopPick={false} />
          
          <GameRow title="Top picks for you" games={topPicks} isTopPick={true} />
          
          <GameRow title="New games" games={newGames} isTopPick={false} />
        </main>
      </div>
    </div>
  );
}

export default App;