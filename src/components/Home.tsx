import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

interface UserData {
   _id: string;
   email: string;
   password: string;
   profile: string;
}

export default function BasicTable() {
   const [users, setUsers] = useState<UserData[]>([]);

   // Fetch users from the backend API
   useEffect(() => {
      const fetchUsersData = async () => {
         try {
            const response = await axios.get("http://localhost:3000/");
            setUsers(response.data);
         } catch (error) {
            console.log("Error fetching users:", error);
         }
      };
      fetchUsersData();
   }, []);

   // Delete user by ID
   const onDelete = async (id: string) => {
      try {
         await axios.delete(`http://localhost:3000/${id}`);
         // If successful, remove the deleted user from the users state
         setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } catch (error) {
         console.log("Error deleting user:", error);
      }
   };

   if (!users.length) {
      return <div>Loading...</div>; // Add a loading indicator or return early if users data is not available
   }

   return (
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
            <TableRow>
               <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  ID
               </TableCell>
               <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Email
               </TableCell>
               <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Password
               </TableCell>
               <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Profile
               </TableCell>
               <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Action
               </TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {users.map((user: UserData) => (
               <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.profile}</TableCell>

                  <TableCell>
                     <Button
                        style={{ margin: "5px" }}
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to={`/edit/${user._id}`}
                     >
                        Edit
                     </Button>
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onDelete(user._id)}
                     >
                        Delete
                     </Button>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
}
