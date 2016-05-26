import * as ActionTypes from '../constants/constants';

const initialState = { employees: {}, gif: {} };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.GET_EMPLOYEE_DATA :
      return {
        employees: action,
      };

    case ActionTypes.GET_GIF :
      return {
        gif: {
          gif: action.gif,
          term: action.term,
        },
        employees: {},
      };

    default:
      return state;
  }
};

export default rootReducer;
