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
  verifyOTPStart,
  verifyOTPSuccess,
  verifyOTPFailure,
  updatePhotoStart,
  updatePhotoSuccess,
  updatePhotoFailure,
} from '../slices/userSlice';
import {
  login,
  register,
  searchUserApi,
  getUsersApi,
  verifyOTPApi,
  updatePhotoApi,
} from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = credentials => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await login(credentials);
    const data = await response.json();
    if (!response.ok) {
      const errMsg = data.error ? data.error : data.message;
      dispatch(loginFailure(errMsg));
    } else {
      await AsyncStorage.setItem('me', JSON.stringify(data.user));
      dispatch(loginSuccess(data.user));
    }
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const registerUser = userData => async dispatch => {
  dispatch(registerStart());
  try {
    const response = await register(userData);
    const data = await response.json();
    if (!response.ok) {
      dispatch(registerFailure(data.error));
    } else {
      dispatch(registerSuccess(data.data));
    }
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export const searchUser = phone_number => async dispatch => {
  dispatch(searchUserStart());
  try {
    const response = await searchUserApi(phone_number);
    const data = await response.json();
    if (!response.ok) {
      dispatch(searchUserFailure(data.message));
    } else {
      dispatch(searchUserSuccess(data.user));
    }
  } catch (error) {
    dispatch(searchUserFailure(error));
  }
};

export const getUsers = user_id => async dispatch => {
  dispatch(getUsersStart());
  try {
    const response = await getUsersApi(user_id);
    const data = await response.json();
    if (!response.ok) {
      dispatch(getUsersFailure(data.message));
    } else {
      dispatch(getUsersSuccess(data.users));
    }
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};

export const verifyOTP = data => async dispatch => {
  dispatch(verifyOTPStart());
  try {
    const response = await verifyOTPApi(data);
    const data = await response.json();
    if (!response.ok) {
      dispatch(verifyOTPFailure(data.message));
    } else {
      dispatch(verifyOTPSuccess(data));
    }
  } catch (error) {
    dispatch(verifyOTPFailure(error));
  }
};

export const updatePhoto = data => async dispatch => {
  dispatch(updatePhotoStart());
  try {
    const response = await updatePhotoApi(data);
    const data = await response.json();
    if (!response.ok) {
      dispatch(updatePhotoFailure(data.message));
    } else {
      dispatch(updatePhotoSuccess(data));
    }
  } catch (error) {
    dispatch(updatePhotoFailure(error));
  }
};
