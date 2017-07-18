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
    console.log(this.props.recipeDetails)

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
          <Text key={detail.image_source} style={recipeDetail}>
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
                {/*<Text style={{ fontSize: "44" }}>
                  {recipe.name}
                </Text>*/}
                {detailList}
              </View>
            : <View style={recipeInfo}>
                <Text style={styles.recipeText}>
                  {recipe.name}
                </Text>
              </View>}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  recipeContainer: {},
  recipeText: {
    fontSize: 45,
    textAlign: "center",
  },
  recipeImage: {
    height: 250,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    opacity: 0.7,
  },
  recipeInfo: {
    position: "absolute",
    backgroundColor: "transparent",
    height: 250,
    width: "100%",
    justifyContent: "center",
  },
  recipeDetails: {
    height: 250,
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
