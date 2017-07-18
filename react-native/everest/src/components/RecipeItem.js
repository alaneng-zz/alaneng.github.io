import React from "react"
import { View, Image } from "react-native"
import { Text } from "./common"

const RecipeItem = props => {
  const { recipeContainer, recipeText, recipeImage, recipeInfo } = styles
  const { recipe } = props

  return (
    <View style={recipeContainer}>
      <Image
        key={props.name}
        source={{ uri: recipe.image_source }}
        style={recipeImage}
      />
      <View style={recipeInfo}>
        <Text style={styles.recipeText}>
          {recipe.name}
        </Text>
      </View>
    </View>
  )
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
}

export default RecipeItem
