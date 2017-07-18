import React, { Component } from "react"
import { ScrollView } from "react-native"
import { connect } from "react-redux"
import _ from "lodash"

import { loadRecipes } from "../actions"
import RecipeItem from "./RecipeItem"

class RecipeList extends Component {
  componentDidMount() {
    this.props.loadRecipes()
  }

  render() {
    const recipeList = _.map(this.props.recipes, recipe => {
      return <RecipeItem key={recipe.name} recipe={recipe} />
    })

    return (
      <ScrollView>
        {recipeList}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const flatRecipes = _.map(state.recipes[0], (values, name) => {
    return { ...values, name }
  })

  return {
    recipes: flatRecipes,
  }
}

export default connect(mapStateToProps, { loadRecipes })(RecipeList)
