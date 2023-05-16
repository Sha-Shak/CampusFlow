import React from 'react';
import { useEffect, useState } from 'react';

function DaisyMark({ onChange, name, defaultValue, title }) {
  const [defaultMark, setDefaultMark] = useState(0);
  useEffect(() => {
    setDefaultMark(defaultValue);
  }, [defaultValue]);
  const changeSlider = (e) => {
    setDefaultMark(e.target.value);
    onChange(e);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex-[0.3]">{title}</div>
        <div className="flex-[0.6] py-1">
          <input
            type="range"
            min="0"
            max="10"
            value={defaultMark}
            defaultValue={defaultMark}
            step="1"
            onChange={changeSlider}
            name={name}
            className="range  range-xs range-primary"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default DaisyMark;
