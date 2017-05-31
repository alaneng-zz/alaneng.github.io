import { UPDATE_CONVERTED_CURRENCY } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_CONVERTED_CURRENCY:
      return action.payload;
    default:
      return state;
  }
}
