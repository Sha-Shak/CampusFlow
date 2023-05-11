import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Layout from '../components/Layout';
import {
  Box,
  Divider,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepButton,
} from '@mui/material';

import {
  useGetAllCohortQuery,
  useGetAllCohortStudentsQuery,
} from '../features/cohort/cohortApi';
import { useEffect, useState } from 'react';
import MarkStudent from '../components/MarkStudent';
import StepMarking from '../components/StepMarking';

function MarkStudents() {
  const [cohort, setCohort] = useState('');
  const [students, setStudents] = useState([]);

  const { data: cohorts, isSuccess: isCohortsSuccess } = useGetAllCohortQuery();
  const { data: cohortStudents, isSuccess: isStudentFetchSuccess } =
    useGetAllCohortStudentsQuery(cohort);
  useEffect(() => {
    if (isStudentFetchSuccess) {
      setStudents(cohortStudents.students);
    }
  }, [isStudentFetchSuccess]);
  const handleChange = (event) => {
    setCohort(event.target.value);
  };

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
                    <MenuItem key={index} value={cohort.cohortName}>
                      {cohort.cohortName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Divider variant="middle" />
          {isStudentFetchSuccess && (
            <StepMarking
              students={students}
              isStudentFetchSuccess={isStudentFetchSuccess}
            />
          )}
        </Box>
      </Layout>
    </div>
  );
}

export default MarkStudents;
