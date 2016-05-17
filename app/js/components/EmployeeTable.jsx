import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

class EmployeeTable extends Component {

  componentDidMount() {
    const that = this;

    if (this.props.employees === undefined) {
      setTimeout(function()
      {
        that.props.dispatch(Actions.getTestData());
      }, 500);
    }
  }

  render() {

    const imgStyle = {
      width: '100px'
    };

    return (
      this.props.employees === undefined
      ? <p>LOADING</p>
      :
        <div className="listView">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th>Full Time Employee</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.employees.map((employee, index) => (
                  <tr key={index}>
                    <td><img style={imgStyle} src={employee.img} alt="avatar" /></td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.fullTime ? 'Yes' : 'No'}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    );
  }
}

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EmployeeTable);
