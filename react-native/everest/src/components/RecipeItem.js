import React, { Component } from "react"
import { connect } from "react-redux"
import {
  View,
  Image,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from "react-native"
import _ from "lodash"
import { LinearGradient } from "expo"
import Icon from "react-native-vector-icons/FontAwesome"
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons"

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

    const iconSize = 22
    const iconColor = "white"

    const detailMap = {
      hours: {
        icon: <IconMaterial name="timer" color={iconColor} size={iconSize} />,
        suffix: "hours",
      },
      times_made: {
        icon: <Icon name="users" color={iconColor} size={iconSize} />,
        suffix: "times cooked",
      },
      rating: {
        icon: <Icon name="star-o" color={iconColor} size={iconSize} />,
        suffix: "rating",
      },
    }

    const detailList = _.keys(details).map(detail => {
      if (["hours", "times_made", "rating"].includes(detail)) {
        return (
          <Text key={detail} style={recipeText}>
            {detailMap[detail].icon} {details[detail]}{" "}
            {detailMap[detail].suffix}
          </Text>
        )
      }
    })

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.loadRecipeDetail(recipe.name)}
      >
        <View style={recipeContainer}>
          <Image
            key={name}
            source={{ uri: recipe.image_source }}
            style={recipeImage}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
          />
          {recipe.name === details.name
            ? <View style={recipeDetails}>
                {detailList}
              </View>
            : <View style={recipeInfo}>
                <Text style={styles.recipeTitle}>
                  {recipe.name}
                </Text>
              </View>}
          <View
            style={{
              height: 5,
              backgroundColor: "white",
              position: "relative",
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const height = 350

const styles = {
  recipeContainer: {},
  recipeTitle: {
    fontSize: 36,
    color: "white",
    padding: 10,
  },
  recipeText: {
    fontSize: 30,
    color: "white",
  },
  recipeImage: {
    height,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  recipeInfo: {
    position: "absolute",
    backgroundColor: "transparent",
    height,
    width: "100%",
    justifyContent: "flex-end",
  },
  recipeDetails: {
    height,
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
}

const mapStateToProps = state => {
  return {
    details: state.details,
  }
}

export default connect(mapStateToProps, { loadRecipeDetail })(RecipeItem)
