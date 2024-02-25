import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  me: null,
  user: null,
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
      state.me = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.me = action.payload;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.me = null;
    },
    registerStart(state) {
      state.loading = true;
      state.error = null;
      state.me = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.me = action.payload;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.me = null;
    },
    searchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    searchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
    getUsersStart(state) {
      state.loading = true;
      state.error = null;
      state.users = [];
    },
    getUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.users = [];
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  searchUserStart,
  searchUserSuccess,
  searchUserFailure,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
} = userSlice.actions;

export default userSlice.reducer;
