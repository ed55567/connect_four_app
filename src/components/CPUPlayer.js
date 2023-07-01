import React, { useEffect } from 'react';

const CPUPlayer = ({ currentPlayer, handleCellClick, board, gameOver }) => {
  useEffect(() => {
    if (currentPlayer === 2 && !gameOver) {
      makeCPUMove();
    }
  }, [currentPlayer, gameOver]);

  const makeCPUMove = () => {
    const availableColumns = getAvailableColumns();
    if (availableColumns.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableColumns.length);
      const randomColumn = availableColumns[randomIndex];
      handleCellClick(randomColumn);
    }
  };

  const getAvailableColumns = () => {
    const availableColumns = [];
    for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
      if (board[0][columnIndex] === 0) {
        availableColumns.push(columnIndex);
      }
    }
    return availableColumns;
  };

  return null;
};

export default CPUPlayer;
