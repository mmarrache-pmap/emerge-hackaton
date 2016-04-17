import {
  PROPUBLICA_FETCH_REQUEST,
  PROPUBLICA_FETCH_SUCCESS,
  PROPUBLICA_FETCH_FAILURE
} from '../constants/propublica-constants';

// Async Action creators
export function fetchPropublicaRequest(paramUrl) {
  return {
    type: PROPUBLICA_FETCH_REQUEST,
    paramUrl
  };
}

export function fetchPropublicaSuccess(paramUrl, json) {
  return {
    type: PROPUBLICA_FETCH_SUCCESS,
    paramUrl,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchPropublicaFailure(paramUrl, error) {
  return {
    type: PROPUBLICA_FETCH_FAILURE,
    paramUrl,
    error
  };
}

export function fetchPropublica(paramUrl) {
  const url = `http://localhost:8081/api/0/hope`;
  const sInit = {
    method: 'GET'
  };

  return (dispatch) => {
    dispatch(fetchPropublicaRequest(paramUrl));

    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          return dispatch(fetchPropublicaFailure(paramUrl, json));
        }
        return dispatch(fetchPropublicaSuccess(paramUrl, json));
      })
      .catch(error => {
        console.log('ERROR:', json.ErrorMessage);
        return dispatch(fetchPropublicaFailure(paramUrl, error));
      });
  };
}
