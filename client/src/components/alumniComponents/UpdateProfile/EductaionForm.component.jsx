import React, { useState } from 'react';
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Box,
  Divider,
  Typography,
} from '@mui/material';

const EducationForm = ({ handleClose }) => {
  const [instituteName, setInstituteName] = useState('');
  const [program, setProgram] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(true);
  const [gpa, setGpa] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform form submission logic here

    // Reset form fields after submission
    setInstituteName('');
    setProgram('');
    setFromDate('');
    setToDate('');
    setDescription('');
    setStatus(true);
    setGpa('');
  };

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
            type="cancel"
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{ px: 5 }}
          >
            Cancel
          </Button>
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
