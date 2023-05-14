import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import MarkStudent from './MarkStudent';
import toast, { Toaster } from 'react-hot-toast';

import { useAddSoftTechSkillsByStudentIDMutation } from '../features/student/studentApi';
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

function StepMarking({ students, isStudentFetchSuccess }) {
  const [week, setWeek] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [studentToMark, setStudentToMark] = useState(students[0]?._id);

  useEffect(() => {
    setStudentToMark(students[0]?._id);
  }, [students]);

  function handleNext() {
    nextStep();
  }

  function nextStep() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? students.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);

    setStudentToMark(students[newActiveStep]?._id);
  }
  const totalSteps = () => {
    return students.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step, studentId) => () => {
    console.log(studentId);
    setStudentToMark(studentId);
    setActiveStep(step);
  };
  const handleWeekChange = (event) => {
    setWeek(event.target.value);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toaster />
      <Box width={'20vw'}>
        <FormControl fullWidth sx={{ mb: '5px' }}>
          <InputLabel id="demo-simple-select-label">Select Week</InputLabel>
          <Select value={week} label="Select Week" onChange={handleWeekChange}>
            <MenuItem value={1}>Week 1</MenuItem>
            <MenuItem value={2}>Week 2</MenuItem>
            <MenuItem value={3}>Week 3</MenuItem>
            <MenuItem value={4}>Week 4</MenuItem>
            <MenuItem value={5}>Week 5</MenuItem>
            <MenuItem value={6}>Week 6</MenuItem>
          </Select>
        </FormControl>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {students.map((student, index) => (
            <Step key={student?.name} completed={completed[index]}>
              <StepButton
                color="inherit"
                onClick={handleStep(index, student?._id)}
              >
                {student?.name}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All Student Marking Successful!
              </Typography>
              {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button ></Button>
              </Box> */}
            </>
          ) : (
            <>
              <Box>
                {/* <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button> */}
                <Box sx={{ flex: '1 1 auto' }} />

                {activeStep !== students?.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: 'inline-block' }}
                    >
                      Mark already submitted.
                    </Typography>
                  ) : (
                    ''
                    // <Button
                    //   sx={{ mt: '10px', position: 'fixed', bottom: '60px' }}
                    //   onClick={handleComplete}
                    //   variant="contained"
                    //   size="large"
                    //   color="primary"
                    // >
                    //   {completedSteps() === totalSteps() - 1
                    //     ? 'Submit & Finish'
                    //     : 'Submit Marks & Next'}
                    // </Button>
                  ))}
              </Box>
            </>
          )}
        </div>
      </Box>
      <Box width={'50vw'}>
        {isStudentFetchSuccess && (
          <MarkStudent
            studentId={studentToMark}
            handleNext={handleNext}
            week={week}
          />
        )}
      </Box>
    </Box>
  );
}
export default StepMarking;
