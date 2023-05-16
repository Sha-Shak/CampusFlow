import React from 'react';

const Chip = ({ name }) => {
  return (
    <div className="badge bg-purple-300 text-black p-4  border-none">
      {name}
    </div>
  );
};
export default Chip;
