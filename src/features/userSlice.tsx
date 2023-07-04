import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// action
const baseURL = "http://localhost:3000";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(`${baseURL}`);
        const data = await response.data
        return data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
});
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/createuser`, userData);
        const data = await response.data;
        return data;
    } catch (error) {
        throw new Error('Failed to create user');
    }
});
export const updateUser = createAsyncThunk('users/updateUser', async (id) => {
    try {
        const response = await axios.put(`${baseURL}/${id}`);
        const data = await response.data;
        return data;
    } catch (error) {
        throw new Error('Failed to update user');
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/${id}`);
        const data = await response.data;
        return data;
    } catch (error) {
        throw new Error('Failed to delete user');
    }
});
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    try {
        const response = await axios.get(`${baseURL}/${id}`);
        const data = await response.data;
        return data;
    } catch (error) {
        throw new Error('Failed to fetch user by ID');
    }
});
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        users: [] as any[], // Update the type of data to allow any[]
        isError: false,
        isSuccess:'',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                // Handle pending state if needed
                state.isLoading = true;

            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                // Handle rejected state if needed
                console.log('Error', action.payload);
                state.isError = true;
            })
            .addCase(createUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users=[];
                state.isSuccess=action.payload
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(updateUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                const updatedUser = action.payload;
                const index = state.users.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    state.users[index] = updatedUser;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false;
                const deletedUserId = action.payload;
                state.users = state.users.filter(user => user.id !== deletedUserId);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchUserById.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = [action.payload];
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default usersSlice.reducer;