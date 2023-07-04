import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import axios from '../axios';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../features/userSlice';


const Register = () => {
  const dispatch = useDispatch();

  const [inputValue, setinputValue] = useState({ email: '', password: '' });

  let navigate = useNavigate();
  const handleInput = (e:any) => {
    setinputValue({ ...inputValue, [e.target.name]: e.target.value });
  }
  const addUserHandler = async (e:any) => {
    e.preventDefault();
  console.log(inputValue)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h2>Register User</h2>
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }}>
          <div className='register-form'>
            <TextField id="outlined-basic" label="Email" name="email" variant="outlined" value={inputValue.email} onChange={handleInput} />
            <TextField id="outlined-basic" name="password" label="Password" variant="outlined" value={inputValue.password} onChange={handleInput} />
            <Button type='submit' onClick={addUserHandler} style={{ marginTop: '10px' }} variant='contained' color='secondary'>Register</Button>
          </div>

        </Box>
        <h1>Ajit</h1>
      </Container>
    </React.Fragment>
  )
}

export default Register

