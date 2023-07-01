// Function to check if a player has won
export const checkForWin = (board, currentPlayer) => {
    const rows = board.length;
    const columns = board[0].length;
  
    // Check horizontal
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns - 3; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row][col + 1] === currentPlayer &&
          board[row][col + 2] === currentPlayer &&
          board[row][col + 3] === currentPlayer
        ) {
          return true;
        }
      }
    }
  
    // Check vertical
    for (let row = 0; row < rows - 3; row++) {
      for (let col = 0; col < columns; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row + 1][col] === currentPlayer &&
          board[row + 2][col] === currentPlayer &&
          board[row + 3][col] === currentPlayer
        ) {
          return true;
        }
      }
    }
  
    // Check diagonal (down-right)
    for (let row = 0; row < rows - 3; row++) {
      for (let col = 0; col < columns - 3; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row + 1][col + 1] === currentPlayer &&
          board[row + 2][col + 2] === currentPlayer &&
          board[row + 3][col + 3] === currentPlayer
        ) {
          return true;
        }
      }
    }
  
    // Check diagonal (up-right)
    for (let row = 3; row < rows; row++) {
      for (let col = 0; col < columns - 3; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row - 1][col + 1] === currentPlayer &&
          board[row - 2][col + 2] === currentPlayer &&
          board[row - 3][col + 3] === currentPlayer
        ) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  // Function to check if the board is full
  export const isBoardFull = (board) => {
    const columns = board[0].length;
    for (let col = 0; col < columns; col++) {
      if (board[0][col] === 0) {
        return false;
      }
    }
    return true;
  };
  
  // Function to create an empty board
  export const createEmptyBoard = () => {
    const rows = 6;
    const columns = 7;
    const board = [];
    for (let row = 0; row < rows; row++) {
      board[row] = Array(columns).fill(0);
    }
    return board;
  };
  