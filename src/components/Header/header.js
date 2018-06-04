import React from 'react';
import { Link } from 'react-router';
import './header.css';

const Header = props => (
  <header>
    <Link to="/">
      <div className="logo" />
      <h2>Łukasz Rasiński</h2>
    </Link>
    <Nav />
    <Social />
    <div>
      <p className="footer">Copyright Łukasz Rasiński</p>
    </div>
  </header>
);

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="active" to="/">
          About
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

const Social = () => (
  <div className="social">
    <a href="https://github.com/ThorTila">
      <i class="fa fa-github-square" aria-hidden="true" />
    </a>
    <a href="https://www.linkedin.com/in/%C5%82ukasz-rasi%C5%84ski/">
      <i class="fa fa-linkedin-square" aria-hidden="true" />
    </a>
  </div>
);

export default Header;
