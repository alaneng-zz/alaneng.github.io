import React, { Component } from "react"
import { connect } from "react-redux"
import {
  View,
  Image,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from "react-native"
import _ from "lodash"

import { Text } from "./common"
import { loadRecipeDetail } from "../actions"

class RecipeItem extends Component {
  render() {
    const {
      recipeContainer,
      recipeText,
      recipeImage,
      recipeInfo,
      recipeDetails,
      recipeDetail,
    } = styles

    const { recipe, name, details } = this.props

    const detailList = _.keys(details).map(detail => {
      if (["minutes", "times_made", "rating"].includes(detail)) {
        return (
          <Text key={detail} style={recipeDetail}>
            {detail}: {details[detail]}
          </Text>
        )
      }
    })

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.loadRecipeDetail(recipe.name)}
        underlayColor="black"
      >
        <View style={recipeContainer}>
          <Image
            key={name}
            source={{ uri: recipe.image_source }}
            style={recipeImage}
          />
          {recipe.name === details.name
            ? <View style={recipeDetails}>
                {detailList}
              </View>
            : <View style={recipeInfo}>
                <Text style={styles.recipeText}>
                  {recipe.name}
                </Text>
              </View>}
          <View style={{ height: 5, backgroundColor: "white" }} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const height = 350

const styles = {
  recipeContainer: {},
  recipeText: {
    fontSize: 45,
    textAlign: "center",
  },
  recipeImage: {
    height,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    opacity: 0.7,
  },
  recipeInfo: {
    position: "absolute",
    backgroundColor: "transparent",
    height,
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  recipeDetails: {
    height,
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  recipeDetail: {
    fontSize: 38,
  },
}

const mapStateToProps = state => {
  return {
    details: state.details,
  }
}

export default connect(mapStateToProps, { loadRecipeDetail })(RecipeItem)
