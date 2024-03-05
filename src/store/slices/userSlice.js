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
    verifyOTPStart(state) {
      state.loading = true;
      state.error = null;
    },
    verifyOTPSuccess(state, action) {
      state.loading = false;
      state.error = null;
    },
    verifyOTPFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
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
  verifyOTPStart,
  verifyOTPSuccess,
  verifyOTPFailure,
} = userSlice.actions;

export default userSlice.reducer;
