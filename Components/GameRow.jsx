import React from 'react';
import './GameRow.css';

const GameRow = ({ title, games, isTopPick }) => {
  return (
    <div className="game-row-container">
      <div className="row-header">
        <h2>{title}</h2>
      </div>
      
      <div className="row-cards">
        {games.map((game) => (
          <div 
            key={game.id} 
            className={`card ${isTopPick ? 'card-large' : 'card-standard'}`}
          >
            {/* Badges like "Top", "Hot", "Originals" */}
            {game.badge && <span className={`badge badge-${game.badge.toLowerCase()}`}>{game.badge}</span>}
            
            <img src={game.thumbnail} alt={game.title} className="game-image" />
            
            <div className="card-overlay">
              <p>{game.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameRow;