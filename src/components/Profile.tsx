import React, { useState, useEffect } from 'react';
import API from '../axios';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await API.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const userdata = response.data;
                setUserData(userdata);
            } catch (e) {
                console.log(e)
            }
        };
        fetchUser();
    }, []);



    return (
        <div>
          <h1>User Profile</h1>
          {userData ? (
            <div>
              <p>Email: {userData}</p>
              {/* Display other user information */}
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      );
      
}

export default Profile