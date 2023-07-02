import React from 'react';

const Player = ({ currentPlayer }) => {
  return (
    <div className="player">
      <h2>Player {currentPlayer}'s turn</h2>
    </div>
  );
};

export default Player;
