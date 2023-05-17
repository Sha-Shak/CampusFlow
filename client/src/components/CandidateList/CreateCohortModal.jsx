import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useCreateCohortMutation } from '../../features/cohort/cohortApi';
import toast, { Toaster } from 'react-hot-toast';
import { useAddGithubCohortMutation } from '../../features/github/githubApi';
const CreateCohortModal = ({ open, onClose, refetchCohort }) => {
  const [createCohort, { isSuccess, isError, error }] =
    useCreateCohortMutation();
  const [createGithubCohort, { isError: isGithubCohortError }] =
    useAddGithubCohortMutation();
  const [cohortName, setCohortName] = useState('');
  const [startDate, setStartDate] = useState('');
  const handleCohortNameChange = (event) => {
    setCohortName(event.target.value);
  };

  const handleCreateCohort = () => {
    createCohort({ cohortName, jrStartDate: startDate });
  };
  const handleSuccess = () => {
    if (isError || isGithubCohortError) {
      toast.error('Error Creating Cohort');
    }
    if (isSuccess) {
      setCohortName('');
      setStartDate('');
      createGithubCohort({ cohortName });
      toast.success('Cohort Created Successfully');
      refetchCohort();
      onClose();
    }
  };
  useEffect(handleSuccess, [isSuccess, isError, error]);
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
        <label className="m-2">Cohort Name</label>
        <TextField
          required
          placeholder="student-jan-23"
          value={cohortName}
          onChange={handleCohortNameChange}
          fullWidth
        />
        <label className="m-2">Class Start Date</label>
        <input
          required
          onChange={(e) => setStartDate(e.target.value)}
          type="date"
          className="focus:border-purple-300  focus:outline-none w-full text-sm text-gray-600
          border-2 border-purple-200 h-12 p-4 rounded-lg "
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
      </Box>{' '}
      <Toaster />
    </Box>
  );

  return (
    <>
      <Toaster />
      <Modal open={open} onClose={onClose}>
        {modalBody}
      </Modal>
    </>
  );
};

export default CreateCohortModal;
