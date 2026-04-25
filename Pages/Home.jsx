import React from 'react';
import GameRow from '../components/GameRow';

// 1. Accept searchQuery to know if we are currently searching
const Home = ({ continuePlaying, topPicks, newGames, searchQuery }) => {
  
  // 2. Check if all lists are empty
  const noResults = continuePlaying.length === 0 && topPicks.length === 0 && newGames.length === 0;

  return (
    <div className="home-content">
      {noResults ? (
        <div style={{ color: '#a0a0b0', marginTop: '40px', textAlign: 'center' }}>
          <h2>No games found for "{searchQuery}" 🎮</h2>
          <p>Try searching for something else like "Moto" or "Track"</p>
        </div>
      ) : (
        <>
          {/* Only render rows if they actually have games in them */}
          {continuePlaying.length > 0 && <GameRow title="Continue playing" games={continuePlaying} isTopPick={false} />}
          {topPicks.length > 0 && <GameRow title="Top picks for you" games={topPicks} isTopPick={true} />}
          {newGames.length > 0 && <GameRow title="New games" games={newGames} isTopPick={false} />}
        </>
      )}
    </div>
  );
};

export default Home;