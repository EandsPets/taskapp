import * as types from '../actions/types'

const initialState = {
  user: null,
  isAuthenticated: false,
  isCalling: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isCalling: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default user;
