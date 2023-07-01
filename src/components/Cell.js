import React, { useState } from 'react';
import Oval from './Oval';

const Cell = ({ value, onClick }) => {
  const [isDropped, setIsDropped] = useState(false);

  const handleCellClick = () => {
    if (value === 0) {
      setIsDropped(true);
      onClick();
    }
  };

  return (
    <div className={`cell ${isDropped ? 'dropped' : ''}`} onClick={handleCellClick}>
      {value !== 0 && (
        <div className="oval-wrapper">
          <Oval width={80} height={80} fill={value === 1 ? 'red' : 'yellow'} />
        </div>
      )}
    </div>
  );
};

export default Cell;
