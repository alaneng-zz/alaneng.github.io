import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Ex1 from '../components/ex1.jsx';
import Ex2 from '../components/ex2.jsx';
import Ex3 from '../components/ex3.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='ex1' component={Ex1} />
      <Route path='ex2' component={Ex2} />
      <Route path='ex3' component={Ex3} />
    </Route>
  </Router>
)