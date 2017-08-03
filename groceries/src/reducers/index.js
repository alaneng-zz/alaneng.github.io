import { combineReducers } from "redux"
import inputGroceryItem from "./input-grocery-item"
import inputGroceryExpirationDate from "./input-grocery-expiration-date"
import inputGroceryItemType from "./input-grocery-item-type"
import groceryList from "./grocery-list"
import isShowingCallout from "./toggle-show-callouts"
import isEditMode from "./toggle-edit-mode"

export default combineReducers({
  inputGroceryItem,
  inputGroceryExpirationDate,
  inputGroceryItemType,
  groceryList,
  isShowingCallout,
  isEditMode,
})
