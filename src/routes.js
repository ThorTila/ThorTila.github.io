import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import TechStack from './components/TechStack/TechStack';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="/techstack" component={TechStack} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
  </Route>
);
