import {
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
} from '../slices/userSlice';
import {login, register, searchUserApi, getUsersApi} from '../api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = credentials => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await login(credentials);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(loginFailure(errMsg));
    } else {
      const userData = await response.json();
      // await AsyncStorage.setItem('user', JSON.stringify(userData.user));
      dispatch(loginSuccess(userData.user));
    }
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const registerUser = userData => async dispatch => {
  dispatch(registerStart());
  try {
    const response = await register(userData);
    if (!response.ok) {
      const errorData = await response.json();
      dispatch(registerFailure(errorData.error));
    } else {
      const userData = await response.json();
      dispatch(registerSuccess(userData.user));
    }
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export const searchUser = phone_number => async dispatch => {
  dispatch(searchUserStart());
  try {
    const response = await searchUserApi(phone_number);
    if (!response.ok) {
      const errorData = await response.json();
      dispatch(searchUserFailure(errorData.message));
    } else {
      const responseData = await response.json();
      dispatch(searchUserSuccess(responseData.user));
    }
  } catch (error) {
    dispatch(searchUserFailure(error));
  }
};

export const getUsers = user_id => async dispatch => {
  dispatch(getUsersStart());
  try {
    const response = await getUsersApi(user_id);
    if (!response.ok) {
      const errorData = await response.json();
      dispatch(getUsersFailure(errorData.message));
    } else {
      const responseData = await response.json();
      dispatch(getUsersSuccess(responseData.users));
    }
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};