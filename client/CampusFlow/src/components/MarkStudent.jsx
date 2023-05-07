import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { Divider, Paper } from '@mui/material';

const MarkStudent = ({ student }) => {
  const [assessmentMark, setAssessmentMark] = useState('');
  const [week, setWeek] = useState('');
  const softSkills = ['Communication', 'Teamwork', 'Problem Solving'];
  const techSkills = ['JavaScript', 'React', 'CSS'];
  const sliderMarks = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  }));

  const handleAssessmentMarkChange = (event) => {
    setAssessmentMark(event.target.value);
  };

  const handleSliderChange = (name, value) => {
    console.log(name, value);
  };

  return (
    <Paper elevation={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Mark Saimon</Typography>
      </Grid>
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
            marks={sliderMarks}
            onChange={(event, value) => handleSliderChange(skill, value)}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="h5">Soft Skill Marks</Typography>
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid item xs={12} sx={{ mt: 2 }}>
        <FormGroup>
          {softSkills.map((skill) => (
            <Grid
              container
              spacing={2}
              alignItems="stretch"
              justifyContent={'space-around'}
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
                  onChange={(event, value) => handleSliderChange(skill, value)}
                />
              </Grid>
            </Grid>
          ))}
        </FormGroup>
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="h5">Tech Skill Marks</Typography>
      </Grid>
      <Divider sx={{ mb: 2, mt: 2 }} />
      <Grid item xs={12} sx={{ mt: 2 }}>
        <FormGroup>
          {techSkills.map((skill) => (
            <Grid container spacing={2}>
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
                  onChange={(event, value) => handleSliderChange(skill, value)}
                />
              </Grid>
            </Grid>
          ))}
        </FormGroup>
      </Grid>
    </Paper>
  );
};

export default MarkStudent;
