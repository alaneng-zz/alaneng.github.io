import React, { Component } from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { Provider } from "react-redux"
import { createStore } from "redux"
import RecipeList from "./src/components/RecipeList"
import reducers from "./src/reducers"

import { Header } from "./src/components/common"

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <ScrollView style={styles.container}>
          <Header>This Week's Recipes</Header>
          <RecipeList />
        </ScrollView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
})

export default App
