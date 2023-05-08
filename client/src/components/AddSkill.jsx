import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Todo: Importing the skills from the database (dummy data on line 161)

const initialSelectedSkills = [];

const AddSkill = () => {
  const [selectedSkills, setSelectedSkills] = useState(initialSelectedSkills);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillDescription, setNewSkillDescription] = useState('');
  const [junior, setJunior] = useState(true);
  const [senior, setSenior] = useState(false);

  const handleJuniorChange = (event) => {
    setJunior(event.target.checked);
  };

  const handleSeniorChange = (event) => {
    setSenior(event.target.checked);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    console.log('Add Skill');
  };

  const handleCreateSkill = (event) => {
    event.preventDefault();
    const newSkill = {
      skillName: newSkillName,
      skillDescription: newSkillDescription,
      junior: junior,
      senior: senior,
    };
    console.log(newSkill);
    console.log('Create Skill');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        border: '1px solid black',
      }}
    >
      {/* Select Skills to Add */}
      <form onSubmit={handleAddSkill}>
        <Typography variant="h6">Select Skill to Add</Typography>
        {/* Dropdown and chip */}
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={10}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={skillsName}
              getOptionLabel={(option) => option.skillName}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Select skills"
                />
              )}
            />
          </Grid>
          {/* Dropdown and chip finished */}
        </Grid>

        {/* Skill for check box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Typography variant="h6">Skill For:</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={junior}
                onChange={handleJuniorChange}
                color="primary"
              />
            }
            label="Junior"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={senior}
                onChange={handleSeniorChange}
                color="primary"
              />
            }
            label="Senior"
          />
        </Box>
        {/* Skill for check box finished*/}

        {/* Submit Button */}
        <Box>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ mt: 2, width: '40%' }}
          >
            Add Skill
          </Button>
        </Box>
      </form>
      {/* Selected Skills to add finished*/}

      {/* Create Custom Skill */}
      <form onSubmit={handleCreateSkill}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Grid container spacing={2} alignItems={'center'}>
            <Grid item xs>
              <Typography variant="h6">Add Custom Skills &</Typography>
              <Typography variant="h6">Description</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="skillName"
                name="skillName"
                label="Skill Name"
                fullWidth
                onChange={(e) => setNewSkillName(e.target.value)}
              />
              <TextField
                required
                id="skillDescription"
                name="skillDescription"
                label="Skill Description"
                fullWidth
                multiline
                rows={2}
                sx={{ mt: 2 }}
                onChange={(e) => setNewSkillDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                type="submit"
              >
                Create Skill
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      {/* Create Custom Skill finished */}
    </Box>
  );
};

export default AddSkill;

const skillsName = [
  { skillName: 'JavaScript' },
  { skillName: 'React' },
  { skillName: 'Node.js' },
  { skillName: 'Express.js' },
  { skillName: 'MongoDB' },
  { skillName: 'SQL' },
  { skillName: 'Python' },
  { skillName: 'Django' },
  { skillName: 'Flask' },
  { skillName: 'PHP' },
  { skillName: 'Laravel' },
  { skillName: 'Symfony' },
  { skillName: 'Ruby' },
  { skillName: 'Ruby on Rails' },
  { skillName: 'Java' },
  { skillName: 'Spring' },
  { skillName: 'Kotlin' },
  { skillName: 'Swift' },
  { skillName: 'iOS development' },
  { skillName: 'Android development' },
  { skillName: 'React Native' },
  { skillName: 'Vue.js' },
  { skillName: 'Angular' },
  { skillName: 'Bootstrap' },
  { skillName: 'Sass' },
  { skillName: 'Git' },
  { skillName: 'AWS' },
  { skillName: 'Azure' },
  { skillName: 'Google Cloud Platform' },
];
