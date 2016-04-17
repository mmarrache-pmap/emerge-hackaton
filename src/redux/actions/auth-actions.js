import {
  AUTH_FETCH_REQUEST,
  AUTH_FETCH_SUCCESS,
  AUTH_FETCH_FAILURE
} from '../constants/auth-constants';

// Async Action creators
export function fetchAuthRequest(object, globalSettings) {
  return {
    type: AUTH_FETCH_REQUEST,
    object,
    globalSettings
  };
}

export function fetchAuthSuccess(globalSettings, json) {
  return {
    type: AUTH_FETCH_SUCCESS,
    globalSettings,
    auth: json,
    receivedAt: Date.now()
  };
}

export function fetchAuthFailure(paramUrl, error) {
  return {
    type: AUTH_FETCH_FAILURE,
    paramUrl,
    error
  };
}

export function fetchAuth(Username, Password, globalSettings) {
  const url = `http://localhost:8081/api/signup`;
  let aHeader = new Headers();
  aHeader.append('Content-Type', 'application/json');
  const sInit = {
    method: 'POST',
    headers: aHeader,
    body: JSON.stringify({
      Username,
      Password
    })
  };

  return (dispatch) => {
    dispatch(fetchAuthRequest(paramUrl));

    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          return dispatch(fetchAuthFailure(paramUrl, json));
        }
        return dispatch(fetchAuthSuccess(paramUrl, json));
      })
      .catch(error => {
        console.log('ERROR:', json.ErrorMessage);
        return dispatch(fetchAuthFailure(paramUrl, error));
      });
  };
}
