import React, { Component } from "react"
import { Scene, Router, Actions } from "react-native-router-flux"
import Icon from "react-native-vector-icons/FontAwesome"

import LoginForm from "./src/components/LoginForm"
import RecipeList from "./src/components/RecipeList"
import { Text } from "./src/components/common"

class RouterComponent extends Component {
  render() {
    const leafIcon = <Icon name="leaf" size={22} color="black" />

    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginForm} hideNavBar initial />
          <Scene
            key="recipelist"
            title={
              <Text style={{ fontSize: 22 }}>
                {leafIcon} This Week's Recipes
              </Text>
            }
            component={RecipeList}
          />
        </Scene>
      </Router>
    )
  }
}

export default RouterComponent
