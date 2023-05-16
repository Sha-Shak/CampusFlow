import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Divider } from '@mui/material';

const CertificationForm = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

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
      info: {
        name: name,
        url: url,
      },
    };
    console.log(data);
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
