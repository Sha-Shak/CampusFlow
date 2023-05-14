import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  useAddCategoriesToSkillsMutation,
  useGetAllSkillsQuery,
} from '../features/skill/skillApi';
import Layout from './Layout';
import SkillsChips from './SkillsChips.component';

// Todo: Importing the skills from the database (dummy data on line 161)

const AddSkill = () => {
  const { data: skillsName, isSuccess } = useGetAllSkillsQuery();
  const [
    addCategoriesToSkills,
    { data, isSuccess: isAddSkillsSuccess, isError, isLoading, error },
  ] = useAddCategoriesToSkillsMutation();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillDescription, setNewSkillDescription] = useState('');
  const [category, setCategory] = useState([]);

  useEffect(() => {}, [skillsName]);

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setCategory([...category, event.target.value]);
  };
  const handleAddSkill = (event) => {
    event.preventDefault();
  };
  console.log(selectedSkills);
  const handleSelecteSkillsChange = (event) => {
    console.log(event.target.value);
    setSelectedSkills([...selectedSkills, event.target.value]);
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
    <Layout>
      <div className="bg-white flex p-10 h-[80vh] rounded-xl">
        <div className="flex-[0.4]  mr-32">
          <SkillsChips skillsName={skillsName} type={'Soft Skills'} />

          <SkillsChips skillsName={skillsName} type={'Tech Skills'} />
          <SkillsChips skillsName={skillsName} type={'Alumni Skills'} />
        </div>

        <div className="flex-[0.7]">
          {/* Select Skills to Add */}
          <form onSubmit={handleAddSkill}>
            <Typography variant="h6" mb={3}>
              Select Skill to Add
            </Typography>
            {/* Dropdown and chip */}
            <Grid container spacing={2} justifyContent={'center'}>
              <Grid item xs={10}>
                {isSuccess && (
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={skillsName}
                    getOptionLabel={(option) => option?.skillName}
                    renderInput={(params) => (
                      <TextField
                        value={selectedSkills}
                        {...params}
                        variant="outlined"
                        placeholder="Select skills"
                        size="small"
                        onChange={handleSelecteSkillsChange}
                      />
                    )}
                  />
                )}
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
                    // checked={junior}
                    onChange={handleCategoryChange}
                    color="primary"
                    value={'junior'}
                  />
                }
                label="Junior"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={senior}
                    onChange={handleCategoryChange}
                    color="primary"
                    value={'senior'}
                  />
                }
                label="Senior"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={alumni}
                    onChange={handleCategoryChange}
                    color="primary"
                    value={'alumni'}
                  />
                }
                label="Alumni"
              />
            </Box>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{ mt: 2, width: '100%' }}
              onChange={handleAddSkill}
            >
              Add Skill
            </Button>
            {/* Skill for check box finished*/}

            {/* Submit Button */}
          </form>
          {/* Selected Skills to add finished*/}

          {/* Create Custom Skill */}

          <form onSubmit={handleCreateSkill}>
            <Typography variant="h6" mt={4}>
              Create New Skill
            </Typography>
            <div className="flex gap-5  ">
              <div className="flex-[0.4] mt-4">
                <TextField
                  required
                  id="skillName"
                  name="skillName"
                  label="Skill Name"
                  fullWidth
                  size="small"
                  onChange={(e) => setNewSkillName(e.target.value)}
                />
              </div>
              <div className="flex-[0.6] ">
                <TextField
                  required
                  id="skillDescription"
                  name="skillDescription"
                  label="Skill Description"
                  fullWidth
                  multiline
                  rows={1}
                  sx={{ mt: 2 }}
                  size="small"
                  onChange={(e) => setNewSkillDescription(e.target.value)}
                />
              </div>
            </div>
            <Button
              variant="outlined"
              sx={{ mt: 2, width: '100%' }}
              type="submit"
            >
              Create New Skill
            </Button>
          </form>
        </div>
      </div>
      {/* Create Custom Skill finished */}
    </Layout>
  );
};

export default AddSkill;

//
