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
