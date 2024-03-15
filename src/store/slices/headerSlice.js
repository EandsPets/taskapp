import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
const initialState = {
  headers: [],
  brainStorm: null,
  header: null,
  loading: false,
  error: null,
};

const headerSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {
    getHeadersStart(state) {
      state.loading = true;
      state.error = null;
    },
    getHeadersSuccess(state, action) {
      state.loading = false;
      state.headers = action.payload;
    },
    getHeadersFailure(state, action) {
      state.loading = false;
      state.headers = [];
      state.error = action.payload;
    },
    createHeaderStart(state) {
      state.loading = true;
      state.error = null;
    },
    createHeaderSuccess(state, action) {
      state.loading = false;
      state.headers = [...state.headers, action.payload];
      state.header = action.payload;
    },
    createHeaderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getBrainStormStart(state) {
      state.loading = true;
      state.error = null;
    },
    getBrainStormSuccess(state, action) {
      state.loading = false;
      state.headers = [...state.headers, action.payload];
      state.header = action.payload;
    },
    getBrainStormFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateNoteStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateNoteSuccess(state, action) {
      state.loading = false;
      state.headers = state.headers.map(header =>
        header.id === action.payload.id ? action.payload : header,
      );
      state.header = action.payload;
    },
    updateNoteFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createHeaderStart,
  createHeaderSuccess,
  createHeaderFailure,
  getHeadersStart,
  getHeadersSuccess,
  getHeadersFailure,
  getBrainStormStart,
  getBrainStormSuccess,
  getBrainStormFailure,
  updateNoteStart,
  updateNoteSuccess,
  updateNoteFailure,
} = headerSlice.actions;

export default headerSlice.reducer;
