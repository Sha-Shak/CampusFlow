import React, { useEffect, useState } from 'react';
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
import { useGetAllSkillsQuery } from '../../features/skill/skillApi';

export default function SelectableChips({
  setFrontendSkill,
  setBackendSkill,
  stack,
}) {
  const {
    data: skillsName,
    isSuccess,
    refetch: refetchSkills,
  } = useGetAllSkillsQuery();

  const frontendSkills = skillsName?.filter((skill) => {
    return skill?.stack?.includes('frontend');
  });
  const frontendSeniorSkill = frontendSkills?.filter((skill) => {
    return skill?.studentType.includes('senior');
  });

  const backendSkills = skillsName?.filter((skill) => {
    return skill?.stack?.includes('backend');
  });
  const backendSeniorSkill = backendSkills?.filter((skill) => {
    return skill?.studentType.includes('senior');
  });

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
  useEffect(() => {
    setFrontendSkill(selectedFrontend);
  }, [selectedFrontend]);
  useEffect(() => {
    setBackendSkill(selectedBackend);
  }, [selectedBackend]);

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
      {(stack === 'frontend' || stack === 'fullstack') && (
        <div className="mt-5">
          <Divider>
            <Typography variant="h5" mb="10px">
              FRONTEND
            </Typography>
          </Divider>
          {frontendSeniorSkill?.map((option) => (
            <Chip
              key={option?._id}
              label={option?.skillName}
              onClick={() => handleFrontendClick(option?._id)}
              color={
                selectedFrontend.includes(option?._id) ? 'primary' : 'default'
              }
              variant={
                selectedFrontend.includes(option?._id) ? 'filled' : 'outlined'
              }
              style={{
                margin: '10px',
                padding: '5px',
                height: '40px',
                fontSize: '20px',
              }}
              // icon={React.createElement(option.icon)}
            />
          ))}
        </div>
      )}
      {(stack === 'backend' || stack === 'fullstack') && (
        <div className="mt-10">
          <Divider>
            <Typography variant="h5" mb="10px">
              BACKEND
            </Typography>
          </Divider>
          {backendSeniorSkill?.map((option) => (
            <Chip
              key={option?._id}
              label={option?.skillName}
              onClick={() => handleBackendClick(option?._id)}
              color={
                selectedBackend.includes(option?._id) ? 'primary' : 'default'
              }
              variant={
                selectedBackend.includes(option?._id) ? 'filled' : 'outlined'
              }
              style={{
                margin: '10px',
                padding: '5px',
                height: '40px',
                fontSize: '20px',
              }}
              // icon={React.createElement(option.icon)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
