import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import { Button, Divider, Paper } from '@mui/material';
import { useGetSkillsByCategoryQuery } from '../features/skill/skillApi';
import {
  useGetStudentWeekInfoQuery,
  useSetStudentWeekInfoMutation,
} from '../features/student/studentApi';

const MarkStudent = ({ studentId, week, handleMarkSubmission }) => {
  console.log(studentId, week);
  const { data: softSkills } = useGetSkillsByCategoryQuery('softskill');

  const { data: techSkills } = useGetSkillsByCategoryQuery('techskill');

  const { data: studentWeekInfo } = useGetStudentWeekInfoQuery({
    studentId,
    week,
  });
  const [setWeekInfo, { data: weekInfo }] = useSetStudentWeekInfoMutation();
  const initialAssessmentMark = {
    assessmentMark: 0,
  };

  const [assessmentMark, setAssessmentMark] = useState(initialAssessmentMark);
  const [softSkillMarks, setSoftSkillMarks] = useState();
  const [techSkillMarks, setTechSkillMarks] = useState();
  const [modifiedSoftSkills, setModifiedSoftSkills] = useState([]);
  const [modifiedTechSkills, setModifiedTechSkills] = useState([]);
  const [initialSoftSkillMarks, setInitialSoftSkillMarks] = useState({});
  const [initialTechSkillMarks, setInitialTechSkillMarks] = useState({});
  const [unitMarks, setUnitMarks] = useState({});
  const studentUnitMarks = studentWeekInfo?.unitMarks;

  let initialMarks = {};
  useEffect(() => {
    if (!studentWeekInfo?.softSkills[0]?.skill) {
      const initialMarks = softSkills?.reduce((acc, skill) => {
        acc[skill._id] = 0;
        return acc;
      }, {});
      setInitialSoftSkillMarks(initialMarks);

      setSoftSkillMarks(initialSoftSkillMarks);
    }

    if (!studentWeekInfo?.techSkills[0]?.skill) {
      initialMarks = techSkills?.reduce((acc, skill) => {
        acc[skill._id] = 0;
        return acc;
      }, {});
      setInitialTechSkillMarks(initialMarks);

      setTechSkillMarks(initialTechSkillMarks);
    }
  }, [studentWeekInfo, techSkills, softSkills]);

  // slider default value and marks

  useEffect(() => {
    const generate = softSkills?.map((skill) => {
      const studentSkill = studentWeekInfo?.softSkills?.find(
        (studentSkill) => studentSkill.skill?._id === skill?._id
      );
      return {
        ...skill,
        marks: studentSkill?.marks || 0,
      };
    });
    setModifiedSoftSkills(generate);
  }, [studentWeekInfo, softSkills]);

  useEffect(() => {
    const generate = techSkills?.map((skill) => {
      const studentSkill = studentWeekInfo?.techSkills?.find(
        (studentSkill) => studentSkill.skill?._id === skill?._id
      );
      return {
        ...skill,
        marks: studentSkill?.marks || 0,
      };
    });
    setModifiedTechSkills(generate);
  }, [studentWeekInfo, techSkills]);

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
  const handleUnitMarkChange = (event) => {
    setUnitMarks((prev) => ({
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
        marks: mark,
      })
    );
    const allUnitMarks = Object.entries(unitMarks).map(([unit, mark]) => ({
      unitName: unit,
      marks: mark,
    }));

    const data = {
      studentId,
      week,
      assessmentMarks: assessmentMark.assessmentMark,
      softSkills: allSoftSkillMarks,
      techSkills: allTechSkillMarks,
      unitMarks: allUnitMarks,
    };
    console.log(data);
    console.log('submit');

    // handleMarkSubmission(data);
    setWeekInfo(data);
    // toast.success('Marking Successful');
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          px: 5,
          // borderRadius: '20px',
          bgcolor: 'white',
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Header */}
        {/* <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              mt: 1,
            }}
          >
            Mark Saimon
          </Typography>
        </Grid> */}
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
              {modifiedSoftSkills?.map((skill, index) => (
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  justifyContent={'space-around'}
                  key={index}
                >
                  <Grid item xs={4}>
                    <Typography variant="body1">{skill?.skillName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      defaultValue={0}
                      // value={skill?.marks}
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
              {modifiedTechSkills?.map((skill, index) => (
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  justifyContent={'space-around'}
                  key={index}
                >
                  <Grid item xs={4}>
                    <Typography variant="body1">{skill?.skillName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      // defaultValue={skill?.marks || 0}
                      // value={skill?.marks}
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
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h5">Unit Marks</Typography>
          </Grid>
          <Divider sx={{ mt: 2 }} />
          {/* Tech Skill Sliders */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <FormGroup>
              {studentUnitMarks?.map((unit, index) => (
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  justifyContent={'space-around'}
                  key={index}
                >
                  <Grid item xs={4}>
                    <Typography variant="body1">{unit?.unitName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      defaultValue={3}
                      // value={skill?.marks}
                      marks={sliderMarks}
                      name={unit?.unitName}
                      onChange={handleUnitMarkChange}
                    />
                  </Grid>
                </Grid>
              ))}
            </FormGroup>
          </Grid>
          <Divider sx={{ mt: 2 }} />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
          >
            Submit Marks
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default MarkStudent;
