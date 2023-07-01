import React from 'react';
import Cell from './Cell';

const Board = ({ board, handleCellClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <Cell
              key={columnIndex}
              value={cell}
              onClick={() => handleCellClick(columnIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
