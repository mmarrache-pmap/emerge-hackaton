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
  const url = `https://projects.propublica.org/nonprofits/api/v1/search.json?q=${paramUrl}&city=Miami&state%5Bid%5D=FL`;
  const sInit = {
    method: 'GET',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Upgrade-Insecure-Requests': '1',
      'Host': 'projects.propublica.org',
      'Access-Control-Allow-Origin': 'http://projects.propublica.org'
    }
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
        return dispatch(fetchPropublicaFailure(paramUrl, error));
      });
  };
}
