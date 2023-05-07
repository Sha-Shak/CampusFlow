import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '0 auto',
});

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gitEmail, setGitEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cohort, setCohort] = useState('');

  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name', name);
    console.log('email', email);
    console.log('gitEmail', gitEmail);
    console.log('phone', phone);
    console.log('cohort', cohort);
    setName('');
    setEmail('');
    setGitEmail('');
    setPhone('');
    setCohort('');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={3}>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="GitHub Email"
            value={gitEmail}
            onChange={(event) => setGitEmail(event.target.value)}
          />
          <TextField
            label="Phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <Select
            displayEmpty
            value={cohort}
            onChange={handleCohortChange}
            placeholder="Cohort"
          >
            <MenuItem value="">Select Cohort</MenuItem>
            <MenuItem value="cohortA">Cohort A</MenuItem>
            <MenuItem value="cohortB">Cohort B</MenuItem>
            <MenuItem value="cohortC">Cohort C</MenuItem>
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
