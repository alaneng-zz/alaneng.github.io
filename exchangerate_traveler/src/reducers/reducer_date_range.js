import { FETCH_DATE_RANGE } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATE_RANGE:
      return action.payload;
    default:
      return state;
  }
}
