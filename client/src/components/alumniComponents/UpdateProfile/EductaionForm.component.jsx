import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import toast from 'react-hot-toast';
import { useAddAlumniInfoMutation } from '../../../features/alumni/alumniApi';
import { useGetAllSkillsQuery } from '../../../features/skill/skillApi';
import { useSelector } from 'react-redux';

const EducationForm = () => {
  const [instituteName, setInstituteName] = useState('');
  const [program, setProgram] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(true);
  const [gpa, setGpa] = useState('');

  const [addInfo, { data, isSuccess, error }] = useAddAlumniInfoMutation();

  // console.log(skillset);
  // filter all tech skill for alumni
  // const techSkills = skillset?.filter(skill => skill.type === 'tech' && skill.status === true)
  const { _id: id } = useSelector((state) => state?.auth?.user) || {};

  useEffect(() => {
    if (isSuccess) {
      toast.success('Education added successfully');
    }
    if (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }, [isSuccess, error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (instituteName.trim() === '' || program.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    const educationData = {
      id, // studentId id
      type: 'education',
      info: {
        instituteName: instituteName,
        program: program,
        fromDate: fromDate,
        toDate: toDate,
        description: description,
        status: status,
        gpa: gpa,
      },
    };

    addInfo(educationData);

    console.log(educationData);

    // TODO: Perform form submission logic here

    // Reset form fields after submission
    // setInstituteName('');
    // setProgram('');
    // setFromDate('');
    // setToDate('');
    // setDescription('');
    // setStatus(true);
    // setGpa('');
  };
  console.log('I am from education form');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>
          <Typography variant="h6">Add Education</Typography>
        </Divider>
        <TextField
          label="Institute Name"
          value={instituteName}
          onChange={(event) => setInstituteName(event.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Program"
          value={program}
          onChange={(event) => setProgram(event.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="From Date"
          type="date"
          value={fromDate}
          onChange={(event) => setFromDate(event.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="To Date"
          type="date"
          value={toDate}
          onChange={(event) => setToDate(event.target.value)}
          required
          fullWidth
          margin="normal"
          placeholder='Enter your "To Date"'
          sx={{
            '::placeholder': {
              color: 'red',
              margin: '1rem',
            },
          }}
        />

        <TextField
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />

        <FormControlLabel
          control={
            <Switch
              checked={status}
              onChange={(event) => setStatus(event.target.checked)}
            />
          }
          label="Status"
        />

        <TextField
          label="GPA"
          value={gpa}
          onChange={(event) => setGpa(event.target.value)}
          type="number"
          required
          fullWidth
          margin="normal"
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ px: 5 }}
          >
            Add Education
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default EducationForm;
