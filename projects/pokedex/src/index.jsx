import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import App from './components/app.jsx'

ReactDOM.render(<App />, document.getElementById('root'))
