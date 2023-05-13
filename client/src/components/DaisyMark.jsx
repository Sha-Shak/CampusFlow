import React from 'react';

function DaisyMark() {
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        value="25"
        className="range"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>2</span>
        <span>4</span>
        <span>6</span>
        <span>8</span>
        <span>10</span>
      </div>
    </>
  );
}

export default DaisyMark;
