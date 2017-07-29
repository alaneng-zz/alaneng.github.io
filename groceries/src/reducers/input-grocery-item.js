import { ENTER_GROCERY_ITEM, CLEAR_INPUT_ITEM } from "../actions"

export default (state = "", action) => {
  switch (action.type) {
    case ENTER_GROCERY_ITEM:
      return action.payload
    case CLEAR_INPUT_ITEM:
      return ""
    default:
      return state
  }
}
