import React, { useEffect, useState } from 'react';
import { Button, TextField, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useGetCandidateByIdQuery } from '../features/candidate/candidateApi';
import { useAddStudentToCohortMutation, useGetAllCohortsQuery } from '../features/github/githubApi';
import { useCreateStudentMutation } from '../features/student/studentApi';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '0 auto',
});

const CreateStudent = () => {
  const {id} = useParams()
  const {data: candidate, isLoading, isError, error, isSuccess} = useGetCandidateByIdQuery(id)
  const {data: cohorts, isSuccess: isCohortSucess} = useGetAllCohortsQuery()

  const [addStudentToCohort, {isSuccess: isAddStudentSuccess}] = useAddStudentToCohortMutation()
  const [createStudent, {isSuccess: isCreateStudentSuccess}] = useCreateStudentMutation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gitUsername, setgitUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [cohort, setCohort] = useState('');
  useEffect(() => {
    if (isSuccess) {
      setName(candidate.name);
      setEmail(candidate.email);
      setPhone(candidate.phone);
    }
    if(isCohortSucess) {
      setCohort(cohorts[0].name)
    }
  }, [isSuccess, candidate, cohorts, isCohortSucess]);
  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name', name);
    console.log('email', email);
    console.log('gitUsername', gitUsername);
    console.log('phone', phone);
    console.log('cohort', cohort);
    addStudentToCohort({username: gitUsername,cohortName: cohort})
    createStudent({
      name: name,
      email: email,
      status: true,
      type: 'junior',
      cohortName: cohort,
      joiningDate: new Date(),
      githubUsername: gitUsername,

    })
    
  };

  useEffect(() => {
    if(isAddStudentSuccess) {
      console.log('added to cohort success')
      
      clearForm()
    }
    if(isCreateStudentSuccess) {
      console.log('added to db success')
      clearForm()
    }
  }, [isAddStudentSuccess, isCreateStudentSuccess])
  const clearForm = () =>{
    setName('')
    setEmail('')
    setPhone('')
    setgitUsername('')
    setCohort('')
  }
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Form onSubmit={handleSubmit}>
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
          <Select
            displayEmpty
            value={cohort}
            onChange={handleCohortChange}
            placeholder="Cohort"
          >
            <MenuItem value="">Select Cohort</MenuItem>
            {cohorts?.map((cohort) => {
              return <MenuItem key={cohort.name} value={cohort.name}>{cohort.name}</MenuItem>;
            })
            }
           
          </Select>
          <Button variant="contained" color="primary" type="submit">
            Create Student
          </Button>
        </Form>
      </Grid>
    </Grid>
  );
};

export default CreateStudent;
