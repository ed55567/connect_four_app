import React, { useEffect } from 'react';

const NetworkPlayer = ({ currentPlayer, handleCellClick }) => {
  useEffect(() => {
    // Simulating network event received
    const handleNetworkEvent = (event) => {
      // Assuming event.data contains the column index clicked by the opponent
      const columnIndex = event.data;

      // Call the handleCellClick function with the received column index
      handleCellClick(columnIndex);
    };

    // Attach event listener to listen for network events
    // Replace 'network-event' with the actual event name you're using
    window.addEventListener('network-event', handleNetworkEvent);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('network-event', handleNetworkEvent);
    };
  }, [handleCellClick]);

  return null;
};

export default NetworkPlayer;
