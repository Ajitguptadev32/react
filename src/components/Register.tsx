import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import axios from '../axios';
import { useNavigate } from "react-router-dom"

const Register = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  const [errorMessage, setErrorMessage]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  let navigate=useNavigate();

  const addUserHandler=async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const newData = {
        email: email,
        password: password
      };

      await axios.post('/', newData,config).then(()=>{
        navigate('/home')
      })
      // Handle any actions after successful data submission

      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(errorMessage);
    }
  }
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
        <h2>Register User</h2>
      <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }}>
        <div className='register-form'>
        <TextField id="outlined-basic" label="Email" variant="outlined"  onChange={e=> setEmail(e.target.value)} />
    <TextField id="outlined-basic"label="Password" variant="outlined" onChange={e=> setPassword(e.target.value)} />
    <Button type='submit'onClick={addUserHandler} style={{marginTop:'10px'}} variant='contained' color='secondary'>Register</Button>
        </div>
     
    </Box>
    <h1>Ajit</h1>
    </Container>
  </React.Fragment>
  )
}

export default Register

