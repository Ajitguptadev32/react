import axios from 'axios';

const URL ='http://localhost:3000/'

class UserService {

    getUser(){
        return axios.get(URL);
    }

    createUser(){
        return axios.post(URL);
    }

    getUserById(){
        return axios.get(URL);
    }

    updateUser(){
        return axios.put(URL);
    }

    deleteUser(){
        return axios.delete(URL );
    }
}

export default new UserService()


// delete data
