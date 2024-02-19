import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTasksStart(state) {
      state.loading = true;
      state.error = null;
    },
    getTasksSuccess(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    getTasksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createNewTaskStart(state) {
      state.loading = true;
      state.error = null;
    },
    createNewTaskSuccess(state, action) {
      state.loading = false;
      state.tasks = state.tasks.concat(action.payload);
    },
    createNewTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateTaskStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateTaskSuccess(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    updateTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  createNewTaskStart,
  createNewTaskSuccess,
  createNewTaskFailure,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
} = taskSlice.actions;

export default taskSlice.reducer;
