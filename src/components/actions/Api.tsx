import axios from 'axios';
const API = axios.create({
  baseURL:'http://localhost:3000'
});

const getUsers = async () => {
  try {
    const response = await API.get('');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getUserById = async (id:any) => {
  try {
    const response = await axios.get(`${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getUsers, getUserById };
