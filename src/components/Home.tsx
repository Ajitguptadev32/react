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
//import { getUsers } from './actions/Api';

interface UserData {
  _id: string;
  email: string;
  password: string;
}
export default function BasicTable() {


  const [mydata, setMydata]=useState<UserData[]>([]);
  //const{ id } =useParams();
  // delte 
  const onDelete=async(id:string)=>{
    await API.delete(id).then(()=>{getApiData()})
  }

  useEffect(()=>{
    getApiData();
  },[])

  const getApiData= async()=>{
    try{
    const res=await API.get('/');
    setMydata(res.data);
    console.log(res.data)

  }catch(error){
    console.log(error)

  }

 
  }
  return (
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{backgroundColor:'black' , color:'white'}}>ID</TableCell>

            <TableCell style={{backgroundColor:'black' , color:'white'}}>Email</TableCell>
            <TableCell style={{backgroundColor:'black' , color:'white'}}>Password</TableCell>
            <TableCell style={{backgroundColor:'black' , color:'white'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            mydata.map(user=>(
              <TableRow key={user._id}>
                              <TableCell>{user._id}</TableCell>

              <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Button style={{margin:'5'}} variant='contained' color='secondary' component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant='contained' color='primary'onClick={() => onDelete(user._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
  );
}


