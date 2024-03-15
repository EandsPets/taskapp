import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import membersReducer from './slices/membersSlice';
import userReducer from './slices/userSlice';
import headerReducer from './slices/headerSlice';
import * as apiService from './api/api';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    members: membersReducer,
    user: userReducer,
    headers: headerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: apiService,
      },
      serializableCheck: false,
    }),
});
