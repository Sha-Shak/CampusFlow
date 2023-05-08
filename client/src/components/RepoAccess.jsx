import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// Import Repo Access Information from github (dummy data for now line 126)

const RepoAccess = () => {
  const [cohort, setCohort] = useState('');
  const [repoType, setRepoType] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };

  const handleRepoTypeChange = (event) => {
    setRepoType(event.target.value);
  };

  const handleRepoNameChange = (event) => {
    setRepoName(event.target.value);
  };

  const handleGiveAccess = () => {
    console.log('Give access to:', cohort, repoType, repoName);
    setCohort('');
    setRepoType('');
    setRepoName('');
  };

  const handleRemoveAccess = () => {
    console.log('Remove access from:', cohort, repoType, repoName);
    setCohort('');
    setRepoType('');
    setRepoName('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5">Repo Access</Typography>

      {/* All Drop down are in the box */}
      <Box gap={2}>
        {/* Cohort Dropdown */}
        <Box marginTop={2}>
          <TextField
            select
            label="Cohort Name"
            value={cohort}
            onChange={handleCohortChange}
            fullWidth
          >
            {cohortNames.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {/* Cohort Dropdown finshed */}

        {/* Repo Type Dropdown */}
        <Box marginTop={2}>
          <TextField
            select
            label="Repo Type"
            value={repoType}
            onChange={handleRepoTypeChange}
            fullWidth
          >
            {repoTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {/* Repo Type Dropdown finshed */}

        {/* Repo Name Dropdown */}
        <Box marginTop={2}>
          <TextField
            select
            label="Repo Name"
            value={repoName}
            onChange={handleRepoNameChange}
            fullWidth
          >
            {repoNames.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {/* Repo Name Dropdown finshed */}

        {/* Button */}
        <Box
          display="flex"
          justifyContent="space-between"
          marginTop={2}
          gap={2}
          marginBottom={2}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleGiveAccess}
          >
            Give Access
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveAccess}
          >
            Remove Access
          </Button>
        </Box>
        {/* Button finshed */}
      </Box>
    </Box>
  );
};

export default RepoAccess;

const cohortNames = [
  'Cohort 1',
  'Cohort 2',
  'Cohort 3',
  'Cohort 4',
  'Cohort 5',
  'Cohort 6',
  'Cohort 7',
  'Cohort 8',
  'Cohort 9',
  'Cohort 10',
  'Cohort 11',
  'Cohort 12',
  'Cohort 13',
  'Cohort 14',
  'Cohort 15',
];

const repoTypes = [
  'Frontend',
  'Backend',
  'Fullstack',
  'Mobile',
  'AI/ML',
  'Data Engineering',
  'DevOps',
  'Security',
  'Game Development',
  'Embedded Systems',
  'Cloud Computing',
  'Blockchain',
  'UI/UX Design',
  'Technical Writing',
  'Project Management',
];

const repoNames = [
  'frontend-project-1',
  'frontend-project-2',
  'backend-project-1',
  'backend-project-2',
  'react-project-1',
  'react-project-2',
  'node-project-1',
  'node-project-2',
  'database-project-1',
  'database-project-2',
  'mobile-project-1',
  'mobile-project-2',
  'web-design-project-1',
  'web-design-project-2',
  'data-science-project-1',
];
