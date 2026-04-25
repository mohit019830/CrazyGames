import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import GamePlayer from '../Components/GamePlayer'; 
import Home from '../Pages/Home';

import { ALL_GAMES_DATA } from '../Data/games'; 
import './App.css';

function App() {
  const [standardGames, setStandardGames] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const large = ALL_GAMES_DATA.filter(game => game.isLarge);
    const standard = ALL_GAMES_DATA.filter(game => !game.isLarge);

    setTopPicks(large);
    setStandardGames(standard); 
  }, []);

  const allGamesCombined = [...standardGames, ...topPicks];

  // Filter based on the search query
  const filteredStandard = standardGames.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredTop = topPicks.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container">
        <Navbar setSearchQuery={setSearchQuery} />

        <div className="main-layout">
          <Sidebar setSearchQuery={setSearchQuery} />

          <main className="content-area">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    standardGames={filteredStandard} 
                    topPicks={filteredTop} 
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