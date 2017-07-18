import { combineReducers } from "redux"

import RecipesReducer from "./RecipesReducer"
import RecipeDetailReducer from "./RecipeDetailReducer"

export default combineReducers({
  recipes: RecipesReducer,
  details: RecipeDetailReducer,
})
