import * as ActionTypes from '../constants/constants';

const initialState = { employees: {} };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.GET_EMPLOYEE_DATA :
      return {
        employees: action,
      };

    default:
      return state;
  }
};

export default rootReducer;
