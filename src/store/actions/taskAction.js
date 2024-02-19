import {
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  createNewTaskStart,
  createNewTaskSuccess,
  createNewTaskFailure,
} from '../slices/taskSlice';
import {Alert} from 'react-native';
import {createNewTaskApi, getTasksApi} from '../api/api';

export const getTasks = () => async dispatch => {
  dispatch(getTasksStart());
  try {
    const response = await getTasksApi();
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
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(createNewTaskFailure(errMsg));
    } else {
      const taskData = await response.json();
      dispatch(createNewTaskSuccess(taskData.task));
    }
  } catch (error) {
    dispatch(createNewTaskFailure(error));
  }
};
