import { configureStore } from '@reduxjs/toolkit'
import userSlice, { fetchUsers } from './features/userSlice';

export const store = configureStore({
  reducer: {
    users:userSlice
   },
});

store.dispatch(fetchUsers());

export default store;