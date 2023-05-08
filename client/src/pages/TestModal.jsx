import { Button } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CreateStudentModal from '../components/CreateStudentModal';

const TestModal = () => {
  const [createStudentOpen, setCreateStudentOpen] = useState(false);

  const onStudentOpen = () => {
    setCreateStudentOpen(true);
  };

  const onStudentClose = () => {
    setCreateStudentOpen(false);
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={onStudentOpen}>
        Hello World
      </Button>
      <CreateStudentModal
        createStudentOpen={createStudentOpen}
        onStudentClose={onStudentClose}
      />
    </Box>
  );
};

export default TestModal;
