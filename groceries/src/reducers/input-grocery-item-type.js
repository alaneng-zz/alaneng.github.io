import { ENTER_GROCERY_ITEM_TYPE, CLEAR_INPUT_ITEM_TYPE } from "../actions"

export default (state = "", action) => {
  switch (action.type) {
    case ENTER_GROCERY_ITEM_TYPE:
      return action.payload
    case CLEAR_INPUT_ITEM_TYPE:
      return ""
    default:
      return state
  }
}
