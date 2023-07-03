import React, { useContext, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import API from '../axios';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    API.post('/login', {
      email,
      password
    })
      .then((response) => {
        console.log(response)
        if(response.data.token){
          localStorage.setItem('token',response.data.token);
          navigate('/profile')
        }
        return response.data.token
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '250px',
        height: '60vh',
        width: 300,
        '&:hover': {
          backgroundColor: '',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <TextField id="outlined-basic" label=" Enter Email" variant="outlined" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <br />
      <Button type='submit' onClick={loginSubmit} style={{ marginTop: '10px' }} variant='contained' color='secondary'>Login</Button>
    </Box>
  )
}

export default Login