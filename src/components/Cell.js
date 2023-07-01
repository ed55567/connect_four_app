import React from 'react';

const Cell = ({ value, onClick }) => {
  return (
    <div className="cell" onClick={onClick}>
      {value === 0 ? '' : value === 1 ? 'X' : 'O'}
    </div>
  );
};

export default Cell;
