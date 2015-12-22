import React, { Component } from 'react';
import Router, { Route, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Profile from '../components/profile.jsx';

module.exports = (
  <Route path='/' component={Main}>
    <Route path='profile/:username' component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)