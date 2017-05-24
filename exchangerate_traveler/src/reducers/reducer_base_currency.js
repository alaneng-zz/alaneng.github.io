import { UPDATE_BASE_CURRENCY } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_BASE_CURRENCY:
      return action.payload;
    default:
      return "USD";
  }
}
