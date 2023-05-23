import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const BeautifulCheckbox = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const options = ['Full Stack', 'Backend', 'Front-end'];

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleCheckboxChange(option)}
          style={{
            width: '100%',
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              selectedOption === option
                ? 'linear-gradient( 136deg, #e73c7e 0%, #6f1ddc 50%, #6f1ddc 100%)'
                : 'transparent',
            color: selectedOption === option ? '#fff' : 'inherit',
            borderRadius: '10px',
            padding: '16px',
            marginTop: '10px',
            cursor: 'pointer',
            border: selectedOption === option ? 'none' : '1px solid',
            transition:
              'background-color 0.3s ease-in-out, border 0.3s ease-in-out',
          }}
        >
          {selectedOption === option && (
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                // background:
                //   'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)',
                // // 'linear-gradient( 136deg, #e73c7e 0%, #6f1ddc 50%, #6f1ddc 100%)
                borderRadius: '5px',
                pointerEvents: 'none',
              }}
            />
          )}
          <Checkbox
            checked={selectedOption === option}
            onChange={() => handleCheckboxChange(option)}
            color="default"
            sx={{
              display: 'none',
            }}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default BeautifulCheckbox;
