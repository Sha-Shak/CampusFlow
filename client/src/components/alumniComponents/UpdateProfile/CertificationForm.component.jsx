import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Divider } from '@mui/material';
import { useAddAlumniInfoMutation } from '../../../features/alumni/alumniApi';
import toast from 'react-hot-toast';
const CertificationForm = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [addInfo, { data, isSuccess, error }] = useAddAlumniInfoMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Certification added successfully');
      handleClose();
    }
    if (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }, [isSuccess, error]);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (name.trim() === '' || url.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    const data = {
      id: '645bbb5a7865c6e61157889f',
      type: 'certifications',
      info: {
        name: name,
        url: url,
      },
    };
    addInfo(data);
    setName('');
    setUrl('');
  };

  // handleclose should be called in useEffect if successful submission
  // useEffect(() => {
  //   handleClose();
  // }, [handleClose]);

  return (
    <div>
      <Divider>
        <Typography variant="h6">Add Certification</Typography>
      </Divider>
      <TextField
        label="Certification Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Certification URL"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        required
        fullWidth
        margin="normal"
        onKeyDown={handleKeyDown}
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
          type="cancel"
          variant="contained"
          color="error"
          onClick={handleClose}
          sx={{ px: 5 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 2 }}
          onClick={handleSubmit}
        >
          Add Certificate
        </Button>
      </Box>
    </div>
  );
};

export default CertificationForm;
