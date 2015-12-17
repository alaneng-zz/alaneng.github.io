import React, { Component } from 'react';
import Router, { Route, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';

module.exports = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
  </Route>
)