import React from 'react';
import GameRow from '../components/GameRow';

const Home = ({ continuePlaying, topPicks, newGames }) => {
  return (
    <div className="home-content">
      <GameRow title="Continue playing" games={continuePlaying} isTopPick={false} />
      <GameRow title="Top picks for you" games={topPicks} isTopPick={true} />
      <GameRow title="New games" games={newGames} isTopPick={false} />
    </div>
  );
};

export default Home;