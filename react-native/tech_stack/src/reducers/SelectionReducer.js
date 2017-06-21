import { SELECT_LIBRARY_ID } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_LIBRARY_ID:
      return action.payload;
    default:
      return state;
  }
}
