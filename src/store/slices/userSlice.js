import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      state.user = user;
    },
  },
});

export const {loaduser} = userSlice.actions;

export default userSlice.reducer;
