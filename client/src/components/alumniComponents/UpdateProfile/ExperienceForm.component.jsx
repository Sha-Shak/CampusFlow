import React, { useState } from 'react';
import {
  TextField,
  Button,
  Chip,
  Switch,
  FormControlLabel,
  Box,
  Divider,
  Typography,
} from '@mui/material';

const ExperienceForm = ({ handleClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [status, setStatus] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform form submission logic here

    // Reset form fields after submission
    setJobTitle('');
    setCompanyName('');
    setFromDate('');
    setToDate('');
    setDescription('');
    setSkills([]);
    setStatus(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>
          <Typography variant="h6">Add Experience</Typography>
        </Divider>
        <TextField
          label="Job Title"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Company Name"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
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

        <div>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              onDelete={() => handleDeleteSkill(index)}
              style={{ marginRight: '5px', marginBottom: '5px' }}
            />
          ))}
        </div>

        <TextField
          label="Skills"
          value=""
          // onKeyDown={handleSkillKeyDown}
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          control={
            <Switch
              checked={status}
              onChange={(event) => setStatus(event.target.checked)}
            />
          }
          label="Currently Working Here"
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
            Add Experience
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default ExperienceForm;
