import React, { useState } from 'react';
import { Chip, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RiReactjsLine } from 'react-icons/ri';
import { FaAngular } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiRedis,
  SiPostgresql,
} from 'react-icons/si';

const FrontendOptions = [
  { label: 'React', icon: RiReactjsLine },
  { label: 'Angular', icon: FaAngular },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'Redux', icon: SiRedux },
  { label: 'GraphQL', icon: SiGraphql },
];

const BackendOptions = [
  { label: 'Node', icon: FaNodeJs },
  { label: 'Express.js', icon: SiExpress },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'Redis', icon: SiRedis },
];

export default function SelectableChips() {
  const [selectedFrontend, setSelectedFrontend] = useState([]);
  const [selectedBackend, setSelectedBackend] = useState([]);

  const handleFrontendClick = (option) => {
    if (selectedFrontend.includes(option)) {
      setSelectedFrontend((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedFrontend((prevSelected) => [...prevSelected, option]);
    }
  };

  const handleBackendClick = (option) => {
    if (selectedBackend.includes(option)) {
      setSelectedBackend((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedBackend((prevSelected) => [...prevSelected, option]);
    }
  };

  return (
    <div>
      <div className="mt-5">
        <Divider>
          <Typography variant="h5" mb="10px">
            FRONTEND
          </Typography>
        </Divider>
        {FrontendOptions.map((option) => (
          <Chip
            key={option.label}
            label={option.label}
            onClick={() => handleFrontendClick(option)}
            color={selectedFrontend.includes(option) ? 'primary' : 'default'}
            variant={selectedFrontend.includes(option) ? 'filled' : 'outlined'}
            style={{
              margin: '10px',
              padding: '5px',
              height: '40px',
              fontSize: '20px',
            }}
            icon={React.createElement(option.icon)}
          />
        ))}
      </div>
      <div className="mt-10">
        <Divider>
          <Typography variant="h5" mb="10px">
            BACKEND
          </Typography>
        </Divider>
        {BackendOptions.map((option) => (
          <Chip
            key={option.label}
            label={option.label}
            onClick={() => handleBackendClick(option)}
            color={selectedBackend.includes(option) ? 'primary' : 'default'}
            variant={selectedBackend.includes(option) ? 'filled' : 'outlined'}
            style={{
              margin: '10px',
              padding: '5px',
              height: '40px',
              fontSize: '20px',
            }}
            icon={React.createElement(option.icon)}
          />
        ))}
      </div>
    </div>
  );
}
