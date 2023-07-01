import React, { useEffect } from 'react';

const AIPlayer = ({ currentPlayer, handleCellClick }) => {
  useEffect(() => {
    if (currentPlayer === 2) {
      const randomColumnIndex = Math.floor(Math.random() * 7);
      handleCellClick(randomColumnIndex);
    }
  }, [currentPlayer, handleCellClick]);

  return null;
};

export default AIPlayer;
