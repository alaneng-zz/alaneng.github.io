import { combineReducers } from "redux"
import inputGroceryItem from "./input-grocery-item"
import inputGroceryItemType from "./input-grocery-item-type"
import groceryList from "./grocery-list"

export default combineReducers({
  inputGroceryItem,
  inputGroceryItemType,
  groceryList,
})
