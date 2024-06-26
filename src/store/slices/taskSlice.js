import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  loading: false,
  error: false,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasksStart(state) {
      state.loading = true;
      state.error = false;
      state.tasks = [];
    },
    getTasksSuccess(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    getTasksFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
    createNewTaskStart(state) {
      state.loading = true;
      state.error = false;
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
      state.error = false;
    },
    updateTaskSuccess(state, action) {
      state.loading = false;
      state.tasks = tasks.map(task =>
        task.id === action.payload.id ? action.payload : task,
      );
    },
    updateTaskFailure(state, action) {
      state.loading = false;
      state.error = true;
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
