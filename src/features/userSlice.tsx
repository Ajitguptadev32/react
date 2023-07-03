import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// action
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch('http://localhost:3000');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
});
const userSlice = createSlice({
    name: 'users',
    initialState: {
      isLoading:false,
      data:null,
      isError:false,
    },
    reducers: {
        addUsers(statstate, action) {

        },
        removeUsers(state, action) { },
        createUser(state, action) { },
        updateUsers(state, action) {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state,action) => {
                // Handle pending state if needed
                state.isLoading=true;

            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading=false;
                state.data=action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                // Handle rejected state if needed
              console.log('Error', action.payload);
              state.isError=true;
            });
    },

})
export default userSlice.reducer;