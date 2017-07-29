import { combineReducers } from "redux"
import inputGroceryItem from "./input-grocery-item"
import groceryList from "./grocery-list"

export default combineReducers({
  inputGroceryItem,
  groceryList,
})
