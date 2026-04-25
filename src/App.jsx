import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import GamePlayer from '../components/GamePlayer'; 
import Home from '../pages/Home';

// Data and Styles
import { Dummy_data } from '../data/games'; 
import './App.css';

function App() {
  const [continuePlaying, setContinuePlaying] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const largeGames = ALL_GAMES_DATA.filter(game => game.isLarge);
    const standardGames = ALL_GAMES_DATA.filter(game => !game.isLarge);

    setContinuePlaying(standardGames.slice(0, 15)); 
    setTopPicks(largeGames);                        
    setNewGames(standardGames.slice(15, 30)); 
  }, []);

  const allGamesCombined = [...continuePlaying, ...topPicks, ...newGames];

  const filteredContinue = continuePlaying.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredTop = topPicks.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredNew = newGames.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container">
        <Navbar setSearchQuery={setSearchQuery} />

        <div className="main-layout">
          <Sidebar />

          <main className="content-area">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    continuePlaying={filteredContinue} 
                    topPicks={filteredTop} 
                    newGames={filteredNew} 
                    searchQuery={searchQuery}
                  />
                } 
              />

              {allGamesCombined.map((game) => (
                <Route 
                  key={game.id} 
                  path={`/game/${game.id}`} 
                  element={<GamePlayer game={game} />} 
                />
              ))}
            </Routes>
          </main>

        </div>
      </div>
    </Router>
  );
}

export default App;