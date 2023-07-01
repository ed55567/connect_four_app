import React, { useState } from 'react';

const GameBoard = () => {
    const [board, setBoard] = useState([]);

    // TODO: implement the game board logic
    const initializeBoard = () => {
        const newBoard = [];
        for (let row = 0; row < 6; row++) {
            newBoard[row] = Array(7).fill(null);
        }
        return newBoard;
    };

    //Update the board state based on the player's move
    const updateBoard = (row, col) => {
        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
    };

    //check for a winner
    const checkForWinner = (player) => {
        //check rows
     for (let row = 0; row < 6; row++) {
         for (let col = 0; col < 4; col++) {
             if (board[row][col] === player && 
                board[row][col + 1] === player && 
                board[row][col + 2] === player && 
                board[row][col + 3] === player
                ) {
                 return true;
             }
         }
     }

     //check columns (top-left to bottom-right)
     for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 7; col++) {
                if (board[row][col] === player &&
                    board[row + 1][col] === player &&
                    board[row + 2][col] === player &&
                    board[row + 3][col] === player
                ) {
                    return true;
                }
            }
        }

        //check diagonals (top-left to bottom-right)
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (board[row][col] === player &&
                    board[row - 1][col + 1] === player &&
                    board[row - 2][col + 2] === player &&
                    board[row - 3][col + 3] === player
                ) {
                    return true;
                }
            }
        }

        //check diagonals (bottom-left to top-right)
        for (let row = 3; row < 6; row++) {
            for (let col = 3; col < 7; col++) {
                if (board[row][col] === player &&
                    board[row - 1][col - 1] === player &&   
                    board[row - 2][col - 2] === player &&
                    board[row - 3][col - 3] === player
                ) {   
                
                  return false;
                }   
        }
    }  

    const currentPlayer = 'red';

    return (
        <div>
           <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div 
                        key={cellIndex} 
                        className="cell"
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        >
                        {<div
                            key={colIndex}
                            className={`cell ${cell}`}
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                            >
                            {cell === 'red' && <div className="red-piece"></div>}
                            {cell === 'yellow' && <div className="yellow-piece"></div>}
                        </div>}
                     </div>
                    ))}
                </div>
            ))}
           </div>
        </div>  
    );
};

export default GameBoard;