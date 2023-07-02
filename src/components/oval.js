import React from 'react';

const Oval = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill={fill} />
    </svg>
  );
};

export default Oval;
