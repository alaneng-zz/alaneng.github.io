import React from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import RecipeDetail from "./RecipeDetail";

class RecipeList extends React.Component {
  state = {
    recipeList: []
  };

  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ recipeList: response.data }));
  }

  render() {
    const RecipeDetails = this.state.recipeList.map(recipe =>
      <RecipeDetail key={recipe.title} recipe={recipe} />
    );

    return (
      <ScrollView contentInset={{ bottom: 25 }}>
        {RecipeDetails}
      </ScrollView>
    );
  }
}

export default RecipeList;
