import React from 'react';
import { Link } from 'react-router-dom';

const GamePlayer = ({ game }) => {
  if (!game) return <h2 style={{ color: 'white' }}>Game not found!</h2>;

  return (
    <div style={{ padding: '20px', color: 'white', width: '100%' }}>
      <Link to="/" style={{ color: '#7a5cff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
        ← Back to Games
      </Link>
      
      <div style={{ 
        marginTop: '20px', 
        backgroundColor: '#000', 
        aspectRatio: '16/9', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '12px',
        border: '1px solid #333'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>▶️ Playing {game.title}</h1>
          <p style={{ color: '#a0a0b0' }}>Simulated iFrame View</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', alignItems: 'center' }}>
        <h2>{game.title}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
           <button style={{ padding: '8px 16px', background: '#2a2936', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer' }}>👍 Like</button>
           <button style={{ padding: '8px 16px', background: '#2a2936', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer' }}>🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;