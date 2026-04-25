import React, { useState, useEffect } from 'react'; 
import GameRow from '../Components/GameRow'; 

const Home = ({ standardGames = [], topPicks = [], searchQuery = '' }) => {
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('crazyGamesHistory')) || [];
    setRecentGames(history);
  }, []);

  const filteredRecent = recentGames.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uniqueCategories = [...new Set(standardGames.map(game => game.category))];

  const noResults = standardGames.length === 0 && topPicks.length === 0 && filteredRecent.length === 0;

  return (
    <div className="home-content">
      {noResults ? (
        <div style={{ color: '#a0a0b0', marginTop: '40px', textAlign: 'center' }}>
          <h2>No games found for "{searchQuery}" 🎮</h2>
          <p>Try searching for a different title or category!</p>
        </div>
      ) : (
        <>
          {filteredRecent.length > 0 && (
            <GameRow title="⏱️ Recently Played" games={filteredRecent} isTopPick={false} />
          )}

          {topPicks.length > 0 && (
            <GameRow title="Top picks for you" games={topPicks} isTopPick={true} />
          )}

          {uniqueCategories.map(category => {
            const gamesInCategory = standardGames.filter(game => game.category === category);
            
            return (
              <GameRow 
                key={category} 
                title={`${category} Games`} 
                games={gamesInCategory} 
                isTopPick={false} 
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;