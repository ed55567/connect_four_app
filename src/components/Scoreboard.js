// Scoreboard.js
import React from "react";
import "./score.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group-wrapper">
        <div className="group">
          <div className="overlap-group">
            <div className="rectangle" />
            <img className="player-one" alt="Player one" src="player-one.svg" />
            <div className="div">
              <div className="text-wrapper">PLAYER 1</div>
              <div className="text-wrapper-2">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
