import React from "react"
import { View, Image } from "react-native"
import { Text } from "./common"

const RecipeItem = props => {
  const { recipeText, recipeItem } = styles
  const { recipe } = props

  return (
    <Image
      key={props.name}
      source={{ uri: recipe.image_source }}
      style={recipeItem}
    >
      <Text style={styles.recipeText}>
        {recipe.name}
      </Text>
      {/*<Text>Time: {recipe.minutes}</Text>
      <Text>Rating: {recipe.rating}</Text>*/}
    </Image>
  )
}

const styles = {
  recipeText: {
    fontSize: 40,
    opacity: 1,
  },
  recipeItem: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    position: "relative",
    opacity: 0.7,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}

export default RecipeItem
