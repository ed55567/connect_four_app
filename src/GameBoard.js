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

    return (
        <div>
            {/*TODO: Render the game board */}
        </div>  
    );
};

export default GameBoard;