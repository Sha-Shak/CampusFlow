import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const CreateCohortModal = ({ open, onClose }) => {
  const [cohortName, setCohortName] = useState('');

  const handleCohortNameChange = (event) => {
    setCohortName(event.target.value);
  };

  const handleCreateCohort = () => {
    console.log('Create cohort with name:', cohortName);
    // Send the information to your API or perform the desired action
  };

  // JSX for the modal body
  const modalBody = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '25px',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h5" component="h2">
        Create Cohort
      </Typography>
      <Box display="flex" flexDirection="column" mt={2}>
        <TextField
          label="Cohort Name"
          value={cohortName}
          onChange={handleCohortNameChange}
          fullWidth
        />
      </Box>

      {/* Create and Cancel Button */}
      <Box display="flex" justifyContent="space-around" mt={2} gap={1}>
        <Button onClick={onClose} color="error" variant="contained" fullWidth>
          Cancel
        </Button>
        <Button
          onClick={handleCreateCohort}
          color="primary"
          variant="contained"
          fullWidth
        >
          Create
        </Button>
        {/* Create and Cancel Button finished*/}
      </Box>
    </Box>
  );

  return (
    <Modal open={open} onClose={onClose}>
      {modalBody}
    </Modal>
  );
};

export default CreateCohortModal;
