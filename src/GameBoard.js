import React, { useState } from 'react';

const GameBoard = () => {
    const [board, setBoard] = useState([]);

    // TODO: implement the game board logic
    const initializeBoard = () => {
        const newBoard = [];
        for (let row = 0; row < 6; row++) {
            newBoard.push(null);
        }
        return newBoard;
    };

    //Update the board state based on the player's move
    const updateBoard = (row, column) => {
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

     //check columns
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

    return (
        <div>
            {/*TODO: Render the game board */}
        </div>  
    );
};

export default GameBoard;