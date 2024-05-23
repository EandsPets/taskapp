import {
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  createNewTaskStart,
  createNewTaskSuccess,
  createNewTaskFailure,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
} from '../slices/taskSlice';
import {Alert} from 'react-native';
import {createNewTaskApi, getTasksApi, updateTaskApi} from '../api/api';

export const getTasksByUser = user_id => async dispatch => {
  dispatch(getTasksStart());
  try {
    const response = await getTasksApi(user_id);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(getTasksFailure(errMsg));
    } else {
      const taskData = await response.json();
      dispatch(getTasksSuccess(taskData.tasks));
    }
  } catch (error) {
    Alert.alert(JSON.stringify(error));
    dispatch(getTasksFailure(error));
  }
};

export const createNewTask = data => async dispatch => {
  dispatch(createNewTaskStart());
  try {
    const response = await createNewTaskApi(data);
    const resData = await response.json();
    if (!response.ok) {
      dispatch(
        createNewTaskFailure(resData.error ? resData.error : resData.message),
      );
    } else {
      dispatch(createNewTaskSuccess(resData.task));
    }
  } catch (error) {
    dispatch(createNewTaskFailure(error));
  }
};

export const updateTask = (id, data) => async dispatch => {
  dispatch(updateTaskStart());
  try {
    const response = await updateTaskApi(id, data);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(updateTaskFailure(errMsg));
    } else {
      const taskData = await response.json();
      dispatch(updateTaskSuccess(taskData.task));
    }
  } catch (error) {
    dispatch(updateTaskFailure(error));
  }
};
