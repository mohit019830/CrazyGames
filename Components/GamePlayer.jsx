import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router';
import './GamePlayer.css';

const GamePlayer = ({ game }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!game) return;
    
    const history = JSON.parse(localStorage.getItem('crazyGamesHistory')) || [];
    const filteredHistory = history.filter(g => g.id !== game.id);
    const updatedHistory = [game, ...filteredHistory].slice(0, 5);
    localStorage.setItem('crazyGamesHistory', JSON.stringify(updatedHistory));

    const likedGames = JSON.parse(localStorage.getItem('crazyGamesLiked')) || [];
    const alreadyLiked = likedGames.some(g => g.id === game.id);
    setIsLiked(alreadyLiked);

  }, [game]); 

  const handleLike = () => {
    let likedGames = JSON.parse(localStorage.getItem('crazyGamesLiked')) || [];
    
    if (isLiked) {
      likedGames = likedGames.filter(g => g.id !== game.id);
    } else {
      likedGames = [game, ...likedGames];
    }
    
    localStorage.setItem('crazyGamesLiked', JSON.stringify(likedGames));
    setIsLiked(!isLiked); 
  };

  const handleShare = () => {
    alert(`Link copied to clipboard! Share ${game.title} with your friends!`);
  };

  if (!game) return <h2 style={{ color: 'white' }}>Game not found!</h2>;

  return (
    <div className="game-player-container">
      <Link to="/" className="back-btn">
        ← Back to Games
      </Link>
      
      <div className="player-wrapper">
        <div className="mock-iframe">
          <h1>▶️ Playing {game.title}</h1>
          <p>Simulated iFrame View</p>
        </div>
      </div>

      <div className="title-section">
        <h2>{game.title}</h2>
        <div className="action-buttons">
           <button 
             className="action-btn" 
             onClick={handleLike}
             style={{ backgroundColor: isLiked ? '#ff3333' : '#2a2936' }}
           >
             {isLiked ? '❤️ Liked' : '👍 Like'}
           </button>
           <button className="action-btn" onClick={handleShare}>🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;