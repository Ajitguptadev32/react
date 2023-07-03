import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import axios from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
//import { getUserById } from './actions/Api';
import API from '../axios';
//import { getUser } from './Home';
const EditUser = () => {
    const defaultValue = {
        email: '',
        password: '',
    }
    const [user, setUser] = useState(defaultValue);
    const { email, password } = user;
    const { id } = useParams();


    let navigate = useNavigate();
    useEffect(() => {
        loadUserDetails(id);
    }, []);
    // get user id single


    const loadUserDetails = async (id: any) => {
        const response = await API.get(id)
        console.log(response)
        setUser(response.data)
    }


    // get id 




    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // on submit button 
    const editUser = async (id: any, user: any) => {
        return await API.put(`/${id}`, user)
    }
    const EditUserHandler = async () => {
        const response = await editUser(id, user);
    }
    // delete user




    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <h2>Register User</h2>
                <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }}>
                    <div className="register-form">
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => onValueChange(e)} name='email' value={email} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => onValueChange(e)} name='password' value={password} />
                        <Button type="submit" onClick={EditUserHandler} style={{ marginTop: '10px' }} variant="contained" color="secondary">
                            Save
                        </Button>
                    </div>
                </Box>
                <h1>Ajit</h1>
            </Container>
        </React.Fragment>
    );
};

export default EditUser;
