import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EmployeeTable from '../components/EmployeeTable.jsx';
import * as Actions from '../redux/actions/actions';

class TaylorContainer extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h3>Employees</h3>

        <EmployeeTable employees={this.props.employees} />
      </div>
    );
  }
}

TaylorContainer.need = [() => {
  return Actions.getEmployeeData.bind(null)();
}];

TaylorContainer.propTypes = {
  employees: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    employees: (store.employees.employees),
  };
}

export default connect(mapStateToProps)(TaylorContainer);
