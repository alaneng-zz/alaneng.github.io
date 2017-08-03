import { TOGGLE_EDIT_MODE } from "../actions"

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return !state
    default:
      return state
  }
}
