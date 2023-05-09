import React, { useEffect, useState } from 'react';
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
import { useGetSkillsByCategoryQuery } from '../features/skill/skillApi';
import { useAddSoftTechSkillsByStudentIDMutation } from '../features/student/studentApi';
import { useParams } from 'react-router-dom';
import Toggle from './Toggle';
import Layout from './Layout';

const MarkStudent = () => {
  const { id, week } = useParams();
  const { data: softSkills } = useGetSkillsByCategoryQuery('softskill');

  const { data: techSkills } = useGetSkillsByCategoryQuery('techskill');

  const [addSoftTechSkillsByStudentID, { isSuccess }] =
    useAddSoftTechSkillsByStudentIDMutation();

  // Creating the initial state for the soft skills and tech skills
  // Creating the initial state for Assessment Mark with week
  const initialAssessmentMark = {
    assessmentMark: 0,
  };

  const [assessmentMark, setAssessmentMark] = useState(initialAssessmentMark);
  const [softSkillMarks, setSoftSkillMarks] = useState();
  const [techSkillMarks, setTechSkillMarks] = useState();
  let initialSoftSkillMarks;
  let initialTechSkillMarks;

  useEffect(() => {
    if (!softSkills || !techSkills) return;
    initialSoftSkillMarks = softSkills.reduce((acc, skill) => {
      acc[skill._id] = 0;
      return acc;
    }, {});
    setSoftSkillMarks(initialSoftSkillMarks);
    initialTechSkillMarks = techSkills.reduce((acc, skill) => {
      acc[skill._id] = 0;
      return acc;
    }, {});
    setTechSkillMarks(initialTechSkillMarks);
  }, [softSkills, techSkills]);

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
  };

  const handleSoftSliderChange = (event) => {
    setSoftSkillMarks((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTechSliderChange = (event) => {
    setTechSkillMarks((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allSoftSkillMarks = Object.entries(softSkillMarks).map(
      ([skill, mark]) => ({
        skill: skill,
        marks: mark,
      })
    );
    const allTechSkillMarks = Object.entries(techSkillMarks).map(
      ([skill, mark]) => ({
        skillName: skill,
        mark,
      })
    );

    const data = {
      id,
      week,
      softSkills: allSoftSkillMarks,
      techSkills: allTechSkillMarks,
    };
    addSoftTechSkillsByStudentID(data);
    console.log(data);
    console.log('submit');
  };

  return (
    <>
      <Layout>
        <Paper
          elevation={0}
          sx={{
            px: 5,
            py: 2,
            borderRadius: '20px',
            bgcolor: 'white',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
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
                  min={0}
                  max={10}
                  step={1}
                  defaultValue={0}
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
                {softSkills?.map((skill, index) => (
                  <Grid
                    container
                    spacing={2}
                    alignItems="stretch"
                    justifyContent={'space-around'}
                    key={index}
                  >
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        {skill?.skillName}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Slider
                        min={0}
                        max={10}
                        step={1}
                        defaultValue={0}
                        name={skill?._id}
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
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="h5">Tech Skill Marks</Typography>
            </Grid>
            <Divider sx={{ mt: 2 }} />

            {/* Tech Skill Sliders */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <FormGroup>
                {techSkills?.map((skill, index) => (
                  <Grid
                    container
                    spacing={2}
                    alignItems="stretch"
                    justifyContent={'space-around'}
                    key={index}
                  >
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        {skill?.skillName}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Slider
                        min={0}
                        max={10}
                        step={1}
                        defaultValue={0}
                        marks={sliderMarks}
                        name={skill?._id}
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
      </Layout>
    </>
  );
};

export default MarkStudent;
