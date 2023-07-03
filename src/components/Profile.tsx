import React, { useState, useEffect } from 'react';
import API from '../axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Button } from '@mui/material';

interface UserProfile {
  email: string;
  name: string;
  // Add other properties if needed
}

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Instead of using generics, cast the return value to `UserProfile`
        const decoded = jwt_decode(token) as UserProfile;
        setProfile(decoded);
        const userProfile: UserProfile = {
          email: decoded.email,
          name: decoded.name,
          // Assign other properties from the decoded token
        };
        setProfile(userProfile);
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, []);
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Navigate to the login page
    navigate('/login');
  };
  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Email: {profile.email}</p>
          <p>Name: {profile.name}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <Button style={{ margin: '5' }} variant='contained' color='secondary'onClick={handleLogout}>Logout</Button>

    </div>
  );
};

export default Profile;
