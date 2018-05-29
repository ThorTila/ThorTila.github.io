import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
  </Route>
);
