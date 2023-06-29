import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
  
  return (
    <Box
    component="form"
    sx={{
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      marginLeft:'250px',
      height: '60vh',
      width: 300,
      '&:hover': {
        backgroundColor: '',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
    <TextField id="outlined-basic" label=" Enter Email" variant="outlined" />
    <TextField id="outlined-basic"label="Enter Password" variant="outlined" />
    <br/>
    <Button type='submit' variant='contained' color='secondary'>Login</Button>
  </Box>
  )
}

export default Login