import React, { useState, useEffect } from 'react'; 
import GameRow from '../components/GameRow';

const Home = ({ continuePlaying, topPicks, newGames, searchQuery }) => {
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('crazyGamesHistory')) || [];
    setRecentGames(history);
  }, []);

  const filteredRecent = recentGames.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noResults = continuePlaying.length === 0 && topPicks.length === 0 && newGames.length === 0 && filteredRecent.length === 0;

  return (
    <div className="home-content">
      {noResults ? (
        <div style={{ color: '#a0a0b0', marginTop: '40px', textAlign: 'center' }}>
          <h2>No games found for "{searchQuery}" 🎮</h2>
          <p>Try searching for something else like "Moto" or "Track"</p>
        </div>
      ) : (
        <>
          {filteredRecent.length > 0 && (
            <GameRow title="⏱️ Recently Played" games={filteredRecent} isTopPick={false} />
          )}

          {continuePlaying.length > 0 && <GameRow title="Continue playing" games={continuePlaying} isTopPick={false} />}
          {topPicks.length > 0 && <GameRow title="Top picks for you" games={topPicks} isTopPick={true} />}
          {newGames.length > 0 && <GameRow title="New games" games={newGames} isTopPick={false} />}
        </>
      )}
    </div>
  );
};

export default Home;