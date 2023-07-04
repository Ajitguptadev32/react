import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import axios from '../axios';
import { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import API from '../axios';
import { fetchUsers } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
//import { getUsers } from './actions/Api';
interface UserData {
  _id: string;
  email: string;
  password: string;
}
export default function BasicTable() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.data);
  console.log('state',users);
  // delte 
  const onDelete = async (id:any) => {
    console.log('kjhkjhkjhkjhkjh')
  
  }

  useEffect(() => {
    dispatch(fetchUsers() as any);
    console.log(fetchUsers)
  }, [dispatch]);
  if (!users) {
    return <div>Loading...</div>; // Add a loading indicator or return early if users data is not available
  }
  

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={{ backgroundColor: 'black', color: 'white' }}>ID</TableCell>

          <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Email</TableCell>
          <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Password</TableCell>
          <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          
        {users.map((user: UserData) => (
          <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>

                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Button style={{ margin: '5' }} variant='contained' color='secondary' component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant='contained' color='primary' onClick={() => onDelete(user._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
    </Table>

  );
}


