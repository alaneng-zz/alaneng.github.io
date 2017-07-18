import React, { Component } from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"

import RecipeList from "./src/components/RecipeList"
import reducers from "./src/reducers"

import { Header } from "./src/components/common"
import Router from "./Router"

class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)) // {} is initial state

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
