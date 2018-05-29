import React from 'react';
import { Link } from 'react-router';
import './header.css';

const Header = props => (
  <header>
    <Link to="/">
      <div className="logo" />
      <h2>Łukasz Rasiński</h2>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
