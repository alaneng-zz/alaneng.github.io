import { TOGGLE_SHOW_CALLOUTS } from "../actions"

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_CALLOUTS:
      return !state
    default:
      return state
  }
}
