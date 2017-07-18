import _ from "lodash"
import recipes from "../../model/recipes.json"

export const LOAD_RECIPES = "LOAD_RECIPES"
export const LOAD_RECIPE_DETAIL = "LOAD_RECIPE_DETAIL"

export const loadRecipes = () => {
  return {
    type: LOAD_RECIPES,
    payload: recipes,
  }
}

export const loadRecipeDetail = name => {
  const details = recipes[0][name]

  return {
    type: LOAD_RECIPE_DETAIL,
    payload: { ...details, name },
  }
}
