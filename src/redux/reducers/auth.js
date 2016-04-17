import {
  AUTH_FETCH_REQUEST,
  AUTH_FETCH_SUCCESS,
  AUTH_FETCH_FAILURE
} from '../constants/auth-constants';

function AuthReducer(state = {
  isFetching: true,
  didInvalidate: false,
  auth: ''
}, action) {
  switch (action.type) {
  case AUTH_FETCH_REQUEST:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  case AUTH_FETCH_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      auth: action.auth,
      lastUpdated: action.receivedAt
    };
  case AUTH_FETCH_FAILURE:
    return {
      ...state,
      didInvalidate: true,
      error: action.error
    };
  default:
    return state;
  }
}


export default AuthReducer;
