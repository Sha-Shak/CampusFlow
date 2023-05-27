import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import React, { useState, useEffect } from 'react';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import BeautifulCheckbox from './BeautifulCheckbox';
import { Button } from '@mui/material';
import SelectableChips from './SelectableChips';
import SelectIndustry from '../../components/alumniComponents/SelectIndustry';
import { usePostStackWiseFilterMutation } from '../../features/ hr/hrApi';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#6f1ddce6 0%,#6f1ddce6 50%,#6f1ddce6 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, #e73c7e 0%, #6f1ddc 50%, #6f1ddc 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, #e73c7e 0%, #6f1ddc 50%, #6f1ddc 100%)',
  }),
}));

function NumberedStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <DoneAllIcon /> : props.icon}
    </ColorlibStepIconRoot>
  );
}

NumberedStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = [
  'What role would you like to hire?',
  'Which skills or expertise do you need?',
  'Which industries do you need?',
];

export default function HRMultiSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const [stack, setStack] = useState('');
  const [frontendSkill, setFrontendSkill] = useState([]);
  const [backendSkill, setBackendSkill] = useState([]);

  const [filterCanidate, { data, loading, error }] =
    usePostStackWiseFilterMutation();
  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    let skilltypeIds;
    if (stack === 'frontend') {
      skilltypeIds = frontendSkill;
    } else if (stack === 'backend') {
      skilltypeIds = backendSkill;
    } else {
      skilltypeIds = frontendSkill.concat(backendSkill);
    }

    const query = {
      stack: stack,
      skill: skilltypeIds,
    };
    filterCanidate(query);
    console.log(query);
    console.log(data);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <BeautifulCheckbox setStack={setStack} />;
      case 1:
        return (
          <SelectableChips
            stack={stack}
            setFrontendSkill={setFrontendSkill}
            setBackendSkill={setBackendSkill}
          />
        );
      case 2:
        return <SelectIndustry />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center  h-[90vh] bg-white m-10 p-10 rounded-3xl shadow-lg">
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={NumberedStepIcon}
                StepIconProps={{ icon: index + 1 }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>{renderForm()}</div>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <div className="flex justify-between">
            <Button
              sx={{ mt: 1, mr: 1 }}
              size="large"
              className="flex-[0.4]"
              variant="contained"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              <Button
                className="flex-[0.4]"
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
