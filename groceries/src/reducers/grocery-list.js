import { GROCERIES_FETCH_SUCCESS } from "../actions"

export default (state = {}, action) => {
  switch (action.type) {
    case GROCERIES_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}
