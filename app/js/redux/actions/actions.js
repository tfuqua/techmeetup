import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';
const baseURL = 'http://localhost:8000';

export function receiveEmployeeData(employees) {
  return {
    type: ActionTypes.GET_EMPLOYEE_DATA,
    employees,
  };
}

export function getEmployeeData() {
  return dispatch => {
    return fetch(`${baseURL}/api/employees`)
      .then(response => response.json())
      .then(json => dispatch(receiveEmployeeData(json.employees)));
  };
}

export function receiveGif(gif) {
  return {
    type: ActionTypes.GET_GIF,
    gif,
  };
}

export function getGif(term) {
  return dispatch => {
    return fetch(`http://api.giphy.com/v1/gifs/random?tag=${term}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(json => dispatch(receiveGif(json.data.image_url)));
  };
}
