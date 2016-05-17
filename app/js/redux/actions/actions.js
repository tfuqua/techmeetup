import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';
const baseURL = 'http://localhost:7000';

export function receiveTestData(employees) {
  return {
    type: ActionTypes.GET_TEST_DATA,
    employees,
  };
}

export function getTestData() {
  return dispatch => {
    return fetch(`${baseURL}/api/test`)
      .then(response => response.json())
      .then(json => dispatch(receiveTestData(json.employees)));
  };
}
