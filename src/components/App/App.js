import React from 'react';
import Header from '../Header/header';
import './App.css';

const App = props => (
  <main>
    <Header />
    <div className="container">{props.children}</div>
  </main>
);

export default App;
