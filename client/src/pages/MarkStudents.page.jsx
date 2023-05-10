import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Layout from '../components/Layout';
import { Box, Divider, Typography } from '@mui/material';
import { useGetAllCohortsQuery } from '../features/github/githubApi';
import { minHeight } from '@mui/system';
import { useGetStudentByCohortNameQuery } from '../features/student/studentApi';

function MarkStudents() {
  const { data: cohorts, isSuccess: isCohortsSuccess } =
    useGetAllCohortsQuery();
  const [cohort, setCohort] = React.useState('student-nov-2023');
  const { data: students, isSuccess: isStudentSuccess } =
    useGetStudentByCohortNameQuery(cohort);
  const handleChange = (event) => {
    setCohort(event.target.value);
  };

  React.useEffect(() => {
    if (cohort) {
      setCohort(cohort);
    }
  }, [cohort]);
  console.log(students);
  return (
    <div>
      <Layout>
        <Box
          sx={{
            bgcolor: 'white',
            p: 2,
            borderRadius: '10px',
            minHeight: '80vh',
            boxShadow: '25px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h6" component="h6">
                Mark Students
              </Typography>

              <Typography
                variant="h5"
                component="h5"
                sx={{ textTransform: 'uppercase' }}
              >
                {cohort}
              </Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel>Select Cohort</InputLabel>
              <Select
                value={cohort}
                label="Select Cohort"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Select Cohort</em>
                </MenuItem>
                {isCohortsSuccess &&
                  cohorts.map((cohort, index) => (
                    <MenuItem key={index} value={cohort.name}>
                      {cohort.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Divider variant="middle" />
        </Box>
      </Layout>
    </div>
  );
}

export default MarkStudents;
