import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Chip,
  Switch,
  FormControlLabel,
  Box,
  Divider,
  Typography,
  Autocomplete,
} from '@mui/material';
import { useAddAlumniInfoMutation } from '../../../features/alumni/alumniApi';
import toast from 'react-hot-toast';
import { useGetAllSkillsQuery } from '../../../features/skill/skillApi';

const ExperienceForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [status, setStatus] = useState(false);
  const [techSkills, setTechSkills] = useState([]);
  const [isWorkingHere, setIsWorkingHere] = useState(false);
  const [AddPost, { data, isSuccess, error }] = useAddAlumniInfoMutation();
  const {
    data: skillsData,
    isSuccess: skillsSuccess,
    error: skillsError,
  } = useGetAllSkillsQuery();

  useEffect(() => {
    const techSkillsTemp = skillsData?.filter((skill) =>
      skill?.studentType?.includes('alumni')
    );

    setTechSkills(techSkillsTemp);
  }, [skillsSuccess]);
  useEffect(() => {
    if (isSuccess) {
      toast.success('Experience added successfully');
      handleClose();
    }
    if (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }, [isSuccess, error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const experienceData = {
      id: '6464d4525ed2a4cee3d1ce44', // student id
      type: 'experiences',
      info: {
        jobTitle: jobTitle,
        companyName: companyName,
        fromDate: fromDate,
        toDate: toDate,
        description: description,
        skills: selectedSkills.map((skill) => skill.skillName),
        status: status,
      },
    };

    AddPost(experienceData);

    setJobTitle('');
    setCompanyName('');
    setFromDate('');
    setToDate('');
    setDescription('');
    setSelectedSkills([]);
    setStatus(false);
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
          disabled
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

        <Autocomplete
          multiple
          options={techSkills || []}
          getOptionLabel={(skill) => skill?.skillName}
          value={selectedSkills}
          onChange={(event, value) => setSelectedSkills(value)}
          renderTags={(value, getTagProps) =>
            value.map((skill, index) => (
              <Chip
                key={index}
                label={skill?.skillName}
                {...getTagProps({ index })}
                onDelete={() =>
                  setSelectedSkills((prevSkills) =>
                    prevSkills?.filter((_, i) => i !== index)
                  )
                }
                style={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Skills" fullWidth margin="normal" />
          )}
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
