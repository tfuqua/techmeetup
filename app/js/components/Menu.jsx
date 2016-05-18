import React from 'react';
import { Link } from 'react-router';

function Menu() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Tech Meetup</a>
        </div>
        <div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/taylor">
                Taylor's Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
