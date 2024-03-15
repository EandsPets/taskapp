import {
  getHeadersStart,
  getHeadersSuccess,
  getHeadersFailure,
  createHeaderStart,
  createHeaderSuccess,
  createHeaderFailure,
  getBrainStormStart,
  getBrainStormSuccess,
  getBrainStormFailure,
  updateNoteStart,
  updateNoteSuccess,
  updateNoteFailure,
} from '../slices/headerSlice';
import {Alert} from 'react-native';
import {
  createHeaderApi,
  getHeadersApi,
  getBrainStormApi,
  updateNoteApi,
} from '../api/api';

export const getHeaders = user_id => async dispatch => {
  dispatch(getHeadersStart());
  try {
    const response = await getHeadersApi(user_id);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(getHeadersFailure(errMsg));
    } else {
      const headerData = await response.json();
      dispatch(getHeadersSuccess(headerData.headers));
    }
  } catch (error) {
    dispatch(getHeadersFailure(error));
  }
};

export const createHeader = (header, user_id) => async dispatch => {
  dispatch(createHeaderStart());
  try {
    const response = await createHeaderApi(header, user_id);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(createHeaderFailure(errMsg));
    } else {
      const headerData = await response.json();
      dispatch(createHeaderSuccess(headerData.header));
    }
  } catch (error) {
    dispatch(createHeaderFailure(error));
  }
};

export const getBrainStorm = header_id => async dispatch => {
  dispatch(getBrainStormStart());
  try {
    const response = await getBrainStormApi(header_id);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(getBrainStormFailure(errMsg));
    } else {
      const brainStorm = await response.json();
      dispatch(getBrainStormSuccess(brainStorm.note));
    }
  } catch (error) {
    dispatch(getBrainStormFailure(error));
  }
};

export const updateNote = (content, header_id) => async dispatch => {
  dispatch(updateNoteStart());
  try {
    const response = await updateNoteApi(content, header_id);
    if (!response.ok) {
      const errorData = await response.json();
      const errMsg = errorData.error ? errorData.error : errorData.message;
      dispatch(updateNoteFailure(errMsg));
    } else {
      const brainStorm = await response.json();
      dispatch(updateNoteSuccess(brainStorm.header));
    }
  } catch (error) {
    dispatch(updateNoteFailure(error));
  }
};
