import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MyApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">Todo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/countries">Countries</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
