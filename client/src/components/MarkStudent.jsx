import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import {
  Button,
  Divider,
  Paper,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from '@mui/material';
import { Form } from 'react-router-dom';

// Importing the soft skills and tech skills from the database
const softSkills = ['Communication', 'Teamwork', 'Problem Solving'];
const techSkills = ['JavaScript', 'React', 'CSS'];

// Creating the initial state for the soft skills and tech skills
const initialSoftSkillMarks = softSkills.reduce((acc, skill) => {
  acc[skill] = '';
  return acc;
}, {});

const initialTechSkillMarks = techSkills.reduce((acc, skill) => {
  acc[skill] = '';
  return acc;
}, {});

// Creating the initial state for Assessment Mark with week
const initialAssessmentMark = {
  assessmentMark: 5,
  week: '',
};

const MarkStudent = () => {
  const [assessmentMark, setAssessmentMark] = useState(initialAssessmentMark);
  const [softSkillMarks, setSoftSkillMarks] = useState(initialSoftSkillMarks);
  const [techSkillMarks, setTechSkillMarks] = useState(initialTechSkillMarks);
  const [week, setWeek] = useState(''); // Not used yet

  const sliderMarks = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  }));

  // TODO: Add the week from the database
  const handleWeekChange = (event) => {
    setWeek(event.target.value);
    console.log(week);
  };

  const handleAssessmentMarkChange = (event) => {
    setAssessmentMark((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(assessmentMark);
  };

  const handleSoftSliderChange = (event) => {
    setSoftSkillMarks((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(softSkillMarks);
  };

  const handleTechSliderChange = (event) => {
    setTechSkillMarks((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(techSkillMarks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allSoftSkillMarks = Object.entries(softSkillMarks).map(
      ([skill, mark]) => ({
        skillName: skill,
        mark,
      })
    );
    console.log(allSoftSkillMarks);
    const allTechSkillMarks = Object.entries(techSkillMarks).map(
      ([skill, mark]) => ({
        skillName: skill,
        mark,
      })
    );
    console.log(allTechSkillMarks);
    const marks = {
      assessmentMark: assessmentMark.assessmentMark,
      week: week,
      softSkillMarks: allSoftSkillMarks,
      techSkillMarks: allTechSkillMarks,
    };

    console.log(marks);
    // TODO: Send marks to the database
    console.log('submit');
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      {/* Header */}
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            mt: 1,
          }}
        >
          Mark Saimon
        </Typography>
      </Grid>
      {/* Header Finished */}

      {/* Assessment Mark Slider */}
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{ mt: 2 }}
          alignItems="stretch"
          justifyContent={'space-around'}
        >
          <Grid item xs={4}>
            <Typography variant="body1">Assessment Mark</Typography>
          </Grid>
          <Grid item xs={6}>
            <Slider
              min={1}
              max={10}
              step={0.5}
              defaultValue={5}
              name="assessmentMark"
              marks={sliderMarks}
              onChange={handleAssessmentMarkChange}
            />
          </Grid>
        </Grid>
        <Divider />
        {/* Assessment Mark Slider Finished */}

        {/* Soft Skill Sliders */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h5">Soft Skill Marks</Typography>
        </Grid>
        <Divider sx={{ mt: 2 }} />
        <Grid item xs={12} sx={{ mt: 2 }}>
          <FormGroup>
            {softSkills.map((skill, index) => (
              <Grid
                container
                spacing={2}
                alignItems="stretch"
                justifyContent={'space-around'}
                key={index}
              >
                <Grid item xs={4}>
                  <Typography variant="body1">{skill}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={5}
                    name={skill}
                    marks={sliderMarks}
                    onChange={handleSoftSliderChange}
                  />
                </Grid>
              </Grid>
            ))}
          </FormGroup>
        </Grid>
        <Divider sx={{ mt: 2 }} />
        {/* Soft Skill Sliders Finished */}

        {/* Tech Skill Sliders */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <FormGroup>
            {techSkills.map((skill, index) => (
              <Grid
                container
                spacing={2}
                alignItems="stretch"
                justifyContent={'space-around'}
                key={index}
              >
                <Grid item xs={4}>
                  <Typography variant="body1">{skill}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={5}
                    marks={sliderMarks}
                    name={skill}
                    onChange={handleTechSliderChange}
                  />
                </Grid>
              </Grid>
            ))}
          </FormGroup>
        </Grid>
        <Divider sx={{ mt: 2 }} />
        {/* Tech Skill Sliders Finished */}

        {/* Submit Button */}
        <Button variant="contained" sx={{ mt: 2, mb: 2 }} type="submit">
          Submit
        </Button>
        {/* Submit Button Finished */}
      </form>
    </Paper>
  );
};

export default MarkStudent;
