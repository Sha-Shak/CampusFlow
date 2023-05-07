import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'

function LoginPage() {
  
  return (
    <>
    <Stack 
    alignContent={'center'}
    justifyContent={'center'}

    sx={{ m: 2}}>
      <a href='https://github.com/login/oauth/authorize?client_id=349cd35007a641dd3b2d'><Button 
     
      variant="contained">Login</Button></a>
    </Stack>
    </>
  )
}

export default LoginPage