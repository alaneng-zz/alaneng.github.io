import { ENTER_FOOD_TYPE } from "../actions"

export default (state = "", action) => {
  switch (action.type) {
    case ENTER_FOOD_TYPE:
      return action.payload
    default:
      return state
  }
}
