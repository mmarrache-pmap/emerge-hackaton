import {
  AUTH_FETCH_REQUEST,
  AUTH_FETCH_SUCCESS,
  AUTH_FETCH_FAILURE
} from '../constants/auth-constants';

function dmAuthReducer(state = {
  isFetching: true,
  didInvalidate: false,
  items: []
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
      items: action.auth,
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


export default dmAuthReducer;
