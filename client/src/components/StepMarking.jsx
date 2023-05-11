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
const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

function StepMarking({ students, isStudentFetchSuccess }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [studentToMark, setStudentToMark] = useState({});
  const [addSoftTechSkillsByStudentID, { isSuccess }] =
    useAddSoftTechSkillsByStudentIDMutation();
  function handleMarkSubmission(data) {
    addSoftTechSkillsByStudentID(data);
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          students.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    toast.success('Marking Successful');
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

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? students.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  if (isSuccess) {
    toast.success('Marking Successful');
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step, studentId) => () => {
    console.log(studentId);
    setStudentToMark(studentId);
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleMarkSubmission();
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toaster />
      <Box width={'20vw'}>
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
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button
                      sx={{ mt: '10px', position: 'fixed', bottom: '60px' }}
                      onClick={handleComplete}
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      {completedSteps() === totalSteps() - 1
                        ? 'Submit & Finish'
                        : 'Submit Marks & Next'}
                    </Button>
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
            handleMarkSubmission={handleMarkSubmission}
          />
        )}
      </Box>
    </Box>
  );
}
export default StepMarking;
