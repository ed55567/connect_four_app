import React from 'react';

const StartMenu = ({ onModeSelect }) => {
  const handleModeSelect = (mode) => {
    onModeSelect(mode);
  };

  return (
    <div className="start-menu">
      <h2>Connect Four</h2>
      <p>Select a game mode:</p>
      <button onClick={() => handleModeSelect('vsCPU')}>Player vs CPU</button>
      <button onClick={() => handleModeSelect('vsNetwork')}>Player vs Network</button>
    </div>
  );
};

export default StartMenu;
