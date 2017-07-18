import { LOAD_RECIPES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
