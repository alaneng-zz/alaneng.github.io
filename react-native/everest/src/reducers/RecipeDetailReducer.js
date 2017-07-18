import { LOAD_RECIPE_DETAIL } from "../actions"

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_RECIPE_DETAIL:
      return action.payload
    default:
      return state
  }
}
