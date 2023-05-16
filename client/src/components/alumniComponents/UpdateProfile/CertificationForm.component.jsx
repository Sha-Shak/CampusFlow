import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Divider,
  Chip,
} from '@mui/material';

const CertificationForm = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform form submission logic here

    // Reset form fields after submission

    setName('');
    setUrl('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            type="submit"
            variant="contained"
            color="primary"
            sx={{ px: 2 }}
          >
            Add Certificate
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CertificationForm;
