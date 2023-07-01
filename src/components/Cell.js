import React from 'react';

const Cell = ({ value, onClick }) => {
  const circleImage = value === 1 ? 'circle-x.png' : 'circle-o.png';

  return (
    <div className="cell" onClick={onClick}>
      {value !== 0 && <img src={circleImage} alt={value === 1 ? 'X' : 'O'} />}
    </div>
  );
};

export default Cell;
