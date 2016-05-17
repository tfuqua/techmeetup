import React from 'react';
import Menu from './Menu.jsx';

function Header() {
  return (
    <header className="site-header">
      <div className="container-fluid">
        <h3>Header</h3>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
