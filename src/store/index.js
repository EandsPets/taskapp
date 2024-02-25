import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import membersReducer from './slices/membersSlice';
import userReducer from './slices/userSlice';
import * as apiService from './api/api';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    members: membersReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: apiService,
      },
      serializableCheck: false,
    }),
});
