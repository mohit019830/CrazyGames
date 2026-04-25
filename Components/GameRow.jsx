import React from 'react';
import { Link } from 'react-router';
import './GameRow.css';

const GameRow = ({ title, games, isTopPick }) => {
  return (
    <div className="game-row-container">
      <div className="row-header">
        <h2>{title}</h2>
      </div>
      
      <div className="row-cards">
        {games.map((game) => (
          <Link 
            to={`/game/${game.id}`} 
            key={game.id} 
            className={`card ${isTopPick ? 'card-large' : 'card-standard'}`}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            {game.badge && <span className={`badge badge-${game.badge.toLowerCase()}`}>{game.badge}</span>}
            <img src={game.thumbnail} alt={game.title} className="game-image" />
            <div className="card-overlay">
              <p>{game.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameRow;