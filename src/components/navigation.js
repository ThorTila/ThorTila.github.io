import React from 'react';
import { Link } from 'react-router';

const Navigation = props => (
  <header>
    <div className="logo">Łukasz Rasiński</div>
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <div className="container-fluid">{props.children}</div>
  </header>
);

export default Navigation;
