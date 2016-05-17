import React from 'react';
import { Link } from 'react-router';
import * as Actions from '../redux/actions/actions';

function Menu() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/test">
            Employees
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Menu;
