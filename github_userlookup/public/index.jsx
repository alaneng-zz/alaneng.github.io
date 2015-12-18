import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Router, { Route } from 'react-router';

import routes from '../src/config/routes.jsx'

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('gh_root')) 
