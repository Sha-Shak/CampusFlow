import React from 'react';

const Chip = ({ name, padding, round, customColor, borderColor }) => {
  return (
    <div
      className={`badge bg-${customColor} text-black p-${padding}   rounded-${round} border-2 border-${borderColor}`}
    >
      {name}
    </div>
  );
};
export default Chip;
