import * as types from '../actions/types'

const initialState = {
  tasks: [],
  isCalling: false,
  error: null,
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TASKS_REQUEST:
      return {
        ...state,
        isCalling: true,
      };
    case types.GET_TASKS_REQUEST_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        error: null,
      };
    case types.GET_TASKS_REQUEST_FAIL:
      return {
        ...state,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tasks;
