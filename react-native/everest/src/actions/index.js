import _ from "lodash";
import recipes from "../../model/recipes.json";

export const LOAD_RECIPES = "LOAD_RECIPES";

export const loadRecipes = () => {
  return {
    type: LOAD_RECIPES,
    payload: recipes
  };
};
