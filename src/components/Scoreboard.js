import React from "react";
import "./score.css";

const Scoreboard = ({ player1Score }) => {
  return (
    <div className="scoreboard">
      <div className="box">
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              {/* <img className="player-one" alt="Player one" src="player-one.svg" /> */}
              <div className="div">
                <div className="text-wrapper">PLAYER 1</div>
                <div className="text-wrapper-2">{player1Score}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Scoreboard;