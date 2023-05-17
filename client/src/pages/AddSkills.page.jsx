import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  useAddCategoriesToSkillsMutation,
  useAddSkillsTypeMutation,
  useCreateSkillMutation,
  useGetAllSkillsQuery,
} from '../features/skill/skillApi';
import Layout from '../components/common/Layout';
import SkillsChips from '../components/AddSkills/SkillsChips.component';
import toast, { Toaster } from 'react-hot-toast';

const AddSkill = () => {
  const {
    data: skillsName,
    isSuccess,
    refetch: refetchSkills,
  } = useGetAllSkillsQuery();
  const [
    addSkillsType,
    { isSuccess: isAddSkillsSuccess, isError: isAddSkilsError },
  ] = useAddSkillsTypeMutation();
  const [
    createSkill,
    {
      isSuccess: isCreateSkillSuccess,
      isError: isCreateSkillError,
      error: createSkillError,
    },
  ] = useCreateSkillMutation();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillDescription, setNewSkillDescription] = useState('');
  const [category, setCategory] = useState(false);
  const [studentType, setStudentType] = useState();
  const [stack, setStack] = useState();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [selectedStudentTypes, setSelectedStudentTypes] = useState([]);

  useEffect(() => {
    if (isAddSkillsSuccess) {
      toast.success('Skill Added Successfully');
    }
    if (isAddSkilsError) {
      toast.error('Something went wrong');
    }
  }, [isAddSkillsSuccess, isAddSkilsError]);

  useEffect(() => {
    if (isCreateSkillSuccess) {
      toast.success('Skill Created Successfully');
      refetchSkills();
    }
    if (isCreateSkillError) {
      toast.error(createSkillError?.data?.message);
    }
  }, [isCreateSkillSuccess, isCreateSkillError]);

  const handleCheckboxChange = (event, selectedValues, setSelectedValues) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const updatedValues = isChecked
      ? [...selectedValues, value]
      : selectedValues.filter((item) => item !== value);
    setSelectedValues(updatedValues);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    const ids = selectedSkills.map((skill) => skill._id);
    const data = {
      ids,
      categoryList: selectedCategories,
      studentTypes: selectedStudentTypes,
      stackList: selectedStack,
    };
    console.log(data);
    // addSkillsType(data);
  };

  const handleSelecteSkillsChange = (event, value) => {
    setSelectedSkills(value);
  };
  const handleCreateSkill = (event) => {
    event.preventDefault();
    const newSkill = {
      skillName: newSkillName,
      description: newSkillDescription,
    };
    createSkill(newSkill);
    setNewSkillName('');
    event.target.value = null;
    console.log(event.target);
  };

  return (
    <Layout>
      <Toaster />
      <div className="bg-white flex p-10 h-[80vh] rounded-xl">
        <div className="flex-[0.4]  mr-32">
          <SkillsChips
            skillsName={skillsName}
            type={'Soft Skills'}
            refetchSkills={refetchSkills}
            filter={'softskill'}
          />

          <SkillsChips
            skillsName={skillsName}
            type={'Tech Skills'}
            refetchSkills={refetchSkills}
            filter={'techskill'}
          />
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
                    onChange={handleSelecteSkillsChange}
                    value={selectedSkills}
                    multiple
                    options={skillsName}
                    getOptionLabel={(option) => option?.skillName}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Select skills"
                        size="small"
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
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <Typography variant="p">Skill For:</Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedStudentTypes,
                        setSelectedStudentTypes
                      )
                    }
                    color="primary"
                    value="junior"
                  />
                }
                label="Junior"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedStudentTypes,
                        setSelectedStudentTypes
                      )
                    }
                    color="primary"
                    value="senior"
                  />
                }
                label="Senior"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedStudentTypes,
                        setSelectedStudentTypes
                      )
                    }
                    color="primary"
                    value="alumni"
                  />
                }
                label="Alumni"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <Typography variant="p">Skill Type:</Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedStack,
                        setSelectedStack
                      )
                    }
                    color="primary"
                    value="frontend"
                  />
                }
                label="Frontend"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedStack,
                        setSelectedStack
                      )
                    }
                    color="primary"
                    value="backend"
                  />
                }
                label="Backend"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedStack,
                        setSelectedStack
                      )
                    }
                    color="primary"
                    value="testing"
                  />
                }
                label="Testing"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <Typography variant="p">Skill Category:</Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                    color="primary"
                    value="softskill"
                  />
                }
                label="Soft Skill"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                    color="primary"
                    value="techskill"
                  />
                }
                label="Techskill"
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
                  value={newSkillName}
                  label="Skill Name"
                  fullWidth
                  size="small"
                  onChange={(e) => setNewSkillName(e.target.value)}
                />
              </div>
              <div className="flex-[0.6] ">
                <TextField
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
