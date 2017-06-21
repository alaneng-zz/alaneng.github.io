import React from "react";
import { View, Text, AppRegistry } from "react-native";
import Header from "./src/components/Header";
import RecipeList from "./src/components/RecipeList";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Recipes"} />
        <RecipeList />
      </View>
    );
  }
}

AppRegistry.registerComponent("albums", () => App);
