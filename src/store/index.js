import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import membersReducer from './slices/membersSlice';
import userReducer from './slices/userSlice';
import {api} from './api/taskApi';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    members: membersReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
