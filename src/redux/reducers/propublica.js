import {
  PROPUBLICA_FETCH_REQUEST,
  PROPUBLICA_FETCH_SUCCESS,
  PROPUBLICA_FETCH_FAILURE
} from '../constants/propublica-constants';

function propublicaReducer(state = {
  isFetching: true,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case PROPUBLICA_FETCH_REQUEST:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  case PROPUBLICA_FETCH_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.tenant,
      lastUpdated: action.receivedAt
    };
  case PROPUBLICA_FETCH_FAILURE:
    return {
      ...state,
      didInvalidate: true,
      error: action.error
    };
  default:
    return state;
  }
}

export default propublicaReducer;
