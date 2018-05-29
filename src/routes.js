import React from 'react';
import { Route } from 'react-router';
import Navigation from './components/navigation';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

export default (
  <Route path="/" component={Navigation}>
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
  </Route>
);
