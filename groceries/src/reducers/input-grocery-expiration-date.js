import {
  ENTER_GROCERY_EXPIRATION_DATE,
  CLEAR_INPUT_GROCERY_EXPIRATION_DATE,
} from "../actions"

export default function(state = "", action) {
  switch (action.type) {
    case ENTER_GROCERY_EXPIRATION_DATE:
      return action.payload
    case CLEAR_INPUT_GROCERY_EXPIRATION_DATE:
      return ""
    default:
      return state
  }
}
