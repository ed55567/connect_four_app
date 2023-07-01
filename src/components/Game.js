import React, { useState } from 'react';
import Board from './Board';
import Player from './Player';
import AIPlayer from './AIPlayer';
import NetworkPlayer from './NetworkPlayer';
import { checkForWin, isBoardFull, createEmptyBoard } from '../utils/gameLogic';
import './game.css'; // Import the CSS file for this component

const Game = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (columnIndex) => {
    if (!gameOver) {
      const updatedBoard = [...board];
      for (let i = board.length - 1; i >= 0; i--) {
        if (updatedBoard[i][columnIndex] === 0) {
          updatedBoard[i][columnIndex] = currentPlayer;
          break;
        }
      }

      setBoard(updatedBoard);

      if (checkForWin(updatedBoard, currentPlayer)) {
        setGameOver(true);
        alert(`Player ${currentPlayer} wins!`);
      } else if (isBoardFull(updatedBoard)) {
        setGameOver(true);
        alert("It's a tie!");
      } else {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }
    }
  };

  return (
    <div className="game">
      <h1>Connect Four</h1>
      <Board board={board} handleCellClick={handleCellClick} />
      {gameOver ? null : (
        <Player currentPlayer={currentPlayer} />
      )}
    </div>
  );
};

export default Game;

