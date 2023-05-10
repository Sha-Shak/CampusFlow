import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import toast, { Toaster } from 'react-hot-toast';

import CreateCohortModal from './CreateCohortModal';
import Modal from '@mui/material/Modal';
import { useGetCandidateByIdQuery } from '../features/candidate/candidateApi';
import {
  useAddStudentToGithubCohortMutation,
  useGetAllGithubCohortsQuery,
} from '../features/github/githubApi';
import {
  useAddStudentToCohortMutation,
  useGetAllCohortQuery,
} from '../features/cohort/cohortApi';
import { useCreateStudentMutation } from '../features/student/studentApi';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '0 auto',
});

const CreateStudentModal = ({ createStudentOpen, onStudentClose, id }) => {
  const { data: candidate, isSuccess } = useGetCandidateByIdQuery(id);
  const {
    data: cohorts,
    isSuccess: isGetAllCohortSuccess,
    refetch: refetchCohort,
  } = useGetAllCohortQuery();
  const [addStudentToGithubCohort, { isSuccess: isAddStudentToGithubSuccess }] =
    useAddStudentToGithubCohortMutation();
  const [addStudentToCohort, { isSuccess: isCohortAddSuccess }] =
    useAddStudentToCohortMutation();
  const [addStudent, { isSuccess: isAddStudentSuccess, data: newStudent }] =
    useCreateStudentMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gitUsername, setgitUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [cohort, setCohort] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setName(candidate.name);
      setEmail(candidate.email);
      setPhone(candidate.phone);
    }
    if (isGetAllCohortSuccess) {
      setCohort(cohorts[0]?.name);
    }
  }, [isSuccess, candidate, cohorts, isGetAllCohortSuccess]);

  // Function Handlers
  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addStudentToGithubCohort({
      username: gitUsername,
      cohortName: cohort,
    });
  };

  useEffect(() => {
    if (isAddStudentToGithubSuccess) {
      toast.success('Student added to Github Cohort');
      addStudent({
        name,
        email,
        phone,
        type: 'junior',
        githubUsername: gitUsername,
      });
      if (newStudent) {
        console.log(newStudent);
      }
      if (isAddStudentSuccess) {
        clearForm();
      }
    }
  }, [isAddStudentToGithubSuccess, isAddStudentSuccess]);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setgitUsername('');
    setCohort('');
  };

  // Modal Handlers
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // JSX Fragments
  const studentInfo = (
    <>
      <TextField
        label="Name"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Phone"
        value={phone}
        required
        onChange={(event) => setPhone(event.target.value)}
      />
      <TextField
        label="GitHub Username"
        value={gitUsername}
        required
        onChange={(event) => setgitUsername(event.target.value)}
      />
    </>
  );

  const cohortPart = (
    <>
      <Toaster />
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item xs={8}>
          <Select
            displayEmpty
            // value={cohort}
            onChange={handleCohortChange}
            placeholder="Cohort"
            fullWidth
            sx={{ borderRadius: '25px', height: '3rem' }}
          >
            <MenuItem>Select Cohort</MenuItem>
            {cohorts?.map((cohort) => {
              return (
                <MenuItem key={cohort.cohortName} value={cohort.cohortName}>
                  {cohort.cohortName}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: '25px',
            }}
            fullWidth
            // startIcon={<AddIcon />}
          >
            Add Cohort
          </Button>
          <CreateCohortModal
            open={open}
            onClose={handleClose}
            refetchCohort={refetchCohort}
          />
        </Grid>
      </Grid>
    </>
  );

  const createStudentModalBody = (
    <Box
      sx={{
        // backgroundImage: 'url(https://i.imgur.com/2nCt3Sbl.png)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        backgroundColor: '#F5F5F5!important',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '45%',
        borderRadius: '25px',
        boxShadow: 15,
        p: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        > */}
        {/* <IconButton
            sx={{ alignSelf: 'flex-end', fontSize: '2rem' }}
            onClick={onStudentClose}
          >
            <CancelIcon
              color="primary"
              sx={{ alignSelf: 'flex-end', fontSize: '2rem' }}
            />
          </IconButton> */}
        {/* </Box> */}
        <Typography
          variant="h4"
          align="center"
          textTransform={'uppercase'}
          m={2}
        >
          Create New Student
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Form onSubmit={handleSubmit}>
              {studentInfo}
              {cohortPart}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Create Student
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Modal open={createStudentOpen} onClose={onStudentClose}>
      {createStudentModalBody}
    </Modal>
  );
};

export default CreateStudentModal;
